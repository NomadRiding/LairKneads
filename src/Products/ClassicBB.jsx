import React from "react"
import "./Products.css"

function ClassicBB() {
  return (
    <div className="Product-Card">
      <h1 className="productTitle">Classic Banana Bread</h1>
      <p className="Product-description">
        Our classic banana bread is a timeless favorite, made with ripe bananas
        and a touch of cinnamon. It's moist, fluffy, and bursting with flavor.
        Perfect for breakfast or a snack!
      </p>
      <img
        src="https://sallysbakingaddiction.com/wp-content/uploads/2018/10/homemade-banana-bread.jpg"
        alt="Classic Banana Bread"
        className="Product-image"
      />
      <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      <div className="payment">
        <stripe-buy-button
          buy-button-id="buy_btn_1RIXz1GEWPF2G2I397N8xpxi"
          publishable-key="pk_live_51RIWlVGEWPF2G2I3lNFHTmIfMNkeUZ4jjn9A2JygcirLct1IzL61K8f1CwFWIwFL94RQ30lywa9qVIJKrbDZVq0r003Gv4vukz"
        ></stripe-buy-button>
      </div>
    </div>
  )
}

export default ClassicBB
