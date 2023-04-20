# 정다훈 (201930325)

## 7주차 (2023.04.13)
---
### 7장 내용
= 훅
1. 훅인란?
>  - 클래스형 컴포넌트에서는 생성자(constructor)에서 state를 정의하고, setState() 함수를 통해 state를 업데이트 한다.
>  -  예전에 사용하던 함수형 컴포넌트는 별도로 state를 정의하거나, 컴포넌트의 생명주기에 맞춰서 어떤 코드가 실행되도록 할 수 없었다.

2. useState()
>  - useState는 함수형 컴포넌트에서 state를 사용하기 위한 Hook이다.
>  - 함수형에는 State 형이 없기 때문에 useState를 사용한다.
>  - useState()의 사용법은
```jsx
  const (변수명, set함수명) = useState(초깃값);
  // 변수 각각에 대해 set함수가 따로 존재한다.
```

3. useEffect
>  - useState와 함깨 가장 많이 사용하는 Hook이다.
>  - 이 함수는 사이드 이펙트를 수행하기 위한 것이다.
>  - 영어로는 side effect는 부작용을 의미하는데, 일반적으로 프로그래밍에서 사이트 이펙트는 '개발자가 의도하지 않은 코드가 실행되면서 버그가 발생하는 것'이다. 하지만 리액트에서는 효과 또는 영향을 뜻하는 effect라는 의미에 가깝다.
>    - (교수님의 추가 설명 : 부작용이라기 보단 변이? 완전히 나쁜게 아니라고 한다.)
>  - sideEffect는 렌더링 외에 실행해야 하는 부수적인 코드를 말한다.
>  - 예시로 네트워크 리퀘스트, DOM 수동 조작, 로깅 등은 정리(clean-up)가 필요 없는 경우들 이다.
> useEffect() 사용법은
```jsx
  useEffect(이펙트 함수, 의존성 배열);
  // 의존성 배열안에 있는 변수 중에 하나라도 값이 변경되면, 이펙트 함수가 실행 된다.
  useEffect(이펙트 함수, [])
  // 의존성 배열에 빈 배열을 넣으면 마운트와 언마운트시에 단 한번만 실행이 된다.
```
= 예시 코드 =
```jsx
  useEffect(() => {
    Axios.get(`http://localhost:8080/api/어쩌구저쩌구/예시코드입니다.`)
    .then(res => {
      setList(res);
    })
    .catch(err => {
      alert("에라가 발생했습니다.");
      console.log(err);
    });
    return() => {
    }
  }, []);
```

4. useMemo
>  - useMemo() 혹은 Memoizde value를 리턴하는 훅이다.
>  - 연산량이 높은 작업이 매번 렌더링될 때마다 반복되는 것을 피하기 위해 사용한다.
>  - 렌더링이 일어나는 동안 실행되므로 렌더링이 일어나는 동안 실행되서는 안될 작업을 useMemo()에 넣으면 안된다.
>  - 사용법은
```jsx
  const memoizedValue = useMemo(값 생성 함수, 의존성 배열);
```

= 예시코드 =
```jsx
  const useMemo = (fn) => { 
    let cache = {}; 
    return (n) => { 
      if(cache[n] === undefined) { 
        cache[n] = fn(n); 
        } 
        return cache[n]; 
  }}
  const addTwo = useMemo((num) => { return num + 2; });
  console.log(addTwo(2));
  //4 console.log(addTwo(2)); //4 (memoized value)
```

5. useCallback
>  - useMemo() 훅과 유사하지만, 값이 아닌 함수를 반환한다는 점이 다르다.
>  - useCallback(콜백 함수, 의존성 배열);은 useMemo(() => 콜백 함수, 의존성 배열); 과 동일
>  - 컴포넌트 내에 함수를 정의하면 매번 렌더링이 일어날 때마다 함수가 새로 정의되므로 useCallback() 훅을 사용하여 불필요한 함수 재정의 작업을 없애는 것이다.
>  - 사용법은
```jsx
  const memoizedCallback = useCallback(콜백 함수, 의존성 배열);
