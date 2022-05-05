import os
import time
import logging

from aiohttp import web
from cbpi.api import *

logger = logging.getLogger(__name__)

class SetTime(CBPiExtension):

    def __init__(self, cbpi):
        self.cbpi = cbpi
        path = os.path.dirname(__file__)
        self.cbpi.register(self, "/settime", static=os.path.join(path, "public"))

    @request_mapping(path="/get", method="GET", auth_required=False)
    async def get(self, request):
        return web.Response(text=int(time.time()))

    @request_mapping(path="/set/{time}", method="GET", auth_required=False)
    async def set(self, request):
        time = request.match_info['time']
        logger.info("SetTime:%s " % (time))
        result = os.system("date -s @%s" % (time))
        return web.Response(status=200,text=result)

def setup(cbpi):

    cbpi.plugin.register("SetTime", SetTime)
