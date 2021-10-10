---
title: '[LeetCode] Move Zeroes'
date: 2021-10-10 23:31:09
category: 'LeetCode'
draft: false
---

## 문제 설명

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note **that you must do this in-place without making a copy of the array.**

## 입출력 예

▣ 입력설명

nums: Number Array, target: Number

▣ 출력설명

**Example 1:**

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

**Example 2:**

Input: nums = [0]
Output: [0]

**Constraints:**

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1

## 나의 풀이

```javascript
const moveZeroes = nums => {
  let notZeros = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[notZeros] = nums[i]
      notZeros++
    }
  }

  for (let i = notZeros; i < nums.length; i++) {
    nums[i] = 0
  }
  return nums
}
```

## 다른 사람의 풀이

```javascript
const moveZeroes = nums => {
  nums.sort((a, b) => (a === 0) - (b === 0))
}
```

## 알게 된 것

1. 비교적 간단할 줄 알았지만 새로운 배열을 생성하지 말고 기존 배열을 통해 문제 풀이를 하란 요구 사항으로 다소 시간이 걸린 문제였다

2. 전달 받은 배열 값중 0이 아닌 요소들을 조건문을 통해 걸러낸 뒤 변수 notZeroes를 통해 인덱스 0부터 먼저 차례대로 담았고, 배열 값이 0인 요소를 그 이 후에 순서대로 담은 후 반환하여 문제 해결을 하였다.

3. 다른 사람의 풀이 중 sort를 통해 간단하게 문제 해결한 점이 인상적이었다.
