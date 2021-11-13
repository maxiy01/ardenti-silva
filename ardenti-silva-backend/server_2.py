#!/usr/bin/env python
from flask import Flask, render_template, Response
import cv2
import base64

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

def gen(path):
    capture = cv2.VideoCapture(path)
    while True:
        ret, frame = capture.read()
        _, image = cv2.imencode('.jpg',frame)
        # frame = open('/home/sersh4nt/Downloads/1.png', 'rb').read()
        # image = cv2.imread('/home/sersh4nt/Downloads/1.png')
        # _, image = cv2.imencode('.png', image)
        # if frame == image:
        #     print('same')
        # else:
        #     print('not same')
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + image.tobytes() + b'\r\n')

@app.route('/video_feed/<path>')
def video_feed(path):
    print(path)
    return Response(gen(path),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)