from django.shortcuts import render, redirect
from .models import Destinations

# Create your views here.


def index(request):
    if request.user.is_authenticated:
        dests = Destinations.objects.all()
        return render(request, 'index.html', {'dests': dests})
    else:
        return redirect('login')
