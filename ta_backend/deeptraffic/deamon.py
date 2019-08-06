from network_helper import get_image
from darkflow.cli import cliHandler
from apscheduler.schedulers.background import BackgroundScheduler
from pytz import utc
import logging

logging.basicConfig()
sched = BackgroundScheduler(daemon=True, timezone=utc)


def flow_data():
    get_image()
    # cliHandler()


sched.add_job(flow_data, 'interval', seconds=60)
sched.start()
