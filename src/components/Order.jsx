import React from "react"
import Layout from "./Layout"
import "./Order.css" // Import the CSS file for styling
import ClassicBB from "../Products/ClassicBB"
import ChocolateBB from "../Products/ChocolateBB"
import StrawberryBB from "../Products/StrawberryBB"
import JalapenoBB from "../Products/JalapenoBB"

function Order() {
  return (
    <Layout>
      <div className="order-container">
        <h1>Banana Bread Order Form</h1>
        <p className="Order-Details">
          Please fill out this form, you'll receive a Text with confirmation and
          final calculated cost; once confirmed you'll be added to the list.
          Batches are made every Friday/Saturday, and
          <span>Delivery is every Saturday.</span>
          Payments are through Zelle or Cash, and are due at the time of
          delivery.
        </p>
        {/* <div className="OrderForm">
        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSdMlDWH9U64FMpd3fk79veBhdIa6jMeUK0LV9G6yKUzfzgGRQ/formResponse"
          method="POST"
        >
          <input type="text" name="entry.1142350284" placeholder="First Name" />
          <input
            type="text"
            name="entry.707519583"
            placeholder="Phone Number"
          />
          <input type="text" name="entry.1502263816" placeholder="Address" />
          <p>Banana Bread Choice</p>

          <label>
            <input type="radio" name="entry.1950239139" value="Original" />{" "}
            Original Banana Bread
          </label>
          <br />
          <label>
            <input type="radio" name="entry.1950239139" value="Chocolate" />{" "}
            Chocolate Banana Bread
          </label>
          <br />
          <label>
            <input type="radio" name="entry.1950239139" value="Jalapeno" />{" "}
            Jalapeno Banana Bread
          </label>
          <br />
          <label>
            <input type="radio" name="entry.1950239139" value="Other" /> Other
            (please specify):
          </label>
          <button type="submit">Submit</button>
        </form>
      </div> */}
        {/* <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdMlDWH9U64FMpd3fk79veBhdIa6jMeUK0LV9G6yKUzfzgGRQ/viewform?embedded=true"
          width="640"
          height="1700"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          style={{
            display: "block",
            margin: "0 auto",
            border: "none",
            overflow: "hidden",
          }}
        >
          Loading…
        </iframe> */}

        {/* <iframe
          src="https://tally.so/embed/wzb4P0?alignLeft=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="1000px"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="Order Form"
        ></iframe> */}
        <div className="Product-Container">
          <ClassicBB />
          <ChocolateBB />
          <StrawberryBB />
          <JalapenoBB />
        </div>
      </div>
    </Layout>
  )
}

export default Order
