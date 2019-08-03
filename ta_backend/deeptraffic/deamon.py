from darkflow.cli import cliHandler
from ta_backend.dal.network_helper import get_image
from ta_backend.dal.db_helper import save_data
from apscheduler.schedulers.background import BackgroundScheduler
from pytz import utc


def flow_data():
    get_image()
    cliHandler()
    #save_data()


sched = BackgroundScheduler(daemon=True, timezone=utc)
sched.add_job(flow_data(), 'interval', seconds=60)
sched.start()