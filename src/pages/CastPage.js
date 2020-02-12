import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import shortid from "shortid";

class CastPage extends Component {
  state = { movies: [] };

  componentDidMount = () => {
    const { match } = this.props;
    const { movieId } = match.params;
    const BASE_URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=cf7e1750a0f8b90bb35162b1428fcf90`;
    axios.get(BASE_URL).then(movies =>
      this.setState({
        movies: movies.data.cast
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
                {el.profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${el.profile_path}`}
                    alt=""
                  />
                )}
                <p>{el.name}</p>
                <p>Character: {el.character}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>This list is empty!</p>
        )}
      </>
    );
  }
}

export default withRouter(CastPage);
