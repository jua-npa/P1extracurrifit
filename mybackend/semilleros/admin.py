# admin.py
from django.contrib import admin
from .models import Semillero
from django.contrib.auth.models import User, Group

class SemilleroAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'escuela', 'descripcion')

admin.site.register(Semillero, SemilleroAdmin)
admin.site.unregister(Group)
admin.site.unregister(User)
