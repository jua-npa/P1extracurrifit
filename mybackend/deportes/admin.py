from django.contrib import admin
from .models import Deporte

class DeporteAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'categoria', 'fecha_inicio', 'fecha_fin')
    search_fields = ('nombre', 'categoria')

admin.site.register(Deporte, DeporteAdmin)
