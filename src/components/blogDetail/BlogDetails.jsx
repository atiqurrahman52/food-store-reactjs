import RecentPost from "./RecentPost";
import Reviews from "./Reviews";
import blog_2 from  '../../assets/images/blog-details/blog-detail-2.webp';
import blog_3 from  '../../assets/images/blog-details/blog-detail-3.webp';
import blog_4 from  '../../assets/images/blog-details/blog-detail-4.webp';
import blog_5 from  '../../assets/images/blog-details/blog-detail-5.webp';

// /assets/images/blog-details/blog-detail-5.webp

const BlogDetails = ({data}) => {
  // const newData = data.find((item) => item !== undefined);
  const { img, title } = data;
  console.log('my data', data);
  return (
    <div>
      <div className="container">
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-8">
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h3 className="font-Playfair font-semibold text-xl md:text[32px] text-text_color text-center mb-3">
                   
                    {title}
                  </h3>
                  <div className="flex justify-center gap-3 mb-6 md:mb-8">
                    <div className="flex items-center gap-[6px]">
                      <span>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.749 6C15.749 6.99456 15.3539 7.94839 14.6507 8.65165C13.9474 9.35491 12.9936 9.75 11.999 9.75C11.0044 9.75 10.0506 9.35491 9.34735 8.65165C8.64409 7.94839 8.249 6.99456 8.249 6C8.249 5.00544 8.64409 4.05161 9.34735 3.34835C10.0506 2.64509 11.0044 2.25 11.999 2.25C12.9936 2.25 13.9474 2.64509 14.6507 3.34835C15.3539 4.05161 15.749 5.00544 15.749 6ZM4.5 20.118C4.53213 18.1504 5.33634 16.2742 6.73918 14.894C8.14202 13.5139 10.0311 12.7405 11.999 12.7405C13.9669 12.7405 15.856 13.5139 17.2588 14.894C18.6617 16.2742 19.4659 18.1504 19.498 20.118C17.1454 21.1968 14.5871 21.7535 11.999 21.75C9.323 21.75 6.783 21.166 4.5 20.118Z"
                            stroke="#606060"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="font-Montserrat font-medium text-base text-p_text">
                        by: Admin
                      </span>
                    </div>
                    <div className="flex items-center gap-[6px]">
                      <span>
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.5 2V5"
                            stroke="#606060"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.5 2V5"
                            stroke="#606060"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4 9.08984H21"
                            stroke="#606060"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21.5 8.5V17C21.5 20 20 22 16.5 22H8.5C5 22 3.5 20 3.5 17V8.5C3.5 5.5 5 3.5 8.5 3.5H16.5C20 3.5 21.5 5.5 21.5 8.5Z"
                            stroke="#606060"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.1937 13.6992H16.2027"
                            stroke="#606060"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.1937 16.6992H16.2027"
                            stroke="#606060"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.4945 13.6992H12.5035"
                            stroke="#606060"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.4945 16.6992H12.5035"
                            stroke="#606060"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.79529 13.6992H8.80427"
                            stroke="#606060"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.79529 16.6992H8.80427"
                            stroke="#606060"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="font-Montserrat font-medium text-base text-p_text">
                        March 02.2022
                      </span>
                    </div>
                  </div>
                  <img
                    className="rounded-3xl  w-full"
                    src={img}
                    alt=""
                  />
                 
                </div>
                <div>
                  <h3 className="font-Montserrat font-medium text-sm md:text-xl text-text_color mb-4">
                    Business contents insurance is a type of business insurance
                    that can protect
                  </h3>
                  <p className="font-Montserrat text-xs md:text-base text-justify text-p_text">
                    consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum. Sed ut perspiciatis unde omnis iste natus error
                    sit voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <img
                    className="rounded-xl w-full "
                    src={blog_2}
                    alt=""
                  />
                  <img
                    className="rounded-xl w-full"
                    src={blog_3}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="font-Montserrat font-medium text-xl text-text_color mb-4">
                    Business contents insurance is a type of business insurance
                    that can protect
                  </h3>
                  <p className="font-Montserrat text-xs md:text-base text-justify text-p_text mb-4">
                    consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo
                  </p>
                  <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-4">
                      <img
                        className="h-full w-full rounded-xl"
                        src={blog_4}
                        alt=""
                      />
                    </div>
                    <div className="col-span-12 md:col-span-8">
                      <p className="font-Montserrat text-xs md:text-base text-justify text-p_text">
                        Adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum. Sed ut perspiciatis
                        unde omnis iste natus error sit voluptatem accusantium.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-Montserrat font-medium text-xl text-text_color mb-5">
                    Instructions
                  </h3>
                  <p className="font-Montserrat text-base text-justify text-p_text mb-5">
                    consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum. Sed ut perspiciatis unde omnis iste natus error
                    sit voluptatem accusantium doloremque
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div>
                      <p className="font-Montserrat text-base text-justify text-p_text border-l-2 border-primary_3 pl-5">
                        12 ounces fresh mushrooms, sliced 1/4-inch thick <br />
                        3 tablespoons extra virgin olive oil <br />
                        salt and pepper 2 bunches of scallions, trimmed <br />
                        4 large slices of hearty, whole-grain bread <br />
                        1 cup Poblano Yogurt* (recipe below) <br />
                        1 cup cooked lentils, or white beans <br />
                        1 cup Poblano Yogurt* (recipe below) <br />
                      </p>
                    </div>
                    <div>
                      <img
                        className="w-full rounded-xl"
                        src={blog_5}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-Montserrat font-medium text-xl text-text_color mb-5">
                    Notes
                  </h3>
                  <p className="font-Montserrat text-base text-justify text-p_text">
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum .
                  </p>
                </div>
                <div className="border-b pb-10">
                  <p className="font-Montserrat font-medium text-base text-text_color text-end">
                    Share:
                  </p>
                </div>
              </div>

              <div className="flex justify-between mt-3 md:mt-6 mb-2">
                <button className="flex items-center gap-3">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.625 16.25L9.375 10L15.625 3.75M10.625 16.25L4.375 10L10.625 3.75"
                        stroke="#071C1F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="font-Montserrat font-semibold text-xs md:text-[15px] text-text_color">
                    Previous
                  </span>
                </button>

                <button className="flex items-center gap-3">
                  <span className="font-Montserrat font-semibold text-xs md:text-[15px] text-text_color">
                    Next
                  </span>
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.375 16.25L10.625 10L4.375 3.75M9.375 16.25L15.625 10L9.375 3.75"
                        stroke="#071C1F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>

              <div className="flex justify-between">
                <div>
                  <h3 className="font-Montserrat font-semibold text-xl text-[#111111] mb-2 hidden md:block">
                    How to go vegan and meet <br />
                    all your nutritional needs?
                  </h3>
                  <div className="md:flex items-center gap-[6px]  hidden">
                    <span>
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.5 2V5"
                          stroke="#606060"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.5 2V5"
                          stroke="#606060"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 9.08984H21"
                          stroke="#606060"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.5 8.5V17C21.5 20 20 22 16.5 22H8.5C5 22 3.5 20 3.5 17V8.5C3.5 5.5 5 3.5 8.5 3.5H16.5C20 3.5 21.5 5.5 21.5 8.5Z"
                          stroke="#606060"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.1937 13.6992H16.2027"
                          stroke="#606060"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.1937 16.6992H16.2027"
                          stroke="#606060"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.4945 13.6992H12.5035"
                          stroke="#606060"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.4945 16.6992H12.5035"
                          stroke="#606060"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.79529 13.6992H8.80427"
                          stroke="#606060"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.79529 16.6992H8.80427"
                          stroke="#606060"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="font-Montserrat font-medium text-base text-p_text">
                      March 02.2022
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-Montserrat font-semibold text-xl text-[#111111] mb-2 hidden md:block">
                    Refined and natural - the <br />
                    sweet truth about sugar
                  </h3>
                  <div className="md:flex items-center gap-[6px] hidden">
                    <span>
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.5 2V5"
                          stroke="#606060"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.5 2V5"
                          stroke="#606060"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 9.08984H21"
                          stroke="#606060"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.5 8.5V17C21.5 20 20 22 16.5 22H8.5C5 22 3.5 20 3.5 17V8.5C3.5 5.5 5 3.5 8.5 3.5H16.5C20 3.5 21.5 5.5 21.5 8.5Z"
                          stroke="#606060"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.1937 13.6992H16.2027"
                          stroke="#606060"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.1937 16.6992H16.2027"
                          stroke="#606060"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.4945 13.6992H12.5035"
                          stroke="#606060"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.4945 16.6992H12.5035"
                          stroke="#606060"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.79529 13.6992H8.80427"
                          stroke="#606060"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.79529 16.6992H8.80427"
                          stroke="#606060"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="font-Montserrat font-medium text-base text-p_text">
                      March 02.2022
                    </span>
                  </div>
                </div>
              </div>

              <Reviews />
            </div>

            <RecentPost />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
