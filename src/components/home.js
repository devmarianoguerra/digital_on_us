import React from "react";
import Styled from "styled-components";

const HeroText = Styled.h1`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 220px;
`;

const TextContainer = Styled.div`
  display: flex;
  text-align: center;
  width: 400px;
  height: 40px;
  margin-left: 45%;
`;

class Home extends React.Component {
  render() {
    return (
      <>
        <HeroText>Welcome</HeroText>
        <TextContainer>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam ad
            provident quidem veniam dolorem nulla incidunt sapiente mollitia
            cumque amet ut delectus autem fuga, magni libero expedita asperiores
            temporibus eveniet ab exercitationem totam repellat. Vel hic modi ex
            ducimus? A eaque quo molestias facere possimus!
          </p>
        </TextContainer>
      </>
    );
  }
}

export default Home;
