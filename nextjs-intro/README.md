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

### 패턴

프로젝트에서 사용하는 패턴으로 Layout 패턴이 있다.

> 즉 공통되는 부분들을 Layout 컴포넌트로 만들어 두고, children을 인수로 받아서 사용한다.

이 Layout으로 App컴포넌트를 감싸고 그 안에 컴포넌트를 렌더링하면 공통되는 UI를 보여줄 수 있다.

또한 SEO태그로 next의 Head를 사용할 수 있는데, 이를 가져와서 html의 meta부분을 넣어줄 수 있다.

-> 이 또한 SEO라는 컴포넌트를 만들어서 사용하면 재사용성을 높일 수 있다.

### 데이터 가져오기

next에서 public에 있는 데이터에 접근하려면 경로로 `/vercel.svg` 와 같이 붙여주면 된다.

### 리다이렉트와 리라이트

redirect -> 어느 url로 접속햇을 때 다른 url로 보내줌(url이 변함)

rewrites -> 어느 url로 접속했을 때 redirect를 시키긴 하지만 url이 변하지 않는다.

(url masking을 next.js config에서 할 수 있음)

```js
  async redirects() {
    return [
      {
        source: '/old-blog/:path*',
        destination: '/new-sexy-blog/:path*',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
```

> 다음과 같이 사용하며 API_KEY의 경우 .env 파일안에 작성해두고 꺼내서 사용할 수 있음

### 서버사이드 렌더링

next의 getServerSideProps라는 함수를 통해서 데이터를 다 받아온 이후에 화면에 보여줄지, 아니면 loading 상태를 보여줄지 결정할 수 있음

즉 async getServerSideProps를 통해 데이터가 받아온 이후 렌더링을 해주게 되면 로딩이 필요 없어지게 됨.

-> 이렇게 된다면 데이터를 받기 전까지 유저는 아무것도 볼 수가 없음

여기서 loading을 보여줄지 안보여줄지는 개발자의 마음대로 선택할 수 있음

그렇다면 언제 서버사이드 렌더링을 해야할까? (getServerSideProps)

-> 데이터를 Pre-render할 필요가 있는 경우

그렇지 않은 경우는 client side에서 데이터를 가져오는 것을 고려하자.

### 동적 라우팅

pages안에 `movies/[id].js` 파일을 만들게 되면 앱의 /movies/1234 와 같이 접속을 하면 그 페이지로 이동을 할 수 있다.

-> 편리하게 동적 라우팅을 할 수 있음

### 무비 디테일

무비 디테일로 가는 라우팅을 Link로 감싸서 할 수도 있고, div 에 onClick함수를 설정하여 router.push를 사용하여 navigating 하는 방법이 있음.

또한 그 안에 pathname, query 등을 실어 보낼 수가 있으며, as path속성을 통해 원하는 url만 보이게 할 수 있음

### Catch All

동적 라우팅 말고 뒤에 어떠한 url이 와도 잡아낼 수 있는 방법

[...params].js라는 파일을 만들면 movies/fadsf/asfsdfds 와 같이 아무런 Url이 오더라도 값을 다 잡아낼 수 있다.

```js
import { useRouter } from 'next/router';

export default function Detail() {
  const router = useRouter();
  const [title, id] = router.query.params;
  return (
    <div>
      <h4>{title}</h4>
    </div>
  );
}
```

> 하지만 단순히 위와 같이 작성하게되면 이는 클라이언트 측에서 url로 접근햇을때, 에러발생! 왜냐하면 이 페이지가 백엔드에서 pre-render 되며, 서버측에서는 `rotuer.query.params`가 존재하지 않는다!

-> 따라서 SEO관점에서는 서버로부터 응답받은 html 파일은 결국 안에 title이 없는 상태로 값이 들어온다.

getServerSideProps를 통해 router안의 값을 받아와 사용한다면 이 부분을 보완할 수 있다.

```js
export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
```

다음과 같이 값을 받아와서 Detail부분에서 {params} 인수를 전달받아서 사용하자!

마지막으로 SEO 컴포넌트를 불러와서 title을 적용시키면 좋은 SEO를 가질 수 있다.

### 404 Pages

404.js 파일을 만들어 그 안에다가 작성하면 된다.
