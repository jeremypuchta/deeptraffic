from urllib import urlretrieve
from time import time


def get_image():
    image_name = "./darkflow/sample_img/" + str(int(time())) + ".jpg"
    urlretrieve("http://ewerk.tv/lvb/LVBHBF/lvbhbf.jpg", image_name)
