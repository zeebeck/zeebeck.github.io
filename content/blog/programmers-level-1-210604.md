---
title: '[프로그래머스]Level-1.  수박수박수박수박수박수?'
date: 2021-06-04 11:15:30
category: 'programmers'
draft: false
---

## 문제 설명

**길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.**

## 제한 사항

* n은 길이 10,000이하인 자연수입니다.

## 입출력 예

| n    | return     |
| ---- | ---------- |
| 3    | "수박수"   |
| 4    | "수박수박" |

## 나의 풀이

1. 함수를 통해 전달받은 argument의 값을 for문을 통해 실행하고 내부의 if문의 분기를 통해 
2. 

```javascript
function solution(n) {
    let answer = '';
    
    for (let i = 0; i < n; i++) {
        if (i % 2 == 0) {
            answer += '수';
        } else {
            answer += '박';
        }
    }
    return answer;
}
```

## 알게 된 것

* 다른 사람 풀이를 보고 아래의 내용을 알게 되었고 학습하였다.
  * repeat 메소드에 대해서 공부하였다.
  * Slice와 Splice 메소드를 알게 되었고, 파괴적-비파과적 메소드에 대한 내용에 대해 공부 한 뒤 Velog를 통해 정리 하였다.

```javascript
# 다른 사람 풀이 1
function solution(n) {
    return '수박'.repeat(n / 2) + (n % 2 == 1 ? '수' : '');
}

# 다른 사람 풀이 2
function solution(n) {
    return "수박".repeat(n).slice(0, n);
}
```





## 참고

* https://programmers.co.kr/learn/courses/30/lessons/12922
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

---

