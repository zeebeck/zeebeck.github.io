---
title: '[프로그래머스]Level-1. 제일 작은 수 제거하기'
date: 2021-06-10 22:28:30
category: 'programmers'
draft: false
---
## 문제 설명

정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는  배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

## 제한 조건

arr은 길이 1 이상인 배열입니다.

인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

## 입출력 예

| arr       | return  |
| --------- | ------- |
| [4,3,2,1] | [4,3,2] |
| [10]      | [-1]    |

## 나의 풀이

```javascript
function solution(arr) {
  let answer = [];
  if (arr.length <= 1) {
    answer.push(-1);
  } else {
      arr.splice(arr.indexOf(Math.min(...arr)), 1);
      answer = arr;
  }
    return answer;
}
```

## 알게 된 것

1. 같은 배열 안에 있는 요소들끼리의 크기를 어떻게 비교할 수 있을지에 대해 많은 시간동안 고민하였고, 결국 검색을 통해 Math.min()함수를 알게되어 해당 함수로 진행하였다.

2. 하지만 최종 풀이에 있는 spread 문법 역시 이때는 모르고 있었기 때문에 아래의 코드가 최초의 코드였으며, 왜 내가 원하는 값으로 리턴되지 않는 지에 대해 굉장히 오랫동안 고민하였다.

   ```javascript
   function solution(arr) {
     let answer = [];
     if (arr.length <= 1) {
       answer.push(-1);
     } else {
         arr.splice(arr.indexOf(Math.min(arr)), 1); //spread syntax를 사용하지 않고 인수전달😭
         answer = arr;
     }
       return answer;
   }
   
   let arr = [1, 2, 3, 4];
   solution(arr); // [1, 2, 3]
   ```

3. 자바스크립트의 built-in 함수인 Math.min은 인수로 받은 숫자 중 가장 작은 수를 반환하는데, 아무런 조작 없이 배열을 '있는 그대로' 해당 함수에 넘겨버리면 원하는 동작이 되지 않는다. **왜냐하면 Math.min 함수는 배열이 아닌 숫자 목록을 인수로 받기 때문이었다.** 😭😭😭 

   `Math.min (arr[0], arr[1], arr[2])` 처럼 배열 요소를 수동으로 나열하는 방법도 있긴 한데 스크립트가 돌아갈 때 실제 넘어오는 배열의 길이는 아주 길 수도 있고, 아예 빈 배열일 수도 있기 때문에, 배열 길이를 알 수 없을 때는 이마저도 불가능했다. 

4. 계속 되는 시행착오(aka. 삽질)하던 중 spread syntax를 알게되어 적용 후 문제를 해결할 수 있었다.
5. ...을 사용하기 때문에 나머지 매개변수랑 비슷해 보이지만, 실제론 반대 역할을 한다. 함수 호출 시 ...arr 와 같이 사용하면, 이터러블 객체 arr이 인수 목록으로 확장이 되어 배열을 목록처럼 확장해 주기 때문에 아주 유용하다.

## 참고

* https://programmers.co.kr/learn/courses/30/lessons/12935
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/min
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push

---

