from rest_framework import serializers
from .models import StudentGroup

class StudentGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentGroup
        fields = ['id_group', 'name', 'image', 'description']
