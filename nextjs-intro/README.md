# Next.js 익히기

유튜브 노마드 코더 Next.js 무료강의를 보며 Next.js를 학습합니다

https://nomadcoders.co/nextjs-fundamentals/lobby

## FRAMEWORK OVERVIEW

### 라이브러리와 프레임워크

library는 개발자로서 자신이 사용하는 것!

framework는 자신의 코드를 적절한 위치에 적으면 알아서 실행시켜줌

즉 next.js에서 특정 규칙을 따라야 코드를 실행시킬 수 있다.(추상화)

### 페이지

넥스트에서 페이지를 추가할때는 그냥 페이지 폴더안에 파일을 넣기만 하면된다.

-> 파일의 이름이 url로 들어가며, 그 안에있는 컴포넌트의 이름은 중요하지 않다. 또한 기본 내보내기로 해야함.(export default)

jsx 파일명을 붙이지 않아도 jsx를 사용할 수 있다.

### Static Pre Rendering

react -> csr

> html 요소에서 보이는 것들이 `<div id="root"></div>` 밖에 없음

처음 웹사이트 로드할때, 빈화면이 뜸

next.js -> ssr

HTML안에 있는 요소들은 웹사이트를 로드할때 미리 보여줌(미리 렌더링)

hydration -> 미리 정적인 사이트가 있고 이후 React.js 스크립트가 다 전송되었을 때 정적인 사이트에 동적인 react가 추가되는 것을 말함.

> 만약 자바스크립트가 비활성화 되어 있다면 버튼 클릭과 같은 이벤트는 동작하지 않아도 정적인 HTML은 보여줄 수 있음

### 라우팅

라우팅할때 a태그대신 Link 사용(next/link)

> a태그를 사용하게 되면 페이지가 새로고침 됨!

내부의 useRouter를 사용하면 pathname과 같은 라우터 정보들을 알 수 있음

### CSS modules

next.js에서 css modules 패턴을 사용하여 스타일링할 수 있음

css module로 여러개의 스타일을 한번에 주는 방법

`className = ${styles.link} ${router.pathname === '/' ? styles.active : ''}`

### Styled JSX

```
<style jsx>{`
    a {
        text-decoration: none;
    }

    .active {
        color: tomato;
    }
`}</style>
```

컴포넌트 안에 위와 같이 작성하면 스타일을 적용시킬 수 있다. -> style jsx라는 문법!

이 style jsx는 **컴포넌트 내로 한정**된다.

### Custom App

글로벌 스타일을 추가하기 위해 각 파일마다 style jsx를 중복해서 넣어줄 수 있지만 별로 추천 X

또한 next.js에서 고려해야하는 부분이 어느 페이지가 보여지느냐에 따라서 현재 적용된 스타일이 적용될 수 도 있고 그렇지 않을 수도 있다는 점을 고려해야함! 즉 렌더링 되고 있는 컴포넌트의 스타일이 적용됨

-> 컴포넌트 안에있는 global style jsx도 마찬가지..!

따라서 전역적으로 스타일을 입히고 싶다면, 모든 페이지의 청사진이 되는 App컴포넌트를 만들어 활용할 수 있음

-> pages 폴더에 \_app.js로 만듦

이 안에 있는 컴포넌트들은 모든 페이지에서 공통적으로 렌더링이 됨

```js
import NavBar from '../components/NavBar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          text-decoration: none;
        }

        .active {
          color: tomato;
        }
      `}</style>
    </>
  );
}
```

> 이와 같은 코드에선 NavBar 컴포넌트가 모든 페이지에서 렌더링 되고, 스타일이 전역적으로 들어간 것임

전역 스타일과 같은 경우 무조건 \_app.js안의 App 컴포넌트가 있는 곳에 임포트가 되어야함(나머지는 불가!)

## PRACTICE PROJECT
