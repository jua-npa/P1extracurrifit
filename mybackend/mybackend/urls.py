from django.contrib import admin
from django.urls import path, include
from .views import hello_world

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/home', hello_world),
    path('students/', include('extracurrifit.urls')),
]
