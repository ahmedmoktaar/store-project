import styled from "@emotion/styled";
import React from "react";
import styles from "../styles";
import Link from "./shared/Link";
import SVG from "../assets/SVG";

// ----------------
// style variables
// ----------------
const { colors, fonts } = styles;

// ---------------
// main component
// ---------------
const Footer: React.FC = () => {
  return (
    <Holder>
      <Link
        id="button-Back-to-Top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back To Top
      </Link>

      <div className="Nav-Links-container">
        <ul className="pages-link-container">
          <li id="header">Links</li>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/additem">Sell With Us</Link>
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
            <Link to="https://www.facebook.com/">
              <SVG.facebook />
            </Link>
            <Link to="https://www.instagram.com/">
              <SVG.instagram />
            </Link>
            <Link to="https://www.twitter.com/">
              <SVG.twitter />
            </Link>
            <Link to="https://www.youtube.com/">
              <SVG.youtube />
            </Link>
          </div>
        </div>
      </div>

      <div className="Copyright">Copyright © 2023. All Rights Reserved.</div>
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
