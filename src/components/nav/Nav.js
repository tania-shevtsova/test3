import React from "react";
import { NavLink } from "react-router-dom";

const list = {
  display: "flex",
  listStyle: "none",
  padding: "20px 0 20px 0",
  margin: "0",
  fontSize: "20px",
  fontWeight: "500",
  boxShadow: "0 6px 5px 2px #ccc",
  marginBottom: "35px"
};

const item = {
  marginRight: "8px",
  paddingLeft: "20px"
};

const activeStyle = {
  color: "palevioletred"
};
const link = {
  textDecoration: "none",
  color: "#000"
};

const Nav = () => (
  <ul style={list}>
    <li style={item}>
      <NavLink to="/" exact activeStyle={activeStyle} style={link}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/movies" activeStyle={activeStyle} style={link}>
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Nav;
