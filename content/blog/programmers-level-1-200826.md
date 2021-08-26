---
title: '[프로그래머스]Level-1. 문자열 내 마음대로 정렬하기'
date: 2021-08-26 17:25:17
category: 'programmers'
draft: false
---

\---

title: '[프로그래머스]Level-1. 문자열 내 마음대로 정렬하기'

date: 2021-08-26 17:25:17

category: 'programmers'

draft: false

\---



## 문제 설명

문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.



## 제한 사항

* strings는 길이 1 이상, 50이하인 배열입니다.
* strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
* strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
* 모든 strings의 원소의 길이는 n보다 큽니다.
* 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.



## 입출력 예

| strings                 | n    | return                  |
| ----------------------- | ---- | ----------------------- |
| ["sun", "bed", "car"]   | 1    | ["car", "bed", "sun"]   |
| ["abce", "abcd", "cdx"] | 2    | ["abcd", "abce", "cdx"] |



## 입출력 예 설명

**입출력 예 1**
"sun", "bed", "car"의 1번째 인덱스 값은 각각 "u", "e", "a" 입니다. 이를 기준으로 strings를 정렬하면 ["car", "bed", "sun"] 입니다.

**입출력 예 2**
"abce"와 "abcd", "cdx"의 2번째 인덱스 값은 "c", "c", "x"입니다. 따라서 정렬 후에는 "cdx"가 가장 뒤에 위치합니다. "abce"와 "abcd"는 사전순으로 정렬하면 "abcd"가 우선하므로, 답은 ["abcd", "abce", "cdx"] 입니다.



## 나의 풀이

```javascript
function solution(strings, n) {
   return strings.sort((a, b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]))
}
```



## 다른 사람 풀이

```js
# 다른 사람 풀이 1
function solution(strings, n) {
    return strings.sort((a, b) => {
        const chr1 = a.charAt(n);
        const chr2 = b.charAt(n);

        if (chr1 == chr2) {
            return (a > b) - (a < b);
        } else {
            return (chr1 > chr2) - (chr1 < chr2);
        }
    })
}

# 다른 사람 풀이 2
function solution(strings, n) {
    var answer = [];
    for (var i = 0; i < strings.length; i++) {
        var chu = strings[i][n];
        strings[i] = chu + strings[i];
    }
    strings.sort();
    for (var j = 0; j < strings.length; j++) {
        strings[j] = strings[j].replace(strings[j][0],"");
        answer.push(strings[j])
    }

    return answer;
}
```



## 알게 된 것

1. 다행히도 localeCompare() 메서드를 알고 있어서 이 메서드를 통해 문자열을 비교해서 사전순서대로 정렬하여 문제를 해결하였다.

2. 다른 사람 풀이 1에서 <code>return (first > second) — (first < second)</code> 라는 코드를 보았는데 이렇게 리턴 값을 작성할 경우에는 일반적으로 sort() 메서드처럼 작동한다고 한다. 이유는 앞에 숫자가 크면 1을 리턴하고 뒤의 숫자가 크면 -1을 반환하기 때문이다. 

3. 추가적으로 sort() 메서드에 대해서 정리해 보았다.

   > 비교 함수는 배열 안의 인접한 요소를 비교하는 역할이다. 
   >
   > 비교 함수는 인수를 두 개 받는다.
   >
   > 첫 번째 인수는 인접한 왼쪽 요소고 두 번째 인수는 인접한 오른쪽 요소이다. 
   >
   > 비교 함수를 function(a,b)라고 했을 때 비교 함수는 다음 규칙을 따라야 한다.
   >
   > - function(a,b) < 0 이면 a를 b보다 작은 인덱스로 정렬한다.
   > - function(a,b) == 0 이면 a와 b의 순서를 바꾸지 않는다.
   > - function(a,b) > 0 이면 b를 a보다 작은 인덱스로 정렬한다.
   >
   > 문제는 n번째 문자가 같을 경우인데 이때에는
   >
   > “return (a > b) — (a < b);” 그냥 매개변수로 받은 a,b 문자열 전체를 비교해버리면 된다.



## 참고

* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
---

