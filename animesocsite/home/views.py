from django.http.response import HttpResponseRedirect
from django.shortcuts import render
from django.http import HttpResponse
from .models import Event, Email
from .forms import EmailForm


def index(request):

    if request.method == 'POST':
        form = EmailForm(request.POST)
        if form.is_valid():
            user_email = form.cleaned_data['email']
            email_instance = Email.objects.create(email=user_email)
            #Email.save()
            return HttpResponseRedirect('#')
    else:
        form = EmailForm()

    events = Event.objects.all()

    context = {
        'events' : events,
        'form' : form
    }

    return render(request, 'home.html', context)