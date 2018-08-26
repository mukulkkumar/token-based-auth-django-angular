from rest_framework.viewsets import ModelViewSet
from .serializers import DoorLockSerializer
from .models import DoorLock

class DoorLockViewset(ModelViewSet):
    queryset = DoorLock.objects.all()
    serializer_class = DoorLockSerializer
