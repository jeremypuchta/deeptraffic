from deeptraffic import db
from time import time


class Result(db.Model):
    __tablename__ = 'result'

    id = db.Column(db.INTEGER, primary_key=True, autoincrement=True)
    created_at = db.Column(db.INTEGER, nullable=False)
    cars = db.Column(db.SMALLINT)
    busses = db.Column(db.SMALLINT)
    trucks = db.Column(db.SMALLINT)
    motorcycles = db.Column(db.SMALLINT)

    def __init__(self, cars, busses, trucks, motorcycles):
        self.created_at = int(time())
        self.cars = cars
        self.busses = busses
        self.trucks = trucks
        self.motorcycles = motorcycles

    def serialize(self):
        return {
            'created_at': self.created_at,
            'cars': self.cars,
            'busses': self.busses,
            'trucks': self.trucks,
            'motorcycles': self.motorcycles
        }