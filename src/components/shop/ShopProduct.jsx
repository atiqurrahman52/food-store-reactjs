import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import productData from "../../data/product/productData";
import { Link } from "react-router-dom";
import { useState } from "react";

const ShopProduct = () => {
  const [counter, setCounter] = useState();
  const [increment, setIncrement] = useState();
  const [decrement, setDecrement] = useState()

  return (
    <div className="container">
      <div className="py-8 md:py-10">
        <div className="flex justify-between mb-6">
          <div className="relative">
            <button className="categories-btn flex items-center justify-betwee space-x-7 md:space-x-[116px] bg-[#F5F5F5] py-2 md:py-[11px] px-3 md:px-6 rounded md:rounded-2xl">
              <h2 className="font-NotoSans text-xs md:text-base text-text_color">
                Categories
              </h2>
              <span>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 1V9M9 5H1"
                    stroke="#071C1F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <div className="categories-dropdown hidden absolute pt-[14px] lg:pt-[15px] md:-right-[34px] z-10">
              <div className="bg-white shadow-[0_4px_15px_rgba(136,136,136,0.21)] p-4 w-[261px] h-auto right-0 border rounded-lg">
                <div>
                  <p className="font-Montserrat text-sm md:text-base text-p_text py-3 hover:text-primary_3 cursor-pointer">
                    Meat & Fish
                  </p>
                  <p className="font-Montserrat text-sm md:text-base text-p_text py-3 hover:text-primary_3 cursor-pointer ">
                    Grocery
                  </p>
                  <p className="font-Montserrat text-sm md:text-base text-p_text py-3 hover:text-primary_3 cursor-pointer ">
                    Bread & Bakery
                  </p>
                  <p className="font-Montserrat text-sm md:text-base text-p_text py-3 hover:text-primary_3 cursor-pointer ">
                    Fruits
                  </p>
                  <p className="font-Montserrat text-sm md:text-base text-p_text py-3 hover:text-primary_3 cursor-pointer ">
                    Vegetable
                  </p>
                  <p className="font-Montserrat text-sm md:text-base text-p_text py-3 hover:text-primary_3 cursor-pointer ">
                    Breakfast & Dairy
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <button className="short-btn flex items-center justify-betwee space-x-7 md:space-x-[116px] bg-[#F5F5F5] py-2 md:py-[11px] px-3 md:px-6 rounded md:rounded-2xl">
              <h2 className="font-NotoSans text-xs md:text-base text-text_color">
                Short By
              </h2>
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.35258 10.8541C8.25883 10.9477 8.13175 11.0003 7.99925 11.0003C7.86675 11.0003 7.73966 10.9477 7.64591 10.8541L2.64591 5.85409C2.55759 5.7593 2.50951 5.63394 2.5118 5.50441C2.51408 5.37487 2.56656 5.25128 2.65817 5.15967C2.74977 5.06806 2.87336 5.01559 3.0029 5.0133C3.13243 5.01102 3.2578 5.0591 3.35258 5.14742L7.99925 9.79409L12.6459 5.14742C12.6917 5.0983 12.7469 5.05889 12.8082 5.03157C12.8696 5.00424 12.9358 4.98954 13.0029 4.98836C13.07 4.98717 13.1367 4.99952 13.199 5.02467C13.2612 5.04982 13.3178 5.08725 13.3653 5.13473C13.4128 5.18221 13.4502 5.23876 13.4753 5.30102C13.5005 5.36328 13.5128 5.42997 13.5116 5.4971C13.5105 5.56424 13.4958 5.63045 13.4684 5.69178C13.4411 5.75311 13.4017 5.80831 13.3526 5.85409L8.35258 10.8541Z"
                    fill="black"
                  />
                </svg>
              </span>
            </button>

            <div className="short-dropdown hidden absolute pt-[14px] lg:pt-[15px] right-0 z-10">
              <div className="bg-white p-4 w-[261px] h-auto right-0 border rounded-lg">
                <div className="space-y-4">
                  <p className="font-Montserrat text-sm md:text-base text-p_text cursor-pointer">
                    Terms of service
                  </p>
                  <p className="font-Montserrat text-sm md:text-base text-p_text cursor-pointer">
                    Privacy Policy
                  </p>
                  <p className="font-Montserrat text-sm md:text-base text-p_text cursor-pointer">
                    Returns Policy
                  </p>
                  <p className="font-Montserrat text-sm md:text-base text-p_text cursor-pointer">
                    Delivery & payment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productData.map(
            ({ id, img, productName, productDescription, price }) => (
              <div
                key={id}
                className="border border-[#EBEBEE] overflow-hidden rounded-lg md:rounded-2xl shadow-[0_0px_42px_rgba(119,119,119,0.05)]"
              >
                <Link to="/product-details">
                  <img className="mb-4 xl:mb-[17px] w-full" src={img} alt="" />
                </Link>

                <div className="p-6 pt-4">
                  <h3 className="text-center border-b border-[#CCCCCC] pb-3 xl:pb-4 font-Montserrat font-medium text-sm md:text-[22px] text-text_color">
                    {productName}
                  </h3>
                  <p className="text-center font-Montserrat text-xs md:text-sm text-p_text mt-4 mb-3 xl:mb-6">
                    {productDescription}
                  </p>
                  <p className="font-Montserrat font-semibold text-xl md:text-[32px] text-text_color text-center mb-4">
                    ${price}
                  </p>

                  <div className="mx-auto rounded-xl w-[256px] xl:w-[308px] h-10 xl:h-12 overflow-hidden">
                    <button className="cart-add-btn bg-[#EBEBEE] w-full h-full font-Montserrat font-medium text-sm md:text-base text-text_color mb-6">
                      Add to cart
                    </button>

                    <div
                      className="btn-group counter-btn flex justify-between items-center px-8 w-full h-full bg-primary_3 text-white"
                      role="group"
                      aria-label="Basic outlined example"
                    >
                      <button
                        type="button"
                        className="add-cart remove-btn text-2xl"
                      >
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.2358 12H5.23584"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <input
                        disabled=""
                        className="text-center w-20 bg-transparent text-2xl"
                        value="1"
                      />
                      <button
                        type="button"
                        className="add-cart add-btn text-2xl"
                      >
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.2646 4.5V19.5M19.7646 12H4.76465"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="flex justify-between items-center mt-5">
          <button className="flex items-center gap-2 border border-[#F5F5F7] py-[6px] md:py-2.5 px-2 md:px-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)] rounded-lg">
            <ArrowLeft size={20} className="text-[#838D8F]" />
            <span className="font-Montserrat font-medium text-[10px] md:text-sm text-[#838D8F]">
              Previous
            </span>
          </button>
          <div>
            <a
              className="bg-[#EDEDE3] text-primary_3 py-1 md:py-2 px-2 md:px-3 rounded-lg"
              href="#"
            >
              1
            </a>
            <a
              className="font-Montserrat font-medium text-xs md:text-sm py-1 md:py-2 px-2 md:px-3 text-p_text"
              href="#"
            >
              2
            </a>
            <a
              className="font-Montserrat font-medium text-xs md:text-sm py-1 md:py-2 px-2 md:px-3 text-p_text"
              href="#"
            >
              ...
            </a>
            <a
              className="font-Montserrat font-medium text-xs md:text-sm py-1 md:py-2 px-2 md:px-3 text-p_text"
              href="#"
            >
              6
            </a>
          </div>
          <button className="flex items-center gap-2 border border-[#F5F5F7] py-[6px] md:py-2.5 px-2 md:px-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)] rounded-lg">
            <span className="font-Montserrat font-medium text-[10px] md:text-sm text-text_color">
              Next
            </span>

            <ArrowRight size={20} className="text-text_color" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopProduct;