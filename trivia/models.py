from django.db import models

class Players(models.Model):
    first_name = models.CharField(max_length=30, default="")
    last_name = models.CharField(max_length=30, default="")
    country = models.CharField(max_length=30, default="")
    age = models.IntegerField(default=0)
    team = models.CharField(max_length=30, default="")
    

    def __str__(self) -> str:
        return self.last_name

class Stadiums(models.Model):
    club = models.CharField(max_length=30, default="")
    stadium = models.CharField(max_length=30, default="")

    def __str__(self) -> str:
        return self.stadium

# Create your models here.
