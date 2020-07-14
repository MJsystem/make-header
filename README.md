1. box model로 웹사이트 바라보아야 함. 보자마자, 박스 몇 개로 어떻게 구성되어 있는지가 머리 속에 떠올라야 한다.

2. 레이아웃을 다룰 때는 무조건 flexbox로 해결하려고 생각하자. 다 되니까. 무조건 flex로 display하고 그 다음 설정을 생각하는 걸로.

3. 그냥 div 태그가 아닌 semantic 한, 의미가 있는 태그인 header를 사용한 것은 좋았으나, 이건 nav bar 라서 nav를 사용하는 게 좀 더 맞다.

4. font awesome 사이트에서 이쁜 아이콘들 무료로 받을 수 있다!

5. 일단 박스 모두에게 div 태그 주면서 레이아웃을 잡아가자. 리스트니까 div 에서 ul로 바꾸는 구만.

6. open with live server 활용하자.

7. class 이름 줄 때도, 그냥 logo 하지 말고 (navbar\_\_logo) <= (알지? / 이거 없는 거임 알아서 붙네 .. )이렇게. 의미를 담아서.

8. Emmet 적극 활용. li 안에 a 태그 5개 만들고 싶다면? 괄호를 활용하자! (li>a)\*5

\*\*\*9. styling 할 때의 체계!!!
가장 큰 박스부터 아래로 내려가면서 스타일링 한다. (cascading의 의미가 와닿는다)
그래야 universal 한 거 에서 specific 한 걸로 가는 거지.

\*\*\*10. navbar\_\_menu li {padding: 8px 12px}
나는 메뉴 아이템들 끼리 간격을 위해 margin을 줬었는데 padding을 주셨다. 무슨 차이일까?

<- 이거 지금 생각해보니까, 저번에 margin으로 메뉴 사이 주려고 했다가 흰 공간 보여서 당황했던 적 있네. 애초에 padding으로 하면 그런 문제가 안 생기지.>

11. font는 구글 폰트가 국룰

12. hover 옵션도 줘보자. hover 옵션도 잘 꾸며서 이쁘게. (border-radius 등)

13. 오 미틴.. 나처럼 안 하고, flex 옵션 해가지고 쿼리 옵션 만들어낼 수 있다. 도전해보자

14. 기본으로 주어진 padding 때문에 진짜 가운데가 오지 않을 수 있으니 요소 검사 잘 하면서 초기화해주자. (아니면 css reset) 해도 되고.

15. 세 줄 메뉴 (햄버거 모양) 이거 button 태그로 구현하자. 그게 더 맞네!

16. 자바스크립트 html에 연동할 때, script src="" 이렇게만 하면 head의 모든 파일이 불러와질 때까지 페이지가 안 뜸.

그걸 방지하기 위해
-> script src="" defer

17. css에서의 변수 이용법 (variable은 프로그래밍에서 정말 주요 컨셉임을 다시 느낌!)

:root {
--text-color: #f0f4f5;
--background-color: #263343;
--accent-color: #...;
}

이렇게 css에 쓰고 사용할 때는,

color: var(--text-color);

이런 식으로! 이런 식의 장점은, 색을 바꾸고 싶을 때 한번의 다 바꿀 수 있고, 반복이 중지 되니까 더 좋지.
