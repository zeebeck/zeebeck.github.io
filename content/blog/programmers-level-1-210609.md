---
title: '[프로그래머스]Level-1. 핸드폰 번호 가리기'
date: 2021-06-09 11:02:30
category: 'programmers'
draft: false
---
## 문제 설명

프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 `*`으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

## 제한 조건

s는 길이 4 이상,  20이하인 문자열입니다.

## 입출력 예

| phone_number  | return        |
| ------------- | ------------- |
| "01033334444" | "*******4444" |
| "027778888"   | "*****8888"   |

## 나의 풀이

```javascript
function solution(phone_number) {
    let answer = '';
    for (let i = 0; i < phone_number.length - 4; i++) {
        answer += '*';
    }
    return answer + phone_number.slice(-4);
}
```

## 알게 된 것

1. 인자 값으로 전달받는 문자열 값의 길이는 매번 다르지만 뒷자리 4자리는 불변하므로 최초의 인자값의 길이를 통해 마지막 4자리의 값을 slice 메소드를 통해 추출한 뒤 나머지 원본 길이를 이전에 추출한 4자리 값을 제외한 나머지 길이를 for문을 통해 전부 '*'을 넣어 준 뒤 해당 문자열들을 합쳐서 반환하여 문제를 해결하였다.

2. repeat란 문자열 메서드를 통한 풀이가 있었는데, 훨씬 더 깔끔하고 가독성 있게 동일 작업을 수행하는 걸 확인하였다. 

    **`repeat()`** 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환한다.

   ```javascript
   function hide_numbers(s){
     let result = "*".repeat(s.length - 4) + s.slice(-4);
     return result;
   }
   ```

3. fill이라는 배열 메서드를 통한 ES6이상 스타일의 풀이도 있어 눈여겨 보고 해당 메서드를 공부하였다. 

   ```javascript
   const solution = n => [...n].fill("*",0,n.length-4).join("");
   ```

   

## 참고

* https://programmers.co.kr/learn/courses/30/lessons/12948
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

---

