import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import HeaderRightIcon from "./HeaderRightIcon";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import WorkIcon from "@material-ui/icons/Work";
import SmsIcon from "@material-ui/icons/Sms";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";

function Header() {
  return (
    <Container>
      <Content>
        <Left>
          <Logo>
            <Link to="/home">
              <img src="/img/linkedin.png" alt="" />
            </Link>
          </Logo>
          <InputContainer>
            <SearchIcon className="searchIcon" />
            <input type="text" placeholder="Search" />
          </InputContainer>
        </Left>

        <Right>
          <HeaderRightIcon className="active" Icon={HomeIcon} title="Home" />
          <HeaderRightIcon Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderRightIcon Icon={WorkIcon} title="Jobs" />
          <HeaderRightIcon Icon={SmsIcon} title="Messaging" />
          <HeaderRightIcon Icon={NotificationsIcon} title="Notification" />
          <HeaderRightIcon Icon={AppsIcon} title="Work" />
        </Right>
      </Content>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  left: 0;
  position: sticky;
  z-index: 100;
  top: 0;
  width: 100vw;
`;

const Content = styled.div`
  padding: 5px 8px;
  display: flex;
  align-items: center;
  max-width: 1140px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  margin-right: 20px;
`;

const InputContainer = styled.div`
  width: 100%;
  border-radius: 4px;
  background: #eef3f8;
  display: flex;
  align-items: center;
  padding: 7px;

  .searchIcon {
    height: 18px !important;
    color: #525252;
  }

  input {
    flex-grow: 1;
    border: none;
    outline-width: 0;
    background: none;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
    height: 75px;
  }

  .active {
    color: black;
  }
`;
