import React, { useState, useEffect } from "react"
import "./Review.css" // Import the CSS file for styling

function Review() {
  const reviews = [
    {
      name: "Alyssa R.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEA2_vTW1kjFz5W0otnsEBJrXXMI5SYi2KQ&s",
      title: "Chocolate Craving Crusher",
      text: "The Chocolate banana bread is dangerously good. Rich, soft, and gone in one sitting.",
    },
    {
      name: "Camille D.",
      image: "https://barbend.com/wp-content/uploads/2024/01/Wells.jpg",
      title: "One more bite...",
      text: "Can't believe how delicious these are. I tried a slice, and now I order every weekend!",
    },
    {
      name: "Marcus J.",
      image:
        "https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=",
      title: "Spicy Surprise",
      text: "Didn't expect to love Jalapeno banana bread, but wow! It's my new fav combo. Perfect sweet heat.",
    },
  ]

  const [currentIndex, setCurrentIndex] = React.useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(interval) // Cleanup interval on component unmount
  }, [reviews.length])

  const currentReview = reviews[currentIndex]

  return (
    <div className="review-page">
      <div className="reviewSquare">
        <div className="headerSpace">
          <div className="profile">
            <img
              src={currentReview.image}
              alt="Profile"
              className="profile-image"
            />
            <div className="profile-details">
              <h2 className="profile-name">{currentReview.name}</h2>
              <div className="starRating">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
              </div>
            </div>
          </div>
        </div>
        <p className="reviewTitle">
          <strong>{currentReview.title}</strong>
        </p>
        <div className="reviewText">
          <p className="review-text">{currentReview.text}</p>
        </div>
      </div>
    </div>
  )
}

export default Review
