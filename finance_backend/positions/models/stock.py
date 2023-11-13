from django.db import models
from datetime import date, timedelta, datetime
import yfinance as yf


class Stock(models.Model):
    ticker = models.CharField(max_length=10, primary_key=True)
    name = models.CharField(max_length=100)
    sector = models.CharField(max_length=50)
    industry = models.CharField(max_length=50)

    def __str__(self):
        return self.ticker

    def update_info(self):
        info = yf.Ticker(self.ticker).info #404 disabled this atm
        self.name = info['longName']
        self.sector = info['sector']
        self.industry = info['industry']
        self.save()
        
        
class Price(models.Model):
    stock = models.ForeignKey(Stock, on_delete=models.CASCADE, related_name="prices")
    date = models.DateTimeField()
    open = models.DecimalField(max_digits=10, decimal_places=2)
    high = models.DecimalField(max_digits=10, decimal_places=2)
    low = models.DecimalField(max_digits=10, decimal_places=2)
    close = models.DecimalField(max_digits=10, decimal_places=2)
    adj_close = models.DecimalField(max_digits=10, decimal_places=2)
    volume = models.BigIntegerField()

    class Meta:
        db_table = 'prices'
        ordering = ['-date']
        constraints = [
            models.UniqueConstraint(fields=['stock', 'date'], name='unique_price')
        ]

    def __str__(self):
        return f'{self.stock.ticker} - {self.date}'

    def update_price(self):
        # Fetch the price data
        date_interval = self.date - timedelta(days=10)
        data = yf.download(self.stock.ticker, start=date_interval, end=self.date)
        if data.empty:
            print(f"No price data found for {self.stock.ticker} on {self.date}")
        # Update the fields with the fetched data
        else:
            self.open = data['Open'].iloc[-1]
            self.high = data['High'].iloc[-1]
            self.low = data['Low'].iloc[-1]
            self.close = data['Close'].iloc[-1]
            self.adj_close = data['Adj Close'].iloc[-1]
            self.volume = data['Volume'].iloc[-1]
            self.save()