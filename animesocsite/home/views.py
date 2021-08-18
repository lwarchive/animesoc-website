from django.shortcuts import render
from django.http import HttpResponse
from .models import Event


def index(request):

    events = Event.objects.all()

    context = {
        'events' : events
    }

    return render(request, 'home.html', context)