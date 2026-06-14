from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/orders')
def orders():
    return jsonify([
        {"id": 1, "product": "Laptop"},
        {"id": 2, "product": "Mobile"}
    ])

app.run(host="0.0.0.0", port=5003)