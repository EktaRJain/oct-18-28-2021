* Create a folder called __Lab05__
* Design two components, __CovidGrid__ and __Summary__
* You can have a parent component say __Lab05__

* In __CovidGrid__ display the __country__ and __cases__ columns alone in a tabular format from the following data 
* In the grid, display every row using another component __CovidGridRow__

``` json
[
	{ "country": "USA", "cases": 188592, "recovered": 7251, "deaths": 4055 },
	{ "country": "Italy", "cases": 105792, "recovered": 15729 , "deaths": 12428 },
	{ "country": "Spain", "cases": 95923, "recovered": 19259, "deaths": 8464 },
	{ "country": "France", "cases": 52128, "recovered": 9444, "deaths": 3523 },
	{ "country": "India", "cases": 1590, "recovered": 148, "deaths": 45 }
]
```

* When you click on any row in the __CovidGrid__, display all the data about the clicked country in __Summary__ component in a paragraph
