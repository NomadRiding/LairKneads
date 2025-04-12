import React, { useState } from "react";
import "./Slideshow.css";

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current slide

  const slides = [
    "https://sallysbakingaddiction.com/wp-content/uploads/2018/10/homemade-banana-bread.jpg",
    "https://natashaskitchen.com/wp-content/uploads/2018/12/Chocolote-Banana-Bread-2.jpg",
    "https://www.dinneratthezoo.com/wp-content/uploads/2016/01/blueberry-banana-bread-3-2.jpg",
  ];

  const plusSlides = (n) => {
    setCurrentIndex((prevIndex) => (prevIndex + n + slides.length) % slides.length);
  };

  const currentSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          className="mySlides"
          key={index}
          style={{ display: index === currentIndex ? "block" : "none" }}
        >
          <img src={slide} alt={`Slide ${index + 1}`} />
        </div>
      ))}

      <a className="prev" onClick={() => plusSlides(-1)}>
        &#10094;
      </a>
      <a className="next" onClick={() => plusSlides(1)}>
        &#10095;
      </a>

      <div style={{ textAlign: "center" }}>
        {slides.map((_, index) => (
          <span
            className={`dot ${index === currentIndex ? "active" : ""}`}
            key={index}
            onClick={() => currentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;