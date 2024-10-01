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

    semilleros = Semillero.objects.all()

    print(f"Número de semilleros: {semilleros.count()}")

    # Generar resúmenes
    for semillero in semilleros:
        if not semillero.resumen:
            descripcion_completa = semillero.descripcion

            if descripcion_completa.lower() == "sin descripcion":
                descripcion_completa = f"El semillero {semillero.nombre} de la escuela {semillero.escuela} se especializa en diversas actividades."
                resumen = resumir_descripcion(descripcion_completa)
                if resumen:
                    semillero.descripcion = resumen
                    semillero.resumen = resumen
                    semillero.save()
                    print("Resumen generado:", resumen)
                else:
                    print("No se pudo generar un resumen.")
            else:
                resumen = resumir_descripcion(descripcion_completa)
                if resumen:
                    semillero.resumen = resumen
                    semillero.save()
                    print("Resumen generado:", resumen)
                else:
                    print("No se pudo generar un resumen.")

    context = {
        'semilleros': semilleros
    }

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