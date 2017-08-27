/**
 *
 * 주어진 두개의 String 값이 거꾸로 뒤집어서 같은 값이 되는지 판단하여 그에 맞는 Boolean을 리턴하세요.
 *
 * < Sample >
 * reversedString('hello', 'olleh') // true
 * reversedString('yellow', 'owlley') // false
 *
 * reverse() method는 금지입니다.
 */

// 주어진 인자가 String이 아닌 경우, 에러를 내야한다.
// 주어진 인자 두개 모두가 String이 아닌 경우, 에러를 내야한다.
// 주어진 두개의 String값이 같을 경우, false를 리턴한다.
// 주어진 String값을 뒤집어 비교하여 Boolean 올바른 값을 리턴하여야 한다.
function reversedString (str1, str2) {
	if (!(typeof(str1, str2) === 'string')) {
		throw new Error();
	}
	if (!(typeof str1 === 'string' && typeof str2 === 'string')) {
		throw new Error();
	}

	var obj1 = str1, obj2 = str2;
	var arrResult = new Array();
	var arrCount = str1.length;
	var reversword;
	
	for (var i=0; i < arrCount; i++) {
		arrResult[i] = str1[arrCount-i-1];
	}

	reversword = arrResult.join("");	

	if (reversword === obj2) {
		return true;
	} else {
		return false;
	}
}
