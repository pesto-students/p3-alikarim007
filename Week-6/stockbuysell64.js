
	function maxProfit(prices , size) {

	var maxProfit = 0;

	for (i = 1; i < size; i++)
		if (prices[i] > prices[i - 1])
				maxProfit += prices[i] - prices[i - 1];
		return maxProfit;
	}

		var price = [ 100, 180, 260, 310, 40, 535, 695 ];
		var n = price.length;

	
		console.log(maxProfit(price, n));

