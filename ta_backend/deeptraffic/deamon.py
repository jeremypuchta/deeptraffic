from ..darkflow.darkflow.cli import cliHandler
from .network_helper import get_image
from apscheduler.schedulers.background import BackgroundScheduler
from pytz import utc


def flow_data():
    get_image()
    cliHandler()


sched = BackgroundScheduler(daemon=True, timezone=utc)
sched.add_job(flow_data(), 'interval', seconds=60)
sched.start()
