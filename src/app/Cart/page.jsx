// Page.js
"use client";
import React, { useContext } from "react";
import { CartContext } from "@/context"; // Import CartContext
import { formatCurrency } from "@/utils/formatCurrency"; // Import formatCurrency
import Link from "next/link";
import postData from "../../utils/PostData";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
function Page() {
  const router = useRouter();

  const { cart, removeFromCart } = useContext(CartContext); // Destructure removeFromCart from context
  const { data: session } = useSession();
  const userName = session?.user?.name;
  // Calculate the total amount
  const totalAmount = cart.reduce(
    (total, item) => total + Number(item.price),
    0
  );
  console.log(`The cart is ${JSON.stringify(cart)}`);

  const handleBuyNowClick = () => {
    if (!session) {
      router.push("/User_Access");
    }
  };
  //todo:
  //this sends data but need some changes in future becuz the db gets only name and total no cart data
  async function handlePurchaseButtonClick() {
    console.log('Data being sent:', userName, totalAmount,cart);
    try {
      await postData(userName, totalAmount,cart);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  }
  
  
  

  return (
    <div className="bg-c3 flex flex-col justify-center items-center h-screen md:h-fit">
      <h1 className="text-2xl md:text-4xl text-c1 font-bold my-4">
        Cart Items:
      </h1>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-center md:max-w-6xl md:min-h-fit py-2 px-4 md:px-0">
        {cart.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:w-3/4 bg-c2">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="max-w-xs sm:max-w-sm md:max-w-sm rounded overflow-hidden shadow-lg m-2 md:m-4 bg-c3 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
                >
                  <img
                    className="w-full h-32 md:h-64 object-cover"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="px-4 sm:px-6 py-2 sm:py-4">
                    <div className="text-c2 text-lg md:text-2xl font-bold mb-2">
                      {item.title}
                    </div>
                    <p className="text-xs md:text-sm text-c1">
                      {item.description}
                    </p>
                    <p className="text-c2 text-xl mt-3 font-medium">
                      {formatCurrency(item.price)}
                    </p>
                    <button
                      onClick={() => removeFromCart(item)}
                      className="mt-2 bg-red-600 border-c2 border text-white px-2 py-1 rounded"
                    >
                      Remove
                    </button>{" "}
                  </div>
                </div>
              ))}
            </div>
            <div className="md:fixed top-0 md:top-1/2 right-2 transform md:-translate-y-1/2 w-full md:w-1/4 flex flex-col items-center justify-center space-y-4 md:justify-start md:ml-8">
              <h2 className="text-3xl font-bold text-c1">
                Total: {formatCurrency(totalAmount)}
              </h2>
              {/* Modal  */}
              <button className="button" onClick={handleBuyNowClick}>
                <label htmlFor={session ? "buy_modal" : ""}>Buy Now</label>
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center space-y-4  md:-mt-36">
            <h2 className="text-2xl md:text-4xl text-c1 font-bold my-4">
              Oops the cart is empty!!!
            </h2>
            <Link href="\">
              <span className="button font-semibold text-md  md:text-xl">
                Let's go shopping
              </span>
            </Link>
          </div>
        )}
      </div>
      {/* Modal for Buy Now */}
      <input type="checkbox" id="buy_modal" className="modal-toggle" />
      <div className="modal " role="dialog">
        <div className="modal-box bg-c1">
          <h3 className="text-xl font-bold text-c2">
            Choose your mode of Payment
          </h3>
          <div className="flex flex-col justify-center items-center space-y-4 p-6">
            <button
              className="button w-full"
              onClick={handlePurchaseButtonClick}
            >
              Cash on Delivery (COD)
            </button>
            <button
              className="button w-full"
              onClick={handlePurchaseButtonClick}
            >
              Net Banking
            </button>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="buy_modal">
          Close
        </label>
      </div>
    </div>
  );
}

export default Page;
