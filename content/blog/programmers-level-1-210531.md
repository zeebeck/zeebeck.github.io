---
title: '[프로그래머스]Level-1. 짝수와 홀수'
date: 2021-05-31 12:15:30
category: 'programmers'
draft: false
---

## 문제 설명

정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

## 제한 사항

- num은 int 범위의 정수입니다.
- 0은 짝수입니다.

## 입출력 예

| num  | return |
| ---- | :----: |
| 3    | "Odd"  |
| 4    | "Even" |

## 나의 풀이

```javascript
function solution(num) {
    let answer = '';
    answer = (num % 2 == 0) ? "Even" : "Odd"
    return answer;
}
```



## 알게 된 것

1. If- else문도 좋지만 코드의 가독성을 심각하게 해치지 않는 선에서 이전에 학습했던 삼항연산자를 통해 문제를 풀었다.

2. 아래 코드처럼 자바스크립트의 truthy와 falsy 값을 통한 방법으로 해결한 사람도 있지만, 오랫동안 의미 해석을 해야하는 코드를 굳이 작성할 필요가 있을까란 생각이 들었다. 

   ```javascript
   let solution = _2 => _2 % 2 ? "Odd" : "Even";
   ```

   

## 참고

* https://programmers.co.kr/learn/courses/30/lessons/12937
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

---


