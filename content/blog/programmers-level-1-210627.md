---
title: '[프로그래머스]Level-1. 같은 숫자는 싫어'
date: 2021-06-27 14:20:21
category: 'programmers'
draft: false
---
## 문제 설명

배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

- arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
- arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.

배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

## 제한 사항

배열 arr의 크기 : 1,000,000 이하의 자연수

배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수

## 입출력 예

| arr             | answer    |
| --------------- | --------- |
| [1,1,3,3,0,1,1] | [1,3,0,1] |
| [4,4,4,3,3]     | [4,3]     |

## 나의 풀이

```javascript
function solution(arr) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i-1] == arr[i]) continue;
        answer.push(arr[i]);
    }
    return answer;
}
```

## 알게 된 것

1. 배열안에 연속적으로 나타나는 숫자를 확인하기 위해 배열의 현재 인덱스의 값과 이전 인덱스의 값이 같은 지 확인 후 같지 않을 경우에만 새로운 변수에 담아 문제를 해결하였다.

2. 인자로 전달되는 콜백함수의 조건에 부합되는 요소만 담아 새로운 배열로 담아주는 filter 메서드를 통해서도 동일하게 문제 풀이를 해보았다.

   ```javascript
   function solution(arr) {
       const newArr = arr.filter((currentValue, index) => currentValue != arr[index + 1]);
     return newArr;
   }
   ```

## 참고

* https://programmers.co.kr/learn/courses/30/lessons/12906?language=javascript
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

---

