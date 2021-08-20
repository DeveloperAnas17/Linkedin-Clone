import React from "react";
import styled from "styled-components";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Photo";
import InputOption from "./InputOption";
import MovieIcon from "@material-ui/icons/Movie";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";

function Feed() {
  const search = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <InputContainer>
        <Input>
          <CreateIcon />
          <form>
            <input type="text" />
            <button onClick={search} type="submit">
              Send
            </button>
          </form>
        </Input>
        <InputOptions>
          <InputOption Icon={ImageIcon} title="Photo" color="7085f9" />
          <InputOption Icon={MovieIcon} title="Video" color="#c7a33c" />
          <InputOption Icon={EventNoteIcon} title="Evemt" color="#c0c8cd" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7fc15e"
          />
        </InputOptions>
      </InputContainer>
    </Container>
  );
}

export default Feed;

const Container = styled.div``;
const InputContainer = styled.div`
  background-color: white;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 10px;
`;
const Input = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  padding: 10px;
  padding-left: 15px;
  color: gray;
  width: 100%;
  border-radius: 30px;

  form {
    display: flex;
    width: 100%;

    input {
      border: none;
      flex: 1;
      margin-left: 10px;
      outline-width: 0;
      font-weight: 600;
    }

    button {
      display: none;
    }
  }
`;

const InputOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 7px 0px;
`;
