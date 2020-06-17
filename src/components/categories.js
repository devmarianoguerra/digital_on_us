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
    return <Title>Aquí irán las categorías</Title>;
  }
}

export default Categories;
