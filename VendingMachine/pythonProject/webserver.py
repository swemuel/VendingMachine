from flask import Flask, render_template
from controller import setup
app = Flask(__name__)

@app.route('/')
def index():
    theVendingMachine = setup()
    return render_template('index.html')
