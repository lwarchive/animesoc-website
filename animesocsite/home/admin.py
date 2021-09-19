from django.contrib import admin
from .models import Email, Event

admin.site.register(Event)
admin.site.register(Email)