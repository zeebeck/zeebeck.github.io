---
title: '[프로그래머스]Level-1. 서울에서 감서방 찾기'
date: 2021-06-02 08:15:30
category: 'programmers'
draft: false
---


## 문제 설명

String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는  함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

## 제한 사항

- seoul은 길이 1 이상, 1000 이하인 배열입니다.
- seoul의 원소는 길이 1 이상,  20 이하인 문자열입니다.
- "Kim"은 반드시 seoul 안에 포함되어 있습니다.

## 입출력 예

| seoul           | return              |
| --------------- | ------------------- |
| ["Jane", "Kim"] | "김서방은 1에 있다" |

## 나의 풀이

1. 문제 설명을 통해 seoul이란 배열에는 중복되지 않는 김서방이란 값이 반드시 존재하기 때문에 존재하지 않을 시 "-1"을 반환하는 점 역시 신경 쓸 필요가 없기 때문에 for, while문과 같이 반복문이 아닌 자바스크립트 배열 메소드인 **indexOf** 를 사용하였다.
2. 하지만 처음부터 그렇게 생각한게 아니라 고차 함수인 filter 안에 indexOf 메소드를 이용하던 중 indexOf 메소드만 사용하면 되겠다는 생각으로 아래와 같이 풀이를 하였다. (한마디로 얻어걸린..😭) 

```javascript
function solution(seoul) {
    let answer = '';
    answer = `김서방은 ${seoul.indexOf("Kim")}에 있다`;   
    return answer;
}
```

## 알게 된 것

1. 배열에 대한 **built-in method**가 엄청 많아 외우진 않더라도 대략적으로 어떤 것들이 있고 사용은 어떻게 하는 지 눈에 읽혀야겠다.

2. **Template literals**은 런타임 시점에 일반 자바스크립트 문자열로 처리/변환 된다고 한다.

3. forEach 메소드를 통해서도 해당 문제에 대한 접근이 쉬웠다.

   ```javascript
   # arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])
     
   function solution(seoul) {
     let answer = '';
     seoul.forEach((item, index) => {
       if (item == 'Kim') {
         answer = `김서방은 ${index}에 있다`;   
       }
     });
     return answer;
   }
   ```

## 참고

* https://programmers.co.kr/learn/courses/30/lessons/12919
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

---

