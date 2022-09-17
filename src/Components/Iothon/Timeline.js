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
                <h1 className="timeline_title">Opening Ceremony</h1>
                <p className="timeline_msg">
                  {" "}
                  We officially inaugurate our club’s grandest hackathon to the
                  students.
                </p>
              </div>
              <div className="timeline_time">
                <p>DAY 1</p>
                <p>16:00 - 18:00</p>
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
                <h1 className="timeline_title">Attendance and Icebreaker</h1>
                <p className="timeline_msg">
                  Attendance for the event is taken and a fun activity is
                  conducted to welcome and warm-up the contestants.
                </p>
              </div>
              <div
                className="timeline_time"
                style={{
                  color: "#000",
                  background: "linear-gradient(90deg, #0a9991cc, #6ffff0cc)",
                }}
              >
                <p>18:00 - 18:30</p>
              </div>
            </div>
          </li>
          <li className="timeline_item timeline_right">
            <div className="timeline_info">
              <div className="timeline_desc">
                <h1 className="timeline_title">Speaker Session</h1>
                <p className="timeline_msg">
                  We are extremely lucky to be in the presence of Mr./Mrs./Ms.
                  XYZ, who will share his/her’s own experience on hackathons and
                  how our country is developing technologically.
                </p>
              </div>
              <div
                className="timeline_time"
                style={{
                  color: "#000",
                  background: "linear-gradient(90deg, #0a9991cc, #6ffff0cc)",
                }}
              >
                <p>18:30 - 19:00</p>
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
                <h1 className="timeline_title">Review-1</h1>
                <p className="timeline_msg">
                  The first round of the event officially begins from now.
                </p>
              </div>
              <div
                className="timeline_time"
                style={{ color: "#000", background: "#CAE9FF" }}
              >
                <p>DAY 2</p>
                <p>09:00 - 11:00</p>
              </div>
            </div>
          </li>
          <li className="timeline_item timeline_right">
            <div className="timeline_info">
              <div className="timeline_desc">
                <h1 className="timeline_title">Elimination-1</h1>
                <p className="timeline_msg">
                  Results of Review-1 will be announced, and the selected
                  participants are given a brief walk-through of the next round.
                </p>
              </div>
              <div
                className="timeline_time"
                style={{ color: "#000", background: "#BEE9E8" }}
              >
                <p>12:00</p>
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
                <h1 className="timeline_title">Community Event</h1>
                <p className="timeline_msg">
                  A fun, encouraging community event is hosted in the meantime,
                  to lift the spirits of the participants.
                </p>
              </div>
              <div
                className="timeline_time"
                style={{ color: "#000", background: "#BEE9E8" }}
              >
                <p>15:00 - 16:00</p>
              </div>
            </div>
          </li>
          <li className="timeline_item timeline_right">
            <div className="timeline_info">
              <div className="timeline_desc">
                <h1 className="timeline_title">Review-2</h1>
                <p className="timeline_msg">
                  The second round of the event officially begins. Only the
                  qualified participants from Review-1 can participate.
                </p>
              </div>
              <div
                className="timeline_time"
                style={{ color: "#000", background: "#5FA8D3" }}
              >
                <p>22:30 – 01:00</p>
              </div>
            </div>
            <div className="timeline_icon" style={{ background: "#5FA8D3" }}>
              7
            </div>
          </li>
          <li className="timeline_item timeline_left">
            <div className="timeline_icon" style={{ background: "#5FA8D3" }}>
              8
            </div>
            <div className="timeline_info">
              <div className="timeline_desc">
                <h1 className="timeline_title">Elimination-2</h1>
                <p className="timeline_msg">
                  Results of Review-2 will be announced, and the selected
                  participants are given a brief walk-through of the next round.
                </p>
              </div>
              <div
                className="timeline_time"
                style={{ color: "#000", background: "#5FA8D3" }}
              >
                <p>DAY 3</p>
                <p>02:00</p>
              </div>
            </div>
          </li>
          <li className="timeline_item timeline_right">
            <div className="timeline_info">
              <div className="timeline_desc">
                <h1 className="timeline_title">Review-3</h1>
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
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Timeline;
