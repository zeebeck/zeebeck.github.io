---
title: '[프로그래머스]Level-1. 완주하지 못한 선수'
date: 2021-09-30 09:25:30
category: 'programmers'
draft: false
---

## 문제 설명

수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

## 제한 사항

마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다.

## 입출력 예

| participant                                       | completion                               | return   |
| ------------------------------------------------- | ---------------------------------------- | -------- |
| ["leo", "kiki", "eden"]                           | ["eden", "kiki"]                         | "leo"    |
| ["marina", "josipa", "nikola", "vinko", "filipa"] | ["josipa", "filipa", "marina", "nikola"] | "vinko"  |
| ["mislav", "stanko", "mislav", "ana"]             | ["stanko", "ana", "mislav"]              | "mislav" |

## 나의 풀이

```javascript
function solution(participant, completion) {
  participant.sort()
  completion.sort()
  let i = 0
  while (true) {
    if (!(participant[i] === completion[i])) {
      return participant[i]
    } else i++
  }
}
```

## 알게 된 것

1. sort() 메서드를 통해 participant, completion 배열 변수 값을 오름 차순으로 정리한 뒤 participant과 completion의 요소 값이 다를 경우 바로 해당 값을 리턴하여 문제 풀이를 하였다.

2. 알고리즘 문제 풀이에서도 변수명에 신경을 써야하는지에 대한 고민을 하였지만 풀이에만 촛점을 맞춰 간략하게 작성 후 진행하였다. :)

3. 가장 많은 **좋아요**를 받은 풀이인데, **솔직히 무슨 내용인지 모르겠다**, 가독성이 좋은 거 같지 않아 크게 와닿지 않았고, 머릿속에 있는 내용을 자연스럽게 코드로 구현하는 연습을 계속 할 것이다.

   ```javascript
    # 다른 사람 풀이
     var solution=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1))
      }
   ```

---
