import React from "react";
import styled from "styled-components";

function HeaderRightIcon({ Icon, title }) {
  return (
    <Container>
      <Icon src={Icon} />
      <p>{title}</p>
    </Container>
  );
}

export default HeaderRightIcon;

const Container = styled.div`
  margin: 0 14px;
  color: #727070;
  text-align: center;

  :hover {
    cursor: pointer;
    color: black;
  }

  p {
    font-size: 12px;
  }
`;
