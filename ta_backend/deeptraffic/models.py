from deeptraffic import db
from time import time


class Result(db.Model):
    __tablename__ = 'result'

    id = db.Column(db.INTEGER, primary_key=True, autoincrement=True)
    created_at = db.Column(db.INTEGER, nullable=False, default=int(time()))
    cars = db.Column(db.SMALLINT)
    busses = db.Column(db.SMALLINT)
    trucks = db.Column(db.SMALLINT)
    motorcycles = db.Column(db.SMALLINT)

    def __init__(self, cars, busses, trucks, motorcycles):
        self.cars = cars
        self.busses = busses
        self.trucks = trucks
        self.motorcycles = motorcycles

    def __repr__(self):
        return f"Result('{self.created_at}', '{self.cars}', '{self.busses}', '{self.trucks}', '{self.motorcycles}')"