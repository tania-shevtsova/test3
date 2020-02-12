import React, { Component } from "react";
import PNotify from "pnotify/dist/es/PNotify";
import PNotifyBrightTheme from "../../node_modules/pnotify/dist/PNotifyBrightTheme.css";
import axios from "axios";
import shortid from "shortid";
import { NavLink} from "react-router-dom";
const queryString = require("query-string");

const activeStyle = {
  color: "palevioletred"
};

const inputStyle = {
  width: "250px"
};

class MoviesPage extends Component {
  state = {
    movies: [],
    value: "",
    hasError: false,
    error: ""
  };

  componentDidMount = async () => {
    const { location } = this.props;
    const { query } = queryString.parse(location.search);
    const BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=cf7e1750a0f8b90bb35162b1428fcf90&language=en-US&page=1&include_adult=false&query=${query}`;
    try {
      if (query) {
        await axios.get(BASE_URL).then(movies => {
          this.setState({
            movies: movies.data.results
          });
        });
      }
    } catch (e) {
      console.log("Error", e);
    }
  };

  componentDidUpdate = prevProps => {
    const { location } = this.props;
    const { query } = queryString.parse(location.search);
    const BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=cf7e1750a0f8b90bb35162b1428fcf90&language=en-US&page=1&include_adult=false&query=${query}`;

    try {
      if (prevProps.location.search !== location.search) {
        axios.get(BASE_URL).then(movies => {
          if (movies.data.results.length !== 0) {
            this.setState({
              movies: movies.data.results
            });
          } else {
            PNotify.closeAll();
            PNotify.notice("Nothing was found 🤷🏾");
            this.props.history.replace("/movies");
          }
        });
        return;
      }
    } catch (e) {
      console.log("Error", e);
    }
  };

  handleChange = e => {
    PNotify.closeAll();
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.value === "") {
      this.props.history.push("/");
    }

    this.setState({
      value: ""
    });

    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${this.state.value}`
    });
  };

  render() {
    const { value, movies } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            style={inputStyle}
            onChange={this.handleChange}
            value={value}
          ></input>

          <button type="submit">Search</button>
        </form>

        <ul>
          {movies.map(el => (
            <li key={shortid()}>
              <NavLink
                to={{
                  pathname: `/movies/${el.id}`,
                  state: {
                    from: this.props.location,
                    locationLink:
                      this.props.location.pathname + this.props.location.search
                  }
                }}
                activeStyle={activeStyle}
              >
                {el.original_title}
              </NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
