import React from "react";

import "./Social.css";
import { ReactComponent as Discord } from "../../Images/Iothon/icons/icon-discord.svg";
import { ReactComponent as Facebook } from "../../Images/Iothon/icons/icon-facebook-circle.svg";
import { ReactComponent as Github } from "../../Images/Iothon/icons/icon-github-circle.svg";
import { ReactComponent as Instagram } from "../../Images/Iothon/icons/icon-instagram-circle.svg";
import { ReactComponent as Youtube } from "../../Images/Iothon/icons/icon-youtube-circle.svg";
import { ReactComponent as LinkedIn } from "../../Images/Iothon/icons/icon-linkedin-circle.svg";

const Social = () => {
  return (
    <section className="set-bg section section--follow-us" id="follow-us">
      <div className="content__wrapper">
        <h2 className="follow-us__title text-white">
          Stay tuned and don't miss a bit!
        </h2>
        <p className="follow-us__subtitle">Check our social media networks</p>
        <ul className="follow-us__list">
          <li className="follow-us__item">
            <a
              href="https://instagram.com/iothincvit?igshid=1t7197dnrvqwu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              {/* <img
                data-markup-inline
                src="assets/images/icons/icon-instagram-circle.svg"
                alt="Instagram"
              /> */}
              <Instagram alt="Instagram" />
            </a>
          </li>
          <li className="follow-us__item">
            <a
              href="https://www.facebook.com/iothincVIT/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              {/* <img
                data-markup-inline
                src="assets/images/icons/icon-facebook-circle.svg"
                alt="Facebook"
              /> */}
              <Facebook alt="Facebook" />
            </a>
          </li>
          <li className="follow-us__item">
            <a
              href="https://discord.gg/G9Wa2rHuKB"
              aria-label="Discord"
              target="_blank"
            >
              {/* <img
                data-markup-inline
                src="assets/images/icons/icon-email-circle.svg"
                alt="Email"
              /> */}
              <div className="w-[64px] h-[64px] bg-white flex justify-center items-center rounded-full">
                <Discord alt="Discord" width="44" height="44" />
              </div>
            </a>
          </li>
          <li className="follow-us__item">
            <a
              href="https://www.youtube.com/channel/UCr0gmDHLFsec0nS2lQp69eg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
            >
              {/* <img
                data-markup-inline
                src="assets/images/icons/icon-youtube-circle.svg"
                alt="Youtube"
              /> */}
              <Youtube alt="Youtube" />
            </a>
          </li>
          <li className="follow-us__item">
            <a
              href="https://www.linkedin.com/company/iothincvit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              {/* <img
                data-markup-inline
                src="assets/images/icons/icon-medium-circle.svg"
                alt="Medium"
              /> */}
              <LinkedIn alt="LinkedIn" style={{ transform: "scale(1.1)" }} />
            </a>
          </li>
          <li className="follow-us__item">
            <a
              href="https://github.com/IoThinc-VIT"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              {/* <img
                data-markup-inline
                src="assets/images/icons/icon-github-circle.svg"
                alt="Github"
              /> */}
              <Github alt="Github" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Social;
