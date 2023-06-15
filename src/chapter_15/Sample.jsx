import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: gray;
  border: 2px solid palevioletred;
`;
// color: ${props => props.dark ? "white" : "dark"};
// background: ${props => props.dark ? "black" : "white"};
// border: 1px solid black;

const RoundeButton = styled(Button)`
  border-radius: 1rem;
`

function Sample(props) {
  return(
    <div>
      <Button>Normal</Button>
      <Button dark>Dark</Button>
    </div>
  )
}

export default Sample;