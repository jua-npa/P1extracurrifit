from django.http import JsonResponse

<<<<<<< Updated upstream
def historia_usuario(request):
    data = {'Historia de usuario seleccionada': 'Como estudiante, quiero hacer clic en una actividad para ver más detalles, para obtener información completa sobre eventos y oportunidades.'}
=======
def hello_world(request):
    data = {'message': 'Hello, world!'}
>>>>>>> Stashed changes
    return JsonResponse(data)

