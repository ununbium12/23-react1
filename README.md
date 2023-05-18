# 정다훈 (201930325)

## **12주차 (2023.05.18)**

### **13장 내용(합성vs.상속)**

1. **함성에 대해 알아보기**
- 합성은 `여러 개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것`이다.
- 다양하고 복잡한 컴포넌트를 효율적으로 개발할 수 있다.
- 합성 기법은 다음과 같이 있다.
  - **Containment(담다, 포함하다, 격리하다.)**
    - 특정 컴포넌트가 `하위 컴포넌트를 포함하는 형태의 합성 방법`이다.
    - 컴포넌트에 따라서는 어떤 자식 엘리먼트가 들어올 지 미리 예상할 수 없는 경우가 있다.
    - 범용적인 '박스' 역할을 하는 Sideber 혹은 Dialog와 같은 컴포넌트에서 특히 자주 볼 수 있다.
    - 리액트 컴포넌트의 props에 기본적으로 들어있는 children 속성을 사용한다.
    - 여러 개의 children 집합이 필요한 경우 별도의 props를 각각 정의해서 사용한다.
  - **React.createElement()에 관하여...**
    - jsx를 사용하지 않은 경우의 props 전달 방법은 리액트로 엘리먼트를 생성하는 방법은
      ```jsx
      // JSX를 이용한 간단한 방법
      const jsxElement = <h1 className="jsx">JSX Element</h1>
      
      // 리액트 기능을 사용한 방법
      const reactElement = React.createElement(
        'h1', // tag
        {className: 'obj'}, // props
        'OBJ Element' // child element
      )
      ```

      <br>

  - **Specialization(특수화, 전문화)**
    - 웰컴 다이얼로그는 다이얼로그의 특별한 케이스이다.
    - 범용적인 개념을 구별되게 구체화하는 것을 특수화라고 한다.
    - `객체지향 언어`에서는 `상속`을 사용하여 특수화를 구현한다.
    - `리액트`에서는 `합성`을 사용하여 특수화를 구현한다.
    - 범용적으로 쓸 수 있는 컴포넌트를 만들어 놓고 이를 구체화시켜서 컴포넌트를 사용하는 합성 방법이다

    <br>

  - **Containment와 Specialization을 함께 사용하기**
    - Containment를 위해서 props.children을 사용하고, Specialization을 위해 직접 정의한 props를 사용하면 된다.
    - Dialog 컴포넌트는 이전의 것과 비슷한데 Containment를 위해 끝부분에 props.children을 추가 했다.
    - Dialog를 사용하는 SignUpDialog는 Specialization을 위해 props인 title, message에 값을 넣어 주고 있고, 입력을 받기 위해 `<input>`과 `<button>`을 사용한다. 이 두개의 태그는 모두 props.children으로 전달되어 다이얼로그에 표시된다.
    - 이러한 형태로 Containment와 Specialization을 동시에 사용할 수 있다.

    <br>

2. **상속에 대해 알아보기**
- 합성과 대비되는 개념으로 상속(Inheritance)이 있다.
- 자식 클래스는 부모 클래스가 가진 변수나 함수 등의 속성을 모두 갖게 되는 개념이다.
- 하지만 `리액트`에서는 `상속보다는 합성`을 통해 `새로운 컴포넌트`를 생성한다.
- 다른 컴포넌트로부터 상속을 받아서 새로운 컴포넌트를 만드는 것이다.
- 상속을 사용하여 컴포넌트를 만드는 것을 추천할 만한 사용 사례를 찾지 못함
- 리액트에서는 상속이라는 방법을 사용하는 것보다는 `합성을 사용하는 것이 더 좋음`

<br>

### **14장 내용(컨텍스트)**

1. **컨텍스트란 무엇인가?**
- 컴포넌트들 사이에서 데이터를 props를 통해 전달하는 것이 아닌 컴포넌트 트리를 통해 곧바로 데이터를 전달하는 방식이다.
- 어떤 컴포넌트든지 컨텍스트에 있는 데이터에 쉽게 접근할 수 있다.

<br>

