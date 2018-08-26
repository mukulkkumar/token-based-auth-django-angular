from django.db import models

# Create your models here.
class DoorLock(models.Model):
    title = models.CharField(max_length=100, verbose_name='Title')
    status = models.BooleanField(default=True, verbose_name='Status')

    def __str__(self):
        return self.title

    verbose_name = 'Door lock'
    verbose_name_plural = 'Door locks'
