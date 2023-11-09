from rest_framework import serializers
from .models import Stock, Price

class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = ['ticker', 'name', 'sector', 'industry']

class PriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Price
        fields = ['stock', 'date', 'open', 'high', 'low', 'close', 'adj_close', 'volume']