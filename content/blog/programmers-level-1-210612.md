---
title: '[프로그래머스]Level-1. 자연수 뒤집어 배열로 만들기'
date: 2021-06-12 09:38:12
category: 'programmers'
draft: false
---


## 문제 설명

자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

## 제한 조건

n은 10,000,000,000이하인 자연수입니다.

## 입출력 예

| n     | return      |
| ----- | ----------- |
| 12345 | [5,4,3,2,1] |

## 나의 풀이

```javascript
function solution(n) {
    let answer = [];
    answer = String(n).split('').reverse().map(Number);
    return answer;
}
```

## 알게 된 것

1. 변경해야할 자료형이 숫자열, 문자열, 배열에 따라서 사용가능한 Built-in 메서드가 달라 매번 풀이 시 헷갈린다. 외우기보단 시행착오를 줄이고 익숙해지기 위해 많이 사용해봐야겠다.

2. 문자형 배열을 숫자형 배열로 치환하는 방법을 단순하게 + "" 식이 아닌 뭔가 다른 방법이 있을 까란 생각에 검색해봤고, 스택오버플로어에 .map(Number)를 통해 간단하게 치환하는 방법이 답변에 있어 사용해보았다. 

   ```javascript
   # 다른 사람의 풀이 1
   function solution(n) {
     let arr = [];
     do {
       arr.push(n % 10);
       n = Math.floor(n / 10);
     } while (n > 0);
     
     return arr;
   }
   
   # 다른 사람의 풀이 2
   function solution(n) {
   	return (n + "").split("").reverse().map(v => parseInt(v));
   }
   
   # 다른 사람의 풀이 3
   function solution(n) {
       var answer = [];
       n = n + "";
       for (let i = n.length - 1; i >= 0; i--) {
           answer.push(Number(n[i]));
       }
       return answer;
   }
   ```

## 참고

* https://programmers.co.kr/learn/courses/30/lessons/12932
* https://stackoverflow.com/questions/15677869/how-to-convert-a-string-of-numbers-to-an-array-of-numbers
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

---

