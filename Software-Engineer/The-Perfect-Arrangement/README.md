# The Perfect Arrangement
Write a query to print the `id`, `first_name` and `last_name`. To filter the names, concatenate the first and last names to create a `combined name`. Return the names of customers whose combined names are less than 12 letters long. Sort the results by their combined name lengths, then alphabetically, case insensitive, by combined name, then by id. All sorts are ascending.

### Input Format
CUSTOMER

| Name | Type | Description | 
| - | - | - |
| ID | Integer | unique id, primary key |
| FIRST_NAME | String |  |
| LAST_NAME | String |  |
| COUNTRY | String |  |
| CREDIT_LIMIT | Float |  |

Output Format
```
CUSTOMER.ID CUSTOMER.FIRST_NAME CUSTOMER.LAST_NAME
```

### Sample Input
CUSTOMER

| ID | FIRST_NAME | LAST_NAME | COUNTRY | CREDIT_LIMIT | 
| - | - | - | - | - |
| 1 | Alex | White | USA | 200350.54 |
| 2 | Tyler | Hanson | UK | 15354.23 |
| 3 | Jordan | Fernandez | France | 359200.67 |
| 4 | Drew | Bradley | Albania | 1060.57 |
| 5 | Blake | Fuller | USA | 14789.00 |
| 6 | Spencer | Johnston | China | 100243.35 |
| 7 | Ellis | Gutierrez | USA | 998999.20 |
| 8 | Morgan | Thomas | Canada | 500500.23 |
| 9 | Riley | Garza | UK | 18782.44 |
| 10 | Peyton | Harris | USA | 158367.00 |

Sample Output
```
1 Alex White
9 Riley Carza
5 Blake Fuller
4 Drew Bradley
2 Tyeler Hanson
```

### Explanation
Alex White is 9 letters, so it is included in the results. Jordan Fernandez is 15 letters, so it is omitted. The last 3 names are the same length, so they are sorted alphabetically ascending.

Names that are exclueded and their lengths
```
MorganThomas      12
PeytoHarris       12
EllisGutierrez    14
JordanFernandez   15
SpencerJohnston   15
```