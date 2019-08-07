from deeptraffic import db
from .models import Result


def save_data(result):
    try:
        db.session.add(result)
        db.session.commit()
        return "New Result added to Database."
    except Exception as e:
        return (str(e))


def get_all_data():
    return Result.query.all()


def get_latest():
    result = db.session.query(Result).order_by(Result.id.desc()).first()
    return str(result.created_at)
