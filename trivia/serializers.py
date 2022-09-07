from rest_framework import serializers
from .models import Players, Stadiums

class PlayersSerializers(serializers.ModelSerializer):
    class Meta:
        model = Players
        fields = ('id', 'first_name', 'last_name', 'country', 'age', 'team')

class StadiumSerializers(serializers.ModelSerializer):
    class Meta:
        model = Stadiums
        fields = ('id', 'club', 'stadium')