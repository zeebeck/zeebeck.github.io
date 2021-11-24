---
title: '[프로그래머스]월간 코드 챌린지 시즌1. 두개 뽑아서 더하기'
date: 2021-11-24 23:42:19
category: 'programmers'
draft: false
---

## 문제 설명

정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

## 제한 사항

- numbers의 길이는 2 이상 100 이하입니다.
- numbers의 모든 수는 0 이상 100 이하입니다.

## 입출력 예

| numbers     | result        |
| :---------- | :------------ |
| [2,1,3,4,1] | [2,3,4,5,6,7] |
| [5,0,2,7]   | [2,5,7,9,12]  |

## 입출력 예 설명

입출력 예 #1

- 2 = 1 + 1 입니다. (1이 numbers에 두 개 있습니다.)
- 3 = 2 + 1 입니다.
- 4 = 1 + 3 입니다.
- 5 = 1 + 4 = 2 + 3 입니다.
- 6 = 2 + 4 입니다.
- 7 = 3 + 4 입니다.
- 따라서 `[2,3,4,5,6,7]` 을 return 해야 합니다.

입출력 예 #2

- 2 = 0 + 2 입니다.
- 5 = 5 + 0 입니다.
- 7 = 0 + 7 = 5 + 2 입니다.
- 9 = 2 + 7 입니다.
- 12 = 5 + 7 입니다.
- 따라서 `[2,5,7,9,12]` 를 return 해야 합니다.

## 나의 풀이

```javascript
const solution = numbers => {
  let answer = new Array()
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j]

      if (answer.includes(sum) === false) {
        answer.push(sum)
      }
    }
  }
  return answer.sort((a, b) => a - b)
}
```

## 알게 된 것

1. 아규먼트로 전달받은 배열 numbers의 요소를 이중 for문을 통해 현재 요소의 값과 다음 요소의 값을 더한 뒤 해당 요소의 더한 값이 결과 값을 담는 배열에 없을 경우에만 값을 담아 sort() 통해 오름차순으로 정렬 후 값을 반환하였다.
2. 다른 사람 풀이 중 Set을 통해 푼 풀이가 정말 인상적이었다.

```javascript
# 다른 사람 풀이
function solution(numbers) {
    const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)]

    return answer.sort((a, b) => a - b)
}

```

## 참고

- <https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set>
