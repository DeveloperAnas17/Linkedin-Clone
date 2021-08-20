import React from "react";
import styled from "styled-components";
import Feed from "./Feed";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <Container>
      <Content>
        <Section>
          <h5>
            <a>Hiring in a hurry?</a>
          </h5>
          <p>
            Find talended pros in record time with Upwork and keep business
            moving.
          </p>
        </Section>

        <Layout>
          <Sidebar />
          <Feed />
          <div className="three">right</div>
        </Layout>
      </Content>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  margin-bottom: 20px;
  padding: 15px 0px;
`;

const Content = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
`;

const Section = styled.div`
  min-height: 40px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  display: flex;
  justify-content: center;
  text-decoration: underline;

  h5 {
    color: #0a66c2;

    a {
      font-weight: 700;
    }
  }

  p {
    margin-left: 20px;
    font-size: 14px;
    color: #433639;
    font-weight: bold;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  column-gap: 25px;
  row-gap: 25px;
  grid-template-rows: auto;
  margin: 5px 0;
  .one {
    background: red;
  }
  .two {
    background: coral;
  }
  .three {
    background: blue;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
