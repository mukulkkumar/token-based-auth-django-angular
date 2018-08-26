from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from .api import DoorLockViewset

router = DefaultRouter(trailing_slash=False)
router.register(r'door', DoorLockViewset)

urlpatterns = [
    url(r'^api/', include(router.urls))
]