2. **언제 컨텍스트를 사용해야 할까?**
- 여러 컴포넌트에서 자주 필요로 하는 데이터는 로그인 여부, 로그인 정보, UI 테마, 현재 선택된 언어 등이 있다. 말 그대로 여러 컴포넌트에서 계속해서 접근이 일어날 수 있는 데이터들이 있는 경우이다.
- props를 통해서 데이터를 전달하는 기존 방식은 실제 데이터를 필요로 하는 컴포넌트의 깊이가 길어질 수 록 복잡해진다.
- Provider의 모든 하위 컴포넌트가 얼마나 깊이 위치해 있는지 관계없이 컨텍스트의 데이터를 읽을 수 있다.

<br>

3. **컨텍스트 사용 전 고려할 점**
- 컴포넌트와 컨텍스트가 연동이 되면 재사용성이 떨어진다.
- 다른 레벨의 많은 컴포넌트가 데이터를 필요로 하는 경우가 아니라면, 기존 방식대로 props를 통해 데이터를 전달하는게 더 적합하다.

<br>

4. **컨텍스트 API**
- *React.creatContext()*
  - 컨텍스트를 생성하기 위한 함수이다.
  - 컨텍스트 객체를 리턴한다.
  - 기본값으로 undefined를 넣으면 기본값이 사용되지 않는다.
- *Context.Provider*
  - 모든 컨텍스트 객체는 Provider라는 컴포넌트를 갖고 있다.
  - Provider 컴포넌트로 하위 컴포넌트들을 감싸주면 모든 하위 컴포넌트들이 해당 컨텍스트의 데이터에 접근할 수 있게 된다.
  - Provider에는 value라는 prop이 있으며, 이것이 데이터로써 하위에 있는 컴포넌트들에게 전달된다.
  - 여러 개의 Provider 컴포넌트를 중첩시켜 사용할 수 있다.
- *Class.contextType*
  - Provider 하위에 있는 클래스 컴포넌트에서 컨텍스트의 데이터에 접근하기 위해 사용한다.
  - 단하나의 컨텍스트만 구독할 수 있다.
- *Context.Consumer*
  - 컨텍스트의 데이터를 구독하는 컴포넌트이다.
  - 데이터를 소비한다는 뜻에서 consumer 컴포넌트라고도 부른다.
  - consumer 컴포넌트는 컨텍스트 값의 변화를 지켜보다가 값이 변경되면 재렌더링 된다.
  - 하나의 Provider 컴포넌트는 여러 개의 consumer 컴포넌트와 연결될 수 있다.
  - 상위 레벨에 매칭되는 Provider가 없을 경우 기본값이 사용된다.
- *Context.displayName*
  - 크롬의 리액트 개발자 도구에서 표시되는 컨텍스트 객체의 이름이다.

<br>

5. **여러 개의 컨텍스트 사용하기**
- Provider 컴포넌트와 Consumer 컴포넌트를 여러 개 중첩해서 사용하면 된다.

<br>

6. **useContext()**
- 함수 컴포넌트에서 컨텍스트를 쉽게 사용할 수 있게 해주는 훅이다.
- React.createContext() 함수 호출로 생성된 컨텍스트 객체를 인자로 받아섯 현재 컨텍스트의 값을 리턴한다.
- 컨텍스트의 값이 변경되면 변경된 값과 함께 useContext() 훅을 사용하는 컴포넌트가 재렌더링 된다.

<br>

## **11주차 (2023.05.11)**
---
### **12장 내용(State 끌어 올리기)**

1. **Shared state**
- 하위 컴포넌트가 공통된 부모 컴포넌트의 state를 공유하여 사용하는 것
- Shared state
- Shared state Temperature

<br>

2. **하위 컴포넌트에서 State 공유하기**
- state 끌어올리기(Lifting State Up)
  - 하위 컴포넌트의 state를 공통된 부모 컴포넌트로 끌어올려서 공유하는 방식
- Calculator

<br>

## **10주차 (2023.05.04)**
---
### **10장 내용(리스트와 키)**

1. **리스트와 키란 무엇인가?**
- 리스트는 자바스크립트의 변수나 객체를 하나의 변수로 묶어 놓은 배열과 같은 것이다.
- 키는 각 객체나 아이템을 구분할 수 있는 고유한 값을 의미한다.
- 리액트에서는 배열과 키를 사용하는 반복되는 다수의 엘리먼트를 쉽게 렌더링 할 수 있다.

<br>

