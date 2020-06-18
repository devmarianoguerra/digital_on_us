import React from "react";
import Styled from "styled-components";

const Title = Styled.h1`
display: flex;
justify-content: space-evenly;
align-items: center;
margin-left: 220px;
`;

class Categories extends React.Component {
  render() {
    return (
      <>
        <Title>Categories: </Title>
        <ul>
          <li></li>
        </ul>
      </>
    );
  }
}

export default Categories;
