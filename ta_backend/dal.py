import psycopg2

class PostgresHelper(object):

    DB_HOST = "postgres_container"
    DB_NAME = "postgres"
    DB_USER = "postgres"
    DB_PASSWORD = "example"

    def __init__(self):
        conn = psycopg2.connect(host=self.DB_HOST, database=self.DB_NAME, user=self.DB_USER, password=self.DB_PASSWORD)
        cur = conn.cursor()
        cur.execute("SELECT table_name FROM information_schema.tables WHERE table_schema='public'")
        tables = cur.fetchone()
        print(tables)
        if 'result' not in tables:
            try:
                cur.execute("CREATE TABLE result(id SERIAL PRIMARY KEY, timestamp TIMESTAMP, cars SMALLINT, busses SMALLINT,"
                            " motorcycles SMALLINT, trucks SMALLINT)")
                print('ERSTELLT!!')
            except:
                print("Could not create table.")
        else:
            cur.execute("Drop Table result")
            print("gelöscht!!!!")

        self.cleanup(cur, conn)

    def insert_data(self, timestamp, cars, trucks, busses, motorcycles):
        conn = psycopg2.connect(host=self.DB_HOST, database=self.DB_NAME, user=self.DB_USER, password=self.DB_PASSWORD)
        cur = conn.cursor()
        try:
            cur.execute('INSERT INTO result VALUES(' + timestamp + ', ' + cars + ', ' + trucks + ', ' + busses + ', ' + motorcycles + ')')
            return True
        except:
            return False
        finally:
            self.cleanup(cur, conn)

    def cleanup(self, cursor, connection):
        cursor.close()
        connection.close()

