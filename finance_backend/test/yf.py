import yfinance as yf
data = yf.download("AMZN", start="2023-10-24", end="2023-10-26")
print(data)
open = data['Open'].iloc[-1]
print(open)

