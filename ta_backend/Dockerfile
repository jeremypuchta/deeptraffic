FROM tensorflow/tensorflow:1.5.0

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN apt-get update && apt-get install -y \
    python-pip \
    cython \
    git \
    libsm6 \
    libxext6 \
    libxrender-dev \
    wget

RUN pip install opencv-python

RUN pip install ./darkflow

RUN apt-get update && apt-get install -y \
    postgresql \
    gcc \
    python3 \
    python3-dev \
    python3-pip \
    musl-dev \
    libpq-dev

RUN pip3 install --upgrade pip setuptools

RUN pip3 install -r requirements.txt

EXPOSE 5000

CMD ["python", "run.py"]
