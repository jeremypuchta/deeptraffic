# Use an official Python runtime as a parent image
FROM python:3.7-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN apk add --no-cache postgresql-dev gcc python3 python3-dev musl-dev && \
    python3 -m ensurepip && \
    rm -r /usr/lib/python*/ensurepip && \
    pip3 install --upgrade pip setuptools && \
    rm -r /root/.cache && \
    pip3 install -r requirements.txt

EXPOSE 5000

CMD ["python", "run.py"]

