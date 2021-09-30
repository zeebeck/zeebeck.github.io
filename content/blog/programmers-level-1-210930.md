---
title: '[프로그래머스]Level-1. 가운데 글자 가져오기'
date: 2021-05-30 17:05:30
category: 'programmers'
draft: false
---

## 문제 설명

단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.



## 제한 사항

s는 길이가 1 이상, 100이하인 스트링입니다.



## 입출력 예

| s       | return |
| ------- | ------ |
| "abcde" | "c"    |
| "qwer"  | "we"   |



## 나의 풀이

```javascript
function solution(s) {
    let answer = '';
    if (s.length % 2 == 0) {
        const a = s.length / 2;
        const b = a - 1;
        answer += s[b];
        answer += s[a];  
    } else {
        answer += s[parseInt(s.length / 2)];
    }
    return answer;
}
```



## 알게 된 것

1. 전달받은 매개변수의 총 길이가 홀수일 경우 발생되는 소숫점 처리에 대해서 고민을 하였고 parseInt() 함수를 통해 해당 문제를 해결하였다.

2. 알고리즘 문제 풀이에서도 변수명에 신경을 써야하는지에 대한 고민을 하였지만 풀이에만 촛점을 맞춰 간략하게 작성 후 진행하였다.  :)

3. 가장 많은 **좋아요**를 받은 풀이인데, **어떻게 하면 저렇게 처음부터 한줄로 코딩을 할 수 있을까??**란 충격을 받았다.

   ```javascript
    # 다른 사람 풀이
    
      function solution(s) {
      		return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
      }
   ```

4. 위 풀이에서 사용한 substr() 메서드는 난 알지 못했었고, **`substr()`** 메서드는 문자열에서 특정 위치에서 시작하여 특정 문자 수 만큼의 문자들을 반환하는데, MDN을 통해 확인 시 현재 ECMA-262 표준을 통해 추후 명세서에서 제거 될 예정이라고 되어있다. 그렇기에 위와 같은 풀이를 할 시에는, 아래와 같이 **`substring()`** 메서드를 이용하면 된다.
    ```javascript
       function solution(s) {
   		     return s.substring(Math.ceil(s.length / 2) - 1, Math.floor(s.length / 2) + 1);
      }
   ```


## 참고

* https://programmers.co.kr/learn/courses/30/lessons/12903
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substr
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substring

---

