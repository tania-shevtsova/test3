import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import shortid from "shortid";

const BASE_URL =
  "https://api.themoviedb.org/3/trending/all/day?api_key=cf7e1750a0f8b90bb35162b1428fcf90";

class HomePage extends Component {
  state = { movies: [] };

  componentDidMount = async () => {
    await axios.get(BASE_URL).then(data => {
      this.setState({
        movies: data.data.results
      });
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <h2>Trending today</h2>
        <ul>
          {movies.map(el => (
            <li key={shortid()}>
              <Link
                to={{
                  pathname: `/movies/${el.id}`,
                  state: {
                    from: this.props.location,
                    locationLink: this.props.location.pathname
                  }
                }}
              >
                {el.title}
                {el.name}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default withRouter(HomePage);
