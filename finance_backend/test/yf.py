import yfinance as yf

info = yf.Ticker('AMD').news
print(info)

