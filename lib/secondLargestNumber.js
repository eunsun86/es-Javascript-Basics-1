/*
 * 숫자들이 담겨있는 배열이 주어집니다.
 * 배열에 담긴 숫자중 두번째로 큰 숫자를 찾으면 됩니다.
 *
 * example 1: secondLargestNumber([1, 2, 3, 5, -19]); // => 3
 * example 2: secondLargestNumber([4, 21, 5, 19]); // => 19
 * example 3: secondLargestNumber([10, -11, 11]); // => 10
 *
 * .sort() method 사용 금지
 *
 * Vanilla Coding
 */
// 주어진 인자가 배열이 아닌 경우, 에러를 내야한다.
// 주어진 배열에 두개 미만의 숫자가 들어있을 경우, 에러를 내야한다.
// 주어진 배열에 숫자가 아닌 것이 있을 경우, 에러를 내야한다.
// 주어진 배열에서 두번째로 큰 숫자를 찾아서, 리턴하여야 한다.
function secondLargestNumber (arr) {
    // 여러분의 코드는 여기에!
    if (!Array.isArray(arr)) {
    	throw new Error();
    }

    if (arr.length < 2) {
    	throw new Error();
    }

    var max = arr[0];   
    var secondMax = max;  
    
    for (var i = 0; i < arr.length; i++) {  
    	if (typeof arr[i] !== 'number') {
    		throw new Error();
    	}
    	
        if (arr[i] > max) {    
                secondMax = max;   
                max = arr[i];  
        } else if ( (arr[i] > secondMax && arr[i] < max) || max == secondMax) {  
            secondMax = arr[i];  
        }  
    }  
    return secondMax;  
}
