# REST API: Weather Finder
A REST API contains weather of various cities. Given a city name, get the current temperature of the city.

To access the weather information, perform an HTTP GET request to: 
```
https://jsonmock.hackerrank.com/api/weather?name=<name>
```
where <name> is the city name to query. The name not case-sensitive.

For example, a GET request to:
```
https://jsonmock.hackerrank.com/api/weather?name=Dallas
```
will return the weather information for _Dallas_.

THe response to a request is a JSON with the following 5 fields:

- page: the current page of the results
- per_page: the maximum number of results returned per page.
- total: the total number of pages with results
- data: Either an empty array or an array of weather records as JSON objects. Return the data from the first record in the array. Each record has multiple properties but below properties are only needed for this question:
  - name: city name for which we have queried [STRING]
  - weather: wather conditions of the city in the format "<temperature> degree"[STRING] and value _temperature_ here is an integer

## Sample ase
### Sample Input For Custom Testing
```
Dallas
```
### Sample Output
```
12
```