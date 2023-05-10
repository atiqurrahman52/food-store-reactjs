const CheckoutDetails = () => {
  return (
    <div className="container">
    <div className="py-16 md:py-20">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <h2 className="font-Montserrat font-medium text-sm md:text-xl text-text_color border-b pb-6">
            Billing Details
          </h2>
          <div className="space-y-4 pt-4">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full">
                <label className="font-Montserrat text-sm md:text-base text-p_text block mb-2">
                  Name*
                </label>
                <input
                  className="bg-[#F5F5F5] rounded md:rounded-xl focus:outline-none px-3 w-full h-12"
                  type=""
                  name=""
                  
                />
                   
              </div>
              <div className="w-full">
                <label className="font-Montserrat text-sm md:text-base text-p_text block mb-2">
                  Last Name*
                </label>
                <input
                  className="bg-[#F5F5F5] rounded md:rounded-xl focus:outline-none px-3 w-full h-12"
                  type=""
                  name=""
                
                />
              </div>
            </div>

            <div>
              <label className="font-Montserrat text-sm md:text-base text-p_text block mb-2">
                Address*
              </label>
              <input
                className="bg-[#F5F5F5] rounded md:rounded-xl focus:outline-none px-3 w-full h-12"
                type=""
                name=""
                
              />
            </div>
            <div>
              <label className="font-Montserrat text-sm md:text-base text-p_text block mb-2">
                Town/City*
              </label>
              <input
                className="bg-[#F5F5F5] rounded md:rounded-xl focus:outline-none px-3 w-full h-12"
                type=""
                name=""
               
              />
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full">
                <label className="font-Montserrat text-sm md:text-base text-p_text block mb-2">
                  State/County*
                </label>
                <input
                  className="bg-[#F5F5F5] rounded md:rounded-xl focus:outline-none px-3 w-full h-12"
                  type=""
                  name=""
                 
                />
              </div>
              <div className="w-full">
                <label className="font-Montserrat text-sm md:text-base text-p_text block mb-2">
                  Postcode/Zip*
                </label>
                <input
                  className="bg-[#F5F5F5] rounded md:rounded-xl focus:outline-none px-3 w-full h-12"
                  type="number"
                  name=""
                 
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full">
                <label className="font-Montserrat text-sm md:text-base text-p_text block mb-2">
                  Email *
                </label>
                <input
                  className="bg-[#F5F5F5] rounded md:rounded-xl focus:outline-none px-3 w-full h-12"
                  type=""
                  name=""
                  
                />
              </div>
              <div className="w-full">
                <label className="font-Montserrat text-sm md:text-base text-p_text block mb-2">
                  Phone*
                </label>
                <input
                  className="bg-[#F5F5F5] rounded md:rounded-xl focus:outline-none px-3 w-full h-12"
                  type="number"
                  name=""
                 
                />
              </div>
            </div>

            <div>
              <label className="font-Montserrat font-semibold text-sm md:text-base text-primary_3 block mb-3">
                Special Instructions
              </label>

              <textarea
                className="bg-[#F5F5F5] rounded md:rounded-xl focus:outline-none px-3 py-2 w-full h-[75px]"
                rows=""
                cols=""
              ></textarea>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-[#F5F5F5] rounded-lg md:rounded-2xl py-6 px-5 mb-6">
            <h3 className="font-Montserrat font-medium text-base md:text-xl text-text_color mb-4">
              Card Totals
            </h3>
            <div className="flex justify-between mb-4">
              <h3 className="font-Montserrat font-medium text-sm md:text-base text-text_color">
                Product
              </h3>
              <span className="font-Montserrat font-medium text-sm md:text-base text-text_color">
                Total
              </span>
            </div>
            <div className="bg-white py-[7px] px-3 rounded-lg">
              <div className="flex justify-between mb-[6px]">
                <h3 className="font-Montserrat font-medium text-xs md:text-sm text-text_color">
                  Red Capsicum{" "}
                </h3>

                <div className="space-x-2 md:space-x-8">
                  <span className="font-Montserrat font-medium text-xs md:text-base text-primary_3">
                    (x2)
                  </span>
                  <span className="font-Montserrat font-medium text-xs md:text-sm text-text_color">
                    225.00$
                  </span>
                </div>
              </div>
              <h4 className="font-Montserrat font-medium text-sm text-p_text mb-[7px]">
                Fruits
              </h4>

              <div className="flex justify-between mb-[6px]">
                <h3 className="font-Montserrat font-medium text-xs md:text-sm text-text_color">
                  Red Capsicum{" "}
                </h3>

                <div className="space-x-2 md:space-x-8">
                  <span className="font-Montserrat font-medium text-xs md:text-base text-primary_3">
                    (x2)
                  </span>
                  <span className="font-Montserrat font-medium text-xs md:text-sm text-text_color">
                    225.00$
                  </span>
                </div>
              </div>
              <h4 className="font-Montserrat font-medium text-sm text-p_text mb-[7px]">
                Fruits
              </h4>

              <div className="flex justify-between mb-[6px]">
                <h3 className="font-Montserrat font-medium text-xs md:text-sm text-text_color">
                  Red Capsicum{" "}
                </h3>

                <div className="space-x-2 md:space-x-8">
                  <span className="font-Montserrat font-medium text-xs md:text-base text-primary_3">
                    (x2)
                  </span>
                  <span className="font-Montserrat font-medium text-xs md:text-sm text-text_color">
                    225.00$
                  </span>
                </div>
              </div>
              <h4 className="font-Montserrat font-medium text-sm text-p_text mb-[7px]">
                Fruits
              </h4>
            </div>

            <div className="flex justify-between pt-4">
              <h5 className="font-Montserrat text-sm md:text-base text-text_color">
                Sub Totals
              </h5>
              <span className="font-Montserrat font-medium text-sm md:text-base text-text_color">
                $1256.00
              </span>
            </div>
            <div className="flex justify-between pt-3 border-b-2 pb-3">
              <h5 className="font-Montserrat text-sm md:text-base text-text_color">
                Shipping Cost
              </h5>
              <span className="font-Montserrat font-medium text-sm md:text-base text-text_color">
                $70.00
              </span>
            </div>

            <div className="flex justify-between pt-4">
              <h3 className="font-Montserrat font-semibold text-base md:text-xl text-text_color">
                Total
              </h3>
              <span className="font-Montserrat font-medium text-sm md:text-base text-primary_3">
                $1430.00
              </span>
            </div>
          </div>

          <div className="bg-[#F5F5F5] rounded-lg md:rounded-2xl py-6 px-5">
            <h3 className="font-Montserrat font-medium text-base md:text-xl text-text_color mb-4">
              Select Payment
            </h3>
            <div className="space-y-6">
              <div className="flex justify-between">
                <div className="space-x-3">
                  <input
                    className="accent-primary_3"
                    type="radio"
                    id="payment"
                    name="payment"
                    value="payment"
                  />
                  <label
                    htmlFor="payment"
                    className="font-Montserrat font-medium text-sm md:text-base text-text_color"
                  >
                    Check Payments
                  </label>
                  <br />
                </div>
                <div>
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
                      stroke="#47A358"
                    />
                    <path
                      d="M9.125 11V21C9.125 21.3315 9.2567 21.6495 9.49112 21.8839C9.72554 22.1183 10.0435 22.25 10.375 22.25H22.875C23.0408 22.25 23.1997 22.1842 23.3169 22.0669C23.4342 21.9497 23.5 21.7908 23.5 21.625V12.875C23.5 12.7092 23.4342 12.5503 23.3169 12.4331C23.1997 12.3158 23.0408 12.25 22.875 12.25H10.375C10.0435 12.25 9.72554 12.1183 9.49112 11.8839C9.2567 11.6495 9.125 11.3315 9.125 11ZM9.125 11C9.125 10.6685 9.2567 10.3505 9.49112 10.1161C9.72554 9.8817 10.0435 9.75 10.375 9.75H21"
                      stroke="#47A358"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.0625 18.1875C20.5803 18.1875 21 17.7678 21 17.25C21 16.7322 20.5803 16.3125 20.0625 16.3125C19.5447 16.3125 19.125 16.7322 19.125 17.25C19.125 17.7678 19.5447 18.1875 20.0625 18.1875Z"
                      fill="#47A358"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="space-x-3">
                  <input
                    className="accent-primary_3"
                    type="radio"
                    id="Cash"
                    name="Cash"
                    value="Cash"
                  />
                  <label
                    htmlFor="Cash"
                    className="font-Montserrat font-medium text-sm md:text-base text-text_color"
                  >
                    Cash on Delivery
                  </label>
                  <br />
                </div>
                <div>
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
                      stroke="#47A358"
                    />
                    <path
                      d="M16 23.5C20.1421 23.5 23.5 20.1421 23.5 16C23.5 11.8579 20.1421 8.5 16 8.5C11.8579 8.5 8.5 11.8579 8.5 16C8.5 20.1421 11.8579 23.5 16 23.5Z"
                      stroke="#47A358"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22.735 19.3128L18.4928 16.7035C18.4198 16.6565 18.3369 16.6271 18.2506 16.6175L16.4615 16.3753C16.328 16.3562 16.192 16.3818 16.0746 16.4483C15.9573 16.5147 15.8653 16.6182 15.8131 16.7425L14.7428 19.141C14.6925 19.2525 14.676 19.3764 14.6954 19.4972C14.7149 19.618 14.7694 19.7305 14.8521 19.8206L16.3209 21.4066C16.3873 21.4795 16.4359 21.5669 16.463 21.6617C16.4901 21.7566 16.495 21.8564 16.4771 21.9535L16.1725 23.5003"
                      stroke="#47A358"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.0773 10.3438L10.3742 12C10.313 12.147 10.3102 12.3119 10.3664 12.4609L11.2648 14.8516C11.3 14.9512 11.3601 15.0402 11.4394 15.1099C11.5187 15.1797 11.6147 15.2279 11.718 15.25L13.3898 15.6094C13.4826 15.6281 13.5698 15.6683 13.6444 15.7266C13.719 15.7849 13.7789 15.8598 13.8195 15.9453L14.1164 16.5625C14.1692 16.6669 14.2495 16.7548 14.3486 16.8168C14.4478 16.8787 14.562 16.9124 14.6789 16.9141H15.7336"
                      stroke="#47A358"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.9141 8.74219L18.6406 10.0547C18.7077 10.1781 18.7318 10.3203 18.7092 10.4589C18.6866 10.5975 18.6185 10.7247 18.5156 10.8203L16.4141 12.7188C16.3789 12.7523 16.3395 12.7812 16.2969 12.8047L15.3359 13.3359C15.2443 13.3845 15.1427 13.4113 15.0391 13.4141H13.3672C13.244 13.4147 13.1237 13.4512 13.021 13.5192C12.9183 13.5872 12.8377 13.6837 12.7891 13.7969L12.1406 15.3359"
                      stroke="#47A358"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="space-x-3">
                  <input
                    className="accent-primary_3"
                    type="radio"
                    id="paypal"
                    name="paypal"
                    value="paypal"
                  />
                  <label
                    htmlFor="paypal"
                    className="font-Montserrat font-medium text-sm md:text-base text-text_color"
                  >
                    Paypal
                  </label>
                  <br />
                </div>
                <div>
                  <svg
                    width="86"
                    height="32"
                    viewBox="0 0 86 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.333333"
                      y="0.333333"
                      width="85.3333"
                      height="31.3333"
                      rx="3.66667"
                      fill="white"
                      stroke="#D9D9D9"
                      strokeWidth="0.666667"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.2061 8.00195H15.5353C15.2157 8.00195 14.9438 8.23422 14.894 8.5496L13.0049 20.5251C12.9674 20.7614 13.1504 20.9744 13.3901 20.9744H15.62C15.9396 20.9744 16.2114 20.7422 16.2613 20.4262L16.7708 17.1962C16.8199 16.8799 17.0925 16.648 17.4114 16.648H18.89C21.9668 16.648 23.7424 15.1592 24.2064 12.2093C24.4153 10.9187 24.2152 9.90464 23.6106 9.19425C22.9469 8.41466 21.7693 8.00195 20.2061 8.00195ZM20.745 12.3758C20.4896 14.0516 19.209 14.0516 17.9708 14.0516H17.2659L17.7604 10.9219C17.7898 10.7329 17.9537 10.5935 18.1449 10.5935H18.468C19.3114 10.5935 20.1072 10.5935 20.5183 11.0742C20.7633 11.3611 20.8385 11.7871 20.745 12.3758ZM34.1682 12.3221H31.9314C31.7409 12.3221 31.5762 12.4615 31.5468 12.6508L31.4479 13.2761L31.2914 13.0496C30.8072 12.3468 29.7276 12.112 28.6498 12.112C26.178 12.112 24.067 13.9837 23.6558 16.6094C23.4422 17.9189 23.7459 19.1713 24.489 20.0447C25.1707 20.8477 26.146 21.1824 27.3063 21.1824C29.2977 21.1824 30.4024 19.9019 30.4024 19.9019L30.3025 20.5235C30.2649 20.7611 30.4479 20.9741 30.6862 20.9741H32.701C33.0215 20.9741 33.2917 20.7419 33.3423 20.4258L34.5512 12.7715C34.5895 12.5361 34.4071 12.3221 34.1682 12.3221ZM31.0503 16.6748C30.8344 17.9524 29.8202 18.8101 28.5269 18.8101C27.8774 18.8101 27.3581 18.6018 27.025 18.2071C26.6944 17.8153 26.5686 17.2572 26.6738 16.636C26.8755 15.3691 27.9068 14.4836 29.1805 14.4836C29.8154 14.4836 30.3319 14.6944 30.672 15.0926C31.0127 15.4948 31.1479 16.0561 31.0503 16.6748ZM43.8328 12.3218H46.0806C46.3954 12.3218 46.5791 12.6748 46.4002 12.933L38.9245 23.7221C38.8034 23.8969 38.604 24.0009 38.391 24.0009H36.146C35.83 24.0009 35.6454 23.645 35.8284 23.3862L38.1562 20.101L35.6805 12.8366C35.5948 12.5841 35.7813 12.3218 36.05 12.3218H38.2586C38.5455 12.3218 38.7987 12.5101 38.8815 12.7847L40.1954 17.1722L43.2956 12.6065C43.4169 12.4283 43.6186 12.3218 43.8328 12.3218Z"
                      fill="#253B80"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M68.1992 20.5238L70.1161 8.32928C70.1455 8.13999 70.3095 8.00063 70.5001 8H72.6582C72.8965 8 73.0795 8.21362 73.0418 8.45L71.1515 20.4248C71.1022 20.7409 70.8304 20.9731 70.5102 20.9731H68.5829C68.3446 20.9731 68.1616 20.7601 68.1992 20.5238ZM53.5188 8.00063H48.8471C48.5282 8.00063 48.2564 8.2329 48.2065 8.54828L46.3174 20.5238C46.2798 20.7601 46.4628 20.9731 46.7014 20.9731H49.0984C49.3212 20.9731 49.5118 20.8107 49.5466 20.5895L50.0826 17.1949C50.1319 16.8786 50.4043 16.6466 50.7232 16.6466H52.2011C55.2786 16.6466 57.0538 15.1579 57.5181 12.208C57.7277 10.9174 57.5263 9.90332 56.922 9.19293C56.2586 8.41334 55.082 8.00063 53.5188 8.00063ZM54.0576 12.3745C53.8029 14.0503 52.5222 14.0503 51.2833 14.0503H50.5791L51.0744 10.9206C51.1038 10.7316 51.2662 10.5922 51.4581 10.5922H51.7811C52.624 10.5922 53.4205 10.5922 53.8313 11.0729C54.0766 11.3598 54.1512 11.7858 54.0576 12.3745ZM67.4796 12.3208H65.2444C65.0523 12.3208 64.8892 12.4602 64.8604 12.6494L64.7615 13.2748L64.6044 13.0482C64.1202 12.3454 63.0412 12.1106 61.9635 12.1106C59.4916 12.1106 57.3813 13.9824 56.9701 16.6081C56.7571 17.9176 57.0595 19.17 57.8026 20.0434C58.4856 20.8464 59.4597 21.1811 60.6199 21.1811C62.6114 21.1811 63.7157 19.9006 63.7157 19.9006L63.6161 20.5222C63.5785 20.7598 63.7615 20.9728 64.0014 20.9728H66.0153C66.3342 20.9728 66.606 20.7405 66.6559 20.4245L67.8655 12.7702C67.9025 12.5347 67.7195 12.3208 67.4796 12.3208ZM64.362 16.6735C64.1474 17.9511 63.1319 18.8088 61.8383 18.8088C61.1901 18.8088 60.6698 18.6005 60.3364 18.2058C60.0058 17.814 59.8816 17.2559 59.9856 16.6346C60.1882 15.3678 61.2182 14.4823 62.4919 14.4823C63.1272 14.4823 63.6433 14.6931 63.9837 15.0912C64.3257 15.4935 64.4609 16.0548 64.362 16.6735Z"
                      fill="#179BD7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <button className="pt-4">
              <span className="font-Montserrat font-medium text-sm md:text-xl text-primary_3">
                +Add New
              </span>
            </button>
          </div>

          <div className="space-x-3 py-6 px-5">
            <input type="checkbox" id="terms" name="terms" value="terms" />
            <label
              htmlFor="terms"
              className="font-Montserrat text-xs text-p_text"
            >
              {" "}
              I have read and agree to the website{" "}
              <span className="text-primary_3">terms and conditions *</span>
            </label>
            <br />
          </div>
          <div className="py-6 px-5">
            <button className="w-full h-10 md:h-14 bg-primary_3 text-white rounded-lg font-Montserrat font-medium text-sm md:text-base">
              Place an Order
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CheckoutDetails;
