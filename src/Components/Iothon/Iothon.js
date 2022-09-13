import React, { useEffect } from "react";
import { useState } from "react";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  onSnapshot,
} from "firebase/firestore";
import { app } from "../../Firebase/firebase";

const Iothon = () => {
  const [samples, setSamples] = useState([]);
  const [something, setSomething] = useState("");

  const db = getFirestore();

  useEffect(() => {
    const listener = onSnapshot(collection(db, "samples"), (querySnapshot) => {
      let newSamples = [];
      querySnapshot.forEach((doc) => {
        newSamples.push(doc.data());
      });
      setSamples(newSamples);
    });
  }, []);

  const handleSubmit = async () => {
    const docRef = await addDoc(collection(db, "samples"), {
      content: something,
    });
    console.log(`Doc added: ${docRef.id}`);
    setSomething("");
  };

  return (
    <div className="flex flex-col gap-4 p-11">
      <h1 className="text-white text-8xl">IOTHON</h1>
      <input
        className="text-black w-[400px] px-8 py-3"
        type="text"
        placeholder="Enter something!"
        value={something}
        onChange={(e) => setSomething(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-white text-black w-[200px] px-4 py-2"
      >
        Submit
      </button>
      <br></br>
      <br></br>
      <br></br>
      <ul className="text-white text-xl">
        {samples && samples.map((sample, index) => (
          <li key={index}>{sample?.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Iothon;
