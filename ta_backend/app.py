from . import *
from models import Result


@app.route("/")
def hello_docker() -> str:
    return "Backend listening on Port 5000."


@app.route("/add", methods=['POST'])
def add_result(timestamp, cars, busses, trucks, motorcycles) -> str:
    result = Result(timestamp, cars, busses, trucks, motorcycles)
    db.session.add(result)
    db.session.commit()
    return "Appended Result."


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
