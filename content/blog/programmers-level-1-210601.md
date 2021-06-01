---
title: '[프로그래머스]Level-1. 하샤드 수'
date: 2021-06-01 12:05:30
category: 'programmers'
draft: false
---

## 문제 설명

양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고,  18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수,  solution을 완성해주세요.

## 제한 사항

- `x`는 1 이상, 10000 이하인 정수입니다.

## 입출력 예

| arr  | return |
| ---- | :----: |
| 10   |  true  |
| 12   |  true  |
| 11   | false  |
| 13   | false  |

## 입출력 예 설명

**입출력 예 #1**
 10의 모든 자릿수의 합은 1입니다. 10은 1로 나누어 떨어지므로 10은 하샤드 수입니다.

**입출력 예 #2**
 12의 모든 자릿수의 합은 3입니다. 12는 3으로 나누어 떨어지므로 12는 하샤드 수입니다.

**입출력 예 #3**
 11의 모든 자릿수의 합은 2입니다. 11은 2로 나누어 떨어지지 않으므로 11는 하샤드 수가 아닙니다.

**입출력 예 #4**
 13의 모든 자릿수의 합은 4입니다. 13은 4로 나누어 떨어지지 않으므로 13은 하샤드 수가 아닙니다.

## 나의 풀이

1. 문제 설명에 있는 내용을 바탕으로  1 이상의 한 자리 수는 모두 하샤드 수라는 것을 추론하였다.
2. 매개변수를 통해 전달 받은 수의 자릿수를 확인하고 어떻게 더할지에 대해서 많은 고민을 하였으며, 문자열로 변환 후 해당 인덱싱을 통해 더하는 식으로 진행하였다.

```javascript
function solution(x) {
    let answer = true;
    const convertString = String(x);
    let result = 0;
    for (let i = 0; i < convertString.length; i++) {
        result += Number(convertString[i]);
    }
    answer = (x % result == 0) ? true : false;
    return answer;
}
```

## 알게 된 것

1. 이 문제를 통해 **하샤드 수**라는 걸 처음 알게 되었다.  :)

2. 객체 자체를 재할당하는 경우가 아니라면, 왠만해선 let 대신에 const를 써야하는 점을 계속 상기시켰다.

3. 다른 사람들의 문제 풀이를 봤을 때 recursive와 map, reduce 등과 같은 고차 함수를 통한 문제 풀이도 있었다. 해당 함수에 대해서 공부하긴 했지만, 어떻게 적용을 해야할지 깊게 생각해 보지 않았는데, 앞으론 많이 활용을 해봐야 겠다.

   ```javascript
   # 다른 사람 풀이 (reduce 활용)
   function solution(x){
     return !(x % (x + "").split("").reduce((a, b) => +b + +a ));
   }

   # 다른 사람 풀이 (map 활용)
   function solution(x) {
       var a = 0;
       var s = (x + "").split("").map(Number);
   
       for(let i of s){
           a += i;
       }
   
       return x % a == 0 ? true : false;
   }
   
   # 다른 사람 풀이 (recursive 활용)
   function solution(x, i = 0, sum = 0) {
       return String(x).length== i ? x % sum == 0 : solution(x, i + 1, sum + String(x)[i] * 1);
   }
   
   
   ```

   

## 참고
* https://programmers.co.kr/learn/courses/30/lessons/12947
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map

  

---

