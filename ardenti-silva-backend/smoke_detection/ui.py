import numpy as np
from PyQt5.QtWidgets import (QApplication, QWidget, QLabel)
from PyQt5.QtGui import (QPixmap, QImage)
from PyQt5.QtCore import pyqtSlot, QTimer
import cv2

class MainForm(QWidget):

    def __init__(self):
        super().__init__()
        self.current_frame: np.ndarray = None
        self.initUI()
        self.timer = QTimer()
        self.timer.setInterval(1000)
        self.timer.timeout.connect(self.reset_frame_counter)
        self.fps_counter = 0

    # инициализируем UI
    def initUI(self):
        self.screen_resolution = QApplication.desktop().availableGeometry()

        # label для отображения изображения с микроскопа
        self.frame_label = QLabel(self)
        self.frame_label.move(0, 0)
        self.frame_label.resize(self.screen_resolution.width() // 2, self.screen_resolution.height() // 2)

        self.visualised_label = QLabel(self)
        self.visualised_label.move(0, self.frame_label.height())
        self.visualised_label.resize(self.screen_resolution.width() // 2, self.screen_resolution.height() // 2)

        self.anti_haze_label = QLabel(self)
        self.anti_haze_label.move(self.frame_label.width(), 0)
        self.anti_haze_label.resize(self.screen_resolution.width() // 2, self.screen_resolution.height() // 2)

    @pyqtSlot(np.ndarray)
    def set_source_frame(self, image: np.ndarray):
        rgbImage = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        rgbImage = cv2.resize(rgbImage, (self.frame_label.size().width(),
                                         self.frame_label.size().height()))
        h, w, ch = rgbImage.shape
        bytesPerLine = ch * w
        result_image = QImage(rgbImage.data, w, h, bytesPerLine, QImage.Format_RGB888)
        self.frame_label.setPixmap(QPixmap.fromImage(result_image))

    @pyqtSlot(np.ndarray)
    def set_visualised_frame(self, image: np.ndarray):
        if not self.timer.isActive():
            self.timer.start()
        self.fps_counter += 1
        rgbImage = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        rgbImage = cv2.resize(rgbImage, (self.visualised_label.size().width(),
                                         self.visualised_label.size().height()))
        h, w, ch = rgbImage.shape
        bytesPerLine = ch * w
        result_image = QImage(rgbImage.data, w, h, bytesPerLine, QImage.Format_RGB888)
        self.visualised_label.setPixmap(QPixmap.fromImage(result_image))

    @pyqtSlot(np.ndarray)
    def set_anti_haze_frame(self, image: np.ndarray):
        rgbImage = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        rgbImage = cv2.resize(rgbImage, (self.visualised_label.size().width(),
                                         self.visualised_label.size().height()))
        h, w, ch = rgbImage.shape
        bytesPerLine = ch * w
        result_image = QImage(rgbImage.data, w, h, bytesPerLine, QImage.Format_RGB888)
        self.anti_haze_label.setPixmap(QPixmap.fromImage(result_image))

    def reset_frame_counter(self):
        # print('fps:', self.fps_counter)
        self.fps_counter = 0
