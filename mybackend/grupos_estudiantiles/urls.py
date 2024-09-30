from django.urls import path
from .views import GrupoListView

urlpatterns = [
    path('grupos/', GrupoListView.as_view(), name='grupos-list'),
]