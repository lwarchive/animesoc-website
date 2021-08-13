from django.db import models

# Create your models here.
class Event(models.Model):
    event_name = models.CharField(max_length=200)
    event_time = models.DateTimeField('Time')
    show_event = models.BooleanField(default=False)
    event_location = models.CharField(max_length=200)
    event_description = models.CharField(max_length=1000)
    