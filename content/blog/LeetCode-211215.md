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

1. 전달 받는 문자열 배열에서 가장 긴 공통 접두사를 찾는 함수를 작성하는 문제로, 전달 받은 문자열 중 0번째 문자열을 기준으로 반복문을 통해 문자열의 문자 인덱스를 하나하나 비교하여 공통된 문자열이 없을 때까지 반복해서 slice를 통해서 반복되는 문자열을, 모두 같을 경우 전달 반는 문자열 배열의 0번째 문자열을 마지막으로 전달 받은 배열이 없을 경우 빈 문자열을 출력하여 문제를 해결하였다.

2. 기존 문자열을 접두사로 선택하여 시작한 다음 공통 된 접두사가 없는 문자열이 확인 될때마다 문자열을 줄여가며 마지막에 공통 접두사가 남게 되도록 작성한 코드가 인상적이었다.
