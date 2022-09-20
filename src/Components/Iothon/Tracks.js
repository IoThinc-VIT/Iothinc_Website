import React, { useEffect } from "react";

import "./Tracks.css";

const Tracks = () => {
  useEffect(() => {
    const trackLinkElems = document.querySelectorAll(
      '.track__answer[aria-hidden="true"] a'
    );
    for (const linkElem of trackLinkElems) {
      linkElem.tabIndex = -1;
    }

    const trackQuestionTitleElems = document.querySelectorAll(".track__title");

    for (const trackQuestionTitleElem of trackQuestionTitleElems) {
      trackQuestionTitleElem.addEventListener("click", () => {
        const trackQuestionElem =
          trackQuestionTitleElem.closest(".track__question");
        const trackAnswerElem =
          trackQuestionElem?.querySelector(".track__answer") ?? null;

        if (trackQuestionElem && trackAnswerElem) {
          if (trackQuestionTitleElem.getAttribute("aria-expanded") === "true") {
            trackQuestionElem.classList.remove("track__question--expanded");
            trackQuestionTitleElem.setAttribute("aria-expanded", "false");
            trackAnswerElem.setAttribute("aria-hidden", "true");
            trackAnswerElem.style.maxHeight = "";

            trackAnswerElem.querySelectorAll("a").forEach((linkElem) => {
              linkElem.tabIndex = -1;
            });
          } else {
            trackQuestionElem.classList.add("track__question--expanded");
            trackAnswerElem.setAttribute("aria-hidden", "false");
            trackQuestionTitleElem.setAttribute("aria-expanded", "true");
            trackAnswerElem.style.maxHeight = `${trackAnswerElem.scrollHeight}px`;

            trackAnswerElem.querySelectorAll("a").forEach((linkElem) => {
              linkElem.tabIndex = 0;
            });
          }
        }
      });
    }
  }, []);

  return (
    <section className="set-bg section section--track text-white" id="track">
      <div className="content__wrapper">
        <h2 className="section__title">TRACKS</h2>
        <div className="track">
          <div className="track__column">
            <div className="track__category">
              <h3 className="track__category-title"> IoThon</h3>
              <dl className="track__list">
                <div className="track__question">
                  <dt>
                    <button
                      className="track__title"
                      type="button"
                      aria-expanded="false"
                      aria-controls="track-about-0"
                    >
                      Urban innovation
                    </button>
                  </dt>
                  <dd>
                    <p
                      className="track__answer"
                      aria-hidden="true"
                      id="track-about-0"
                    >
                      The concept of urban innovation is closely related to the
                      trendy term "smart." It refers to provisions, solutions,
                      and methods for dealing with the problems associated with
                      major cities. Because the urban environment is becoming
                      increasingly relevant due to its growth and global
                      threats, new technologies developed in these areas provide
                      a sustainable horizon. By implementing better social and
                      economic convergence, participation, and smart mobility
                      solutions, these innovations can improve the quality of
                      life in cities.
                    </p>
                  </dd>
                </div>
                <div className="track__question">
                  <dt>
                    <button
                      className="track__title"
                      type="button"
                      aria-expanded="false"
                      aria-controls="track-about-1"
                    >
                      Disaster and public safety
                    </button>
                  </dt>
                  <dd>
                    <p
                      className="track__answer"
                      aria-hidden="true"
                      id="track-about-1"
                    >
                      IoT is revolutionising public safety by providing first
                      responders and citizens with reliable and secure
                      communication. As governments around the world prioritise
                      public safety and security, they must ensure the safety of
                      citizens, organisations, and financial institutions from
                      external threats.
                    </p>
                  </dd>
                </div>
                <div className="track__question">
                  <dt>
                    <button
                      className="track__title"
                      type="button"
                      aria-expanded="false"
                      aria-controls="track-about-3"
                    >
                      Healthcare
                    </button>
                  </dt>
                  <dd>
                    <p
                      className="track__answer"
                      aria-hidden="true"
                      id="track-about-3"
                    >
                      IoT-enabled devices have enabled remote monitoring in the
                      healthcare sector, unleashing the potential to keep
                      patients safe and healthy while also empowering physicians
                      to provide exceptional care. Patient engagement and
                      satisfaction have also increased as interactions with
                      doctors have become easier and more efficient.
                      Furthermore, remote monitoring of a patient's health helps
                      to shorten hospital stays and prevent re-admissions. IoT
                      also has a significant impact on lowering healthcare costs
                      and improving treatment outcomes. There are numerous
                      applications, such as remote patient monitoring systems,
                      depression and mood monitoring, and heart-rate monitoring,
                      among others.
                    </p>
                  </dd>
                </div>
                <div className="track__question">
                  <dt>
                    <button
                      className="track__title"
                      type="button"
                      aria-expanded="false"
                      aria-controls="track-about-5"
                    >
                      Robotics
                    </button>
                  </dt>
                  <dd>
                    <p
                      className="track__answer"
                      aria-hidden="true"
                      id="track-about-5"
                    >
                      The Internet of Things (IoT) is proving to be a game
                      changer in the automation and robotic industries. Although
                      IoT and robotics are perceived as separate fields, these
                      technologies are evolving in conjunction to improve human
                      life. The integration of IoT and robotics has reduced the
                      complexities of human tasks, allowing humans to perform
                      their daily activities with greater ease. Create feasible
                      and unique robots that can assist humans with dangerous
                      jobs or tasks that are impossible for humans to perform.
                    </p>
                  </dd>
                </div>
                <div className="track__question">
                  <dt>
                    <button
                      className="track__title"
                      type="button"
                      aria-expanded="false"
                      aria-controls="track-about-7"
                    >
                      Open Innovation
                    </button>
                  </dt>
                  <dd>
                    <p
                      className="track__answer"
                      aria-hidden="true"
                      id="track-about-7"
                    >
                      The challenge allows for unrestricted scope and
                      creativity. It's intended for those who are new to the
                      developer mindset, have an amazing new idea in mind, and
                      want to build on that concept, as well as possibly help
                      others explore ideas of their own. Choose a relevant
                      real-world problem and devise a workable solution.
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Tracks;
