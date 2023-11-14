import styled from "@emotion/styled";
import React from "react";
import styles from "../styles";
import NavLink from "./shared/Link/NavLink";
import SVG from "../assets/SVG";

// ----------------
// style variables
// ----------------
const { colors, fonts } = styles;

// ---------------------------------------
// handleClick for back to Top button
// ---------------------------------------
const handelClick = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => (event.preventDefault(), window.scrollTo({ top: 0, behavior: "smooth" }));

// ---------------
// main component
// ---------------
const Footer: React.FC = () => {
  return (
    <Holder>
      <NavLink id="button-Back-to-Top" onClick={handelClick}>
        Back To Top
      </NavLink>

      <div className="Nav-Links-container">
        <ul className="pages-link-container">
          <li id="header">Links</li>
          <li>
            <NavLink to="/">Home Page</NavLink>
          </li>
          <li>
            <NavLink to="/additem">Sell With Us</NavLink>
          </li>
        </ul>
        <div className="payment-icons-container">
          <p id="header">Payment Methods</p>
          <SVG.cash />
          <SVG.masterCard />
          <SVG.visa />
        </div>
        <div className="social-media-links">
          <p id="header">Contact Us</p>
          <div>
            <NavLink to="https://www.facebook.com/">
              <SVG.facebook />
            </NavLink>
            <NavLink to="https://www.instagram.com/">
              <SVG.instagram />
            </NavLink>
            <NavLink to="https://www.twitter.com/">
              <SVG.twitter />
            </NavLink>
            <NavLink to="https://www.youtube.com/">
              <SVG.youtube />
            </NavLink>
          </div>
        </div>
      </div>

      <p className="Copyright">Copyright © 2023. All Rights Reserved.</p>
    </Holder>
  );
};

export default Footer;

// ----------------
// STYLED COMPONENT
// ----------------
const Holder = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr 2fr;
  background-color: ${colors.Blue};
  color: ${colors.white};
  text-align: center;

  #button-Back-to-Top {
    background-color: ${colors.lightBlue};
    text-align: center;
    padding: 0.75em;
    font-size: 0.9em;
  }

  .Nav-Links-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    #header {
      ${fonts.bold}
      margin-bottom: 0.7em;
    }
    .pages-link-container {
      li {
        list-style: none;
      }
      a {
        display: inline-block;
        font-size: 0.9em;
        ${fonts.light}
      }
    }
    .payment-icons-container {
      svg {
        margin: 0.2em;
      }
    }
  }

  .Copyright {
    font-size: 0.75em;
  }
`;
