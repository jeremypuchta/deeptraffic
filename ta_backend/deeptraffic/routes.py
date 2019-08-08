from flask import jsonify
from deeptraffic import app
from .db_helper import *


@app.route("/all", methods=['GET'])
def get_all():
    try:
        results = get_all_data()
        return jsonify([r.serialize() for r in results])
    except Exception as e:
        return str(e)
