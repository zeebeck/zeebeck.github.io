---
title: '[프로그래머스]Level-1. 없는 숫자 더하기'
date: 2021-11-23 23:40:12
category: 'programmers'
draft: false
---

## 문제 설명

0부터 9까지의 숫자 중 일부가 들어있는 배열 `numbers`가 매개변수로 주어집니다. `numbers`에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

## 제한 사항

- 1 ≤ `numbers`의 길이 ≤ 9
- 0 ≤ `numbers`의 모든 수 ≤ 9
- `numbers`의 모든 수는 서로 다릅니다.

## 입출력 예

| numbers           | result |
| :---------------- | :----- |
| [1,2,3,4,6,7,8,0] | 14     |
| [5,8,4,0,6,7,9]   | 6      |

## 입출력 예 설명

**입출력 예 #1**

- 5, 9가 `numbers`에 없으므로, 5 + 9 = 14를 return 해야 합니다.

**입출력 예 #2**

- 1, 2, 3이 `numbers`에 없으므로, 1 + 2 + 3 = 6을 return 해야 합니다.

## 나의 풀이

```javascript
const solution = numbers => {
  let answer = 0
  for (let i = 1; i < 10; i++) {
    if (!numbers.includes(i)) {
      answer += i
    }
  }
  return answer
}
```

## 알게 된 것

1. 아규먼트로 주어지는 배열 numbers에 포함되지 않는 값을 조건문 if를 통해 확인 후 변수 answer에 값을 더해 return 후 문제를 해결하였다.
2. 다른 사람 풀이 중 1부터 9까지의 총합 45를 미리 구한 뒤 numbers 변수의 요소의 총합을 reduce 매서드로 구한 값과 뺀 후 return한 내용, 또 가우스의 덧셈 공식으로 문제풀이를 한 내용이 인상적이었다.

```javascript
# 다른 사람 풀이 1
function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

# 다른 사람 풀이 2
function solution(numbers) {
    var answer = 9 * (9 + 1) / 2
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return answer - sum
}
```
