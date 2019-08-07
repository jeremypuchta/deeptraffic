from db_helper import save_data
from network_helper import *
from darkflow.cli import cliHandler
from apscheduler.schedulers.background import BackgroundScheduler
from pytz import utc
import logging

logging.basicConfig()
sched = BackgroundScheduler(daemon=True, timezone=utc)


def flow_data():
    image_name = get_image()
    cliHandler()
    save_data(parse_json(image_name))
    cleanup(image_name)


sched.add_job(flow_data, 'interval', seconds=60)
sched.start()
