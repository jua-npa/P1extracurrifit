# urls.py
from django.urls import path
from .views import EventListView, event_detail, resumen_eventos_view

urlpatterns = [
    # Rutas para eventos
    path('events/', EventListView.as_view(), name='events-list'),
    path('events/<int:event_id>/', event_detail, name='event_detail'),
    path('resumen_eventos/', resumen_eventos_view, name='resumen_eventos_view'),
]
