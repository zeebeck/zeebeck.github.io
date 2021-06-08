---
title: '[프로그래머스]Level-1. 정수 제곱근 판별'
date: 2021-06-08 13:11:30
category: 'programmers'
draft: false
---
## 문제 설명

임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
 n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

## 제한 조건

n은 1이상,  50000000000000 이하인 양의 정수입니다.

## 입출력 예

| n    | return |
| ---- | :----: |
| 121  |  144   |
| 3    |   -1   |

## 입출력 예 설명

#### **입출력 예#1**

 121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.

#### **입출력 예#2**

 3은 양의 정수의 제곱이 아니므로, -1을 리턴합니다.

## 나의 풀이

```javascript
function solution(n) {
    let answer = 0;
    answer = Math.sqrt(n);
    if (!Number.isInteger(answer)) { // if (answer % 1 != 0) 으로도 쉽게 판별 가능 
        return -1;
    } else {
        return Math.pow(+answer + 1, 2);
    }
}
```

## 알게 된 것

1. 소숫점이 있는 수를 어떻게 판별할 수 있는지 몰라 MDN 검색 후 **isInteger** 메소드라는 것을 알게 되었고 해당 메소드를 통해 문제 해결을 하였다.

2. 후에 생각난 건데 그냥 **1로 나눈 나머지가 0이냐 아니냐**를 통해서도 소숫점이 있는 수를 판별할 수 있었다. 😭😂

3. **다른 사람 풀이 확인 시 O(n), 즉, Big O notation라는 시간 복잡도 알고리즘을 활용해 푼 풀이도 있었다. 해당 알고리즘이 뭔지 학습해봐야겠다.**

   

## 참고

* https://programmers.co.kr/learn/courses/30/lessons/12934
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
* https://medium.com/cesars-tech-insights/big-o-notation-javascript-25c79f50b19b
* https://www.digitalocean.com/community/tutorials/js-big-o-notation

---

