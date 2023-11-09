from django.shortcuts import render
from rest_framework import viewsets

from .serializers import StockSerializer, PriceSerializer
from .models import Stock, Price

# Create your views here.
class StockView(viewsets.ModelViewSet):
    serializer_class = StockSerializer
    queryset = Stock.objects.all()
    
    
class PriceView(viewsets.ModelViewSet):
    serializer_class = PriceSerializer
    queryset = Price.objects.all()