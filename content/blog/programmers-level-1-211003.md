---
title: '[프로그래머스]Level-1. 모의고사'
date: 2021-10-03 23:25:30
category: 'programmers'
draft: false
---

## 문제 설명

수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

## 제한 사항

- 시험은 최대 10,000 문제로 구성되어있습니다.
- 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
- 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

## 입출력 예

| answers     | return  |
| ----------- | ------- |
| [1,2,3,4,5] | [1]     |
| [1,3,2,4,2] | [1,2,3] |

##### 입출력 예 설명

입출력 예 #1

- 수포자 1은 모든 문제를 맞혔습니다.
- 수포자 2는 모든 문제를 틀렸습니다.
- 수포자 3은 모든 문제를 틀렸습니다.

따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

입출력 예 #2

- 모든 사람이 2문제씩을 맞췄습니다.

## 나의 풀이

```javascript
function solution(answers) {
  let result = []
  let correctCountArr = [0, 0, 0]
  let studentOne = [1, 2, 3, 4, 5]
  let studentTwo = [2, 1, 2, 3, 2, 4, 2, 5]
  let studentThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

  for (let i = 0; i < answers.length; i++) {
    if (studentOne[i % 5] === answers[i]) correctCountArr[0]++
    if (studentTwo[i % 8] === answers[i]) correctCountArr[1]++
    if (studentThree[i % 10] === answers[i]) correctCountArr[2]++
  }

  let numberOneStudent = Math.max(...correctCountArr)

  for (let i = 0; i < 3; i++) {
    if (correctCountArr[i] === numberOneStudent) result.push(i + 1)
  }

  return result.sort((a, b) => a - b)
}
```

## 알게 된 것

1. 수포자들의 찍기가 일정 패턴 주기가 있어 배열에 담고, for문을 통해 정답지 배열값과 비교를 하면서 일치할 경우 맞은 횟수를 변수 correctCountArr에 하나씩 증가 시켰고, 최종적으로 가장 많이 맞춘 값을 result 변수에 담아 내림차순 정렬 후 반환하여 문제를 해결하였다.

2. 로직은 비슷하지만 filter메서드를 통한 문제풀이도 있었다.

   ```javascript
    # 다른 사람 풀이
     function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};
   ```


    return answer;

}

```

---
```
