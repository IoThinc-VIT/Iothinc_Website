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
              <h3 className="faq__category-title">About HackUPC</h3>
              <dl className="faq__list">
                <div className="faq__question">
                  <dt>
                    <button
                      className="faq__title"
                      type="button"
                      aria-expanded="false"
                      aria-controls="faq-about-0"
                    >
                      What is HackUPC?
                    </button>
                  </dt>
                  <dd>
                    <p
                      className="faq__answer"
                      aria-hidden="true"
                      id="faq-about-0"
                    >
                      HackUPC is the first student hackathon in Spain. This will
                      be our seventh edition with lots of side activities to
                      learn new technologies, meet interesting people and have
                      fun. Come make history with us!
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
                      When & Where is HackUPC?
                    </button>
                  </dt>
                  <dd>
                    <p
                      className="faq__answer"
                      aria-hidden="true"
                      id="faq-about-1"
                    >
                      The opening ceremony{" "}
                      <strong>starts at 7:00 p.m. on Friday</strong>, May 14th.
                      We expect to
                      <strong>finish by 5:00 p.m. on Sunday</strong> 16th.{" "}
                      <br />
                      HackUPC will take place <strong>online</strong> using
                      Discord as the main platform.
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
                      You can build any tech-related project, we do not have
                      restrictions over the topic. Some examples are webpages,
                      mobile apps, hardware projects, games, an API... Remember
                      that you can also use a variety of hardware components,
                      from Arduino kits and Raspberry Pi's, to Amazon Echo dots
                      and Myo Arm.
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
                      Projects will be judged based on technical difficulty,
                      innovation and overall learning experience mainly, but
                      also on their usability and design, by a panel of industry
                      judges and UPC faculty.
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
                      Yes, here it is:
                      <a
                        href="https://www.iothincvit.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        hrefLang="en"
                      >
                        Code of conduct
                      </a>
                      . <br />
                      TL;DR: Be respectful, harassment and abuse are never
                      tolerated.
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
                      Students from all around the world which are at least 14
                      years old can apply. University, vocational training, high
                      school, etc., students are all welcome! For under 18
                      cases, we will request a letter signed by parents or legal
                      tutor to attend.
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
                      How to make a good application?
                    </button>
                  </dt>
                  <dd>
                    <p
                      className="faq__answer"
                      aria-hidden="true"
                      id="faq-applications-1"
                    >
                      Try to make a difference amongst other hackers, be
                      creative! However, above all, remember to be humble. In
                      our Medium page, you can find a great
                      <a
                        href="https://medium.com/iothincvit"
                        target="_blank"
                        rel="noopener noreferrer"
                        hrefLang="en"
                      >
                        post
                      </a>
                      in which are detailed all the steps to make your
                      application even greater. Make sure you
                      <a
                        href="https://medium.com/iothincvit"
                        target="_blank"
                        rel="noopener noreferrer"
                        hrefLang="en"
                      >
                        check it out
                      </a>
                      !
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
                      What if I am not a student?
                    </button>
                  </dt>
                  <dd>
                    <p
                      className="faq__answer"
                      aria-hidden="true"
                      id="faq-applications-2"
                    >
                      As long as you graduated no longer than a year ago, you
                      can still be accepted as a hacker. Nevertheless, if that
                      isn't your case and you don't want to miss HackUPC, you
                      can apply as a mentor!
                    </p>
                  </dd>
                </div>
                <div className="faq__question">
                  <dt>
                    <button
                      className="faq__title"
                      type="button"
                      aria-expanded="false"
                      aria-controls="faq-applications-3"
                    >
                      How does applying in teams work?
                    </button>
                  </dt>
                  <dd>
                    <p
                      className="faq__answer"
                      aria-hidden="true"
                      id="faq-applications-3"
                    >
                      When you apply, you can create or join a team and you're
                      able to change that until you are accepted. <br />
                      When more than 50% of the team members are accepted, the
                      remaining ones are automatically accepted. <br />
                      Note that teams created in the registration are not
                      definitive, so you change your team during the hackathon.
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
                      What if I don't have coding experience?
                    </button>
                  </dt>
                  <dd>
                    <p
                      className="faq__answer"
                      aria-hidden="true"
                      id="faq-teams-0"
                    >
                      It's completely fine! In fact, you come here to learn, so
                      you don't need any previous experience. We would love to
                      receive your application!
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
                      No need to worry! Part of the fun of a hackathon is
                      meeting new people. We will have a team building activity
                      at the beginning of the event for everyone to meet and
                      form teams.
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
                      What is the max team size?
                    </button>
                  </dt>
                  <dd>
                    <p
                      className="faq__answer"
                      aria-hidden="true"
                      id="faq-teams-2"
                    >
                      If <code>myTeam.length &lt;= 4</code>, you're good to go.{" "}
                      <br />
                      Teams up to 4 members are welcome. Have in mind that if
                      your team is bigger, you won't be able to participate in
                      any HackUPC competition or challenge.
                    </p>
                  </dd>
                </div>
                <div className="faq__question">
                  <dt>
                    <button
                      className="faq__title"
                      type="button"
                      aria-expanded="false"
                      aria-controls="faq-teams-3"
                    >
                      Can I change my team during the hackathon? How?
                    </button>
                  </dt>
                  <dd>
                    <p
                      className="faq__answer"
                      aria-hidden="true"
                      id="faq-teams-3"
                    >
                      Yes, in fact, we encourage you to team up with hackers you
                      meet there. You'll meet awesome people! <br />
                      To change your team you don’t have to notify us, just put
                      your team members in the final project submission.
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
            href="mailto:iothin.community@gmail.com"
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
