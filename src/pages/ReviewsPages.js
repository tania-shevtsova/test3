import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import shortid from "shortid";

class ReviewsPages extends Component {
  state = { movies: [] };

  componentDidMount = () => {
    const { match } = this.props;
    const { movieId } = match.params;
    const BASE_URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=cf7e1750a0f8b90bb35162b1428fcf90&page=1`;
    axios.get(BASE_URL).then(movies =>
      this.setState({
        movies: movies.data.results
      })
    );
  };
  render() {
    const { movies } = this.state;

    return (
      <>
        {movies.length > 0 ? (
          <ul>
            {movies.map(el => (
              <li key={shortid()}>
                <h4>Author: {el.author}</h4>
                <p>{el.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </>
    );
  }
}

export default withRouter(ReviewsPages);
