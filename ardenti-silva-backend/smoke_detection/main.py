import sys

from PyQt5.QtCore import QWaitCondition, Qt
from PyQt5.QtWidgets import QApplication

from inference import dnn
from libs.streamcapture import StreamCapture
from libs.anti_haze import AntiHaze
from libs.outstream import OutStream
from ui import MainForm

if __name__ == '__main__':
    app = QApplication(sys.argv)
    network = dnn()
    network.start()
    stream = StreamCapture('./data/output.avi')
    stream2 = StreamCapture('./data/ИсходныеДанные/пыль.avi')
    out_stream1 = OutStream(1)
    out_stream2 = OutStream(2)
    anti_haze = AntiHaze()

    main = MainForm()
    stream.getframe.connect(main.set_source_frame)
    stream.getframe.connect(network.get_frame)
    stream.getframe.connect(anti_haze.get_frame)
    stream.getframe.connect(out_stream1.get_frame)
    stream2.getframe.connect(out_stream2.get_frame)
    network.visualised_frame.connect(main.set_visualised_frame)
    network.visualised_frame.connect(out_stream1.get_frame)
    anti_haze.anti_haze_frame.connect(main.set_anti_haze_frame)
    main.showMaximized()
    anti_haze.start()
    out_stream1.start()
    out_stream2.start()
    stream.start()
    stream2.start()
    ret = app.exec_()
    stream.stop()
    network.exit()
    sys.exit(ret)