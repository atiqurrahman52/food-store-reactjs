import { Heart } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  const { id, img, productName, productDescription, price } = data;

  const [productCount, setProductCount] = useState(1);
  const [addCart, setAddCart] = useState(false);

  useEffect(() => {
    setAddCart(productCount < 1 ? false : addCart);
  }, [productCount]);

  return (
    <div className="border border-[#EBEBEE] overflow-hidden rounded-lg md:rounded-2xl shadow-[0_0px_42px_rgba(119,119,119,0.05)]">
      <Link to={`/product-detail/${id}`}>
        <div className="relative">
          <img className="mb-4 xl:mb-[17px] w-full" src={img} alt="" />
          <span className="absolute flex justify-center items-center top-3 py-2 px-2 right-4 rounded-full bg-white text-xl text-[#D64647]">
            <Heart size={20} />
          </span>
        </div>
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
          {!addCart ? (
            <button
              onClick={() => {
                setAddCart(true);
                setProductCount(1);
              }}
              className="cart-add-btn bg-[#EBEBEE] w-full h-full font-Montserrat font-medium text-sm md:text-base text-text_color mb-6"
            >
              Add to cart
            </button>
          ) : (
            <div className="btn-group counter-btn flex justify-between items-center px-8 w-full h-full bg-primary_3 text-white">
              <button
                onClick={() =>
                  setProductCount(
                    productCount > 0 ? productCount - 1 : productCount
                  )
                }
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
              <p className="text-center w-20 bg-transparent text-2xl">
                {productCount}
              </p>
              <button
                onClick={() => setProductCount(productCount + 1)}
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
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
