from django.contrib import admin
from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('https://playfootballtrivia.herokuapp.com/', views.front, name='front'),
    path('https://playfootballtrivia.herokuapp.com/game/', views.display, name="playerhints"),
    path('https://playfootballtrivia.herokuapp.com/stadium/', views.get_stadium, name='stadium'),
]