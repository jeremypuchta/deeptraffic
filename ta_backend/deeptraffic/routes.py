from flask import jsonify
from deeptraffic import app, db_helper


@app.route("/all", methods=['GET'])
def get_all():
    try:
        results = db_helper.get_all_data()
        return jsonify([r.serialize() for r in results])
    except Exception as e:
        return (str(e))
