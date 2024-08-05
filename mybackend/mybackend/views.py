from django.http import JsonResponse

def historia_usuario(request):
    data = {'Historia de usuario seleccionada': 'Como estudiante, quiero hacer clic en una actividad para ver más detalles, para obtener información completa sobre eventos y oportunidades.'}
    return JsonResponse(data)

