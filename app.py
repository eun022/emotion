from flask import Flask, jsonify, request, render_template, session, redirect, url_for, send_file
import csv
import json
import subprocess
import time
from datetime import datetime, timezone

app = Flask(__name__)
app.secret_key = 'your_secret_key'
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0  # 캐시 비활성화

@app.route('/')
def index():
    return render_template('dotpad.html')



@app.route('/static/<path:filename>')
def serve_static_files(filename):
    if filename.endswith('.js'):
        # JavaScript 파일의 MIME 타입을 강제로 설정
        return send_file('static/' + filename, mimetype='application/javascript')
    return send_file(f'static/{filename}')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)



# app = Flask(__name__)
# @app.route('/')
# def hello():
#     return 'hello kdata class'

# #새로운 경로 지정
# @app.route('/main')
# def main():
#     return render_template('dotpad.html')