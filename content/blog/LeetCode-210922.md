---
title: '[LeetCode] Two Sum'
date: 2021-09-22 22:41:27
category: 'LeetCode'
draft: false
---

## 문제 설명

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

## 입출력 예

▣ 입력설명

nums: Number Array, target: Number

▣ 출력설명

**Example 1:**
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

**Example 2:**
Input: nums = [3,2,4], target = 6
Output: [1,2]

**Example 3:**
Input: nums = [3,3], target = 6
Output: [0,1]

**Constraints:**

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

## 나의 풀이

```javascript
var twoSum = function(arr, target) {
  var result = []

  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push(i, j)
      }
    }
  }
  return result
}
```

## 다른 사람의 풀이

```javascript
# 1. Hash Table 사용
var twoSum = function(nums, target) {
  const container = {};

  for (let i = 0; i < nums.length / 2; i++) {
    const complement = target - nums[i];

    if (complement in container) return [container[complement], i];

    container[nums[i]] = i;
  }
}

# 2. Map 사용
var twoSum = function(nums, target) {
  const container = new Map;

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (container.has(complement)) return [container.get(complement), i];

    container.set(nums[i], i);
  }
}
```

## 알게 된 것

1. 풀긴 풀었다만, 아래와 같은 처참한 효율의 결과를 받았다. <br />
   Runtime: 108 ms, faster than 52.22% of JavaScript online submissions for Two Sum.
   Memory Usage: 39.4 MB, less than 78.07% of JavaScript online submissions for Two Sum.

2. Hash Table과 Map을 사용한 다른 사람의 코드 중 Map 같은 경우는 무려 상위 2% 수준의 효율성이 나와 자료구조 학습의 중요성을 제대로 알게 되었다. 그렇다고 무턱대고 효율성까지 고려해서 풀기보단 우선은 내 수준에 맞게, 생각한 것들을 정확하게 코드로 표현할 수 있도록 많은 연습을 할 생각이다.

## 참고

<https://www.freecodecamp.org/news/javascript-hash-table-associative-array-hashing-in-js/>
