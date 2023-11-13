import datetime
from positions.models import Stock, Price
 
            
def update_data():
    # Create or retrieve the Stock object for the ticker symbol you want to update
    stock_tickers = ['AAPL', 'MSFT', 'AMZN', 'GOOG', 'META', 'TSLA', 'TWNK', 'PLUG', 'PLTR', 'AMD', 'NVDA']
    today = datetime.date.today()
    for ticker in stock_tickers:
        stock, created = Stock.objects.get_or_create(ticker=ticker)          
        # Create a new Price instance associated with the Stock
        try:
            price = Price.objects.get(stock=stock, date=today)
        except:
            print("No data in database, fetching latest data")
            price = Price(stock=stock, date=today)
            price.update_price()
