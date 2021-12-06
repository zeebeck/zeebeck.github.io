---
title: '[LeetCode] Palindrome Number'
date: 2021-12-05 17:23:09
category: 'LeetCode'
draft: false
---

## 문제 설명

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

## 입출력 예

Example 1:

Input: x = 121
Output: true
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Example 4:

Input: x = -101
Output: false

Constraints:
-231 <= x <= 231 - 1

Follow up: Could you solve it without converting the integer to a string?

## 나의 풀이

```javascript
const isPalindrome = function(x) {
  const reverseX = String(x)
    .split('')
    .reverse()
    .join('')
  if (String(x) === reverseX) return true
  return false
}
```

## 다른 사람의 풀이 1

```javascript
var isPalindrome = function(x) {
  const MinNum = -2147483648 //-2^31 값
  const MaxNum = 2147483647 //2^31-1 값

  if (x < MinNum || x > MaxNum) {
    return false
  }

  const reverse = x
    .toString()
    .split('')
    .reverse()
    .join('')
  return x === Number(reverse)
}
```

## 다른 사람의 풀이 2

```javascript
var isPalindrome = function(x) {
  return (
    x ==
    x
      .toString()
      .split('')
      .reverse()
      .join('')
  )
}
```

## 다른 사람의 풀이 3

```javascript
var isPalindrome = function(x) {
  if (x < 0) {
    return false
  }

  if (x < 10) {
    return true
  }

  if (x % 10 === 0 && x !== 0) {
    return false
  }

  const str = String(x)
  let i = 0,
    j = str.length - 1

  while (i < j) {
    if (str[i] !== str[j]) {
      return false
    }

    i++
    j--
  }

  return true
}
```

## 알게 된 것

1. 매개 변수로 전달되는 x를 뒤집에서 같으면 true를 틀리면 false를 출력하는 문제였고, 변수 reverseX 생성 후 x의 타입이 숫자형이었기 때문에 문자형으로 변경 후 split()을 통해 배열 값으로 각 요소를 쪼개고 reverse()를 통해 뒤집고 join()을 통해 문자열로 합쳐서 x와 비교 후 문제를 해결하였다.

```

```
