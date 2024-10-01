<<<<<<< HEAD
from rest_framework import serializers
from .models import Grupo

class GrupoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grupo
=======
from rest_framework import serializers
from .models import Grupo

class GrupoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grupo
>>>>>>> origin/juanGarzon
        fields = '__all__'