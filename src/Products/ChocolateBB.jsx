import React from "react"
import "./Products.css"

function ChocolateBB() {
  return (
    <div className="Product-Card">
      <h1 className="productTitle">Classic Banana Bread</h1>
      <p className="Product-description">
        Our classic banana bread is a timeless favorite, made with ripe bananas
        and a touch of cinnamon. It's moist, fluffy, and bursting with flavor.
        Perfect for breakfast or a snack!
      </p>
      <img
        src="https://natashaskitchen.com/wp-content/uploads/2018/12/Chocolote-Banana-Bread-2.jpg"
        alt="Classic Banana Bread"
        className="Product-image"
      />
      <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      <div className="payment">
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>

        <stripe-buy-button
          buy-button-id="buy_btn_1RIbhGGEWPF2G2I3lCnpfrpd"
          publishable-key="pk_live_51RIWlVGEWPF2G2I3lNFHTmIfMNkeUZ4jjn9A2JygcirLct1IzL61K8f1CwFWIwFL94RQ30lywa9qVIJKrbDZVq0r003Gv4vukz"
        ></stripe-buy-button>
      </div>
    </div>
  )
}

export default ChocolateBB
