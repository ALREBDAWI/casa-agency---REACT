import React from "react";
import footerLogo from "../assets/footer_logo.png";

function Footer() {
  return (
    <footer>
      <img src={footerLogo} alt="Footer Logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
