module.exports = {
	isPrime: function(n) {
		if(n <=1) {
			return false;
		}

		let div = 2;

		while(div <= Math.sqrt(n)) {
			if(n % div === 0) {
				return false;
			}

			div++;
		}

		return true;
	},
	arrPrint: function(arr) {
		for(let x = 0; x<arr.length; x++)
			console.log(arr[x]);
		}
}
