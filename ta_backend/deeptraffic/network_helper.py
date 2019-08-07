import json
import os
from urllib import urlretrieve
from time import time

from deeptraffic import Result


def get_image():
    timestamp = str(int(time()))
    image_name = "./darkflow/sample_img/" + timestamp + ".jpg"
    urlretrieve("http://ewerk.tv/lvb/LVBHBF/lvbhbf.jpg", image_name)
    return timestamp


def parse_json(timestamp):
    result = Result(
        created_at=timestamp,
        cars=0,
        busses=0,
        trucks=0,
        motorcycles=0
    )
    json_path = "./darkflow/sample_img/out/" + timestamp + ".json"
    with open(json_path) as read_file:
        data = json.load(read_file)
        for element in data:
            label = element['label']
            if label == 'car':
                result.cars += 1
            elif label == 'bus':
                result.busses += 1
            elif label == 'truck':
                result.trucks += 1
            elif label == 'motorcycle':
                result.motorcycles += 1

    return result


def cleanup(file_name):
    os.remove("./darkflow/sample_img/out/" + file_name + ".json")
    os.remove("./darkflow/sample_img/" + file_name + ".jpg")
