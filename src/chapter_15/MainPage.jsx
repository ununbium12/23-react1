import React, { useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1em;
  background: gray;
`

const Title = styled.h1`
  font-size: 1.5em;
  color: white;
  text-align: center;
`

function MainPage(props) {

  const names = '인제';
  const regin = '서울';

  function myTagFunction(strings, nameExp, reginExp) {
    let str0 = strings[0]
    let str1 = strings[1]
    let str2 = strings[2]

    return `${str0}${nameExp}${str1}${reginExp}${str2}`;
  }

  useEffect(() => {
    const output = myTagFunction`제 이름은 ${names}이고, 사는 곳은 ${regin}입니다.`;
    console.log(output);
  },[])

  return(
    <Wrapper>
      <Title>
        안녕, 디지몬!
      </Title>
    </Wrapper>
  )
}

export default MainPage;