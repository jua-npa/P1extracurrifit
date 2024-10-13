from django.shortcuts import render
from rest_framework import generics
from .models import StudentGroup
from .serializers import StudentGroupSerializer

class StudentGroupList(generics.ListCreateAPIView):
    queryset = StudentGroup.objects.all()
    serializer_class = StudentGroupSerializer


class StudentGroupListCreate(generics.ListCreateAPIView):
    queryset = StudentGroup.objects.all()
    serializer_class = StudentGroupSerializer

class StudentGroupDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = StudentGroup.objects.all()
    serializer_class = StudentGroupSerializer
