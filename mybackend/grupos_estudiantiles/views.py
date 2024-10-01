<<<<<<< HEAD
from rest_framework import generics
from .models import Grupo
from .serializers import GrupoSerializer

class GrupoListView(generics.ListAPIView):
    queryset = Grupo.objects.all()
=======
from rest_framework import generics
from .models import Grupo
from .serializers import GrupoSerializer

class GrupoListView(generics.ListAPIView):
    queryset = Grupo.objects.all()
>>>>>>> origin/juanGarzon
    serializer_class = GrupoSerializer