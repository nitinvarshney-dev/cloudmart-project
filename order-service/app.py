from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/orders')
def orders():
    return jsonify([
        {"id": 1, "product": "Laptop"},
        {"id": 2, "product": "Mobile"}
    ])

app.run(port=5003)