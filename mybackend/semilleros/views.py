from rest_framework import generics
from .models import Semillero
from .serializers import SemilleroSerializer

class SemilleroListView(generics.ListAPIView):
    queryset = Semillero.objects.all()
    serializer_class = SemilleroSerializer