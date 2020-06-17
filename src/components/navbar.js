import React from "react";
import { Link } from "react-router-dom";
import Styled, { ThemeProvider } from "styled-components";

const Nav = Styled.nav`

    font-size: 20px;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  height: 100%;
  width: 260px;
  padding: 20px 0px;
  background-color: rgb(237, 230, 230);

`;

const Ul = Styled.ul` 
list-style-type: none;
margin: 0;
padding: 0;
width: 200px;
`;

const Li = Styled.li`
display: block;
padding: 8px 16px;
text-decoration: none;
margin-left: 35px;
margin-bottom: 25px;
`;

function NavBar() {
  return (
    <div className="div">
      <Nav className="nav">
        <Ul>
          <Li className="nav-item">
            <Link
              to="/"
              className="nav-link"
              style={{
                color: "rgb(71, 68, 68)",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <i
              class="fas fa-home"
              style={{
                display: "block",
                position: "absolute",
                alignItems: "center",
                left: "225px",
                top: "35px",
              }}
            ></i>
          </Li>
          <Li>
            <Link
              to="/search"
              className="nav-link"
              style={{ color: "rgb(71, 68, 68)", textDecoration: "none" }}
            >
              Search
            </Link>
          </Li>
          <i
            className="fas fa-search"
            style={{
              display: "block",
              position: "absolute",
              alignItems: "center",
              left: "225px",
              top: "105px",
            }}
          ></i>
          <Li>
            <a href>Dropdown menu</a>
            <i
              class="fas fa-chevron-down"
              style={{
                display: "block",
                position: "absolute",
                alignItems: "center",
                left: "225px",
                top: "190px",
              }}
            ></i>
          </Li>
        </Ul>
        <hr />
      </Nav>
    </div>
  );
}

export default NavBar;
