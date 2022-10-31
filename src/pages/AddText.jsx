import React, { useState, useEffect } from 'react';
import Description from '../components/Description';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import SubTitle from '../components/SubTitle';
import Title from '../components/Title';
import { addDoc, collection, query, onSnapshot, doc } from 'firebase/firestore';
import { db } from '../firebase';

const AddText = () => {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'text'));
    const unSub = onSnapshot(q, (querySnapshot) => {
      const tempArray = [];
      querySnapshot.forEach((doc) => {
        tempArray.push({ ...doc.data(), id: doc.id });
      });
      setData(tempArray);
    });
    return () => unSub();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text !== '') {
      await addDoc(collection(db, 'text'), {
        text,
      });
    }
    setText('');
  };

  return (
    <section className="min-h-[70vh]">
      <Title title="Add Text" />
      <Description desc="Write some text and it’ll be displayed below:" />
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <textarea
          className="p-2 text-[#000] mt-8 mb-4 rounded-md"
          rows="10"
          cols="34"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text here...."
          required
        ></textarea>
        <PrimaryButton buttonType="submit" text="Submit" />
      </form>

      <div className="mt-16">
        <SubTitle subTitle="Fetched Text" />
        {data.map((text) => {
          return <p key={text.id}>{text.text}</p>;
        })}
      </div>
    </section>
  );
};

export default AddText;
