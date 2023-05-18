import { Link } from "react-router-dom";
import Swp from "./Swp";
import visa from '../../assets/images/checkout/visa-logo.svg';
import mastercard from '../../assets/images/checkout/Mastercard.svg';
import stripe from '../../assets/images/checkout/Stripe.svg';
import paypal from '../../assets/images/checkout/PayPal.svg';
import gPay from '../../assets/images/checkout/GooglePay.svg';

const ProductDescription = ({ data }) => {
  const {
    productName,
    originalPrice,
    discountPrice,
    description,
    category,
    tags,
  } = data;

  return (
    <section id="product_details">
      <div className="container">
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px]">
            <div>
              {/* <div className="swiper mySwiper2">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide bg-[#F5F5F5] rounded-3xl">
                      <img className="w-full h-full pt-6 md:pt-[35px] pb-[14px] md:pb-6 px-[45px] md:px-[86px]"
                        src="../assets/images/product-details/slide-large-1.webp" alt="" />
                    </div>
                    <div className="swiper-slide bg-[#F5F5F5] rounded-3xl">
                      <img className="w-full h-full pt-6 md:pt-[35px] pb-[14px] md:pb-6 px-[45px] md:px-[86px]"
                        src="../assets/images/product-details/slide-large-1.webp" alt="" />
                    </div>
                    <div className="swiper-slide bg-[#F5F5F5] rounded-3xl">
                      <img className="w-full h-full pt-6 md:pt-[35px] pb-[14px] md:pb-6 px-[45px] md:px-[86px]"
                        src="../assets/images/product-details/slide-large-1.webp" alt="" />
                    </div>
    
                  </div>
                 
                </div>
                <div thumbsSlider="" className="swiper mySwiper mt-6">
                  <div className="swiper-wrapper mt-5">
                    <div className="swiper-slide bg-[#F5F5F5] rounded-xl border border-primary_3 h-[166px]">
                      <img className="w-full h-[74px] md:h-[140px] py-2 md:py-3 px-3 md:px-6"
                        src="../assets/images/product-details/slide-small-1.webp" alt="" />
                    </div>
                    <div className="swiper-slide bg-[#F5F5F5] rounded-xl border border-primary_3 h-[166px]">
                      <img className="w-full h-[74px] md:h-[140px] py-2 md:py-3 px-3 md:px-6"
                        src="../assets/images/product-details/slide-small-2.webp" alt="" />
                    </div>
                    <div className="swiper-slide bg-[#F5F5F5] rounded-xl border border-primary_3 h-[166px]">
                      <img className="w-full h-[74px] md:h-[140px] py-2 md:py-3 px-3 md:px-6"
                        src="../assets/images/product-details/slide-small-3.webp" alt="" />
                    </div>
    
                  </div>
                  <div className="swiper-pagination"></div>
                </div> */}

              <Swp />
            </div>
            <div>
              <div>
                <h3 className="font-Playfair font-semibold text-xl md:text-[32px] text-text_color mb-5">
                  {productName}
                </h3>
                <div className="flex items-center gap-3 mb-5">
                  rating
                  <div>
                    <span>( 4 Customer Review )</span>
                  </div>
                </div>

                <div className="flex gap-4 mb-5">
                  <span className="font-NotoSans text-sm md:text-xl text-p_text line-through">
                    ${originalPrice}
                  </span>
                  <span className="font-Montserrat font-semibold text-sm md:text-xl text-[#D64647]">
                    ${discountPrice}
                  </span>
                </div>
                <button className="bg-[#91BF73] font-Montserrat font-semibold text-xs md:text-sm text-white w-[92px] md:w-[109px] h-7 md:h-8 rounded-full mb-5">
                  IN Stock
                </button>
                <p className="font-Montserrat text-xs md:text-base text-p_text border-b pb-5">
                  {description}
                </p>
              </div>

              <div className="flex gap-5 pt-5 mb-5">
                <div className="w-[131px] md:w-[119px] h-[38px] md:h-11 border rounded-lg flex justify-between px-4">
                  <button className="counter__decrement">
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
                  <input
                    type=""
                    name=""
                    value="0"
                    className="counter__input w-5 md:h-10 ml-3 focus:outline-none"
                  />
                  <button className="counter__increment">
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
                <div>
                  <button className="bg-primary_3 w-[129px] md:w-[151px] h-[38px] md:h-11 font-Montserrat font-medium text-xs md:text-base text-white rounded-xl">
                    Add to cart
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3 border-b pb-5">
                <span>
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.7726 1.89477C18.6462 0.709236 17.1551 0.0612742 15.5636 0.0612742C13.9721 0.0612742 12.4764 0.714035 11.3501 1.89957L10.7618 2.51873L10.1645 1.88997C9.03813 0.704436 7.53786 0.046875 5.94639 0.046875C4.35947 0.046875 2.86376 0.699636 1.74198 1.88037C0.615637 3.0659 -0.00453512 4.6402 2.49698e-05 6.3153C2.49698e-05 7.9904 0.624758 9.55991 1.7511 10.7454L10.315 19.7593C10.4335 19.8841 10.5931 19.9513 10.7482 19.9513C10.9032 19.9513 11.0628 19.8889 11.1814 19.7641L19.7635 10.7646C20.8898 9.57911 21.51 8.0048 21.51 6.3297C21.5145 4.6546 20.8989 3.0803 19.7726 1.89477ZM18.8971 9.84789L10.7482 18.3914L2.61752 9.83349C1.72374 8.89275 1.23125 7.64482 1.23125 6.3153C1.23125 4.98578 1.71918 3.73786 2.61296 2.80191C3.50218 1.86597 4.6878 1.3476 5.94639 1.3476C7.20953 1.3476 8.39972 1.86597 9.29349 2.80671L10.3241 3.89145C10.5658 4.14583 10.9534 4.14583 11.1951 3.89145L12.2165 2.81631C13.1103 1.87557 14.3005 1.3572 15.5591 1.3572C16.8176 1.3572 18.0033 1.87557 18.8971 2.81151C19.7908 3.75226 20.2788 5.00018 20.2788 6.3297C20.2833 7.65922 19.7908 8.90715 18.8971 9.84789Z"
                      fill="#47A358"
                    />
                  </svg>
                </span>
                <h6 className="font-Montserrat font-medium text-sm md:text-base text-primary_3 ">
                  Add to wishlist
                </h6>
              </div>

              <div className="pt-5">
                <div className="flex gap-3 mb-5">
                  <h4 className="font-Montserrat font-medium text-xs md:text-base text-text_color">
                    Categories:
                  </h4>
                  <p className="font-Montserrat text-xs md:text-base text-text_color">
                    {category}
                  </p>
                </div>
                <div className="flex gap-3 mb-5">
                  <h4 className="font-Montserrat font-medium text-xs md:text-base text-text_color">
                    Tags:
                  </h4>
                  {/* {tags?.map((tag, i) => ( */}
                    <p
                      // key={i}
                      className="font-Montserrat text-xs md:text-base text-text_color"
                    >
                      {tags?.join(", ")}
                    </p>
                  {/* ))} */}
                </div>
                <div className="flex gap-3 border-b pb-5">
                  <h4 className="font-Montserrat font-medium text-xs md:text-base text-text_color">
                    Share:
                  </h4>
                  <ul className="flex items-center gap-4 md:gap-5">
                  <li>
                    <Link to="#">
                      <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.1482 11.165L12.8219 7.57282H8.60732V5.24272C8.60732 4.25973 9.19497 3.30097 11.0827 3.30097H13V0.242718C13 0.242718 11.2607 0 9.59862 0C6.12608 0 3.85847 1.72085 3.85847 4.83495V7.57282H0V11.165H3.85847V19.8495C4.6331 19.949 5.42559 20 6.23289 20C7.0402 20 7.83268 19.949 8.60732 19.8495V11.165H12.1482Z"
                          fill="#606060" />
                      </svg>
                    </Link>

                  </li>
                  <li>
                    <Link to="#">
                      <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6.90544 20C4.36365 20 1.99428 19.1818 0 17.7701C1.69321 17.8914 4.68134 17.601 6.53995 15.6389C3.74399 15.497 2.48306 13.1237 2.31859 12.1095C2.55616 12.211 3.68917 12.3327 4.32877 12.0487C1.11249 11.1562 0.619086 8.03245 0.728732 7.07911C1.33178 7.54564 2.35514 7.70791 2.75718 7.66734C-0.239806 5.29412 0.838378 1.72414 1.36833 0.953347C3.51908 4.25101 6.74237 6.1031 10.73 6.20612C10.6548 5.84118 10.6151 5.46124 10.6151 5.07099C10.6151 2.27036 12.6605 0 15.1837 0C16.502 0 17.6899 0.619786 18.5238 1.61116C19.4047 1.3827 20.7305 0.847885 21.3787 0.385396C21.052 1.68357 20.0349 2.76651 19.4196 3.16789C19.4146 3.15418 19.4247 3.18155 19.4196 3.16789C19.9601 3.07742 21.4223 2.76641 22 2.33266C21.7143 3.06196 20.636 4.27455 19.7511 4.95341C19.9157 12.9896 14.3601 20 6.90544 20Z"
                          fill="#606060" />
                      </svg>
                    </Link>

                  </li>
                  <li>
                    <Link to="#">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_596_16477)">
                          <path
                            d="M10 1.80078C12.6719 1.80078 12.9883 1.8125 14.0391 1.85937C15.0156 1.90234 15.543 2.06641 15.8945 2.20313C16.3594 2.38281 16.6953 2.60156 17.043 2.94922C17.3945 3.30078 17.6094 3.63281 17.7891 4.09766C17.9258 4.44922 18.0898 4.98047 18.1328 5.95312C18.1797 7.00781 18.1914 7.32422 18.1914 9.99219C18.1914 12.6641 18.1797 12.9805 18.1328 14.0313C18.0898 15.0078 17.9258 15.5352 17.7891 15.8867C17.6094 16.3516 17.3906 16.6875 17.043 17.0352C16.6914 17.3867 16.3594 17.6016 15.8945 17.7813C15.543 17.918 15.0117 18.082 14.0391 18.125C12.9844 18.1719 12.668 18.1836 10 18.1836C7.32813 18.1836 7.01172 18.1719 5.96094 18.125C4.98438 18.082 4.45703 17.918 4.10547 17.7813C3.64063 17.6016 3.30469 17.3828 2.95703 17.0352C2.60547 16.6836 2.39063 16.3516 2.21094 15.8867C2.07422 15.5352 1.91016 15.0039 1.86719 14.0313C1.82031 12.9766 1.80859 12.6602 1.80859 9.99219C1.80859 7.32031 1.82031 7.00391 1.86719 5.95312C1.91016 4.97656 2.07422 4.44922 2.21094 4.09766C2.39063 3.63281 2.60938 3.29688 2.95703 2.94922C3.30859 2.59766 3.64063 2.38281 4.10547 2.20313C4.45703 2.06641 4.98828 1.90234 5.96094 1.85937C7.01172 1.8125 7.32813 1.80078 10 1.80078ZM10 0C7.28516 0 6.94531 0.0117187 5.87891 0.0585938C4.81641 0.105469 4.08594 0.277344 3.45313 0.523438C2.79297 0.78125 2.23438 1.12109 1.67969 1.67969C1.12109 2.23438 0.78125 2.79297 0.523438 3.44922C0.277344 4.08594 0.105469 4.8125 0.0585938 5.875C0.0117188 6.94531 0 7.28516 0 10C0 12.7148 0.0117188 13.0547 0.0585938 14.1211C0.105469 15.1836 0.277344 15.9141 0.523438 16.5469C0.78125 17.207 1.12109 17.7656 1.67969 18.3203C2.23438 18.875 2.79297 19.2188 3.44922 19.4727C4.08594 19.7188 4.8125 19.8906 5.875 19.9375C6.94141 19.9844 7.28125 19.9961 9.99609 19.9961C12.7109 19.9961 13.0508 19.9844 14.1172 19.9375C15.1797 19.8906 15.9102 19.7188 16.543 19.4727C17.1992 19.2188 17.7578 18.875 18.3125 18.3203C18.8672 17.7656 19.2109 17.207 19.4648 16.5508C19.7109 15.9141 19.8828 15.1875 19.9297 14.125C19.9766 13.0586 19.9883 12.7188 19.9883 10.0039C19.9883 7.28906 19.9766 6.94922 19.9297 5.88281C19.8828 4.82031 19.7109 4.08984 19.4648 3.45703C19.2188 2.79297 18.8789 2.23438 18.3203 1.67969C17.7656 1.125 17.207 0.78125 16.5508 0.527344C15.9141 0.28125 15.1875 0.109375 14.125 0.0625C13.0547 0.0117188 12.7148 0 10 0Z"
                            fill="#606060" />
                          <path
                            d="M10 4.86328C7.16406 4.86328 4.86328 7.16406 4.86328 10C4.86328 12.8359 7.16406 15.1367 10 15.1367C12.8359 15.1367 15.1367 12.8359 15.1367 10C15.1367 7.16406 12.8359 4.86328 10 4.86328ZM10 13.332C8.16016 13.332 6.66797 11.8398 6.66797 10C6.66797 8.16016 8.16016 6.66797 10 6.66797C11.8398 6.66797 13.332 8.16016 13.332 10C13.332 11.8398 11.8398 13.332 10 13.332Z"
                            fill="#606060" />
                          <path
                            d="M16.5391 4.66016C16.5391 5.32422 16 5.85938 15.3398 5.85938C14.6758 5.85938 14.1406 5.32031 14.1406 4.66016C14.1406 3.99609 14.6797 3.46094 15.3398 3.46094C16 3.46094 16.5391 4 16.5391 4.66016Z"
                            fill="#606060" />
                        </g>
                        <defs>
                          <clipPath id="clip0_596_16477">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>

                  </li>
                  <li>
                    <Link to="#">
                      <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M5.30722 2.41736C5.30722 3.75242 4.11916 4.83471 2.65361 4.83471C1.18806 4.83471 0 3.75242 0 2.41736C0 1.08229 1.18806 0 2.65361 0C4.11916 0 5.30722 1.08229 5.30722 2.41736Z"
                          fill="#606060" />
                        <path d="M0.362887 6.61157H4.89897V20H0.362887V6.61157Z" fill="#606060" />
                        <path
                          d="M12.2021 6.61157H7.66598V20H12.2021C12.2021 20 12.2021 15.7851 12.2021 13.1498C12.2021 11.568 12.7566 9.97934 14.9691 9.97934C17.4695 9.97934 17.4544 12.0493 17.4428 13.653C17.4275 15.7492 17.4639 17.8884 17.4639 20H22V12.9339C21.9616 8.42197 20.7545 6.34298 16.7835 6.34298C14.4253 6.34298 12.9634 7.3858 12.2021 8.32927V6.61157Z"
                          fill="#606060" />
                      </svg>
                    </Link>

                  </li>
                  </ul>
                </div>
              </div>

              <div className="pt-5">
                <h3 className="font-Montserrat font-semibold text-sm md:text-base text-text_color mb-4">
                  Guaranteed Checkout :
                </h3>
                <div className="flex gap-3 md:gap-6">
                <button className="border px-[6px] md:px-[10px] py-[11px] md:py-[17px] rounded-md">
                  <img className="w-[32px] md:w-[49px] h-[11px] md:h-4" src={visa}
                    alt="" />
                </button>
                <button className="border px-[8px] md:px-[13px] py-[7px] md:py-[10px] rounded-md">
                  <img className="w-[30px] md:w-[45px] h-[18px] md:h-8" src={mastercard}
                    alt="" />
                </button>
                <button className="border px-[6px] md:px-[10px] py-[8px] md:py-[13px] rounded-md">
                  <img className="w-[34px] md:w-[51px] h-[14px] md:h-5" src={stripe} alt="" />
                </button>
                <button className="border px-[6px] md:px-[10px] py-[11px] md:py-[17px] rounded-md">
                  <img className="w-[26px] md:w-[40px] h-[23px] md:h-8" src={paypal} alt="" />
                </button>
                <button className="border px-[6px] md:px-[10px] py-[11px] md:py-[17px] rounded-md">
                  <img className="w-[32px] md:w-[50px] h-[13px] md:h-5" src={gPay}
                    alt="" />
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
