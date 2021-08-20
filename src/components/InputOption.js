import React from "react";
import styled from "styled-components";

function InputOption({ Icon, title, color }) {
  return (
    <Container>
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </Container>
  );
}

export default InputOption;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;

  :hover {
    background: whitesmoke;
    cursor: pointer;
    border-radius: 10px;
  }
  h4 {
    margin-left: 5px;
  }
`;
