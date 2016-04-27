// ID Generator Function
function IDs(name, username, dates, friends) {
	this.name = name,
	this.username = username,
	// Array of dates
	this.dates = dates,
	// Array of friends
	this.friends = friends
}

//The IDs for each person and their corresponding username, transactions, and list of friends
var ID1 = new IDs('Billy', 'ballhog29', ['2016-04-10,BUY,GOOG', '2015-07-22,SELL,KMRT', '2016-04-11,SELL,YHOO', '2016-04-12,SELL,GOOG', '2016-04-16,BUY,KMRT','2016-01-31,BUY,YHOO', '2016-04-15,BUY,KMRT'], ['Jeff', 'Erin', 'Jebron', 'Tyrone']),
	ID2 = new IDs('Erin', 'erin27', ['2016-04-04,BUY,GOOG', '2016-04-14,SELL,KMRT', '2016-01-31,BUY,GOOG', '2016-04-15,BUY,KMRT'], ['Jeff', 'Billy', 'Tyrone']),
	ID3 = new IDs('Jeff', 'jefferman93', ['2016-04-11,SELL,GOOG', '2016-04-13,BUY,KMRT', '2016-04-15,SELL,YHOO', '2016-02-09,BUY,GOOG'], ['Billy', 'Jebron', 'Erin']),
	ID4 = new IDs('Jebron', 'theOtherLebron57', ['2014-02-25,BUY,GOOG','2016-04-11,SELL,KMRT', '2016-04-13,BUY,KMRT', '2016-04-15,BUY,GOOG', '2016-04-16,SELL,YHOO'], ['Jeff', 'Billy', 'Tyrone']),
	ID5 = new IDs('Tyrone', 'kobe65', ['2014-04-16,BUY,GOOG', '2016-04-12,SELL,KMRT', '2015-04-14,BUY,KMRT', '2016-04-13,BUY,GOOG', '2016-06-15,BUY,YHOO', '2015-04-12,BUY,YHOO', '2014-12-15,BUY,GOOG'], ['Billy', 'Jeff', 'Erin', 'Jebron']),
	ID6 = new IDs('Adam', 'ag8', ['2016-04-15,BUY,GOOG','2016-04-14,SELL,YHOO','2016-04-10,BUY,KMRT', '2015-07-14,BUY,KMRT', '2014-14-10,SELL,GOOG'], ['Billy', 'Jeff', 'Erin', 'Jebron', 'Tyrone'])
	//Array of each ID
	idArray = [ID1, ID2, ID3, ID4, ID5, ID6]


// Function that gets an array of friend's usernames for the input name 
function getFriendsListForUser(theName) {
	for(i = 0; i < idArray.length; i++) { // loop through array of IDs
		if(idArray[i].name === theName) { // checking for equal names
			var friendArray = []
			for(j = 0; j < idArray[i].friends.length; j++) { // loops through friends of input name
				for(k = 0; k < idArray.length; k++) { // loops through array of IDs for name
					if(idArray[i].friends[j] === idArray[k].name) { // checks to see if friend name is equal to name in array of Ids
						friendArray.push(idArray[k].username) // adds username to friendArray
					}	
				}
			}
			// console.log(idArray[i].friends)
		}
	}
	//console.log(friendArray)
	return friendArray // array of usernames for input name
}

//getFriendsListForUser('Jebron')

// Function that get's the transactions for someone by username
function getTradeTransactionsForUser(theUserName) {
	for(i = 0; i < idArray.length; i++) { 
		if(idArray[i].username === theUserName) {
			// console.log(idArray[i].dates.sort())
			return idArray[i].dates.sort()
		}
	}
}

// getTradeTransactionsForUser('ballhog29')


