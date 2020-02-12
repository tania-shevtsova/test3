import React, { Component } from "react";
import MovieDetails from "../components/movie-details/MovieDetails";
import axios from "axios";
import CastPage from "./CastPage";
import { Route, Redirect } from "react-router-dom";
import ReviewsPage from "./ReviewsPages";
const queryString = require("query-string");

class MovieDetailsPage extends Component {
  state = { movies: [], isValid: true, locationLink: "" };

  componentDidMount = async () => {
    if (this.props.location.state) {
      this.setState({
        locationLink: this.props.location.state.locationLink
      });
    }
    const { match } = this.props;
    const { movieId } = match.params;
    const BASE_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=cf7e1750a0f8b90bb35162b1428fcf90&language=en-US`;

    try {
      await axios.get(BASE_URL).then(data =>
        this.setState({
          isValid: this.props.match.params.id,
          movies: data.data
        })
      );
    } catch (e) {
      console.log("ERRROR", e);
    }
  };

  handleGoBack = () => {
    if (this.state.locationLink !== "") {
      this.props.history.push(this.state.locationLink);
    } else {
      this.props.history.push("/");
    }
  };

  render() {
    const { movies } = this.state;

    return (
      <>
        {!this.props.match.url && <Redirect to="/" />}
        <MovieDetails movies={movies} onGoBack={this.handleGoBack} />
        <Route path={`${this.props.match.path}/cast`} component={CastPage} />
        <Route
          path={`${this.props.match.path}/reviews`}
          component={ReviewsPage}
        />
      </>
    );
  }
}

export default MovieDetailsPage;
