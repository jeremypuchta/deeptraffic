# DeepTraffic – Analyzing Leipzig's Traffic using Deep Learning

<img alt="deeptraffic" src="https://i.imgur.com/y9g2j1z.png" />

This project was developed as part of the Big Data – Module at the University of Leipzig in the summer semester 2019 and received the highest grade.

The task was to develop a Convolutional Neural Network, which analyzes the traffic in the city center of Leipzig, more precisely in front of the central station. For this purpose the images of the publicly accessible webcam of the [Leipziger Gruppe](https://www.l.de/) were used. Every minute, a new image is provided by the [webcam](https://www.l.de/webcam.html).

The CNN was trained to classify cars, trucks, buses and motorcycles by day and night. For this purpose, we used [YOLOv2](https://pjreddie.com/darknet/yolov2/).
