import numpy as np
import cv2
from PyQt5.QtCore import (QThread, QMutex, pyqtSlot)


class OutStream(QThread):

    def __init__(self, counter: int):
        super().__init__()
        self.current_stream = None
        self.current_frame = None
        self.counter = counter
        self.mutex = QMutex()
        self.busy = False

    def run(self):
        self.mutex.lock()
        self.current_stream = cv2.VideoWriter("appsrc ! videoconvert ! jpegenc quality=100 !  tcpserversink host=192.168.1.86 port=500" + str(self.counter),
                              cv2.CAP_GSTREAMER, 0, 25, (1920, 1080), True)
        while True:
            self.mutex.lock()
            self.busy = True
            text = 'STREAM ' + str(self.counter)
            FONT_SCALE = 1
            FONT_THICKNESS = 2
            (label_width, label_height), baseline = cv2.getTextSize(text, cv2.FONT_HERSHEY_COMPLEX, FONT_SCALE,
                                                                    FONT_THICKNESS)
            point = ((self.current_frame.shape[1] - label_width) // 2, (self.current_frame.shape[0] - label_height) // 2)
            cv2.putText(self.current_frame, text, point, cv2.FONT_HERSHEY_COMPLEX, FONT_SCALE, (255, 255, 255), FONT_THICKNESS)
            if self.current_frame.shape[0] < 1080:
                self.current_frame = cv2.resize(self.current_frame, (1920, 1080))
            self.current_stream.write(self.current_frame)
            self.busy = False

    @pyqtSlot(np.ndarray)
    def get_frame(self, image):
        if not self.busy:
            self.current_frame = image.copy()
            self.mutex.unlock()
