from PyQt5.QtCore import (QThread, pyqtSignal, QMutex, QWaitCondition, pyqtSlot, QElapsedTimer)
import cv2
import numpy as np
from sys import platform
import image_dehazer


class StreamCapture(QThread):
    getframe = pyqtSignal(np.ndarray)

    def __init__(self, cam, wait_for_resume: QWaitCondition=None):
        super().__init__()
        self.wait_for_resume = wait_for_resume
        self.debug = False
        self.mutex = QMutex()
        self.camip = cam
        self.frame = None
        self.cap = None
        self.exit_flag = False
        self.sleep_time = 1
        self.elapsed_timer = QElapsedTimer()

    def run(self):
        if platform == "linux" or platform == "linux2":
            # self.cap = cv2.VideoCapture(self.camip, cv2.CAP_V4L2)
            self.cap = cv2.VideoCapture(self.camip, cv2.CAP_FFMPEG)
            fps = self.cap.get(cv2.CAP_PROP_FPS)
            self.sleep_time = int(1000 // 25)
        else:
            self.cap = cv2.VideoCapture(self.camip)
        while (not (self.exit_flag)):
            self.elapsed_timer.start()
            self.mutex.lock()
            ret, self.frame = self.cap.read()
            if not ret:
                self.frame = self.show_empty_frame()
                # self.msleep(self.sleep_time)
            self.mutex.unlock()
            self.getframe.emit(self.frame.copy())
            if ret and (self.sleep_time > self.elapsed_timer.elapsed()):
                self.msleep(self.sleep_time - self.elapsed_timer.elapsed())
        self.cap.release()

    def show_empty_frame(self):
        empty_frame = np.zeros([1080, 1920, 3], dtype=np.uint8)
        # text = "Ошибка захвата с камеры!"
        # FONT_SCALE = 1
        # FONT_THICKNESS = 2
        # (label_width, label_height), baseline = cv2.getTextSize(text, cv2.FONT_HERSHEY_COMPLEX, FONT_SCALE, FONT_THICKNESS)
        # point = ((empty_frame.shape[1] - label_width) // 2 , (empty_frame.shape[0] - label_height) // 2 )
        # cv2.putText(empty_frame, text, point, cv2.FONT_HERSHEY_COMPLEX, FONT_SCALE, (255, 255, 255), FONT_THICKNESS)
        return empty_frame

    def stop(self):
        self.exit_flag = True

    # def reopenStream(self, cam):
    #     if platform == "linux" or platform == "linux2":
    #         self.camip = "/dev/video" + str(cam)
    #         self.cap = cv2.VideoCapture(self.camip, cv2.CAP_V4L2)
    #     else:
    #         self.camip = 0
    #         self.cap = cv2.VideoCapture(self.camip)