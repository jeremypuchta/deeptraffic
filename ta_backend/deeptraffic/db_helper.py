from deeptraffic import db
from .models import Result


def save_data(cars, busses, trucks, motorcycles):
    try:
        result = Result(
            cars=cars,
            busses=busses,
            trucks=trucks,
            motorcycles=motorcycles
        )
        db.session.add(result)
        db.session.commit()
        return "New Result added to Database."
    except Exception as e:
        return (str(e))


def get_all_data():
    return Result.query.all()
