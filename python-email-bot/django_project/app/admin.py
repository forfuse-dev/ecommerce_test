from django.contrib import admin
from .models import Email

@admin.register(Email)
class EmailAdmin(admin.ModelAdmin):
    list_display = ('recipient', 'subject', 'status', 'sent_at', 'user')
    list_filter = ('status', 'sent_at')
    search_fields = ('recipient', 'subject', 'user__username')