from django.shortcuts import render
from django.http import Http404
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Semillero
from .serializers import SemilleroSerializer
from .ai_integration import resumir_descripcion

class SemilleroListView(generics.ListAPIView):
    queryset = Semillero.objects.all()
    serializer_class = SemilleroSerializer


@api_view(['GET'])
def resumen_view(request):
    print("HI")
    semilleros = Semillero.objects.all()

    # Generar resúmenes si no existen
    for semillero in semilleros:
        if not semillero.resumen:
            descripcion_completa = semillero.descripcion

            if descripcion_completa.lower() == "sin descripcion":
                descripcion_completa = f"El semillero {semillero.nombre} de la escuela {semillero.escuela} se especializa en diversas actividades."

            resumen = resumir_descripcion(descripcion_completa)
            if resumen:
                semillero.resumen = resumen
                semillero.save()

    # Serializar los semilleros (convertir a JSON)
    serializer = SemilleroSerializer(semilleros, many=True)

    # Devolver la respuesta en formato JSON
    return Response(serializer.data)

@api_view(['GET'])
def semillero_detail(request, id):
    """
    Recupera los detalles de un semillero por su ID
    """
    try:
        semillero = Semillero.objects.get(id=id)
        serializer = SemilleroSerializer(semillero)
        return Response(serializer.data)
    except Semillero.DoesNotExist:
        raise Http404("Semillero no encontrado")