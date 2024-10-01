from django.contrib import admin
from .models import Grupo

class GrupoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'imagen', 'descripcion')

admin.site.register(Grupo, GrupoAdmin)