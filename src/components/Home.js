import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addBoard } from "../actions";
import BoardThumbnail from "./BoardThumbnail";

const Thumbnails = styled.div`
  flex: 1;
  height: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const CreateTitle = styled.h3`
  font-size: 2rem;
  color: black;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
`;

const CreateInput = styled.input`
  width: 400px;
  height: auto;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  padding: 15px;
  // padding-left: 15px;
  // padding-right: 15px;
  box-sizing: border-box;
  border-radius: 15px;
  border: 2px solid rgba(0, 0, 0, 0.5);
  // border-color: black;
  outline: none;
  box-shadow: 20px 20px 40px rgba(128,128,128,0.5);
  align-self: center;
  transition: 0.5s ease-in-out;
  ${CreateInput}:hover & {
    display: block;
    cursor: pointer;
  }
  &:focus {
    // opacity: 0.8;
    border: 2px solid rgba(80, 200, 250, 0.69);
    transition: 0.5s ease-in-out;
  }
`;

const Home = ({ boards, boardOrder, dispatch }) => {
  // this is the home site that shows you your boards and you can also create a Board here.

  const [newBoardTitle, setNewBoardTitle] = useState("");

  const handleChange = e => {
    setNewBoardTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addBoard(newBoardTitle));
  };

  const renderBoards = () => {
    return boardOrder.map(boardID => {
      const board = boards[boardID];

      return (
        <Link
          key={boardID}
          to={`/${board.id}`}
          style={{ textDecoration: "none" }}
        >
          <BoardThumbnail {...board} />
        </Link>
      );
    });
  };

  const renderCreateBoard = () => {
    return (
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <CreateTitle>Create a new Board</CreateTitle>
        <CreateInput
          onChange={handleChange}
          value={newBoardTitle}
          placeholder="Your boards title..."
          type="text"
        />
      </form>
    );
  };

  return (
    <HomeContainer>
      <Thumbnails>{renderBoards()}</Thumbnails>
      {renderCreateBoard()}
    </HomeContainer>
  );
};

const mapStateToProps = state => ({
  boards: state.boards,
  boardOrder: state.boardOrder
});

export default connect(mapStateToProps)(Home);
