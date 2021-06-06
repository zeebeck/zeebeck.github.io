---
title: '[프로그래머스]Level-1. 정수 내림차순으로 배치하기'
date: 2021-06-06 23:45:30
category: 'programmers'
draft: false
---

## 문제 설명

함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

## 제한 조건

* `n`은 1이상 8000000000 이하인 자연수입니다.



## 입출력 예

| n      | return |
| ------ | :----: |
| 118372 | 873211 |



## 나의 풀이

```javascript
function solution(n) {
    return +String(n).split("").sort().reverse().join("");
}
```

## 알게 된 것

1. Split(), sort(), reverse(), join()등의 문자열 및 배열 built-in 메소드를 활용하여 풀이 하였다.

2. built-in 메소드를 사용하지 않고 풀어 봐야겠다

## 참고

* https://programmers.co.kr/learn/courses/30/lessons/12933
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join

---

