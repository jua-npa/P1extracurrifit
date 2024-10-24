from django.contrib import admin
from .models import Event

class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'start_date', 'end_date')
    search_fields = ('title', 'category')
    list_filter = ('category', 'start_date')

admin.site.register(Event, EventAdmin)