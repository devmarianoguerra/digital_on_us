import React from "react";
import Styled from "styled-components";
import _ from "lodash";
import InfoModal from "./modal";

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
display: block;
align-items: center;
margin-left: 405px;
margin-top: 30px;
border: none;
background-color: rgb(237, 230, 230);
border-radius: 5px;
width: 450px;
height: auto;
padding: 20px;
`;

const InfoText = Styled.p`
font-size: 15px;
`;

const InfoPill = Styled.div`
  background-color: black;
  color: rgb(237, 230, 230);
  width: 40px;
  heigth: 15px;
  padding: 10px;
  border-radius: 10px;
  letter-spacing: 1.5px;
  margin: 5px;
`;

const InfoButton = Styled.button`
  color: rgb(237, 230, 230);
  background-color: black;
  width: 85px;
  heigth: 25px;
  padding: 5px;
  border: none;
  border-radius: 10px;
`;

const apiKey = "30fb8ce9a48ed35af340f7e02a7a8c37";

class SearchTool extends React.Component {
  state = {
    input: "",
    loading: false,
    search: [],
    modal: false,
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  getMovies = async () => {
    const { input } = this.state;
    const url = `https://api.themoviedb.org/3/search/movie?query=${input}&api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ search: data.results, loading: false });
  };

  renderMovies = () => {
    const { search } = this.state;
    const moviePath = "http://image.tmdb.org/t/p/w185";
    const results = search.map((movie) => (
      <InfoCard key={movie.id}>
        <h1>{movie.title}</h1>
        <h6>Popularity : </h6>
        <InfoPill>{parseInt(movie.popularity)}</InfoPill>
        <img src={moviePath + movie.poster_path} alt="" />
        <InfoText>Release date : {movie.release_date}</InfoText>
        <InfoText>Plot : {movie.overview}</InfoText>
        <InfoModal
          show={this.state.modal}
          close={this.closeModal}
          title={movie.title}
          plot={movie.overview}
          poster={moviePath + movie.poster_path}
        />
        <InfoButton onClick={this.showModal}>More...</InfoButton>
      </InfoCard>
    ));
    return results;
  };

  showModal = (id) => {
    this.setState({ modal: true });
  };

  closeModal = () => {
    this.setState({ modal: false });
  };

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
          <Button onClick={this.getMovies}>Find my movie!</Button>
        </Container>
        <div>
          {this.state.loading || !this.state.search ? (
            <ResponseText> loading...</ResponseText>
          ) : (
            !_.isEmpty(search) && this.renderMovies()
          )}
        </div>
      </>
    );
  }
}

export default SearchTool;
