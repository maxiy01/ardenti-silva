import os
import sys
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'  # FATAL
import tensorflow as tf
sys.path.append("/home/sersh4nt/.local/lib/python3.8/site-packages/")
sys.path.append("/home/sersh4nt/.local/lib/python3.8/site-packages/tensorflow/models/research/object_detection")
sys.path.append("/home/sersh4nt/.local/lib/python3.8/site-packages/tensorflow/models/research/")
sys.path.append("/home/sersh4nt/.local/lib/python3.8/site-packages/tensorflow/models/research/object_detection/utils")

from object_detection.utils import label_map_util
from object_detection.utils import config_util
from object_detection.utils import visualization_utils as viz_utils
from object_detection.builders import model_builder
# from datetime import datetime as dt
from PyQt5.QtCore import (QThread, pyqtSignal, QMutex, pyqtSlot)
import cv2
import numpy as np
from datetime import datetime as dt


PATH_TO_LABELS = './TFrecords/train/Smoke_label_map.pbtxt'


class dnn(QThread):
    visualised_frame = pyqtSignal(np.ndarray)

    def __init__(self):
        super().__init__()
        physical_devices = tf.config.list_physical_devices('GPU')
        try:
            tf.config.experimental.set_memory_growth(physical_devices[0], True)
        except:
            print('error')
        self.mutex = QMutex()
        NUM_CLASSES = 1
        pipeline_config = './fine_tuned_model/pipeline.config'
        configs = config_util.get_configs_from_pipeline_file(pipeline_config)
        model_config = configs['model']
        self.detection_model = model_builder.build(
            model_config=model_config, is_training=False)
        ckpt = tf.compat.v2.train.Checkpoint(
            model=self.detection_model)
        ckpt.restore(os.path.join(
            './fine_tuned_model/checkpoint/ckpt-0'))

        label_map = label_map_util.load_labelmap(PATH_TO_LABELS)
        categories = label_map_util.convert_label_map_to_categories(label_map, max_num_classes=NUM_CLASSES,
                                                                    use_display_name=True)
        self.category_index = label_map_util.create_category_index(categories)
        self.current_frame = None
        self.mutex = QMutex()
        self.busy = False
        self.stop = False

    def run(self):
        self.mutex.lock()
        while not self.stop:
            self.mutex.lock()
            self.busy = True
            start_time = dt.now()
            image_np = self.current_frame.copy()
            input_tensor = tf.convert_to_tensor(
                np.expand_dims(image_np, 0), dtype=tf.float32)
            image, shapes = self.detection_model.preprocess(input_tensor)
            prediction_dict = self.detection_model.predict(image, shapes)
            detections = self.detection_model.postprocess(prediction_dict, shapes)
            shapes = tf.reshape(shapes, [-1])
            label_id_offset = 1
            # print('on inference:', dt.now() - start_time)
            start_time_vis = dt.now()
            viz_utils.visualize_boxes_and_labels_on_image_array(
                self.current_frame,
                detections['detection_boxes'][0].numpy(),
                (detections['detection_classes'][0].numpy() + label_id_offset).astype(int),
                detections['detection_scores'][0].numpy(),
                self.category_index,
                use_normalized_coordinates=True,
                max_boxes_to_draw=200,
                min_score_thresh=.3,
                agnostic_mode=False,
                skip_scores=True
            )
            self.visualised_frame.emit(self.current_frame.copy())
            self.busy = False

    @pyqtSlot(np.ndarray)
    def get_frame(self, image: np.ndarray):
        if not self.busy:
            self.current_frame = image.copy()
            self.mutex.unlock()

    def exit(self):
        self.stop = True
