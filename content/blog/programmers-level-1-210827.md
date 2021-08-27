---
title: '[프로그래머스]Level-1. 직사각형 별찍기'

date: 2021-08-27 02:04:11

category: 'programmers'

draft: false
---



## 문제 설명

이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.



## 제한 사항

* n과 m은 각각 1000 이하인 자연수입니다.

  

## 입출력 예

입력

```js
5 3
```

| 출력   |
| :----- |
| \***** |
| \***** |
| \***** |



## 나의 풀이

```javascript
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    for (let i = 0; i < b; i++) {
        console.log('*'.repeat(a))
    }
});
```



## 다른 사람 풀이

```js
# 다른 사람 풀이 1
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = '*'.repeat(a)
    for(let i =0; i < b; i++){
        console.log(row)
    }

});

# 다른 사람 풀이 2
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const star = `${'*'.repeat(a)}\n`;

    console.log(star.repeat(b));
});

# 다른 사람 풀이 3
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
let result = "";

for (let i = 0; i < b; i++) {
    for (let j = 0; j < a; j++) {
        result += '*';
    }
    result += '\n'
}
console.log(result);
});
```



## 알게 된 것

1. 이전에 리액트 튜토리얼 사이트에서 틱택토 게임 만들기 소스코드에서 fill()과 repeat() 메서드를 알게 되었고, 그 중 repeat 메서드를 통해 문제를 해결하였다. 
2. 다른 사람 풀이를 보니 간단한 문제다 보니 다들 비슷비슷하게 풀이한 거 같다.
3. javascript에서 표준입출력을 하기 위해 node.js를 통한 커맨드라인에서 입출력처리 방식을 알게 되었다.


## 참고

* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
---
  