import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

function Sidebar() {
  return (
    <Container>
      <Top>
        <img
          src="https://images.pexels.com/photos/4954706/pexels-photo-4954706.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <Avatar className="avatar" />
        <h2>Anas</h2>
        <h4>amanabbasi@gmail.com</h4>
      </Top>

      <Stats>
        <div className="stat">
          <p>Who viwed you</p>
          <p className="statNumber">2,534</p>
        </div>
        <div className="stat">
          <p>Who viwed you</p>
          <p className="statNumber">2,534</p>
        </div>
      </Stats>

      <Buttom>
        <p>Recent</p>
        <Hashtag>
          <p>
            <span>#</span>react
          </p>
          <p>
            <span>#</span>javascript
          </p>
          <p>
            <span>#</span>softwaredeveloper
          </p>
          <p>
            <span>#</span>webdeveloper
          </p>
          <p>
            <span>#</span>programming
          </p>
          <p>
            <span>#</span>frontend
          </p>
        </Hashtag>
      </Buttom>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  position: sticky;
  height: fit-content;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid lightgray;
  border-bottom: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: white;
  padding-bottom: 10px;

  h4 {
    color: gray;
    font-size: 12px;
  }

  img {
    margin-bottom: -20px;
    width: 100%;
    height: 60px;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .avatar {
    margin-bottom: 10px;
  }
`;

const Stats = styled.div`
  padding: 10px 20px;
  border: 1px solid lightgray;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  .stat {
    margin: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      color: gray;
      font-size: 13px;
      font-weight: 600;
    }

    .statNumber {
      font-weight: bold;
      color: #0a66c2;
    }
  }
`;

const Buttom = styled.div`
  padding: 10px;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 10px;
  margin-top: 10px;
`;

const Hashtag = styled.div`
  p {
    font-size: 14px;
    color: gray;
    font-weight: bold;
    padding: 5px;
    cursor: pointer;

    span {
      margin: 0px 7px;
    }

    :hover {
      background: whitesmoke;
      color: black;
      border-radius: 10px;
    }
  }
`;
