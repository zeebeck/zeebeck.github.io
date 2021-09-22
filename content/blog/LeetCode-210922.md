---
title: '[LeetCode] 전달받은 값의 뒤집은 모양이 num과 똑같은지...'
date: 2021-07-22 11:41:27
category: 'LeetCode'
draft: false
---

## 문제 설명

숫자인 num을 인자로 넘겨주면, 뒤집은 모양이 num과 똑같은지 여부를 반환해주세요.

## 입출력 예

▣ 입력설명

num: 숫자

▣ 출력설명
return: true or false (뒤집은 모양이 num와 똑같은지 여부)

| Num  | Result |
| :--: | :----: |
| 123  | false  |
| 1221 |  true  |
| -121 | false  |
|  10  | False  |

## 나의 풀이

```javascript
const sameReverse = num => {
  let convertString = '' + num
  let result = ''
  for (let i of convertString) result = i + result
  return convertString === result ? true : false
}

sameReverse(1221) // true
```

## 알게 된 것

1. 배열에서만 사용할 수 있는 reverse() 메서드를 사용하지 않고 배열이 아닌 문자열로 형 변환하여 진행하였고, ES2015에 새롭게 나온 for...of를 통해 문자열을 reverse() 메서드를 사용한 것처럼 뒤집었다.
2. 조건문은 삼항연산자를 통해 반환 값을 담을 변수를 새롭게 생성하지 않도록 삼항연산자에서 바로 return 하였다.

참고

---

<https://developer.mozilla.org/ko/docs/orphaned/Web/JavaScript/Reference/Operators/Conditional_Operator>

<https://developer.mozilla.org/ko/docs/orphaned/Web/JavaScript/Reference/Statements/for...of>
