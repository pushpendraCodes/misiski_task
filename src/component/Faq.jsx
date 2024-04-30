// src/FAQ.js
import React, { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const FAQ = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the FAQ if it's already open
    } else {
      setActiveIndex(index); // Open the clicked FAQ
    }
  };

  return (
    <div className="max-w-[90%] mx-auto my-2">
    <h2
    style={{ fontFamily: "nantes, georgia, serif" }}
     className="text-2xl text-center">You may be wondering</h2>
      {data.map((item, index) => (
        <div key={index} className="border-b py-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="flex items-center justify-between w-full focus:outline-none"
          >
            <p className="font-semibold">{item.question}</p>
            <span>{activeIndex === index ?<IoChevronUp className="w-5 h-5"/>  : <IoChevronDown className="w-5 h-5"/>}</span>
          </button>
          {activeIndex === index && (
            <p className="mt-2 text-gray-600">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
