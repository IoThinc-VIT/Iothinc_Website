import React from "react";

import "./Timeline.css";

const Timeline = () => {
  return (
    <section className="set-bg section" id="timeline">
      <div className="content__wrapper">
        <ul className="timeline_list">
          <li className="timeline_item timeline_right">
            <div className="timeline_info">
              <div className="timeline_desc">
                <h1 className="timeline_title">Ideation Round</h1>
                <p className="timeline_msg">
                  {" "}
                  This is the first round, in which you will brainstorm ideas
                  and determine whether they are feasible and viable to build in
                  48 hours.
                </p>
              </div>
              <div className="timeline_time">
                <p>Day 1</p>
                <p>10:00 - 13:00</p>
              </div>
            </div>
            <div className="timeline_icon">1</div>
          </li>
          <li className="timeline_item timeline_left">
            <div
              className="timeline_icon"
              style={{
                background: "linear-gradient(90deg, #0a9991cc, #6ffff0cc)",
              }}
            >
              2
            </div>
            <div className="timeline_info">
              <div className="timeline_desc">
                <h1 className="timeline_title">Lunch Break</h1>
                <p className="timeline_msg">
                  Take a short lunch break, get pumped up, and then return to
                  work on your idea.
                </p>
              </div>
              <div
                className="timeline_time"
                style={{
                  color: "#000",
                  background: "linear-gradient(90deg, #0a9991cc, #6ffff0cc)",
                }}
              >
                <p>13:00 - 15:00</p>
              </div>
            </div>
          </li>
          <li className="timeline_item timeline_right">
            <div className="timeline_info">
              <div className="timeline_desc">
                <h1 className="timeline_title">Phase 1</h1>
                <p className="timeline_msg">
                  We will have an initial Phase during this time, as well as a
                  speaker session during which our industry experts in the
                  fields of electronics and IoT will enlighten you with their
                  knowledge.
                </p>
              </div>
              <div
                className="timeline_time"
                style={{
                  color: "#000",
                  background: "linear-gradient(90deg, #0a9991cc, #6ffff0cc)",
                }}
              >
                <p>15:00 - 20:00</p>
              </div>
            </div>
            <div
              className="timeline_icon"
              style={{
                background: "linear-gradient(90deg, #0a9991cc, #6ffff0cc)",
              }}
            >
              3
            </div>
          </li>
          <li className="timeline_item timeline_left">
            <div className="timeline_icon" style={{ background: "#CAE9FF" }}>
              4
            </div>
            <div className="timeline_info">
              <div className="timeline_desc">
                <h1 className="timeline_title">Dinner Break</h1>
                <p className="timeline_msg">
                  Pump yourself up with caffeine and return to the venue for an
                  all-nighter. Don't worry, we'll provide energy drinks to keep
                  you energised and hydrated.
                </p>
              </div>
              <div
                className="timeline_time"
                style={{ color: "#000", background: "#CAE9FF" }}
              >
                <p>20:00 - 22:00</p>
              </div>
            </div>
          </li>
          <li className="timeline_item timeline_right">
            <div className="timeline_info">
              <div className="timeline_desc">
                <h1 className="timeline_title">Phase 2</h1>
                <p className="timeline_msg">
                  A second Phase would be conducted during this phase to assess
                  the progress of your project and how well you have implemented
                  your ideas.
                </p>
              </div>
              <div
                className="timeline_time"
                style={{ color: "#000", background: "#BEE9E8" }}
              >
                <p>Day 1 - Day 2</p>
                <p>22:00 - 10:00</p>
              </div>
            </div>
            <div className="timeline_icon" style={{ background: "#BEE9E8" }}>
              5
            </div>
          </li>
          <li className="timeline_item timeline_left">
            <div className="timeline_icon" style={{ background: "#BEE9E8" }}>
              6
            </div>
            <div className="timeline_info">
              <div className="timeline_desc">
                <h1 className="timeline_title">Break</h1>
                <p className="timeline_msg">
                  Go out to lunch with your friends and return after a filling
                  meal. The real fight for victory begins now.
                </p>
              </div>
              <div
                className="timeline_time"
                style={{ color: "#000", background: "#BEE9E8" }}
              >
                <p>10:00 - 14:00</p>
              </div>
            </div>
          </li>
          <li className="timeline_item timeline_right">
            <div className="timeline_info">
              <div className="timeline_desc">
                <h1 className="timeline_title">Phase 3</h1>
                <p className="timeline_msg">
                  This is the event's final stage, and you must complete the
                  full implementation of your project by 6 p.m.
                </p>
              </div>
              <div
                className="timeline_time"
                style={{ color: "#000", background: "#5FA8D3" }}
              >
                <p>14:00 – 18:00</p>
              </div>
            </div>
            <div className="timeline_icon" style={{ background: "#5FA8D3" }}>
              7
            </div>
          </li>
          <li className="timeline_item timeline_left timeline_last">
            <div className="timeline_icon" style={{ background: "#5FA8D3" }}>
              8
            </div>
            <div className="timeline_info">
              <div className="timeline_desc">
                <h1 className="timeline_title">Final Presentation</h1>
                <p className="timeline_msg">
                  This is your final presentation of your prototype project in
                  front of industry experts, who will evaluate your project
                  based on some metrics and determine who will take home the
                  victory!
                </p>
              </div>
              <div
                className="timeline_time"
                style={{ color: "#000", background: "#5FA8D3" }}
              >
                <p>18:00 - 20:00</p>
              </div>
            </div>
          </li>
          {/* <li className="timeline_item timeline_right">
            <div className="timeline_info">
              <div className="timeline_desc">
                <h1 className="timeline_title">Phase-3</h1>
                <p className="timeline_msg">
                  The third and final round begins, where the top 15
                  participants from the previous round can participate.
                </p>
              </div>
              <div
                className="timeline_time"
                style={{ color: "#000", background: "#24b47e" }}
              >
                <p>13:00 – 16:30</p>
              </div>
            </div>
            <div className="timeline_icon" style={{ background: "#aff1b6" }}>
              9
            </div>
          </li>
          <li className="timeline_item timeline_left">
            <div className="timeline_icon" style={{ background: "#f6a4ec" }}>
              10
            </div>
            <div className="timeline_info">
              <div className="timeline_desc">
                <h1 className="timeline_title">Speaker Session</h1>
                <p className="timeline_msg">
                  {" "}
                  We are thrilled to announce that Mr./Mrs./Ms. ABC will be
                  present to give his/her ‘s ideas and views on the current fad.
                </p>
              </div>
              <div
                className="timeline_time"
                style={{ color: "#000", background: "#9251ac" }}
              >
                <p>16:30 – 17:00</p>
              </div>
            </div>
          </li>
          <li className="timeline_item timeline_right">
            <div className="timeline_info">
              <div className="timeline_desc">
                <h1 className="timeline_title">Results</h1>
                <p className="timeline_msg">
                  {" "}
                  Yayy!!! The results will be out and the winners will be
                  mentioned.
                </p>
              </div>
              <div
                className="timeline_time"
                style={{ color: "#000", background: "#555ac0" }}
              >
                <p>17:30</p>
              </div>
            </div>
            <div className="timeline_icon" style={{ background: "#87bbfe" }}>
              11
            </div>
          </li>
          <li className="timeline_item timeline_left timeline_last">
            <div className="timeline_icon" style={{ background: "#aff1b6" }}>
              12
            </div>
            <div className="timeline_info">
              <div className="timeline_desc">
                <h1 className="timeline_title">
                  Ending Ceremony and Prize Distribution
                </h1>
                <p className="timeline_msg">
                  {" "}
                  Hence, we officially conclude the hackathon with the prize
                  distribution for the winners, who displayed their unparalleled
                  talent and skill throughout.
                </p>
              </div>
              <div
                className="timeline_time"
                style={{ color: "#000", background: "#24b47e" }}
              >
                <p>18:00</p>
              </div>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};

export default Timeline;
