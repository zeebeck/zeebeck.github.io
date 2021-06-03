---
title: '[프로그래머스]Level-1. 평균 구하기'
date: 2021-06-03 23:15:30
category: 'programmers'
draft: false
---

## 문제 설명

정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

## 제한 사항

* arr은 길이 1 이상, 100 이하인 배열입니다.

- arr의 원소는  -10,000 이상 10,000 이하인 정수입니다.

## 입출력 예

| arr       | return |
| --------- | :----: |
| [1,2,3,4] |  2.5   |
| [5,5]     |   5    |

## 나의 풀이

1. for 문을 통해서 1차적으로 문제를 풀었다.
2. reduce 함수를 통해 2차적으로 문제를 동일하게 풀었다.

```javascript
# for 문을 통한 문제 풀이
function solution(arr) {
    let answer = 0;

    for ( let i = 0; i < arr.length; i++ ) {
        answer += arr[i];
    }

    return answer / arr.length;
}


# reduce 함수를 통한 문제 풀이
function solution(arr) {
    let answer = 0;
    answer = arr.reduce((acc, cur) => acc + cur) / arr.length;
    return answer
}

```

## 알게 된 것

1. 이론만 공부해서는 절대적으로 부족하며 실제로 써봐야 이해를 했는지 못했는지 제대로 알게 되는 거 같다.

2. map, reduce와 같은 고차 함수를 많이 사용해 봐야겠다.

   

## 참고

* https://programmers.co.kr/learn/courses/30/lessons/12944
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

---