```

= 예시코드 =
```jsx
const UseCallbackComponent = () => {
  //함수 생성
  const handleClick = useCallback(() => {
    alert('Clicked');
  }, []);
  return (
    <div>
      <h3>useCallback Example</h3>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};
```


6. useRef
>  - useRef() 혹은 레퍼런스를 사용하기 위한 훅이다.
>  - 레퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미한다.
>  - 매번 렌더링될 때마다 항상 같은 레퍼런스 객체를 반환한다.
>  - 사용법은
```jsx
  const refContainr = useRef(초깃값);
```

= 예시코드 =
```jsx
  const inputRef = useRef();
  const handleOnClick = ( ) => { 
    inputRef.current.focus(); 
  };

  return ( 
    <> 
      Focus Input 
    </> 
);
```

7. 훅의 규칙
>  - 첫 번째 규칙은 무조건 최상위 레벨에서만 호출해야 한다는 것이다. 여기서 최상위는 컴포넌트의 최상위 레벨을 의미한다.
>     - 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 호출해선 안된다.
>     - 훅은 컴포넌트가 렌더링될 때마다 같은 순서로 호출되어야 한다.
>  - 두 번째 규칙은 리액트 함수 컴포넌트에서만 훅을 호출 해야한다.
>     - 훅은 리액트 함수 컴포넌트에서 호출하거나 직접 만든 커스텀 훅에서만 호출 할 수 있다.

8. 나만의 훅 만들기 
>  - 커스텀 훅
>     - 이름이 use로 시작하고 내부에서 다른 훅을 호출하는 단순한 자바 스크립트 함수
>     - 파라미터로 무엇을 받을지, 어떤 것을 리턴해야 할지를 개발자가 직접 정할 수 있다.
>     - 죽복되는 로직을 커스텀 훅으로 추출해서 재사용성 높인다.
>     - 이름이 use로 시작하지 않으면 특정 함수의 내부에서 훅을 호출하는지 알 수 없기 때문에 훅의 규칙 위반 여부를 자동으로 확인 할 수 없다.

## 6주차 (2023.04.06)
---
### 5장 내용
1. 컴포넌트 추출
>- 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수도 있다.
>- 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것이다.
> - 실무에서는 처음부터 1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는 것읻 좋다.

### 6장 내용
= State
1. State란?
>  - State는 리액트 컴포넌트의 상태를 의미한다.
>  - 상태의 의미는 정상인지 비정상인지가 아니라 컴포넌트의 데이터를 의미한다.
>  - 정확히는 컴포넌트의 변경가능한 데이터를 의미한다.
>  - State가 변하면 다시 렌더링이 되기 때문에 렌더링과 관련된 값만 state에 포함시켜야 한다.

2. State의 특징
>  - 리액트 만의 특별한 형태가 아닌 단지 자바스크립트 객체일 뿐이다.
>   - state는 변경은 가능하다고 했지만, 직접 수정하면 안된다.
>   - 불가능하다고 생각하는게 좋다.
>  - class 컴포넌트
>     - 생성자에서 모든 state를 한 번에 정의함
>     - state를 변경하고자 할때는 setstate()함수를 사용해야한다.

= 예시 =
```js
  // state를 직접 수정 (잘못된 방법)
  this.state = {
    name: 'Inje'
  };
  // setState 함수를 통한 수정 (정상적인 사용법)
  this.setState({
    name: 'Inje'
  });
```

= 생명주기에 대해서 알아보기

> - 생명주기는 컴포넌트의 생성 시점, 사용 시점, 종료 시점을 나타내는 것이다.
> - constructor가 실행 되면서 컴포넌트가 생성된다.
> - 생성 직후 componentDidMount() 함수가 호출된다.
> - 컴포넌트가 소멸하기 전까지 여러 번 렌더링 한다.
> - 렌더링은 props, setState(), forceUpdate()에 의해 상태가 변경되면서 이루어진다.
> - 렌더링이 끝나면 componentDinUpdate() 함수가 호출된다.
> - 컴포넌트가 언마운트 되면 compomentWillUnmount() 함수가 호출된다.

<br>

## 5주차 (2023.03.30)
---

+ 4장 내용
1. 엘리먼트의 정의
>  - 엘리먼트는 리액트 앱을 구성하는 요소

2. 엘리먼트의 생김새
>  - 리액트 엘리먼트는 자바스크립트 객체의 형태로 존재
>  - 컴포넌트(Button 등), 속성(color 등) 및 내부의 모든 children을 포함하는 일반 JS객체이다.
>  - 이 객체는 마음대로 변경할 수 없는 불변성을 가지고 있다.
>  - 이랙트 엘리먼트의 예를 보면 type에 태그 대신 리액트 컴포넌트가 들어가 있는 것 외에는 차이가 없다는걸 알 수 있다.
>  - 자바스크립트 또한 객체이다.

3. 엘리먼트의 특징
>  - 리액트 엘리먼트의 가장 큰 특징은 불변성이다.<br>
  즉, 한 번 생성된 엘리먿트의 children이나 속성(arrtibutes)을 바꿀 수 없다.

4. Clock 코드(js버전)
<br>
  = Clock.jsx =
  
```js
  import React from "react";
  function Clock(props) {
    return(
      <div>
        <h1>안녕, 리액트!</h1>
        <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
      </div>
    )
  }
  export default Clock;
```

= index.js =

```js
  const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  setInterval(() => {
    root.render(
      <React.StrictMode>
        <Clock />
        // 아래 코드는 사용하지 않아 주석처리 되었다.
        {/* <Library /> */}
        {/* <App /> */}
      </React.StrictMode>
    );
  }, 1000);
```


+ 5장 내용

0. 컴포넌트란...
>  - 리액트는 컴포넌트 기반의 구조와 같다.
>  - 컴포넌트 구조라는 것은작은 컴포넌트가 모여 큰 컴포넌트를 구성하고, 다시 이런 컴포넌트들이 모인것이다.

1. Props의 개변
>  - props는 prop(property : 속성, 특성)의 준말이다.
>  - 이 porps가 바로 컴포넌트의 속성이다.
>  - 컴포넌트에 어떤 속성, props를 넣느냐에 따라 속성이 다른 엘리먼트가 출력된다.
>  - props는 컴포넌트에 전달 할 다양한 정보를 담고 있는 자바스크립트 객체이다.
>  - 에이비엔비의 예도 마찬가지이다.

2. Props의 특징
>  - 읽기 전용이며, 변경할 수 없다.
>  - 속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달하면 된다.
  
= Pure 함수 vs. Impure 함수
>  - Pure함수는 인수로 받은 정보가 함수 내부에서도 변하지 않는 함수이다.
>  - Impure함수는 인수로 받은 정보가 함수 내부에서 변하는 함수이다.

3. Props의 사용법
>  - JSX에서는 key-value쌍으로 props를 구성한다.
  
```jsx
    function App(props) {
      return(
        <Profile
          name="정다훈"
          inreoduction="안녕하세요, 정다훈입니다."
          viewCount={1500}
        />
      );
    }
```
>  - JSX를 사용하지 않는 겨우 props의 전달 방법은 createElement()함수를 사용하는 것이다.


= 컴포넌트 만들기

4. 컴포넌트의 종류
>  - 리액트 초기 버전을 사용할 때는 클래스형 컴포넌트를 주로 사용했다.
>  - 이후 Hook이라는 개념이 나오면서 최근에는 함수형 컴포넌틀를 주로 사용한다.
>  - 예전에 작성된 코드나 문서들이 클래스형 컴포넌트를 사용하고 있기 때문에, 클래스형 컴포넌트와 컴포넌트의 생명주기에 관해서도 공부해야한다.

5. 함수형 컴포넌트
>  - Welcome컴포넌트는 props를 받아, 받은 props중 name키의 값을 "안녕", 뒤에 넣어 반환한다.

```js
    function App(props) {
      return(
        <Profile
          name="정다훈"
          inreoduction="안녕하세요, 정다훈입니다."
          viewCount={1500}
        />
      );
    }
```

6. 클래스형 컴포넌트
>  - Welcome컴포넌트는 React.Component class로 부터 상속을 받아 선언한다.

```js
    class Welcom extends React.Component {
      render() {
        return <h1>안녕, {porps.name}</h1>;
      }
    }
```

7. 컴포넌트 이름 짓기
>  - 이름은 항상 대문자로 시작한다.
>  - 왜냐하면 리액트는 소문자로 시작하는 컴포넌트를 DOM태그로 인식하기 때문이다.(html tag)
>  * 컴포넌트 파일 이름과 컴포넌트 이름은 길게 한다.

8. 컴포넌트의 렌더링
>  - 렌더링의 과정은 다음 코드와 같다.

```js
    function Welcome(props) {
      return <h1>안녕, {porps.name}</h1>;
    }

    const element = <Welcome name="인제" />;
    ReactDOM.render(
      element,
      document.getElementById('root')
    );
```


+ 컴포넌트 합성
  - 컴포넌트 합성은 여러 개의 컴포넌트를 합쳐서 하나의 컴포넌트로 만드는 것이다.
  - 리액트에서는 컴포넌트 안에 또 다른 컴포넌트를 사용할 수 있기 때문에, 복잡한 화면을 여러 개의 컴포넌트로 나누어 구현할 수 있다.
  - 보기 코드에서는 porps의 값을 다르게 해서 Welcome 컴포넌트를 여러 번 사용하고 있다.
  
```js
    function Welcome(props) {
      return <h1>안녕, {porps.name}</h1>;
    }
     function App(props) {
      return(
        <div>
          <Welcome name="Mike" />
          <Welcome name="Steve" />
          <Welcome name="Jane" />
        </div>
      );
    }

    ReactDOM.render(
      <App />
      document.getElementById('root')
    );
```

<br>

## 4주차 (2023.03.23)
---
```html
1. 현재 파일 생성 이유?
기존 23-react1 파일 삭제 후 npx으로 react에 맞게 생성,
또한 githud에 있던 23-react1 파일 삭제 후 새롭게
23-react1 파일로 업로드 된 상태이다.

2. JSX란?
  - 자바스크립트와 XML/HTML을 함께 사용할 수
    있는 자바스크립트의 확장 문법 

  2.1 JSX 속성 정의
  어트리뷰트에 따옴표를 이용해 문자열 리터럴을 정의할 수 있으며,
  중괄호를 사용하여 어트리뷰트에 JavaScript 표현식을 
  삽입할 수도 있다.

  예시-<
    ⑴
    const element = <a href="https://www.reactjs.org"> 
      link 
    </a>;
    ⑵
    const element = <img src={user.avatarUrl} />;
  >

  2.2 JSX로 자식 정의
  태그가 비어있다면 XML처럼 /> 를 이용해 바로 닫아야하며,
  JSX 태그는 자식을 포함할 수 있다.

  예시-<
    ⑴
    const element = <img src={user.avatarUrl} />;
    ⑵
    const element = (
      <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
      </div>
    );
  >

  2.3 JSX의 역할
    - JSX는 내부적으로 XML/HTML 코드를 자바스크립트로 변환한다.
    - React가 createElement 함수를 사용하여 자동적으로
      자바스크립트로 변환해 준다.
    - 만일 JS 작업할 경우 직접 createElement 함수를
      사용해야 한다.
    - 결국 JSX코드는 가독성을 높여주는 역할을 한다.

  2.4 JSX의 장점
    - 코드가 간결해진다.
    - 가독성이 향상된다.
    - Injection Attack이라 불리는 해킹 방법을 방어함으로써
      보안에 강하다.

      예시-<
        JSX 사용할 경우
        <div>Hello, {name}</div>
        JSX 사용 안할 경우
        React.createElement('div', null, `Hello, ${name}`);
      >
  
  2.5 JSX 사용법
    - 모든 자바스크립트 문법을 지원한다.
    - 자바스크립트 문법에 XML과 HTML을 섞어서 사용한다.
    - 만일 html이나 xml에 자바 스크립트 코드를 사용하고
      싶으면, {} 를 사용하면 된다.
    - 만약 태그의 속성값을 넣으려고 할 경우에는
      
      예시-<
        큰따옴표 사이에 문자열을 넣는 법
        const element = <div tabIndex="0"></div>;
        중괄호 사이에 자바스크립트 코드를 넣는 법
        const element = <img src={user.avatarUrl} />;
      >

3. src 파일에 chapter_03 파일 생성
기본적 수업 내용에 대한 것을 생성했다.
Book.jsx와 Library.jsx를 생성해서 index.jsx에 App.js가
들어가 있던 부분을 제거 후 Library.jsx로 교체함
그래서 현재, npm start하고 시작할 경우 Libray.jsx 화면이 실행됨
```

<br>

## 3주차 (2023.03.16)
---
```
1. Git에 README 파일은 자신의 작성물을 설명하는 파일이다. 그렇기에 기본적으로 내용이 오래될 수 록 쌓이니깐
최근 내용은 맨 위에 올리도록 해야 보는 사람이 편하다.

2. chocolatey 이란?
윈도우의 불편한 환경설치를 도와주는 프로그램이다.

3. 기본 개발 환경
Node.js 및 npm 설치를 해야하며, VSCode를 이용하는 것이 편하다.

4. 리액트의 정의
사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리

5. 리액트의 개념 정리
  - 복잡한 사이트를 쉽고 빠르게 만들고, 관리하기 위해 만들어진 
  것이 바로 리액트이다.
  - 다른 표현으로는 SPA를 쉽고 빠르게 만들 수 있도록 해주는 
  도구라고 생각하면 됩니다.
  - 예전 모바일이 나오기 전에는 길어지는 페이지는 좋은 페이지가 
  아니였지만, 모바일이 나온 후로 스크롤이 기본적으로 변하다보니 
  위 아래로 길어지는 웹페이지들이 많이 나오기 시작했다.

  1-1 리액트의 장점
  
    1.1 빠른 업데이트와 렌더링 속도
      - 이것을 가능하게 하는 것이 바로 Virtual DOM이다.
      -  DOM(Document Object Model)이란 XML, HTML 문서의 각 
      항목을 계층으로 표현하여 생성, 변형, 삭제할 수 있도록 
      돕는 인터페이스 이다. 이것이 바로 W3C의 표준이다.
      - Virtual DOM은 DOM 조작이 비효율적인 이유로 속도가 
      느리기 때문에 고안된 방법이다.
      - DOM은 동기식, Virtual DOM은 비동기식 방법으로 렌더링 
      한다.
  ```
  <img src="public\assets\Virtual_DOM.png">

```
    1.2 컴포넌트 기반 구조
      - 리액트의 모든 페이지는 컴포넌트 구성된다.
      - 하나의 컴포넌트는 다른 여러 개의 컴포넌트의 조합으로 
      구성할 수 있다.
      - 그래서 리액트를 개발하다 보면 레고 블록을 조립하는 
      것처럼 컴포넌트를 조합해서 웹사이트를 개발하게 된다.
      - 에어비앤비(https://www.airbnb.co.kr/) 사이트화면의 
      컴포넌트 구조를 보면 재사용성이 뛰어나다.

    1.3 재사용성
      - 반복적인 작업을 줄여주기 때문에 생성성을 높여준다.
      - 또한 유지보수가 용이하다.
      - 재사용이 가능하려면 해당 모듈의 의존성이 없어야 한다.
```
<img src="public\assets\recyc.png">

```
    1.4 든든한 지원군
      - 메타(구 페이스북)에서 오픈소스 프로젝트로 관리하고 있어
      계속 발전하고 있다.

    1.5 활발한 지식 공유 & 커뮤니티

    1.6 모바일 앱 개발가능
      - 리액트 네이티브라는 모바일 환경 UI프레임워크를 사용하면 
      크로스 플랫폼(Cross-Platform) 모바일 앱을 개발할 수 있다.


  1-2 리엑트의 단점
  
    - 방대한 학습량
    - 복잡한 구조도
```

<br>

## 2주차 (2023.03.09)
---
```
1. SAP(Single Page Application)
  스마트폰의 보급화로 인해 한 페이지에 모든 것을 나타내는 화면을 만들기 시작했다.

2. CSS란?
  원래는 스스로 돌아가는 것이 아니여서 언어라고 보기 힘들었지만, 현재는 어려운 기능들로 인해 언어라고 보고 있다.

3. 자바스크립트란?
  html이나 css 같은 걸로 해결이 안되는 부분을 자바스크립트가 해결하기 위해 나왔다.

4. ES6(ECMAScript6)
  표준 ECMA-262

5. 자바스크립트의 자료형
  · var : 중복 선언 가능, 재할당 가능
  · let : 중복 선언 불가능, 재할당 가능
  · const : 중복 선언 불가능, 재할당 불가능

6. Key와 key value로 이루어진 JSON 스타일의 자료형
  {
    key : key - v,
    key 2 : key -v2 -
  }

7. 자바스크립트의 연산자
  = 기본 연산자
    a = a++ // 만약 a = 1 일때 a === 1
    a = ++a // 만약 a = 1 일때 a === 2

    let a = 1
    let b = "1"
  
    a == b t
    a === b f // 자료형까지 완벽하게 똑같아야 한다는 것이다.


  = 함수
    ent 형 : 일반적 함수의 형태
    expression 형 : 화살표 함수
```

<br>

## 1주차 (2023.03.02)
---
# h1 테크
## h2 테크
### h3 테크
#### h4 테크
##### h5 테크
###### h6 테크
---
1. 첫번째
2. 두번째

* 스타 찍음
- 마이너스 찍음
```html
있어보이지?
<html>
  <div id="a" class="b">
  </div>
</html>
```