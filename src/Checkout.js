import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          className="checkout_add"
          alt=""
        />

        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>
              You have no item in your shopping basket. To buy one or more "Add
              to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">Your Shopping Basket </h2>
            {/* {list out all the check out product} */}

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length>0 && (
        <div className="checkout_right">
         <Subtotal/>
        </div>
      )}
    </div>
  );
}

export default Checkout;
