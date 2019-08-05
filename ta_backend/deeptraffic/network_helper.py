import urllib2
from time import time


def get_image():
    image_path = "../darkflow/sample_img" + str(int(time()))
    urllib2.urlopen("http://ewerk.tv/lvb/LVBHBF/lvbhbf.jpg", image_path)
