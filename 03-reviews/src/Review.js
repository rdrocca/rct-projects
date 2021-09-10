import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkIndex = (number) => {
    if (number > people.length - 1) number = 0;
    if (number < 0) number = people.length - 1;
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  const rndPerson = () => {
    setIndex((index) => {
      let rndIndex = Math.floor(Math.random() * 10) % people.length;
      console.log(rndIndex);
      if (rndIndex === index) rndIndex = index + 1;
      console.log(rndIndex);
      return checkIndex(rndIndex);
    });
  };


  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>

      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={rndPerson}>surprise me</button>
    </article>
  );
};

export default Review;
