---
title: '[LeetCode] Best Time to Buy and Sell Stock'
date: 2021-10-25 10:28:11
category: 'LeetCode'
draft: false
---

## 문제 설명

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

## 입출력 예

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104

## 나의 풀이

```javascript
const maxProfit = function(prices) {
  let minValue = prices[0]
  let result = 0

  prices.forEach(price => {
    if (price < minValue) {
      minValue = price
    }

    result = result > price - minValue ? result : price - minValue
  })

  return result
}
```

## 알게 된 것

1. 인자로 전달받는 prices 배열값의 요소들을 forEach를 통해 개별요소 값을 변수 price로 전달 받아 최소값을 변수 minValue에 업데이트를 한 뒤, 삼항연산자를 통해 변수 result 값이 price - minValue 값보다 클 경우 result를, 그렇지 않을 경우 result 값에 price - minValue 값을 대입하여 문제를 해결하였다.

2. 부끄럽지만 PS까지 50분 넘게 소요되었다.

3. 최적화는 아직 생각해볼 단계가 아닌 만큼 최대한 머릿속에 있는 내용을 코드로 옮길 수 있도록 반복적인 연습을 해야겠다.
