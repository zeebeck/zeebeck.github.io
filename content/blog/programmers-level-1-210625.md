---
title: '[프로그래머스]Level-1. 두 정수 사이의 합'
date: 2021-06-25 12:45:10
category: 'programmers'
draft: false
---
## 문제 설명

두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

## 제한 조건

a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.

a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.

a와 b의 대소관계는 정해져있지 않습니다.

## 입출력 예

| a    | b    | return |
| ---- | ---- | ------ |
| 3    | 5    | 12     |
| 3    | 3    | 3      |
| 5    | 3    | 12     |

## 나의 풀이

```javascript
function solution(a, b) {
    let answer = 0;
    if (a > b) {
        for(let i = b; i <= a; i++) {
            answer += i
        }
    } else if (a < b) {
        for(let i = a; i <= b; i++) {
            answer += i
        }
    } else {
        answer = a
    }
    return answer;
}
```

## 알게 된 것

1. 제한 조건의 규칙에 따른 조건문을 통해 문제를 해결하였다. 

2. 다른 사람 풀이 중 해당 문제를 <b>가우스의 덧셈</b>과 <b>Math 내장 객체</b>를 이용한 것을 보았는데, 수학적인 접근 방법 및 Math 내장 객체에 대해 알아보았다.

   ```javascript
   # 가우스의 덧셈 공식을 응용한 풀이
   function adder(a, b){
     let result = 0;
     return (a + b) * (Math.abs(b - a) + 1 / 2;
   }
   
   # Math 내장 객체를 활용한 풀이
   function adder(a, b, s = 0){
     for (let i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
     return s;
   }
   ```

   

## 참고

* https://programmers.co.kr/learn/courses/30/lessons/12912
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math
* http://www.yes24.com/Product/Goods/59611046

---

