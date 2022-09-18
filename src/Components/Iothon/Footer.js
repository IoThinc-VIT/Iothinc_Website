import React from "react";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="set-bg section section--footer" id="footer">
      <div className="footer-column footer__element"></div>

      <q className="signature footer__element footer__element--last">
        <strong>Made</strong> with ❤ by{" "}
        <strong>
          <a
            className="signature__author footer__link"
            href="https://www.iothincvit.in/"
            target="_blank"
            rel="noopener noreferrer"
            hrefLang="en"
          >
            IoThinC-VIT
          </a>
        </strong>
      </q>
    </footer>
  );
};

export default Footer;
