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

const apiKey = "30fb8ce9a48ed35af340f7e02a7a8c37";

class SearchTool extends React.Component {
  state = {
    input: "",
    search: [],
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
    console.log("input: ", this.state.input);
  };

  searchMovies = () => {
    const { input } = this.state;
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${input}&api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((json) => this.setState({ search: json }));
    console.log("Search result: ", this.state.search);
  };

  // renderMovies = () => {
  //   const { search } = this.state;
  //   const listOfMovies = search.map((movies) => <Card title={movies.title} />);
  //   console.log(listOfMovies);
  //   return listOfMovies;
  // };

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
          <Button onClick={this.searchMovies}>Find my movie!</Button>
        </Container>
        <div>
          <ResponseText>Here should be the response</ResponseText>
          <div>{!_.isEmpty(search) && this.renderMovies()}</div>
        </div>
      </>
    );
  }
}

export default SearchTool;
