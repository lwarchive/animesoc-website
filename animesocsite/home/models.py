from django.db import models

# Create your models here.
class Event(models.Model):
    name = models.CharField("Event name", max_length=200, default="Untitled_Event")
    event_time = models.DateTimeField('Time')
    show_event = models.BooleanField(default=False)
    event_location = models.CharField(max_length=200)
    event_description = models.CharField(max_length=1000)

    def __str__(self):
        return self.event_time.strftime("%d") + "/" + self.event_time.strftime("%m") + ": " + self.name

class Email(models.Model):
    email = models.CharField("Enter Email:", max_length=50)

    def __str__(self):
        return self.email