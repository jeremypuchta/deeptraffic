from deeptraffic import app
import json


@app.route("/")
def hello_backend() -> str:
    return "HELLOOOOO"


@app.route("/day")
def get_day():
    return json.dumps([
        {'time': 20, 'cars': 4, 'trucks': 2, 'busses': 1, 'motorcycles': 0},
        {'time': 21, 'cars': 2, 'trucks': 3, 'busses': 2, 'motorcycles': 1},
        {'time': 22, 'cars': 1, 'trucks': 4, 'busses': 4, 'motorcycles': 2},
        {'time': 23, 'cars': 0, 'trucks': 5, 'busses': 1, 'motorcycles': 0},
    ])
