from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import Stock, Price, User

class StockAdmin(admin.ModelAdmin):
    list_display = ('ticker', 'name', 'sector', 'industry')

admin.site.register(Stock, StockAdmin)
admin.site.register(Price)
admin.site.register(User, UserAdmin)

