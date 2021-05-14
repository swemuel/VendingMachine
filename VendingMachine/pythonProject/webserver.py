from flask import Flask, render_template
from controller import setup
app = Flask(__name__)

# get the data from the controller
the_vending_machine = setup()

# format data into html f-string template
html = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <title>Vending Machine</title>
    <link rel="stylesheet" type="text/css" href="static/table.css">
    </head>
    <body>
    <!-- {str(the_vending_machine)} -->
    {the_vending_machine.to_table_coin()}
    </body>
    """
@app.route('/')
def index():
    return html
    #return render_template('index.html')
