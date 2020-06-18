import React from "react";
import Styled from "styled-components";
import _ from "lodash";

const Title = Styled.h1`
display: flex;
justify-content: space-evenly;
align-items: center;
margin-left: 220px;
`;

const MovieList = Styled.ul`
display: block;
margin-left: 500px;
margin-top: 85px;
list-style-type: none;
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

const ResponseText = Styled.p`
  display: flex;
  align-items: center;
  margin-left: 500px;
  font-size: 50px;
`;

const apiKey = "30fb8ce9a48ed35af340f7e02a7a8c37";

class Categories extends React.Component {
  constructor() {
    super();
    this.actionButton = React.createRef();
    this.adventureButton = React.createRef();
    this.animationButton = React.createRef();
    this.comedyButton = React.createRef();
    this.crimeButton = React.createRef();
    this.documentaryButton = React.createRef();
    this.dramaButton = React.createRef();
    this.familyButton = React.createRef();
    this.fantasyButton = React.createRef();
    this.historyButton = React.createRef();
    this.horrorButton = React.createRef();
    this.musicButton = React.createRef();
    this.misteryButton = React.createRef();
    this.romanceButton = React.createRef();
    this.scienceButton = React.createRef();
    this.tvButton = React.createRef();
    this.thrillerButton = React.createRef();
    this.warButton = React.createRef();
    this.westernButton = React.createRef();
  }

  state = {
    id: "",
    filter: [],
  };

  filterMovies = async () => {
    const { id } = this.state;
    this.actionButton = this.setState({ id: "28" });
    this.adventureButton = this.setState({ id: "12" });
    this.animationButton = this.setState({ id: "16" });
    this.comedyButton = this.setState({ id: "35" });
    this.crimeButton = this.setState({ id: "80" });
    this.documentaryButton = this.setState({ id: "99" });
    this.dramaButton = this.setState({ id: "18" });
    this.familyButton = this.setState({ id: "10715" });
    this.fantasyButton = this.setState({ id: "14" });
    this.historyButton = this.setState({ id: "36" });
    this.horrorButton = this.setState({ id: "27" });
    this.musicButton = this.setState({ id: "10402" });
    this.misteryButton = this.setState({ id: "9648" });
    this.romanceButton = this.setState({ id: "10749" });
    this.scienceButton = this.setState({ id: "878" });
    this.tvButton = this.setState({ id: "10770" });
    this.thrillerButton = this.setState({ id: "53" });
    this.warButton = this.setState({ id: "10752" });
    this.westernButton = this.setState({ id: "37" });
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=6&with_genres=${id}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ filter: data.results, loading: false });
  };

  renderMovies = () => {
    const { filter } = this.state;
    const moviePath = "http://image.tmdb.org/t/p/w185";
    const results = filter.map((movie) => (
      <InfoCard key={movie.id}>
        <h1>{movie.title}</h1>
        <h6>Popularity : </h6>
        <InfoPill>{parseInt(movie.popularity)}</InfoPill>
        <img src={moviePath + movie.poster_path} alt="" />
        <InfoText>Release date : {movie.release_date}</InfoText>
        <InfoText>Plot : {movie.overview}</InfoText>
      </InfoCard>
    ));
    return results;
  };

  render() {
    const { filter } = this.state;
    return (
      <>
        <Title>Categories: </Title>
        <MovieList>
          <li>
            <button ref={this.actionButton} onClick={this.filterMovies}>
              Action
            </button>
          </li>
          <li>
            <button ref={this.adventureButton} onClick={this.filterMovies}>
              Adventure
            </button>
          </li>
          <li>
            <button ref={this.animationButton} onClick={this.filterMovies}>
              Animation
            </button>
          </li>
          <li>
            <button ref={this.comedyButton} onClick={this.filterMovies}>
              Comedy
            </button>
          </li>
          <li>
            <button ref={this.crimeButton} onClick={this.filterMovies}>
              Crime
            </button>
          </li>
          <li>
            <button ref={this.documentaryButton} onClick={this.filterMovies}>
              Documentary
            </button>
          </li>
          <li>
            <button ref={this.dramaButton} onClick={this.filterMovies}>
              Drama
            </button>
          </li>
          <li>
            <button ref={this.familyButton} onClick={this.filterMovies}>
              Family
            </button>
          </li>
          <li>
            <button ref={this.fantasyButton} onClick={this.filterMovies}>
              Fantasy
            </button>
          </li>
          <li>
            <button ref={this.historyButton} onClick={this.filterMovies}>
              History
            </button>
          </li>
          <li>
            <button ref={this.horrorButton} onClick={this.filterMovies}>
              Horror
            </button>
          </li>
          <li>
            <button ref={this.musicButton} onClick={this.filterMovies}>
              Music
            </button>
          </li>
          <li>
            <button ref={this.misteryButton} onClick={this.filterMovies}>
              Mistery
            </button>
          </li>
          <li>
            <button ref={this.romanceButton} onClick={this.filterMovies}>
              Romance
            </button>
          </li>
          <li>
            <button ref={this.scienceButton} onClick={this.filterMovies}>
              Science - Fiction
            </button>
          </li>
          <li>
            <button ref={this.tvButton} onClick={this.filterMovies}>
              Tv movie
            </button>
          </li>
          <li>
            <button ref={this.thrillerButton} onClick={this.filterMovies}>
              Thriller
            </button>
          </li>
          <li>
            <button ref={this.warButton} onClick={this.filterMovies}>
              War
            </button>
          </li>
          <li>
            <button ref={this.westernButton} onClick={this.filterMovies}>
              Western
            </button>
          </li>
        </MovieList>
        <div>
          {this.state.loading || !this.state.filter ? (
            <ResponseText> loading...</ResponseText>
          ) : (
            !_.isEmpty(filter) && this.renderMovies()
          )}
        </div>
      </>
    );
  }
}

export default Categories;
