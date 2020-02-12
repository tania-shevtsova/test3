import React from "react";
import shortid from "shortid";
import { NavLink } from "react-router-dom";

const div = {
  display: "flex"
};
const image = {
  marginRight: "10px",
  marginBottom: "10px"
};

const genreListStyle = {
  listStyle: "none",
  display: "flex",
  padding: "0"
};

const genreItemStyle = {
  marginRight: "7px"
};

const additionalStyle = {
  borderTop: "1px solid #ccc",
  borderBottom: "1px solid #ccc"
};

const activeStyle = {
  color: "palevioletred"
};

const MovieDetails = ({ movies = [], onGoBack }) => {
  return (
    <>
      <button onClick={onGoBack}>{`\u25c0`} Go back</button>

      {movies && (
        <div style={div}>
          {movies.poster_path && (
            <img
              style={image}
              src={`https://image.tmdb.org/t/p/w400${movies.poster_path}`}
              alt=""
            ></img>
          )}

          <div>
            <h2>
              {movies.title} ({`${movies.release_date}`.slice(0, 4)})
            </h2>
            <p> User Score: {`${movies.vote_average}` * 10}%</p>
            <h2>Overview</h2>
            <p>{movies.overview}</p>
            <h2>Genres</h2>
            <ul style={genreListStyle}>
              {movies.genres &&
                movies.genres.length > 0 &&
                movies.genres.map(el => (
                  <li style={genreItemStyle} key={shortid()}>
                    {el.name}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
      <div style={additionalStyle}>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to={`/movies/${movies.id}/cast`} activeStyle={activeStyle}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/movies/${movies.id}/reviews`}
              activeStyle={activeStyle}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MovieDetails;
