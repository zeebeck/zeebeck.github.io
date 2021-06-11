---
title: '[프로그래머스]Level-1. x만큼 간격이 있는 n개의 숫자'
date: 2021-06-11 10:33:02
category: 'programmers'
draft: false
---


## 문제 설명

함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

## 제한 조건

x는 -10000000 이상, 10000000 이하인 정수입니다.

n은 1000 이하인 자연수입니다.

## 입출력 예

| x    | n    | answer       |
| ---- | ---- | ------------ |
| 2    | 5    | [2,4,6,8,10] |
| 4    | 3    | [4,8,12]     |
| -4   | 2    | [-4, -8]     |

## 나의 풀이

```javascript
function solution(x, n) {
    let answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push(x * i);
    }
    return answer;
}
```

## 알게 된 것

1. 프로그래밍 학습 초반에는 흥미를 잃거나 쉽게 지쳐 의욕을 잃을 수 있기 때문에 앨리스의 토끼굴 or 야크 털깎기에 빠지지 않도록 기술부채가 쌓이는 것을 자연스럽게 생각하고 지향해야한다는 글을 본적이 있다. 어느 정도는 맞는 말인 거 같다.  

2. 다른 사람의 풀이를 통해서 항상 느끼는 거지만 어떻게 저런 풀이를 할 수 있는 건지 매번 놀라고 있다. 한편으론 놀랍기도 하지만 부럽기도 하다. ES6 이상의 문법에 익숙해지도록 많이 사용해봐야겠다.

   ```javascript
   # 다른 사람의 풀이 1
   function solution(x, n) {
       return Array(n).fill(x).map((v, i) => (i + 1) * v)
   }
   
   # 다른 사람의 풀이 2
   function solution(x, n) {
       return [...Array(n).keys()].map(v => (v + 1) * x);
   }
   ```

## 참고

* https://programmers.co.kr/learn/courses/30/lessons/12954
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/keys

---

