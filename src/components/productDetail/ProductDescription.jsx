import { Link } from "react-router-dom";
import Swp from "./Swp";

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
                    {/* {social.map(({ id, icon, path }) => (
                      <li key={id}>
                        <Link to={path}>{icon} </Link>
                      </li>
                    ))} */}
                  </ul>
                </div>
              </div>

              <div className="pt-5">
                <h3 className="font-Montserrat font-semibold text-sm md:text-base text-text_color mb-4">
                  Guaranteed Checkout :
                </h3>
                <div className="flex gap-3 md:gap-6">
                  {/* {checkoutCard.map(({ id, cardImg }) => (
                    <button
                      key={id}
                      className="border px-[6px] md:px-[10px] py-[11px] md:py-[17px] rounded-md"
                    >
                      <img
                        className="w-[32px] md:w-[49px] h-[11px] md:h-4"
                        src={cardImg}
                        alt=""
                      />
                    </button>
                  ))} */}
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
