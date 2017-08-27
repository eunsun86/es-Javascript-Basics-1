/*
 * 자, 몸 좀 풀어볼까요?
 * 숫자들이 담겨있는 배열이 주어집니다.
 * 배열에 포함된 모든 숫자의 합을 계산하시면 됩니다. 간단하죠?
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([4, -1, 5]); // => 8
 * example 3: sumArray([10, -11, 11]); // 10
 *
 * 참고: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
 *
 * Vanilla Coding
 */

function sumArray (arr) {
    // 주어진 인자가 배열이 아닌 경우, 에러를 내야한다.
	// 주어진 배열이 텅 비었을 경우, 합은 0이다.
	// 주어진 배열에 한개의 숫자만 들어있을 경우, 합은 그 숫자이다.
	// 주어진 배열에 숫자가 아닌 것이 있을 경우, 에러를 내야한다.
	// 주어진 배열의 모든 숫자의 합을 더하여, 리턴하여야 한다.
	var result = 0;
	if(Array.isArray(arr)){
		if(arr.length === 0){
			return 0;
		}

		for(var i = 0; i < arr.length; i++) {
			if (arr.length === 1 && typeof(arr[i]) === 'number') {
				return arr[i];
			}
			if (typeof(arr[i]) !== 'number') {
				throw new Error();
			}

			result += arr[i];
		}
		return result;	
	}else{
		throw new Error();
	}
}
