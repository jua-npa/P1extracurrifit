from django.db import models

class Semillero(models.Model):
    nombre = models.CharField(max_length=255)  # Nombre del semillero
    escuela = models.CharField(max_length=255)  # Escuela asociada
    descripcion = models.TextField()  # Descripción del semillero

    def __str__(self):
        return self.nombre