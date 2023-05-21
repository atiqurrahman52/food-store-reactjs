import { ArrowLeft, ArrowRight, CaretDown } from "@phosphor-icons/react";
import productData from "../../data/product/productData";

import ProductCard from "./ProductCard";
import { useState } from "react";

const ShopProduct = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectDropdown, setSelectDropdown] = useState("Popular");
  const value = ["Highest Rated", "Newest", "Most Selling"];
  const handleDropdown = (item) => {
    setSelectDropdown(item);
    setShowDropdown(false);
    console.log(showDropdown);
  };
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

         

          <button
            type="button"
            className="relative"
            onBlur={() => setShowDropdown(false)}
          >
            <span
              onClick={() => setShowDropdown(true)}
              className="flex justify-between items-center gap-3 text-xs md:text-sm  px-3 py-3 bg-[#F5F5F5] rounded-xl"
            >
              <span className="text-text_color text-xs md:text-base">
                Sort by
              </span>
              {selectDropdown}
              <CaretDown
                size={18}
                className={showDropdown ? "rotate-180" : ""}
              />
            </span>

            {/* dropdown */}
            {showDropdown && (
              // <ul className="absolute min-w-[195px] bg-white z-20  right-0 shadow-md rounded-md mt-[10px]">
              <ul className="absolute  bg-white z-20  right-0 shadow-md rounded-md mt-[10px]">
                {value.map((item, i) => (
                  <li
                    key={i}
                    onClick={() => handleDropdown(item)}
                    className="hover:bg-green-500 hover:text-white text-[#5C727D] text-xs md:text-sm flex items-start py-[9px] px-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productData.map((item, i) => (
            <ProductCard key={i} data={item} />
          ))}
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
