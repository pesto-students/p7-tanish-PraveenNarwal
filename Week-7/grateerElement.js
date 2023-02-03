
function printNGE(arr, n)
{
	var s = [];

	s.push(arr[0]);

	for (var i = 1; i < n; i++)
	{

		if (s.length == 0) {
			s.push(arr[i]);
			continue;
		}

		while (s.length ==0 == false
			&& s[s.length-1] < arr[i])
		{
			console.log( s[s.length-1]
				+ " -- " + arr[i]);
			s.pop();
		}

		s.push(arr[i]);
	}

	while (s.length !=0) {
		console.log( s[s.length-1] + " -- " + -1 );
		s.pop();
	}
}

var arr = [11, 13, 21, 3];
var n = arr.length;
printNGE(arr, n);

// TC: O(N) 
// SC: O(N) 