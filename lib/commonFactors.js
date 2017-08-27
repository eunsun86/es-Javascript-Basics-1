/*
 * 주어진 두개의 숫자의 공통 분모를 모두 찾으세요.
 * 찾은 공통 분모를 큰 숫자부터 작은 숫자의 순서로 나열하여 리턴하세요.
 *
 * < Sample >
 *  12와 18의 공통 분모 찾기
 *  12 의 분모 12, 6, 5, 3, 2, 1
 *  18 의 분모 18, 9, 6, 3, 2, 1
 *  12 과 18 의 공통 분모는 6, 3, 2, 1 (큰 숫자 먼저, 작은 숫자는 뒤에)
 *
 * < Sample 2 >
 *  var common = commonFactors(12, 18);
 *  console.log(common); // [6, 3, 2, 1]
 *
 * < Sample 3 >
 *  var common = commonFactors(25, 20);
 *  console.log(common); // [5, 1]
*/
// 주어진 인자가 숫자가 아닌 경우, 에러를 내야한다.
// 주어진 두개의 숫자의 공통 분모를 찾아 큰 순서대로 리턴한다.

function commonFactors (num1, num2) {
	if (typeof(num1) === 'number' && typeof(num2) === 'number') {
	    var num_arr = new Array();
	    var num_arr2 = new Array();
	    var result = new Array();

	   for (var i = 0; i < num1; i++) {
	        if(num1 % i === 0){    
	           num_arr.push(i);
	        }
	    }
	    num_arr.push(num1);

	   for (var j = 0; j < num2; j++) {
	        if(num2 % j === 0){    
	           num_arr2.push(j);
	        }
	    }
	    num_arr2.push(num2);
	 
		for(var i = 0; i < num_arr.length ; i++ ){
			for(var j = 0; j < num_arr2.length; j++){
				if(num_arr[i] === num_arr2[j]){
					result.push(num_arr[i]);
				}
			}
		}

		result.sort (function(a, b){
			return b-a;
		});
		return result;	
		
	} else {
		throw new Error();
	}
}
