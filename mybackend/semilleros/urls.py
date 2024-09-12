from django.urls import path
from .views import SemilleroListView

urlpatterns = [
    path('semilleros/', SemilleroListView.as_view(), name='semilleros-list'),
]