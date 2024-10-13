from django.urls import path
from .views import SemilleroListView, semillero_detail

urlpatterns = [
    path('semilleros/', SemilleroListView.as_view(), name='semilleros-list'),
    path('semilleros/<int:id>/', semillero_detail, name='semillero_detail'),
]