import React, { useRef } from "react";
import clipart from "../Images/Connect Vector.png";
import send from "../Images/Group 975.png";
import emailjs from "@emailjs/browser";

const Query = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2299a2j",
        "template_cy7tzrm",
        form.current,
        "WkiSLarAyp739HhUg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="queries">
      <div className="queriesHeadLine text-5xl">Query</div>
      <div className="queriesSubLine">Get in touch with our team!</div>

      <div className="queriesForm">
        <div className="formLeft">
          <img src={clipart} alt="" srcSet="" />
        </div>
        <div className="formRight">
          <form ref={form}>
            <div className="form-group">
              <input
                type={"text"}
                name="from_name"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Full Name"
              />
              <input
                type={"email"}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email-ID"
                name="user_email"
              />
              <div className="textAreaContainer">
                <textarea
                  name="message"
                  className="form-control queryTextArea"
                  id="exampleFormControlInput1"
                  placeholder="Shoot your queries!"
                ></textarea>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={sendEmail}
                >
                  <img src={send}></img>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Query;
