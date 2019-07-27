import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://{user}:{pw}@{host}/{db}'\
    .format(user=os.getenv('POSTGRES_USERNAME', "bdprak"),
            pw=os.getenv('POSTGRES_PASSWORD', "admin"),
            host=os.getenv('POSTGRES_HOST', "postgres_container"),
            db=os.getenv('POSTGRES_DATABASE', "deeptraffic"))
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'wzr97wz4thgfwü9gtwiohf08q3h9vwghvq8#0'
db = SQLAlchemy(app)
