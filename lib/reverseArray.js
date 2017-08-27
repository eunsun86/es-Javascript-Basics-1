/**
 * 주어진 배열에 있는 아이템들의 순서를 거꾸로 바꾸어서 리턴하세요.
 * 사용 금지 - Array.prototype.reverse().
 *
 * < Sample >
 * reverseArray([1, 8, 39, null, 2, 9, 'bob']) // ['bob', 9, 2, null, 39, 8, 1]
 */

function reverseArray (arr) {
    // 주어진 인자가 배열이 아닌 경우, 에러를 내야한다.
    // 주어진 배열이 텅 비었을 경우, 뒤집은 배열은 결국 빈 배열이다.
    // 주어진 배열에 한개의 아이템만 들어있을 경우, 뒤집은 배열은 그대로이다.
    // 주어진 배열속 아이템들의 순서를 거꾸로 뒤집어 리턴하여야 한다.
    if(Array.isArray(arr)){
		var arrResult = new Array();
		var arrCount = arr.length;
		
		for(var i=0; i < arrCount; i++){
			arrResult[i] = arr[arrCount-i-1];
		}
		return arrResult;	
	}else{
		throw new Error();
	}
}
