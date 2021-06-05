---
title: '[프로그래머스]Level-1.  문자열을 정수로 바꾸기'
date: 2021-06-05 14:15:30
category: 'programmers'
draft: false
---
## 문제 설명

**문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.**

## 제한 사항

* s의 길이는 1 이상 5이하입니다.
* s의 맨앞에는 부호(+, -)가 올 수 있습니다.
* s는 부호와 숫자로만 이루어져있습니다.
* s는 "0"으로 시작하지 않습니다.

## 입출력 예

예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.
 str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.

## 나의 풀이

1. 단항 연산자 +가 변경을 하려고 하는 값 앞에 있는 경우 숫자형으로 변환되는 점을 활용하여 문제 풀이 하였다.

```javascript
function solution(s) {
    var answer = 0;
    answer = +s;
    return answer;
}
```

## 참고

* https://programmers.co.kr/learn/courses/30/lessons/12925
* https://ko.javascript.info/operators
* https://ko.javascript.info/number

---

