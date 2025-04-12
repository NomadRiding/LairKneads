import React from "react"
import "./Review.css" // Import the CSS file for styling

function Review() {
  return (
    <div className="review-page">
      <div className="reviewSquare">
        <div className="profile">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEA2_vTW1kjFz5W0otnsEBJrXXMI5SYi2KQ&s"
            alt="Profile"
            className="profile-image"
          />
          <div className="profile-details">
            <h2 className="profile-name">Betty M.</h2>
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
        <div className="reviewText">
          <p className="review-text">This is a review text.</p>
        </div>
      </div>
      <div className="reviewSquare">
        <div className="profile">
          <img
            src="https://www.brandtalent.net/images/models/6261/ritzsport.jpg"
            alt="Profile"
            className="profile-image"
          />
          <div className="profile-details">
            <h2 className="profile-name">Jason L.</h2>
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
        <div className="reviewText">
          <p className="review-text">This is a review text.</p>
        </div>
      </div>
      <div className="reviewSquare">
        <div className="profile">
          <img
            src="https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38="
            alt="Profile"
            className="profile-image"
          />
          <div className="profile-details">
            <h2 className="profile-name">Rob S.</h2>
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
        <div className="reviewText">
          <p className="review-text">This is a review text.</p>
        </div>
      </div>
    </div>
  )
}

export default Review
