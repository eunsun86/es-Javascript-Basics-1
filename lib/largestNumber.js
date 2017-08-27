/*
 * 숫자들이 담겨있는 배열이 주어집니다.
 * 배열에 담긴 숫자중 가장 큰 숫자를 찾으면 됩니다.
 *
 * example 1: largestNumber([1, 2, 3]); // => 3
 * example 2: largestNumber([4, -1, 5]); // => 5
 * example 3: largestNumber([10, -11, 11]); // => 11
 *
 * .sort() method 사용 금지
 *
 * Vanilla Coding
 */
// 주어진 인자가 배열이 아닌 경우, 에러를 내야한다.
// 주어진 배열이 텅 비었을 경우엔 null값을 리턴한다.
// 주어진 배열에 한개의 숫자만 들어있을 경우, 가장 큰 숫자는 그 숫자이다.
// 주어진 배열에 숫자가 아닌 것이 있을 경우, 에러를 내야한다.
// 주어진 배열에서 가장 큰 숫자를 찾아서, 리턴하여야 한다.
function largestNumber (arr) {
    if (!Array.isArray(arr)) {
    	throw new Error();
    }

    if (arr.length === 0) {
    	return null;
    }

    if (arr.length === 1) {
    	return arr[0];
    }

    var largestNumber ;
    for (var i = 0; i < arr.length; i++) {
    	if (typeof arr[i] !== 'number') {
    		throw new Error();
    	}

    	if (!largestNumber) {
    		largestNumber  = arr[i];
    	} else if (largestNumber  < arr[i]) {
    		largestNumber = arr[i];

    	}
    }
    return largestNumber;
}

