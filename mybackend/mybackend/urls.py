from django.contrib import admin
from django.urls import path
from .views import historia_usuario

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/home', historia_usuario)
]
