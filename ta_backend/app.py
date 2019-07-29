from flask import Flask
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://bdprak:admin@postgres_container/deeptraffic'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)


class Result(db.Model):
    __tablename__ = 'result'

    id = db.Column(db.INTEGER, primary_key=True, autoincrement=True)
    created_at = db.Column(db.TIMESTAMP, nullable=False)
    cars = db.Column(db.SMALLINT)
    busses = db.Column(db.SMALLINT)
    trucks = db.Column(db.SMALLINT)
    motorcycles = db.Column(db.SMALLINT)

    def __init__(self, created_at, cars, busses, trucks, motorcycles):
        self.created_at = created_at
        self.cars = cars
        self.busses = busses
        self.trucks = trucks
        self.motorcycles = motorcycles

    def __repr__(self):
        return f"Result('{self.created_at}', '{self.cars}', '{self.busses}', '{self.trucks}', '{self.motorcycles}')"


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
