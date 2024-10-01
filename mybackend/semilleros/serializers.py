<<<<<<< HEAD
from rest_framework import serializers
from .models import Semillero

class SemilleroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Semillero  # Define el modelo que utilizará el serializer
        fields = '__all__'  # Incluye todos los campos del modelo
=======
from rest_framework import serializers
from .models import Semillero

class SemilleroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Semillero  # Define el modelo que utilizará el serializer
        fields = '__all__'  # Incluye todos los campos del modelo
>>>>>>> origin/juanGarzon
