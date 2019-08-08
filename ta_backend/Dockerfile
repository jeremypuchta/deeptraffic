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

RUN pip install --upgrade pip setuptools

RUN pip install opencv-python

RUN pip install ./darkflow

RUN apt-get update && apt-get install -y \
    postgresql \
    gcc \
    musl-dev

RUN pip install -r requirements.txt

RUN mkdir -p ./darkflow/sample_img

EXPOSE 5000

CMD ["python", "run.py"]