function alertUser(myName) { // Function that returns array of net transactions for each company
	if(typeof myName === 'number') {
		return 'this is a number'
	}
	var friends = getFriendsListForUser(myName) // Get's list of friend's usernames
	//console.log(friends)
	var transactions = [];
	for(l = 0; l < friends.length; l++) { // loops through usernames (used l because i is in the getTradeTransations function)
		var loop = getTradeTransactionsForUser(friends[l]) // Get's an array of transactions for each username
		//console.log(loop)
		for(m = 0; m < loop.length; m++) { // loops through usernames transactions
			if(loop[m].charAt(2) !== '1' && loop[m].charAt(3) !== '6') { // Filters year assuming friends starting strading stocks at year 2000
				// console.log(loop[m][3])
			}
			else if(loop[m].charAt(6) !== '4') { // Filters for month of April
				// console.log(loop[m][6])
			}
			else if(Number(loop[m].slice(8, 10)) < 10 || Number(loop[m].slice(8, 10)) > 17) { // Filters for week of 4/10 - 4/16
				// console.log(loop[m].slice(8, 10))
			} 
			else { 
				transactions.push(loop[m]) // adds transaction to transactions array
			}
		}
	}
	console.log(transactions.sort())
	console.log(transactions.sort().length)
	// return transactions.sort() - sorted transactions by date

	var googleArray = [], // Arrays of transactions by each company
		yahooArray = [],
		kmartArray = []

	for(n = 0; n < transactions.length; n++) { // loops through transactions array
		var googleChar = transactions[n].indexOf('GOOG'), // variables for determining company name by indexOf function
			yahooChar = transactions[n].indexOf('YHOO'),
			kmartChar = transactions[n].indexOf('KMRT')
		if(googleChar !== -1) { // filter for google (if -1 is true, google isnt there)
			googleArray.push(transactions[n]) // add to google array
		}
		else if(yahooChar !== -1) { // filter for yahoo
			yahooArray.push(transactions[n])
		}
		else if(kmartChar !== -1) { // filter for kmart
			kmartArray.push(transactions[n])
		}
		else {
			alert('none of the three')
		}
	}
	console.log(googleArray)
	console.log(yahooArray)
	console.log(kmartArray)

	function buyOrSell(array) { // function to determine number of buys or sells
		var net = 0, // setting net value and string variable
			BoS = 0
		for(q = 0; q < array.length; q++) { // loops through company array of transactions
			var buy = array[q].indexOf('BUY'), // variables for determining if it's buy or sell
				sell = array[q].indexOf('SELL')
			if(buy !== -1) {
				net += 1 // add for buy
			}
			else if(sell !== -1) {
				net += -1 // subtract for sell
			}
			else {
				alert('No BUY or SELL')
			}
		}
		if(net > 0) { // sets BUY text
			BoS = 'BUY'
		}
		else if(net < 0) { // sets SELL text
			BoS = 'SELL'
			net = net * -1
		}
		else { // sets 0 change
			BoS = 'neutral'
		}
		var boss = [net, BoS]
		return boss // returns array of net value and text
	}

	// variables for string ouput of each company net transaction
	var google = buyOrSell(googleArray)[0].toString() + "," + buyOrSell(googleArray)[1] + "," +"GOOG", 
		kmart = buyOrSell(kmartArray)[0].toString() + "," + buyOrSell(kmartArray)[1] + "," +"KMRT",
		yahoo = buyOrSell(yahooArray)[0].toString() + "," + buyOrSell(yahooArray)[1] + "," +"YHOO",
		maxArray = [google, kmart, yahoo] // array of net transactions for each company

	for(p = 0; p < maxArray.length; p++) { // removes net transaction if neutral
		var maxChar = maxArray[p].indexOf('neutral')
		if(maxChar !== -1) {
			maxArray.splice(p, 1)
		}
	}

	console.log(maxArray)
	maxArray.sort().reverse() // sorts array and then lists from highest to lowest
	console.log(maxArray)
	return maxArray
}

alertUser('Jeff')

function display() { // runs function and sets name above
	var dude = document.getElementById('person').value,
		trans = alertUser(dude),
		theDiv = document.getElementById('topToBottom')
	theDiv.innerHTML = "" // Removes everything from transaction values div
	document.getElementById('person2').innerHTML = dude 
	for(r = 0; r < trans.length; r++) { // loops through final array
		var p = document.createElement('p'),
			pText = document.createTextNode(trans[r])
		console.log(trans[r])
		p.appendChild(pText)
		theDiv.appendChild(p) // adds p node to div
	}
}	

document.getElementById('button').onclick = display // runs function when button is clicked