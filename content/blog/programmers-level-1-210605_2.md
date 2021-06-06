---
title: '[프로그래머스]Level-1. 문자열 다루기 기본'
date: 2021-06-05 17:35:30
category: 'programmers'
draft: false
---
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

## 제한 사항

* `s`는 길이 1 이상, 길이 8 이하인 문자열입니다.

## 입출력 예

| s      | return |
| ------ | ------ |
| "a234" | false  |
| "1234" | true   |

## 나의 풀이

```javascript
function solution(s) {
    var answer = true;
    if ((s.length == 4 || s.length == 6) && (+s == parseInt(s))) {
        answer = true;
        } else {
        answer = false;
    }
    return answer;
}
```

## 알게 된 것

1. 변수 앞에 +, Number()생성자를 사용하면 알아서 숫자형으로  변환될 것들만 자동으로 변경될 거라 생각했지만 typeof 연산자를 통해 확인 시 묻지도 따지지도 않고 모두 숫자형으로 변환 되었다. 😂

   ```javascript
   const a = "a123";
   const b = +a
   console.log(typeof b); // number
   const c = Number(a); 
   console.log(typeof c); // number
   ```

2. 그렇기에 매개변수 s에 있는 불순물(소수 or 문자열)을 parseInt() 함수를 통한 정수와 값을 대조하며 비교 풀이 하였다.

## 참고

* https://programmers.co.kr/learn/courses/30/lessons/12918
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/typeof
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number

---

