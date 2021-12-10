---
title: '[LeetCode] Contains Duplicate'
date: 2021-10-26 13:33:18
category: 'LeetCode'
draft: false
---

## 문제 설명

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

## 입출력 예

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109

## 나의 풀이

```javascript
const containsDuplicate = function(nums) {
  let DuplicateCheckBox = new Object()

  for (let num of nums) {
    if (!DuplicateCheckBox[num]) {
      DuplicateCheckBox[num] = 'included!!'
    } else {
      return true
    }
  }
  return false
}
```

## 다른 사람의 풀이 1

```javascript
const containsDuplicate = function(nums) {
  if (nums.length < 1) {
    return false
  }

  for (let i = 0; i < nums.length - 1; i++) {
    let j = i + 1
    while (j < nums.length) {
      if (nums[i] === nums[j]) {
        return true
      }
      j++
    }
  }
  return false
}
```

## 다른 사람의 풀이 2

```javascript
const containsDuplicate3 = nums => {
  for (const num of nums) {
    if (nums.indexOf(num) !== nums.lastIndexOf(num)) return true
  }

  return false
}
```

## 다른 사람의 풀이 3

```javascript
const containsDuplicate2 = nums => {
  const map = new Map()

  for (const num of nums) {
    if (!map.has(num)) map.set(num, 1)
    else return true
  }

  return false
}
```

## 알게 된 것

1. 왠지 문제를 이중 for문을 통해 solving을 할 것같아 객체를 생성하여 진행해 보았다.

2. 빈 객체에 전달받은 인자의 배열 값을 key로, value에 태그처럼 일정한 값을 담아 저장한 뒤 반복을 통해 해당 객체의 key를 탐색한 뒤 중복여부 파악 후 문제를 해결하였다.

3. 시간 복잡도(Big O notation)를 고려한 다른사람의 풀이를 따라해보면서 익혀야겠다.
