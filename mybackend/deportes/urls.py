from django.urls import path
from .views import DeporteListView, deporte_detail

urlpatterns = [
    path('deportes/', DeporteListView.as_view(), name='deportes-list'),
    path('deportes/<int:id>/', deporte_detail, name='deporte_detail'),
]
