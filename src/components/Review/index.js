import React, { useState } from "react";
import "./review.css";
import people from "./data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  //   const randomPerson = () => {
  //     let randomNumber = Math.random() * people.length;
  //     randomNumber = Math.floor(randomNumber);
  //     if (randomNumber === index) {
  //       randomNumber = index + 1;
  //     }
  //     setIndex(checkNumber(randomNumber));
  //   };

  return (
    <>
      <article className="review">
        <h1>Testimonials</h1>
        <div className="img-container mt-4">
          <img src={image} alt={name} className="person-img" />
        </div>
        <h4 className="author">{name}</h4>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        {/* <button className="random-btn" onClick={randomPerson}>
          random review
        </button> */}
      </article>
    </>
  );
};

export default Review;
