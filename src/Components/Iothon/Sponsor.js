import React from "react";

import { ReactComponent as HackUpc } from "../../Images/Iothon/logos/hackupc_unrevealed.svg";
import { ReactComponent as HappyScribe } from "../../Images/Iothon/logos/happyscribe.svg";
import { ReactComponent as IThinkUpc } from "../../Images/Iothon/logos/ithinkupc.svg";
import { ReactComponent as Typeform } from "../../Images/Iothon/logos/typeform.svg";
import "./sponsors-and-partners.scss";
import "./logo-alignments.scss";

const Sponsor = () => {
  return (
    <section className="set-bg section section--sponsors" id="sponsors">
      <div className="content__wrapper">
        <h2 className="section__title text-white">Sponsors</h2>
        <ul className="logo__list logo__list--giga">
          <li className="logo__item logo__item--unrevealed">
            {/* <img
              src="assets/logos/hackupc_unrevealed.svg"
              alt="HackUPC"
              className="logo__image logo__image--hackupc"
              loading="lazy"
            /> */}
            <HackUpc
              alt="HackUPC"
              className="logo__image logo__image--hackupc"
              loading="lazy"
            />
          </li>
        </ul>

        <ul className="logo__list logo__list--mega">
          <li className="logo__item">
            <a
              className="logo__link"
              href="https://happyscribe.com/"
              target="_blank"
              rel="noopener noreferrer sponsored"
            >
              {/* <img
                src="assets/logos/happyscribe.svg"
                alt="HappyScribe"
                className="logo__image logo__image--happyscribe"
                loading="lazy"
              /> */}
              <HappyScribe
                alt="HappyScribe"
                className="logo__image logo__image--happyscribe"
                loading="lazy"
              />
            </a>
          </li>
          <li className="logo__item">
            <a
              className="logo__link"
              href="https://typeform.com/"
              target="_blank"
              rel="noopener noreferrer sponsored"
            >
              {/* <img
                src="assets/logos/typeform.svg"
                alt="Typeform"
                className="logo__image logo__image--typeform"
                loading="lazy"
              /> */}
              <Typeform
                alt="Typeform"
                className="logo__image logo__image--typeform"
                loading="lazy"
              />
            </a>
          </li>
        </ul>

        <ul className="logo__list logo__list--kilo">
          <li className="logo__item logo__item--unrevealed">
            {/* <img
              src="assets/logos/hackupc_unrevealed.svg"
              alt="HackUPC"
              className="logo__image logo__image--hackupc"
              loading="lazy"
            /> */}
            <HackUpc
              alt="HackUPC"
              className="logo__image logo__image--hackupc"
              loading="lazy"
            />
          </li>
          <li className="logo__item logo__item--unrevealed">
            {/* <img
              src="assets/logos/hackupc_unrevealed.svg"
              alt="HackUPC"
              className="logo__image logo__image--hackupc"
              loading="lazy"
            /> */}
            <HackUpc
              alt="HackUPC"
              className="logo__image logo__image--hackupc"
              loading="lazy"
            />
          </li>
          <li className="logo__item">
            <a
              className="logo__link"
              href="https://ithinkupc.com/"
              target="_blank"
              rel="noopener noreferrer sponsored"
              hrefLang="es-ES"
            >
              {/* <img
                src="assets/logos/ithinkupc.svg"
                alt="iThinkUPC"
                className="logo__image logo__image--ithinkupc"
                loading="lazy"
              /> */}
              <IThinkUpc
                alt="iThinkUPC"
                className="logo__image logo__image--ithinkupc"
                loading="lazy"
              />
            </a>
          </li>
          <li className="logo__item logo__item--unrevealed">
            {/* <img
              src="assets/logos/hackupc_unrevealed.svg"
              alt="HackUPC"
              className="logo__image logo__image--hackupc"
              loading="lazy"
            /> */}
            <HackUpc
              alt="HackUPC"
              className="logo__image logo__image--hackupc"
              loading="lazy"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sponsor;
