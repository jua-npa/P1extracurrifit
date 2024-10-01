<<<<<<< HEAD
from django.http import JsonResponse

def hello_world(request):
    data = {'message': 'Hello, world!'}
=======
from django.http import JsonResponse

def hello_world(request):
    data = {'message': 'Hello, world!'}
>>>>>>> origin/juanGarzon
    return JsonResponse(data)