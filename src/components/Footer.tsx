import styled from "@emotion/styled";
import React from "react";
import styles from "../styles";
import Link from "./shared/Link";
import SVG from "../assets/SVG";

// ----------------
// style varibales
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

      <div className="Nav-Links-contianer">
        <h5>Buy</h5>
        <h5>Sell</h5>
        <div className="payment-icons">
          <h5>PAYMENT METHODS</h5>
          <SVG.cash />
          <SVG.masterCard />
          <SVG.visa />
        </div>
        <div className="social-media-links">
          <h5>Contact Us</h5>
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
  align-content: space-between;

  h5 {
    ${fonts.light}
    margin-bottom: 0.8em;
  }

  #button-Back-to-Top {
    background-color: ${colors.lightBlue};
    color: ${colors.white};
    text-align: center;
    padding: 0.75em;
    opacity: 0.75;
    font-size: 0.9em;
    :hover {
      opacity: 1;
    }
  }

  .Nav-Links-contianer {
    display: flex;
    justify-content: space-around;
    .social-media-links {
      text-align: center;
    }
    .payment-icons {
      text-align: center;
      svg {
        margin: 0.2em;
      }
    }
  }

  .Copyright {
    font-size: 0.75em;
    text-align: center;
    margin-bottom: 1em;
  }
`;
