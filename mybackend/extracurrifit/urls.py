from django.urls import path
from .views import StudentGroupList, StudentGroupDetail

urlpatterns = [
    path('groups/', StudentGroupList.as_view(), name='studentgroup-list'),
    path('groups/<int:pk>/', StudentGroupDetail.as_view(), name='studentgroup-detail'),
]
