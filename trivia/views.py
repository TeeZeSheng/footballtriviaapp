from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PlayersSerializers, StadiumSerializers
from .models import Players, Stadiums
import random



def front(request):
    context = {}
    return render(request, 'index.html', context)

@api_view(['GET'])
def display(request):
    if request.method == 'GET':
        primary_key = random.randint(1, 3)  
        player = Players.objects.filter(pk=primary_key)
        serialize = PlayersSerializers(player, many=True)
        return Response(serialize.data)

@api_view(['GET'])
def get_stadium(request):
    if request.method == 'GET':
        primary_key = random.randint(1, 2)
        stadium = Stadiums.objects.filter(pk=primary_key)
        serialize = StadiumSerializers(stadium, many=True)
        return Response(serialize.data)

# Create your views here.
