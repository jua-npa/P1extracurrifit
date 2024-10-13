from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import Http404
from .models import Deporte
from .serializers import DeporteSerializer

class DeporteListView(generics.ListAPIView):
    queryset = Deporte.objects.all()
    serializer_class = DeporteSerializer

@api_view(['GET'])
def deporte_detail(request, id):
    try:
        deporte = Deporte.objects.get(id=id)
        serializer = DeporteSerializer(deporte)
        return Response(serializer.data)
    except Deporte.DoesNotExist:
        raise Http404("Deporte no encontrado")
