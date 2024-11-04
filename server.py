from flask import Flask, jsonify, request, render_template, session, redirect, url_for
import csv
import json
import subprocess
import time
from datetime import datetime, timezone


app = Flask(__name__)
app.secret_key = 'your_secret_key'

@app.route('/')
def index():
    return render_template('quiz.html')
        


if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000, debug=True)
