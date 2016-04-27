// Basic Tests

test("alertUser exists", function() {
	ok(alertUser, "alertUser exists")
})

test("display exists", function() {
	ok(display, "display exists")
})

test("alertUser returns", function() {
	for(s = 0; s < idArray.length; s++) {
		equal(typeof alertUser(idArray[s].name), 'object', 'alertUser returned an array or object')	
	}
})

test("getFriendsListForUser exists", function() {
	ok(getFriendsListForUser, "getFriendsListForUser exists")
})

test("getTradeTransactionsForUser returns", function() {
	for(t = 0; t < idArray.length; t++) {
		equal(typeof getTradeTransactionsForUser(idArray[t].username), 'object', 'getTradeTransactionsForUser returned an array or object')	
	}
})