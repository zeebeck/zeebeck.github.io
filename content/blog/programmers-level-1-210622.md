---
title: '[프로그래머스]Level-1. 약수의 합'
date: 2021-06-22 09:45:10
category: 'programmers'
draft: false
---
## 문제 설명

정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

## 제한 조건

`n`은 0 이상 3000이하인 정수입니다.

## 입출력 예

| n    | return |
| ---- | ------ |
| 12   | 28     |
| 5    | 6      |

## 입출력 예 설명

입출력 예 #1
 12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

입출력 예 #2
 5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.

## 나의 풀이

```javascript
function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        (n % i == 0) ? answer += i : answer
    }
    return answer;
}
```

## 알게 된 것

1. 문제를 읽어 보면서 머릿속에 '재귀'란 단어가 떠올랐지만 그것 뿐이었다. 😵‍💫

2. 반목문을 통해 삼항연산자의 조건식에 된 약수를 합하여 문제 해결을 하였다.

## 참고

* https://programmers.co.kr/learn/courses/30/lessons/12928

---

