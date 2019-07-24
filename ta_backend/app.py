from flask import Flask
from dal import PostgresHelper

app = Flask(__name__)

@app.route("/")
def hello_docker() -> str:
    print("hallo")
    conn_helper = PostgresHelper()
    #boolean = conn_helper.insert_data('2016-06-22 19:10:25-07',1,2,3,4)
    print(type(conn_helper))
    return "Backend listening on Port 5000."


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