2. **여러 개의 컴포넌트 렌더링하기**
- 예의 에어비엔비의 화면처럼 같은 컴포넌트를 화면에 반복적으로 나타내야 할 경우 배열에 들어 있는 엘리먼트를 map()함수를 이용하여 렌더링한다.
- 다음은 numbers 배열에 들어있는 각각의 요소를 map()를 이용해 추출하여, 2를 곱한 후 doubled라는 배열에 다시 넣는 코드
  ```jsx
  const doubled = numbers.map((number) => number * 2)
  ```
- 다음은 리액트에서 map()함수를 사용한 코드
  ```jsx
  // 이 코드는 numbers의 요소에 2를 곱하는 대신 <li> 태그를 결합해 리턴하고 있다.
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  ```
  - 리턴된 listItems는 `<ul>`태그와 결합하여 렌더링 된다.
    ```jsx
    ReactDOM.render(
      <ul>
        <li>{1}</li>
        <li>{2}</li>
        <li>{3}</li>
        <li>{4}</li>
        <li>{5}</li>
      </ul>
    );
    ```
  = 출력 결과 =
- 1
- 2
- 3
- 4
- 5

<br>

3. **기본적인 리스트 컴포넌트**
- 앞선 코드를 합친 컴포넌트는 props로 받은 숫자를 numbers로 받아 리스트로 렌더링해준다.
- 코드를 실행할 경우 "리스트 아이템에 무조건 키가 있어야 한다."는 경고 문구가 나오는데, 그 이유는 각각의 아이템에 key props가 없기 때문이다.
  ```jsx
  function NumberList(props) {
    const { numbers } = props;
    
    const listItem = numbers.map((number) =>
      <li>{number}</li>
    );

    const numbers = [1, 2, 3, 4, 5];
    ReactDOM.render(
      <NumberList numbers={numbers} />,
      document.getElementById('root')
    )
  }
  ```

<br>

4. **리스트의 키에 대해 알아보기**
- 리스트에서의 키는 "리스트에서 아이템을 구별하기 위한 고유한 문자열"이다.
- 이 키는 리스트에서 어떤 아이템이 변경, 추가 또는 제거되었는지 구분하기 위해 사용된다.
- 키는 같은 리스트에 있는 엘리먼트 사이에서만 고유한 값이면 된다.

<br>

### **11장 내용(폼)**

1. **폼이란 무엇인가?**
- 폼은 일반적으로 사용자로부터 입력을 받기위한 양식에서 많이 사용된다.
=예시 코드=
  ```html
  <input type="text" name="name">
  ```

<br>

2. **제어 컴포넌트**
- 제어 컴포넌트는 사용자가 입력한 값에 접근하고 제어할 수 있도록 해주는 컴포넌트다.

<br>

3. **textarea 태그**
- HTML에서는 `<textarea>`의 children으로 들어가는 태그다.
- 여러 줄에 걸쳐서 텍스트를 입력받기 위한 HTML 태그

<br>

4. **select 태그**
- select 태그도 textarea와 동일하다.
- 드롭다운 목록을 보여주기 위한 HTML 태그
- 여러가지 옵션 중에서 하나 또는 여러 개의 선택할 수 있는 기능 제공한다.

<br>

5. **File input 태그**
- File input태그는 그 값이 읽기 전용이기 때문에 리액트에서는 비제어 컴포넌트가 된다.
- `<input type="file" />`

<br>

6. **여러 개의 입력 다루기**
- 컴포넌트에 여러 개의 state를 선언하여 각각의 입력에 대해 사용하면 된다.

<br>

7. **Input Null value**
- 제어 컴포넌트에 value prop을 정해진 값으로 넣으면 코드를 수정하지 않는한 입력 값을 바꿀 수 없다.
- 만약 value prop은 넣되 자유롭게 입력할 수 있게 만들고 싶다면 값이 undefined 또는 Null을 넣으면 된다.

<br>

## **9주차 (2023.04.27)**
---
### **8장 내용(이벤트 핸들링)**

