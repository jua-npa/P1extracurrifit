# views.py
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Event
from .serializers import EventSerializer
from .ai_integracion import resumir_descripcion
from django.http import Http404

# Listar eventos
class EventListView(generics.ListAPIView):
    queryset = Event.objects.all().order_by('start_date')  # Ordena por fecha de inicio
    serializer_class = EventSerializer

# Detalles de un evento
@api_view(['GET'])
def event_detail(request, event_id):
    try:
        event = Event.objects.get(id=event_id)
        serializer = EventSerializer(event)
        return Response(serializer.data)
    except Event.DoesNotExist:
        raise Http404("Evento no encontrado")

# Generar resúmenes
@api_view(['GET'])
def resumen_eventos_view(request):
    events = Event.objects.all()

    # Generar resúmenes si no existen
    for event in events:
        if not event.resumen:
            descripcion_completa = event.description

            if not descripcion_completa:
                descripcion_completa = f"El evento {event.title} se llevará a cabo en la categoría {event.category}."

            resumen = resumir_descripcion(descripcion_completa)
            if resumen:
                event.resumen = resumen
                event.save()

    # Serializar los eventos (convertir a JSON)
    serializer = EventSerializer(events, many=True)

    # Devolver la respuesta en formato JSON
    return Response(serializer.data)
