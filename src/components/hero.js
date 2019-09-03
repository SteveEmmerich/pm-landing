import React from "react"
import PropTypes from "prop-types"

import MailchimpForm from "../components/mailchimp-form"
import headerImage from "../images/header.png"
import MockupContent from "./image"
import mockupFrame from "../images/mockup-frame.png"

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
      }}
    />
    <h1 style={{ textAlign: "center" }}>Calling all Pool Masters</h1>
    <p style={{ textAlign: "center", maxWidth: 440 }}>
      Are you tired of getting constant calls and texts from clients asking if
      you have serviced their pool today? Are you looking for a way to better
      connect and communicate with those clients? Try out pool master. We make
      it easy for you and your clients to connect and track what has been done
      or needs to be done at the pool.
    </p>
    <MailchimpForm>Get Early Access</MailchimpForm>
    <div style={{ margin: 60, width: `250px`, position: "relative" }}>
      <div style={{ clipPath: "inset(2% 5% round 2% 5%)" }}>
        <MockupContent />
      </div>
      <div
        style={{
          position: "absolute",
          width: "250px",
          top: 0,
        }}
      >
        <img src={mockupFrame} alt="pool master screen shot." />
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
