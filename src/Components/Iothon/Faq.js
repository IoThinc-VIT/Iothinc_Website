import React, { useEffect } from "react";

import "./Faq.css";

const Faq = () => {
  useEffect(() => {
    const faqLinkElems = document.querySelectorAll(
      '.faq__answer[aria-hidden="true"] a'
    );
    for (const linkElem of faqLinkElems) {
      linkElem.tabIndex = -1;
    }

    const faqQuestionTitleElems = document.querySelectorAll(".faq__title");

    for (const faqQuestionTitleElem of faqQuestionTitleElems) {
      faqQuestionTitleElem.addEventListener("click", () => {
        const faqQuestionElem = faqQuestionTitleElem.closest(".faq__question");
        const faqAnswerElem =
          faqQuestionElem?.querySelector(".faq__answer") ?? null;

        if (faqQuestionElem && faqAnswerElem) {
          if (faqQuestionTitleElem.getAttribute("aria-expanded") === "true") {
            faqQuestionElem.classList.remove("faq__question--expanded");
            faqQuestionTitleElem.setAttribute("aria-expanded", "false");
            faqAnswerElem.setAttribute("aria-hidden", "true");
            faqAnswerElem.style.maxHeight = "";

            faqAnswerElem.querySelectorAll("a").forEach((linkElem) => {
              linkElem.tabIndex = -1;
            });
          } else {
            faqQuestionElem.classList.add("faq__question--expanded");
            faqAnswerElem.setAttribute("aria-hidden", "false");
            faqQuestionTitleElem.setAttribute("aria-expanded", "true");
            faqAnswerElem.style.maxHeight = `${faqAnswerElem.scrollHeight}px`;

            faqAnswerElem.querySelectorAll("a").forEach((linkElem) => {
              linkElem.tabIndex = 0;
            });
          }
        }
      });
    }
  }, []);

  return (
    <section className="set-bg section section--faq text-white" id="faq">
      <div className="content__wrapper">
        <h2 className="section__title">FAQ</h2>
        <div className="faq">
          <div className="faq__column">
            <div className="faq__category">
              <h3 className="faq__category-title">About IoThon</h3>
              <dl className="faq__list">
                <div className="faq__question">
                  <dt>
                    <button
                      className="faq__title"
                      type="button"
                      aria-expanded="false"
                      aria-controls="faq-about-0"
                    >
                      What is IoThon?
                    </button>
                  </dt>
                  <dd>
                    <p
                      className="faq__answer"
                      aria-hidden="true"
                      id="faq-about-0"
                    >
                      Teams compete during the 48 hour IoThon hackathon to develop the most innovative and workable solutions to real-world problems.
                    </p>
                  </dd>
                </div>
                <div className="faq__question">
                  <dt>
                    <button
                      className="faq__title"
                      type="button"
                      aria-expanded="false"
                      aria-controls="faq-about-1"
                    >
                      When & Where is IoThon?
                    </button>
                  </dt>
                  <dd>
                    <p
                      className="faq__answer"
                      aria-hidden="true"
                      id="faq-about-1"
                    >
                      Saturday, October 1st, at 10:00 a.m., the opening ceremony will begin. On Sunday, October 2, we aim to wrap things up by 8:00 p.m. The venue's exact details will soon be revealed
                    </p>
                  </dd>
                </div>
                <div className="faq__question">
                  <dt>
                    <button
                      className="faq__title"
                      type="button"
                      aria-expanded="false"
                      aria-controls="faq-about-3"
                    >
                      What can I build?
                    </button>
                  </dt>
                  <dd>
                    <p
                      className="faq__answer"
                      aria-hidden="true"
                      id="faq-about-3"
                    >
                      You can create any tech-related project that fits into the
                      given tracks, but you will receive bonus points if you
                      create something related to IoT.
                    </p>
                  </dd>
                </div>
                <div className="faq__question">
                  <dt>
                    <button
                      className="faq__title"
                      type="button"
                      aria-expanded="false"
                      aria-controls="faq-about-5"
                    >
                      What are the judging criteria?
                    </button>
                  </dt>
                  <dd>
                    <p
                      className="faq__answer"
                      aria-hidden="true"
                      id="faq-about-5"
                    >
                      Projects will be evaluated primarily on technical
                      difficulty, innovation, and overall learning experience,
                      with bonus points awarded for feasibility and uniqueness.
                    </p>
                  </dd>
                </div>
                <div className="faq__question">
                  <dt>
                    <button
                      className="faq__title"
                      type="button"
                      aria-expanded="false"
                      aria-controls="faq-about-7"
                    >
                      Do you have a code of conduct?
                    </button>
                  </dt>
                  <dd>
                    <p
                      className="faq__answer"
                      aria-hidden="true"
                      id="faq-about-7"
                    >
                      Yes, here it is:{" "}
                      <a
                        href="https://www.iothincvit.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        hrefLang="en"
                      >
                        Code of conduct
                      </a>
                      . <br />
                     Be courteous to your fellow participants. Any malpractices or foul play will result in disqualification without warning.
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="faq__column">
            <div className="faq__category">
              <h3 className="faq__category-title">Applications</h3>
              <dl className="faq__list">
                <div className="faq__question">
                  <dt>
                    <button
                      className="faq__title"
                      type="button"
                      aria-expanded="false"
                      aria-controls="faq-applications-0"
                    >
                      Who can attend?
                    </button>
                  </dt>
                  <dd>
                    <p
                      className="faq__answer"
                      aria-hidden="true"
                      id="faq-applications-0"
                    >
                      Anyone who is a college student is welcome to attend.
                    </p>
                  </dd>
                </div>
                <div className="faq__question">
                  <dt>
                    <button
                      className="faq__title"
                      type="button"
                      aria-expanded="false"
                      aria-controls="faq-applications-1"
                    >
                      How to apply?
                    </button>
                  </dt>
                  <dd>
                    <p
                      className="faq__answer"
                      aria-hidden="true"
                      id="faq-applications-1"
                    >
                      You must first register and pay through the gravitas
                      portal. Teams can be formed independently, and we will
                      finalise the team before the event.
                    </p>
                  </dd>
                </div>
                <div className="faq__question">
                  <dt>
                    <button
                      className="faq__title"
                      type="button"
                      aria-expanded="false"
                      aria-controls="faq-applications-2"
                    >
                      What are the registration costs?
                    </button>
                  </dt>
                  <dd>
                    <p
                      className="faq__answer"
                      aria-hidden="true"
                      id="faq-applications-2"
                    >
                      The registration fee is Rs 250 per person.
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="faq__category">
              <h3 className="faq__category-title">Teams</h3>
              <dl className="faq__list">
                <div className="faq__question">
                  <dt>
                    <button
                      className="faq__title"
                      type="button"
                      aria-expanded="false"
                      aria-controls="faq-teams-0"
                    >
                      What if I don't have any experience in coding and IoT?
                    </button>
                  </dt>
                  <dd>
                    <p
                      className="faq__answer"
                      aria-hidden="true"
                      id="faq-teams-0"
                    >
                      It's perfectly fine! In fact, you've come here to learn,
                      so no prior experience is required. We will assign mentors
                      to you who will constantly guide you throughout the event.
                    </p>
                  </dd>
                </div>
                <div className="faq__question">
                  <dt>
                    <button
                      className="faq__title"
                      type="button"
                      aria-expanded="false"
                      aria-controls="faq-teams-1"
                    >
                      What if I don't have a team?
                    </button>
                  </dt>
                  <dd>
                    <p
                      className="faq__answer"
                      aria-hidden="true"
                      id="faq-teams-1"
                    >
                      There's no need to be concerned! Meeting new people is
                      part of the fun of a hackathon. At the start of the event,
                      we will have a team building activity for everyone to meet
                      and form teams. We also have a Discord server where people
                      looking for teammates can connect.
                    </p>
                  </dd>
                </div>
                <div className="faq__question">
                  <dt>
                    <button
                      className="faq__title"
                      type="button"
                      aria-expanded="false"
                      aria-controls="faq-teams-2"
                    >
                      What is MAX(team_size)?
                    </button>
                  </dt>
                  <dd>
                    <p
                      className="faq__answer"
                      aria-hidden="true"
                      id="faq-teams-2"
                    >
                      If <code>myTeam.length &lt;= 4</code>, then you're good to
                      go. (Teams up to 4 members are allowed).
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <h3 className="faq__others-title">What if I have another question?</h3>
        <p className="faq__others-answer">
          DM us at if you want to contact us via email, drop us a line at{" "}
          <a
            href="mailto:iothinc@vit.ac.in"
            className="text-[#da0035] underline underline-offset-2"
          >
            IOTHINC
          </a>
        </p>
      </div>
    </section>
  );
};

export default Faq;
