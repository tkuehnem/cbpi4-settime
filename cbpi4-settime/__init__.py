import os

from aiohttp import web
from cbpi.api import *

class SetTime(CBPiExtension):

    def __init__(self, cbpi):
        self.cbpi = cbpi
        path = os.path.dirname(__file__)
        self.cbpi.register(self, "/settime", static=os.path.join(path, "public"))

    @request_mapping(path="/get", method="GET", auth_required=False)
    async def list(self, request):
        return web.Response(text="1651605534 ")

def setup(cbpi):

    cbpi.plugin.register("SetTime", SetTime)
