from django.contrib import admin
from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('', views.front, name='front'),
    path('game/', views.display, name="playerhints"),
    path('stadium/', views.get_stadium, name='stadium'),
]