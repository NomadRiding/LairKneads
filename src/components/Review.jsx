import React from "react"
import "./Review.css" // Import the CSS file for styling

function Review() {
  return (
    <div className="review-page">
      <div className="reviewSquare">
        <div className="headerSpace">
          <div className="profile">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEA2_vTW1kjFz5W0otnsEBJrXXMI5SYi2KQ&s"
              alt="Profile"
              className="profile-image"
            />
            <div className="profile-details">
              <h2 className="profile-name">Alyssa R.</h2>
              <div className="starRating">
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
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
          <strong>Chocolate Craving Crusher</strong>
        </p>
        <div className="reviewText">
          <p className="review-text">
            The Chocolate banana bread is dangerously good. Rich, soft, and gone
            in one sitting.
          </p>
        </div>
      </div>
      <div className="reviewSquare">
        <div className="headerSpace">
          <div className="profile">
            <img
              src="https://barbend.com/wp-content/uploads/2024/01/Wells.jpg"
              alt="Profile"
              className="profile-image"
            />
            <div className="profile-details">
              <h2 className="profile-name">Camille D.</h2>
              <div className="starRating">
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
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
          <strong>One more bite...</strong>
        </p>
        <div className="reviewText">
          <p className="review-text">
            Can't believe how delicious these are. I tried a slice, and now I
            order every weekend!
          </p>
        </div>
      </div>
      <div className="reviewSquare">
        <div className="headerSpace">
          <div className="profile">
            <img
              src="https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38="
              alt="Profile"
              className="profile-image"
            />
            <div className="profile-details">
              <h2 className="profile-name">Marcus J.</h2>
              <div className="starRating">
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
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
          <strong>Spicy Surprise</strong>
        </p>
        <div className="reviewText">
          <p className="review-text">
            Didn't expect to love Jalapeno banana bread, but wow! <br /> it's my
            new fav combo. Perfect sweet heat.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Review
