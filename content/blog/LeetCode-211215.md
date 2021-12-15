---
title: '[LeetCode] Longest Common Prefix'
date: 2021-12-15 22:41:17
category: 'LeetCode'
draft: false
---

## 문제 설명

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

## 입출력 예

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.

## 나의 풀이

```javascript
const longestCommonPrefix = function(strs) {
  if (!strs.length) return ''

  for (let i = 0; i < strs[0].length; i++) {
    for (let str of strs) {
      if (str[i] !== strs[0][i]) {
        return str.slice(0, i)
      }
    }
  }
  return strs[0]
}
```

## 다른 사람 풀이

```javascript
const longestCommonPrefix = function(strs) {
  let prefix = strs.reduce((acc, str) => (str.length < acc.length ? str : acc))

  for (let str of strs) {
    while (str.slice(0, prefix.length) != prefix) {
      prefix = prefix.slice(0, -1)
    }
  }
  return prefix
}
```

## 알게 된 것

1.

2. 조건문은 삼항연산자를 통해 반환 값을 담을 변수를 새롭게 생성하지 않도록 삼항연산자에서 바로 return 하였다.
