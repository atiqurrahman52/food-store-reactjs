import { useState } from "react";

const SingleCart = ({ data }) => {
  const { id, img, productName, perPrice, totalPrice } = data || {};
  const [quantity, setQuantity] = useState(0);
  return (
    <div key={id} className="px-3 md:px-6 border-b md:pb-5">
      <div className="flex justify-between">
        <div className="flex justify-center gap-3 md:gap-4">
          <div>
            <img
              className="rounded-xl w-[90px] md:w-[99px] h-[90px] md:h-[99px]"
              src={img}
              alt=""
            />
          </div>
          <div>
            <p className="font-Montserrat font-medium text-sm md:text-base text-text_color mb-[10px]">
              {productName}
            </p>
            <p className="font-Montserrat font-medium text-xs md:text-base text-p_text mb-[10px]">
              ${perPrice}
            </p>

            <div className="w-[118px]  h-[34px] border bg-[#F5F5F5] rounded-lg flex justify-between px-4">
              <button
                onClick={() =>
                  setQuantity(quantity > 0 ? quantity - 1 : quantity)
                }
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.625 9H3.375"
                    stroke="#606060"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <p className="bg-[#F5F5F5] pt-1">{quantity}</p>
              <button onClick={() => setQuantity(quantity + 1)}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 3.375V14.625M14.625 9H3.375"
                    stroke="#606060"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <button className="flex !items-end">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="31"
                height="31"
                rx="7.5"
                fill="#F5F5F5"
              />
              <path
                d="M9 11.1992H10.6H23.4"
                stroke="#D64647"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.7996 11.2V22.4C21.7996 22.8243 21.631 23.2313 21.331 23.5314C21.0309 23.8314 20.624 24 20.1996 24H12.1996C11.7753 24 11.3683 23.8314 11.0682 23.5314C10.7682 23.2313 10.5996 22.8243 10.5996 22.4V11.2M12.9996 11.2V9.6C12.9996 9.17565 13.1682 8.76869 13.4682 8.46863C13.7683 8.16857 14.1753 8 14.5996 8H17.7996C18.224 8 18.6309 8.16857 18.931 8.46863C19.231 8.76869 19.3996 9.17565 19.3996 9.6V11.2"
                stroke="#D64647"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.5996 15.1992V19.9992"
                stroke="#D64647"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.7998 15.1992V19.9992"
                stroke="#D64647"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="0.5"
                y="0.5"
                width="31"
                height="31"
                rx="7.5"
                stroke="#EBEBEE"
              />
            </svg>
          </button>
        </div>

        <div className="hidden md:block">
          <p className="font-Montserrat font-medium text-base text-text_color mb-3">
            Total:
          </p>
          <p className="font-Montserrat font-medium text-base text-text_color">
            ${totalPrice}
          </p>
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex justify-between max-w-[260px] pt-4">
          <p className="font-Montserrat font-medium text-base text-text_color mb-3">
            Total:
          </p>
          <p className="font-Montserrat font-medium text-base text-text_color">
            ${totalPrice}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
