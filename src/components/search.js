import React from "react";
import Styled from "styled-components";
import _ from "lodash";
import Card from "./card";

const Container = Styled.div`
margin-left: 500px;
margin-top: 25px

`;

const Input = Styled.input` 
  border-radius: 50px;
  padding: 10px;
  width: 300px;
  display: flex;
  align-items: center;
  margin: 15px;
  
`;

const Label = Styled.label`
  color: black;
  font-size: 20px;
  font-style: 'Roboto';
  display: flex;
  align-items: center;
`;

const Button = Styled.button`
  border-radius: 10px;
  padding: 5px;
  display: flex;
  align-items: center;

`;

const ResponseText = Styled.p`
  display: flex;
  align-items: center;
  margin-left: 500px;
  font-size: 50px;
`;

const InfoCard = Styled.div`
display: flex;
align-items: center;
margin-left: 500px;
margin-top: 30px;
border: 2px solid black;
border-radius: 25px;
width: 450px;
heigth: 300px;
padding: 20px;
`;

const InfoText = Styled.p`
font-size: 15px;
display: flex;
font-style: 'Roboto';
margin: 15px;
align-items: center;
`;

const apiKey = "30fb8ce9a48ed35af340f7e02a7a8c37";

class SearchTool extends React.Component {
  state = {
    input: "Avengers",
    loading: true,
    search: null,
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
    console.log("input: ", this.state.input);
  };

  async componentDidMount() {
    const { input } = this.state;
    const url = `https://api.themoviedb.org/3/search/movie?query=${input}&api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ search: data.results[0], loading: false });
    console.log(data);
  }

  render() {
    const { search } = this.state;
    return (
      <>
        <Container>
          <Label>Search: </Label>
          <Input
            placeholder="Type the movie title"
            onChange={this.handleChange}
          ></Input>
          <Button onClick={this.componentDidMount}>Find my movie!</Button>
        </Container>
        <div>
          {this.state.loading || !this.state.search ? (
            <ResponseText> loading...</ResponseText>
          ) : (
            <InfoCard>
              <InfoText>Title: {search.title}</InfoText>
              <br />
              <InfoText>Plot: {search.overview}</InfoText>
              <br />
              {/* <InfoText>Release Date: {search.release_date}</InfoText>
              <br />
              <InfoText>Popularity: {search.popularity}</InfoText> */}
            </InfoCard>
          )}
        </div>
      </>
    );
  }
}

export default SearchTool;
