from deeptraffic import app
import json


@app.route("/")
def hello_backend() -> str:
    return "HELLOOOOO"


@app.route("/day")
def get_day():
    return json.dumps([
        {'time': 1564488000, 'cars': 4, 'trucks': 2, 'busses': 1, 'motorcycles': 0},
        {'time': 1564491600, 'cars': 2, 'trucks': 3, 'busses': 2, 'motorcycles': 1},
        {'time': 1564495200, 'cars': 1, 'trucks': 4, 'busses': 4, 'motorcycles': 2},
        {'time': 1564498800, 'cars': 0, 'trucks': 5, 'busses': 1, 'motorcycles': 0},
    ])
