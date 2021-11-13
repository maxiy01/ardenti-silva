from PyQt5.QtCore import (QThread, pyqtSignal, QMutex, pyqtSlot)
import image_dehazer
import numpy as np


class AntiHaze(QThread):
    anti_haze_frame = pyqtSignal(np.ndarray)

    def __init__(self):
        super().__init__()
        self.current_frame = None
        self.mutex = QMutex()
        self.busy = False

    def run(self):
        self.mutex.lock()
        while True:
            self.mutex.lock()
            self.busy = True
            self.current_frame = image_dehazer.remove_haze(self.current_frame)
            self.anti_haze_frame.emit(self.current_frame.copy())
            self.busy = False

    @pyqtSlot(np.ndarray)
    def get_frame(self, image):
        if not self.busy:
            self.current_frame = image
            self.mutex.unlock()