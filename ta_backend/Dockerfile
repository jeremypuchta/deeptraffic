FROM tensorflow/tensorflow:1.5.0 AS darkflow

RUN mkdir -p /darkflow

WORKDIR /darkflow

COPY . /darkflow/

RUN apt-get update && apt-get install -y \
    python-pip \
    cython \
    git \
    libsm6 \
    libxext6 \
    libxrender-dev \
    wget

FROM python:3.7-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app/

COPY --from=darkflow . /usr/src/app

RUN apk add --no-cache postgresql-dev gcc python3 python3-dev musl-dev && \
    python3 -m ensurepip && \
    rm -r /usr/lib/python*/ensurepip && \
    pip3 install --upgrade pip setuptools && \
    rm -r /root/.cache && \
    pip3 install -r requirements.txt

EXPOSE 5000

CMD ["python", "run.py"]

