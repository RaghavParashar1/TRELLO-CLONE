import React from "react";
import styled from "styled-components";

const Thumbnail = styled.div`
  height: 280px;
  width: 280px;
  background-color: white;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 15px;
  border: 2px solid rgba(0, 0, 0, 0.42);
  box-shadow: 20px 20px 40px rgba(128,128,128,0.5);
  transform: translateX(0px) translateY(0px);
  transition: 0.5s ease-in-out;
  ${Thumbnail}:hover & {
    transition: 0.5s ease-in-out;
  }
  &:hover {
    transform: translateX(-10px) translateY(-10px);
    box-shadow: 30px 30px 50px rgba(128,128,128,0.5);
    transition: 0.5s ease-in-out;
  }
`;

const Title = styled.h4`
  color: black;
  text-decoration: none;
`;

const BoardThumbnail = ({ title }) => {
  console.log(title);
  return (
    <Thumbnail>
      <Title>{title}</Title>
    </Thumbnail>
  );
};

export default BoardThumbnail;
