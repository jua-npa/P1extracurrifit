<<<<<<< HEAD
from django.db import models

class Semillero(models.Model):
    nombre = models.CharField(max_length=255)
    escuela = models.CharField(max_length=255)
    programa = models.CharField(max_length=255)
    docenteCoordinador = models.CharField(max_length=100)
    contacto = models.CharField(max_length=100)
    descripcion = models.TextField(default='Sin descripcion')
    resumen = models.TextField(blank=True, null=True)

    def __str__(self):
=======
from django.db import models

class Semillero(models.Model):
    nombre = models.CharField(max_length=255)
    escuela = models.CharField(max_length=255)
    programa = models.CharField(max_length=255)
    docenteCoordinador = models.CharField(max_length=100)
    contacto = models.CharField(max_length=100)
    descripcion = models.TextField(default='Sin descripcion')
    resumen = models.TextField(blank=True, null=True)

    def __str__(self):
>>>>>>> origin/juanGarzon
        return self.nombre