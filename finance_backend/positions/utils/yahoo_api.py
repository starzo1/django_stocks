import datetime
from positions.models import Stock, Price
 
            
def update_data():
    stock_tickers = ['AAPL', 'MSFT', 'AMZN', 'GOOG', 'META', 'TSLA', 'ALK', 'PLUG', 'PLTR', 'AMD', 'NVDA', 'TGTX']
    today = datetime.date.today()
    for ticker in stock_tickers:
        stock, created = Stock.objects.get_or_create(ticker=ticker)          
        try:
            if created:
                stock.update_info()
            price = Price.objects.get(stock=stock, date=today)
        except:
            print("No data in database, fetching latest data")
            price = Price(stock=stock, date=today)
            price.update_price()
