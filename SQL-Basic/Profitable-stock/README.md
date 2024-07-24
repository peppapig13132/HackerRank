# Profitable stock
A stock is considered profitable if the predicted price is strictly greater than the current price. Write a query to find the stock_codes of al the stocs which are profitable based on this definition. Sort the output in ascending order.
There are two tables in the database: _price\_today_ and _price_tomorrow_. Their primary keys are _stock\_code_.

## Schema:

**price_today**

| Name | Type | Description |
| :-: | :-: | :- |
| stock_code | STRING | The stock code for this stock. This is the primary key. |
| price | INTEGER | Today's price of the stock. |

**price_tomorrow**

| Name | Type | Description |
| :-: | :-: | :- |
| stock_code | STRING | The stock code for this stock. This is the primary key. |
| price | INTEGER | Predicted price tomorrow of the stock. |

**Note:** Both tables contain all stocks listed on the stock exchange.

## Sample Data Tables:

**price_today**

| stock_code | price |
| :-: | -: |
| TITAN | 560 |
| MRF | 950 |
| GOOGLE | 200 |

**price_tomorrow**

| stock_code | price |
| :-: | -: |
| TITAN | 750 |
| MRF | 800 |
| GOOGLE | 210 |

### Samle Output
```
GOOGLE
TITAN
```