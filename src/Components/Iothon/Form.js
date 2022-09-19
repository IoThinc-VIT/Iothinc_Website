import React, { useState, useEffect } from "react";

import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  onSnapshot,
} from "firebase/firestore";
import { app } from "../../Firebase/firebase";

import "./Form.css";

const MEMBER = {
  regNumber: "",
  fullName: "",
  email: "",
  contactNumber: "",
  paymentReciept: "",
};

const Teammate = (props) => {
  const { title, index, members, setMembers } = props;

  const handleMemberChange = (e, key) => {
    const { value } = e.target;
    if (value.length <= 40) {
      let newMembers = [];
      newMembers.push(...members);
      newMembers[index] = {
        ...newMembers[index],
        [key]: value,
      };
      setMembers(newMembers);
    }
  };

  const handleDelete = () => {
    if (index != 0) {
      let newMembers = members.filter((member, idx) => idx != index);
      setMembers(newMembers);
    }
  };

  return (
    <>
      <br></br>
      <h1 className="text-white">{title}</h1>
      <button onClick={handleDelete} className="text-white" type="button">
        delete
      </button>
      <br></br>

      <input
        type={"text"}
        value={members[index].regNumber}
        placeholder={"Reg Number"}
        onChange={(e) => handleMemberChange(e, "regNumber")}
        required
      />
      <input
        type={"text"}
        value={members[index].fullName}
        placeholder={"Full Name"}
        onChange={(e) => handleMemberChange(e, "fullName")}
        required
      />
      <input
        type={"email"}
        value={members[index].email}
        placeholder={"Email"}
        onChange={(e) => handleMemberChange(e, "email")}
        required
      />
      <input
        type={"text"}
        value={members[index].contactNumber}
        placeholder={"Contact Number"}
        onChange={(e) => handleMemberChange(e, "contactNumber")}
        required
      />
      <input
        type={"text"}
        value={members[index].paymentReciept}
        placeholder={"Payment reciept"}
        onChange={(e) => handleMemberChange(e, "paymentReciept")}
        required
      />
      <br></br>
    </>
  );
};

const Form = () => {
  const [teamName, setTeamName] = useState("");
  const [members, setMembers] = useState([MEMBER]);

  const db = getFirestore();

  useEffect(() => {
    // const listener = onSnapshot(collection(db, "teams"), (querySnapshot) => {
    //   let newTeams = [];
    //   querySnapshot.forEach((doc) => {
    //     newTeams.push(doc.data());
    //   });
    //   setTeams(newTeams);
    // });
  }, []);

  const isValidToSubmit = () => {
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValidToSubmit) {
      let data = {
        teamName,
      };
      members.forEach((member, idx) => {
        data = {
          ...data,
          [idx]: members[idx],
        };
      });
      const docRef = await addDoc(collection(db, "teams"), data);
      console.log(`Doc added: ${docRef.id}`);
      setTeamName("");
      setMembers([MEMBER]);
    }
  };

  const handleAddTeammate = () => {
    if (members.length < 4) {
      let newMembers = [];
      newMembers.push(...members);
      newMembers.push(MEMBER);
      setMembers(newMembers);
    }
  };

  return (
    <section className="set-bg section text-white">
      <form className="content__wrapper section-form-container text-black">
        <input
          type={"text"}
          value={teamName}
          placeholder={"Enter a Team Name"}
          onChange={(e) => {
            const { value } = e.target;
            if (value.length <= 30) {
              setTeamName(e.target.value);
            }
          }}
        />
        {members.map((member, index) => (
          <Teammate
            key={index}
            index={index}
            title={`Teammate ${index + 1}`}
            members={members}
            setMembers={setMembers}
          />
        ))}

        <button
          onClick={(e) => handleSubmit(e)}
          className="text-white"
          type="Submit"
        >
          Submit
        </button>
        <button
          onClick={handleAddTeammate}
          className="text-white"
          type="button"
        >
          Add Teammate
        </button>
      </form>
    </section>
  );
};

export default Form;
