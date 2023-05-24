import { Link } from "react-router-dom";
import cartData from "../../data/cart/cartData";
import { CaretLeft } from "@phosphor-icons/react";
import SingleCart from "./SingleCart";

const MyCart = () => {
  return (
    <div className="container">
      <div className="py-10 md:py-20 px-0 md:px-20">
        <div className="border rounded-xl overflow-hidden mb-6 md:mb-8">
          <p className="bg-[#F5F5F5] h-14 md:h-11 px-6 flex items-center font-Montserrat font-medium text-sm md:text-base text-text_color mb-3">
            Shopping Cart
          </p>
          <div className="space-y-3">
            {cartData.map((cart,i) => (
              <SingleCart data={cart} key={i} />
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <div className="max-w-[356px]">
            <div className="space-x-4 mb-8 md:mb-6">
              <input
                className="rounded-lg md:rounded-xl border w-[161px] md:w-[192px] h-10 md:h-12 focus:outline-none px-3"
                placeholder="Coupon Code"
                type="text"
                name=""
              />
              <button className="bg-[#606060] w-[103px] md:w-[132px] h-10 md:h-12 rounded-lg md:rounded-xl font-Montserrat font-medium text-base text-white">
                Apply
              </button>
            </div>

            <div className="bg-[#F5F5F5] p-6 rounded-lg md:rounded-xl">
              <h3 className="font-Montserrat text-base md:text-xl text-text_color mb-4">
                Cart Totals
              </h3>
              <div className="border-b pb-3 space-y-3">
                <div className="flex justify-between">
                  <h5 className="font-Montserrat text-xs md:text-base text-text_color">
                    Sub Totals
                  </h5>
                  <span className="font-Montserrat font-medium text-xs md:text-base text-text_color">
                    $1256.00
                  </span>
                </div>
                <div className="flex justify-between">
                  <h5 className="font-Montserrat text-xs md:text-base text-text_color">
                    Shipping
                  </h5>
                  <span className="font-Montserrat font-medium text-xs md:text-base text-text_color">
                    $70.00
                  </span>
                </div>
              </div>

              <div className="flex justify-between pt-[22px] mb-4">
                <h5 className="font-Montserrat text-xs md:text-base text-text_color">
                  Total
                </h5>
                <span className="font-Montserrat font-medium text-xs md:text-base text-text_color">
                  $70.00
                </span>
              </div>

              <Link to="/checkout">
                <button className="w-[248px] md:w-[308px] h-[37px] md:h-11 bg-primary_3 rounded-lg font-Montserrat font-semibold text-sm md:text-base text-white">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
            <div className="pt-6">
              <Link
                to="/shop"
                className="flex items-center justify-center w-full h-10 md:h-12 gap-[10px] border rounded-lg"
              >
                <CaretLeft size={20} />
                <span className="font-Montserrat font-medium text-sm md:text-base text-p_text">
                  Continue Shopping
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
