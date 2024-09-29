from rest_framework import generics
from .models import Grupo
from .serializers import GrupoSerializer

class GrupoListView(generics.ListAPIView):
    queryset = Grupo.objects.all()
    serializer_class = GrupoSerializer