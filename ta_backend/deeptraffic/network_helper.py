import urllib.request
from time import time


def get_image():
    image_path = "../darkflow/sample_img" + str(int(time()))
    urllib.request.urlretrieve("http://ewerk.tv/lvb/LVBHBF/lvbhbf.jpg", image_path)