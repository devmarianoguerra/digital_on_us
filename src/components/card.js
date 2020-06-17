import React from "react";
import Styled from "styled-components";

const InfoCard = Styled.div`
display: flex;
align-items: center;
margin-left: 500px;
font-size: 50px;
border: 5px solid black;
border-radius: 25px;
width: 200px;
heigth: 300px;
`;

class Card extends React.Component {
  render() {
    const { title, plot, releaseDate, popularity } = this.props;
    return (
      <div>
        <InfoCard>{title}</InfoCard>
      </div>
    );
  }
}

export default Card;
