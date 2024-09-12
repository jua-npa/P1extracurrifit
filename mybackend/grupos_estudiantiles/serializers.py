# serializers.py
from rest_framework import serializers
from .models import Grupo

class GrupoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grupo # Define el modelo que utilizará el serializer
        fields = '__all__'  # Incluye todos los campos del modelo
