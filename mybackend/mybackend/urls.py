<<<<<<< HEAD
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('semilleros.urls')),
    path('', include('grupos_estudiantiles.urls')),
=======
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('semilleros.urls')),
    path('', include('grupos_estudiantiles.urls')),
>>>>>>> origin/juanGarzon
]