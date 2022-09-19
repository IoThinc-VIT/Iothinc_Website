import React from "react";

import "./HowTo.scss";

const HowTo = () => {
  return (
    <section
      className="set-bg section section--participate w-full text-white text-center"
      id="participate"
    >
      <div className="content__wrapper">
        <h2 className="section__title">How to participate</h2>
        <dl className="participate__container">
          {/* <div className="participate__item">
            <dt>
              <h3 className="participate__title">Sponsor</h3>
            </dt>
            <dd>
              <p className="participate__desc">
                Don't just put your brand on another wall. Take the chance to
                shape the tech scene of tomorrow by adding real value and make
                it possible for hackers to build something they're proud of.
              </p>
              <div className="participate__bottom-row">
                <a
                  className=""
                  href="mailto:sponsor@hackupc.com"
                  role="button"
                  data-ga-apply-button
                  data-location="participate"
                  data-role="sponsor"
                >
                  <span className="btn red">Contact us</span>
                </a>
                <span className="participate__message"></span>
              </div>
            </dd>
          </div> */}
          <div className="participate__item">
            <dt>
              <h3 className="participate__title">Participant</h3>
            </dt>
            <dd>
              <p className="participate__desc">
                Get ready to strap yourself for a 2-day event of fun coding,
                interacting and learning. Coding experience is not entirely
                required, as we focus on learning more importantly.
              </p>
              <div className="participate__bottom-row">
                <a
                  className=""
                  href="https://events.vit.ac.in/events/gravitas2022/"
                  target="_blank"
                  role="button"
                  data-ga-apply-button
                  data-location="participate"
                  data-role="mentor"
                >
                  <span className="btn red">Apply</span>
                </a>
                <span className="participate__message"></span>
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default HowTo;
