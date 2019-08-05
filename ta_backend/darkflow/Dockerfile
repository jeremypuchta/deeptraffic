FROM tensorflow/tensorflow:1.5.0

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

RUN pip install opencv-python

RUN pip install .
