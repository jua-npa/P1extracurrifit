from django.contrib import admin
from django.urls import path
<<<<<<< Updated upstream
from .views import historia_usuario

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/home', historia_usuario)
=======
from .views import hello_world

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/home', hello_world)
>>>>>>> Stashed changes
]
