from deeptraffic import app
import json


@app.route("/data")
def get_data():
    return json.dumps([
        {'time': 1564437600, 'cars': 4, 'trucks': 2, 'busses': 1, 'motorcycles': 0},
        {'time': 1564441200, 'cars': 4, 'trucks': 2, 'busses': 1, 'motorcycles': 0},
        {'time': 1564444800, 'cars': 4, 'trucks': 2, 'busses': 1, 'motorcycles': 0},
        {'time': 1564448400, 'cars': 4, 'trucks': 2, 'busses': 1, 'motorcycles': 0},
        {'time': 1564452000, 'cars': 4, 'trucks': 2, 'busses': 1, 'motorcycles': 0},
        {'time': 1564455600, 'cars': 4, 'trucks': 2, 'busses': 1, 'motorcycles': 0},
        {'time': 1564459200, 'cars': 4, 'trucks': 2, 'busses': 1, 'motorcycles': 0},
        {'time': 1564462800, 'cars': 4, 'trucks': 2, 'busses': 1, 'motorcycles': 0},
        {'time': 1564466400, 'cars': 4, 'trucks': 2, 'busses': 1, 'motorcycles': 0},
        {'time': 1564470000, 'cars': 4, 'trucks': 2, 'busses': 1, 'motorcycles': 0},
        {'time': 1564473600, 'cars': 4, 'trucks': 2, 'busses': 1, 'motorcycles': 0},
        {'time': 1564477200, 'cars': 4, 'trucks': 2, 'busses': 1, 'motorcycles': 0},
        {'time': 1564480800, 'cars': 4, 'trucks': 2, 'busses': 1, 'motorcycles': 0},
        {'time': 1564484400, 'cars': 4, 'trucks': 2, 'busses': 1, 'motorcycles': 0},
        {'time': 1564488000, 'cars': 4, 'trucks': 2, 'busses': 1, 'motorcycles': 0},
        {'time': 1564491600, 'cars': 4, 'trucks': 2, 'busses': 1, 'motorcycles': 0},
        {'time': 1564495200, 'cars': 4, 'trucks': 2, 'busses': 1, 'motorcycles': 0},
        {'time': 1564498800, 'cars': 4, 'trucks': 2, 'busses': 1, 'motorcycles': 0},
        {'time': 1564502400, 'cars': 4, 'trucks': 2, 'busses': 1, 'motorcycles': 0},
        {'time': 1564506000, 'cars': 4, 'trucks': 2, 'busses': 1, 'motorcycles': 0},
        {'time': 1564509600, 'cars': 2, 'trucks': 3, 'busses': 2, 'motorcycles': 1},
        {'time': 1564513200, 'cars': 1, 'trucks': 4, 'busses': 4, 'motorcycles': 2},
        {'time': 1564516800, 'cars': 0, 'trucks': 5, 'busses': 1, 'motorcycles': 0},
        {'time': 1564520400, 'cars': 0, 'trucks': 5, 'busses': 1, 'motorcycles': 0},
    ])