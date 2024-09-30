from django.db import models

class Grupo(models.Model):
    nombre = models.CharField(max_length=255)
    imagen = models.CharField(max_length=255)
    descripcion = models.TextField()

    def __str__(self):
        return self.nombre