1. **이벤트 처리하기**
  - DOM에서 클릭 이벤트를 처리하는 예제 코드.

    ```html
    <button onclick="activate()">
      Activate
    </button>
    ```

  - React에서 클릭 이벤트 처리하는 예제 코드.

    ```html
    <button onClick={activate}>
      Activate
    </button>
    ```
  - 이 둘의 차이점은?<br>
    1. 이벤트 이름이 onclick에서 onClick으로 변경(Camel case)
    2. 전달하려는 함수는 문자열에서 함수 그대로 전달
    
    <br>

  - 이벤트 핸들러의 추가 방법은?
    1. bind를 사용한다. 만약 사용하지 않을 경우, this.handleClick은 글로벌 스코프에서 호출되어 undefined으로 되어 사용할 수 없기 때문이다.
    2. bind를 사용하지 않으려면, 화살표 함수를 사용해야한다.

    <br>

  - 함수형에서 이벤트 핸들러를 정의 하는 방법은?
    1. this를 사용하지 않고, onClick에서 바로 HandleClick으로 넘기면 된다.

        ```jsx
        // 방법 1. 함수 안에 함수로 정의
        function handleClick() {
          setIsToggleOn((isToggleOn) => !isToggleOn);
        }
        // 방법 2. row function을 사용하여 정의
        const handleClick = () => {
          setIsToggleOn((isToggleOn) => !isToggleOn);
        }

        return (
          <button onClick={activate}>
            Activate
          </button>
        )
        ```

2. **Arguments 전달히기**
  - 함수를 정의 할 때는 피라미터(Parmeter) 혹은 매개변수, 함수를 사용할 때는 아귀먼트(Argument) 혹은 인자라고 부른다.
  - 이벤트 핸들러에 매개변수를 전달해야 하는 경우도 많다.

    ```jsx
    <button onClick={(event) => this.deleteItem(id.event)}>
      삭제하기
    </button>
    <button onClick={this.deleteItem.bind(this, id)}>
      삭제하기
    </button>
    ```
  - 위의 코드는 모두 동일한 역할을 하지만, 하나는 화살표 함수, 다른 하나는 bind를 사용했다.
  - event라는 매개변수는 리액트의 이벤트 객체를 의미한다.
  - 두 방법 모두 첫 번째 매개변수는 id이고 두 번째 매개변수로 event가 전달된다.
  - 첫 번째 코드는 명시적으로 event를 매개변수로 넣어 주었고, 두 번째 코드는 id 이후 두 번째 매개변수로 event가 자동 전달 된다.(이 방법은 클래스 형에서 사용하는 방법이다.)
> - event는 굳이 event라고 안써도 되지만 기본적으로 event 혹은 e 이런 방식으로 써준다.

<br>

### **9장 내용(조건부 렌더링)**

1. **조건부 렌더링이란?**

  - 여기서 조건이란 우리가 알고 있는 조건문의 조건이다.
    
    ```jsx
    function Greeting(props) {
      const isLoggedIn = props.isLoggedIn;
      if(isLoggedIn) {
        return <UserGreeting />;
      }
      return <GuestGreeting />;
    }
    ```

2. **엘리먼트 변수**

  - 렌더링해야 될 컴포넌트를 변수처럼 사용하는 벙법이 엘리먼트 변수이다.
  - state에 따라 button 변수에 컴포넌트의 객체를 저장하여 return문에서 사용하고 있다.

3. **인라인 조건**

  - 필요한 곳에 조건문을 직접 넣어 사용하는 방법

  - ① 인라인 if
    - if 문을 직접 사용하지 않고, 동일한 효과를 내기 위해 && 논리 연산자를 사용한다.
    - &&는 and 연산자로 모든 조건이 참일때만 참이 된다.
    - 첫 번째 조건이 거짓이라면 두 번째 조건은 판단할 필요가 없다.(단축평가)
      ```jsx
      =
      true && expression -> expression
      false && expression -> false
      =

      {unreadMessage.length > 0 &&
        <h2>
          현재 {unreadMessage.length}개의 읽지 않은 메시지가 있습니다.
        </h2>
      }
      ```
    - 판단만 하지 않는 것이고, 결과값은 그대로 리턴된다.

  - ② 인라인 if-else
    - 삼항 연산자를 사용한다.
    - 문자열이나 엘리먼트를 넣어 사용할 수도 있다.
    - `조건문 ? 참일 경우 : 거짓일 경우`

4. **컴포넌트 렌더링 막기**
  
  - 컴포넌트를 렌더링하고 싶지 않을 때에는 null을 리턴한다.

<br>

## **7주차 (2023.04.13)**
---
### **7장 내용**
**= 훅**
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