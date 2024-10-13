from django.contrib import admin
from .models import StudentGroup

class StudentGroupAdmin(admin.ModelAdmin):
    list_display = ('id_group', 'name', 'image', 'description') 
admin.site.register(StudentGroup, StudentGroupAdmin)
