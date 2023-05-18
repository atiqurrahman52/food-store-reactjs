import { useState } from "react";

const ProductReviews = ({ data }) => {
  const [tabActive, setTabActive] = useState("description");

  const { description, rating, reviews } = data;

  return (
    <div className="container">
      <div className="py-16 md:py-20">
        <div className="tabbedPanels">
          <ul className="tabs flex justify-center gap-5 pb-3">
            {["description", "reviews"].map((item, i) => (
              <li
                key={i}
                onClick={() => setTabActive(item)}
                className={`cursor-pointer font-Montserrat text-base md:text-xl text-p_text 
                    ${i === tabActive && "text-text_color"}`}
              >
                {item}
                {i === 1 && `(${reviews?.length})`}
              </li>
            ))}
          </ul>

          <div className="panelContainer border-t  pt-8">
            {tabActive === "description" ? (
              <div id="panel1" className="panel">
                <p className="font-Montserrat text-xs md:text-base text-p_text">
                  {description}
                </p>
              </div>
            ) : (
              <div id="panel2" className="panel">
                <p className="font-Montserrat font-medium text-xl text-text_color mb-6">
                  {reviews?.length} Review{reviews?.length > 1 && "s"}
                </p>
                <div>
                  {reviews?.map(
                    ({ id, userName, dateOfComment, userComment }) => (
                      <div key={id} className="flex gap-2 md:gap-12 mb-6 pb-6">
                        <div>
                          <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="48"
                              height="48"
                              rx="8"
                              fill="#EBEBEE"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.7127 14.8571C16.7127 13.0385 17.4351 11.2944 18.7211 10.0084C20.0071 8.72245 21.7512 8 23.5698 8C25.3885 8 27.1326 8.72245 28.4186 10.0084C29.7045 11.2944 30.427 13.0385 30.427 14.8571C30.427 16.6758 29.7045 18.4199 28.4186 19.7059C27.1326 20.9918 25.3885 21.7143 23.5698 21.7143C21.7512 21.7143 20.0071 20.9918 18.7211 19.7059C17.4351 18.4199 16.7127 16.6758 16.7127 14.8571ZM10.9999 36.3505C11.0513 33.0506 12.3982 29.9033 14.75 27.5879C17.1017 25.2725 20.2696 23.9748 23.5698 23.9748C26.8701 23.9748 30.038 25.2725 32.3897 27.5879C34.7414 29.9033 36.0883 33.0506 36.1397 36.3505C36.1437 36.5726 36.0828 36.7911 35.9645 36.9792C35.8463 37.1673 35.6757 37.3168 35.4738 37.4095C31.7392 39.1218 27.6783 40.0055 23.5698 40C19.3245 40 15.291 39.0735 11.6658 37.4095C11.4639 37.3168 11.2934 37.1673 11.1751 36.9792C11.0569 36.7911 10.996 36.5726 10.9999 36.3505Z"
                              fill="#606060"
                            />
                          </svg>
                        </div>
                        <div className="border p-6 rounded-3xl">
                          <ul className="flex mb-[10px]">
                            {rating < 5
                              ? [...Array(Number(rating))]
                                  .map((item, i) => (
                                    <li key={i}>
                                      <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <rect
                                          width="18"
                                          height="18"
                                          fill="white"
                                        />
                                        <path
                                          d="M8.61097 2.6249C8.64269 2.54752 8.69671 2.48133 8.76616 2.43474C8.83561 2.38816 8.91734 2.36328 9.00097 2.36328C9.08459 2.36328 9.16633 2.38816 9.23578 2.43474C9.30523 2.48133 9.35925 2.54752 9.39097 2.6249L10.9847 6.45815C11.0146 6.52988 11.0636 6.59198 11.1264 6.63763C11.1893 6.68329 11.2635 6.71071 11.341 6.7169L15.4795 7.0484C15.8537 7.0784 16.0052 7.54565 15.7202 7.7894L12.5672 10.4909C12.5083 10.5413 12.4644 10.6069 12.4403 10.6806C12.4163 10.7543 12.4129 10.8332 12.4307 10.9086L13.3945 14.9474C13.4138 15.0284 13.4088 15.1134 13.3799 15.1915C13.351 15.2697 13.2996 15.3375 13.2322 15.3865C13.1648 15.4354 13.0844 15.4633 13.0011 15.4666C12.9179 15.4699 12.8355 15.4484 12.7645 15.4049L9.22072 13.2411C9.15452 13.2008 9.07849 13.1795 9.00097 13.1795C8.92344 13.1795 8.84742 13.2008 8.78122 13.2411L5.23747 15.4056C5.16641 15.4491 5.08406 15.4706 5.00081 15.4673C4.91756 15.464 4.83716 15.4362 4.76974 15.3872C4.70233 15.3383 4.65094 15.2704 4.62206 15.1923C4.59317 15.1141 4.5881 15.0292 4.60747 14.9481L5.57122 10.9086C5.58909 10.8332 5.58581 10.7543 5.56172 10.6806C5.53764 10.6069 5.49369 10.5412 5.43472 10.4909L2.28172 7.7894C2.21858 7.73511 2.1729 7.66336 2.15043 7.58318C2.12796 7.50299 2.1297 7.41796 2.15543 7.33876C2.18116 7.25956 2.22973 7.18974 2.29504 7.13808C2.36035 7.08641 2.43947 7.05521 2.52247 7.0484L6.66097 6.7169C6.7384 6.71071 6.81263 6.68329 6.87549 6.63763C6.93834 6.59198 6.98738 6.52988 7.01722 6.45815L8.61097 2.6249Z"
                                          fill="#FFA21B"
                                        />
                                      </svg>
                                    </li>
                                  ))
                                  .concat(
                                    [...Array(Number(5 - rating))].map(
                                      (item, i) => (
                                        <li key={i}>
                                          <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <rect
                                              width="18"
                                              height="18"
                                              fill="white"
                                            />
                                            <path
                                              d="M8.61097 2.6249C8.64269 2.54752 8.69671 2.48133 8.76616 2.43474C8.8356 2.38816 8.91734 2.36328 9.00097 2.36328C9.08459 2.36328 9.16633 2.38816 9.23578 2.43474C9.30523 2.48133 9.35925 2.54752 9.39097 2.6249L10.9847 6.45815C11.0146 6.52988 11.0636 6.59198 11.1264 6.63763C11.1893 6.68329 11.2635 6.71071 11.341 6.7169L15.4795 7.0484C15.8537 7.0784 16.0052 7.54565 15.7202 7.7894L12.5672 10.4909C12.5083 10.5413 12.4644 10.6069 12.4403 10.6806C12.4163 10.7543 12.4129 10.8332 12.4307 10.9086L13.3945 14.9474C13.4138 15.0284 13.4088 15.1134 13.3799 15.1915C13.351 15.2697 13.2996 15.3375 13.2322 15.3865C13.1648 15.4354 13.0844 15.4633 13.0011 15.4666C12.9179 15.4699 12.8355 15.4484 12.7645 15.4049L9.22072 13.2411C9.15452 13.2008 9.07849 13.1795 9.00097 13.1795C8.92344 13.1795 8.84742 13.2008 8.78122 13.2411L5.23747 15.4056C5.16641 15.4491 5.08406 15.4706 5.00081 15.4673C4.91756 15.464 4.83716 15.4362 4.76974 15.3872C4.70233 15.3383 4.65094 15.2704 4.62206 15.1923C4.59317 15.1141 4.5881 15.0292 4.60747 14.9481L5.57122 10.9086C5.58909 10.8332 5.58581 10.7543 5.56172 10.6806C5.53764 10.6069 5.49369 10.5412 5.43472 10.4909L2.28172 7.7894C2.21858 7.73511 2.1729 7.66336 2.15043 7.58318C2.12796 7.50299 2.1297 7.41796 2.15543 7.33876C2.18116 7.25956 2.22973 7.18974 2.29504 7.13808C2.36035 7.08641 2.43947 7.05521 2.52247 7.0484L6.66097 6.7169C6.7384 6.71071 6.81263 6.68329 6.87549 6.63763C6.93834 6.59198 6.98738 6.52988 7.01722 6.45815L8.61097 2.6249Z"
                                              stroke="#606060"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                          </svg>
                                        </li>
                                      )
                                    )
                                  )
                              : [...Array(Number(rating))].map((item, i) => (
                                  <li key={i}>
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <rect
                                        width="18"
                                        height="18"
                                        fill="white"
                                      />
                                      <path
                                        d="M8.61097 2.6249C8.64269 2.54752 8.69671 2.48133 8.76616 2.43474C8.83561 2.38816 8.91734 2.36328 9.00097 2.36328C9.08459 2.36328 9.16633 2.38816 9.23578 2.43474C9.30523 2.48133 9.35925 2.54752 9.39097 2.6249L10.9847 6.45815C11.0146 6.52988 11.0636 6.59198 11.1264 6.63763C11.1893 6.68329 11.2635 6.71071 11.341 6.7169L15.4795 7.0484C15.8537 7.0784 16.0052 7.54565 15.7202 7.7894L12.5672 10.4909C12.5083 10.5413 12.4644 10.6069 12.4403 10.6806C12.4163 10.7543 12.4129 10.8332 12.4307 10.9086L13.3945 14.9474C13.4138 15.0284 13.4088 15.1134 13.3799 15.1915C13.351 15.2697 13.2996 15.3375 13.2322 15.3865C13.1648 15.4354 13.0844 15.4633 13.0011 15.4666C12.9179 15.4699 12.8355 15.4484 12.7645 15.4049L9.22072 13.2411C9.15452 13.2008 9.07849 13.1795 9.00097 13.1795C8.92344 13.1795 8.84742 13.2008 8.78122 13.2411L5.23747 15.4056C5.16641 15.4491 5.08406 15.4706 5.00081 15.4673C4.91756 15.464 4.83716 15.4362 4.76974 15.3872C4.70233 15.3383 4.65094 15.2704 4.62206 15.1923C4.59317 15.1141 4.5881 15.0292 4.60747 14.9481L5.57122 10.9086C5.58909 10.8332 5.58581 10.7543 5.56172 10.6806C5.53764 10.6069 5.49369 10.5412 5.43472 10.4909L2.28172 7.7894C2.21858 7.73511 2.1729 7.66336 2.15043 7.58318C2.12796 7.50299 2.1297 7.41796 2.15543 7.33876C2.18116 7.25956 2.22973 7.18974 2.29504 7.13808C2.36035 7.08641 2.43947 7.05521 2.52247 7.0484L6.66097 6.7169C6.7384 6.71071 6.81263 6.68329 6.87549 6.63763C6.93834 6.59198 6.98738 6.52988 7.01722 6.45815L8.61097 2.6249Z"
                                        fill="#FFA21B"
                                      />
                                    </svg>
                                  </li>
                                ))}
                          </ul>

                          <div>
                            <div className="mb-[10px]">
                              <span className="font-Montserrat font-semibold text-sm md:text-base text-text_color">
                                {userName}
                              </span>
                              <span className="font-Montserrat text-xs md:text-base text-p_text">
                                {dateOfComment}
                              </span>
                            </div>
                            <p className="font-Montserrat text-xs md:text-base text-p_text mb-[10px]">
                              {userComment}
                            </p>
                          </div>

                          <div className="flex gap-[10px]">
                            <span>
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4 10L3.29289 10.7071L2.58579 10L3.29289 9.29289L4 10ZM21 18C21 18.5523 20.5523 19 20 19C19.4477 19 19 18.5523 19 18L21 18ZM8.29289 15.7071L3.29289 10.7071L4.70711 9.29289L9.70711 14.2929L8.29289 15.7071ZM3.29289 9.29289L8.29289 4.29289L9.70711 5.70711L4.70711 10.7071L3.29289 9.29289ZM4 9L14 9L14 11L4 11L4 9ZM21 16L21 18L19 18L19 16L21 16ZM14 9C17.866 9 21 12.134 21 16L19 16C19 13.2386 16.7614 11 14 11L14 9Z"
                                  fill="#47A358"
                                />
                              </svg>
                            </span>
                            <span className="font-Montserrat font-semibold text-xs md:text-base text-[#333333]">
                              Reply
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
                <form>
                  <h3 className="font-Montserrat font-semibold text-sm md:text-xl text-text_color mb-4">
                    Add your rating
                  </h3>
                  <ul className="flex gap-4 md:gap-[7px] mb-5 md:mb-8">
                    {[...Array(5)].map((item, i) => (
                      <li key={i}>
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.3082 4.66627C15.3646 4.52871 15.4606 4.41104 15.5841 4.32822C15.7075 4.2454 15.8528 4.20117 16.0015 4.20117C16.1502 4.20117 16.2955 4.2454 16.4189 4.32822C16.5424 4.41104 16.6384 4.52871 16.6948 4.66627L19.5282 11.4809C19.5812 11.6085 19.6684 11.7189 19.7801 11.8C19.8919 11.8812 20.0238 11.9299 20.1615 11.9409L27.5188 12.5303C28.1842 12.5836 28.4535 13.4143 27.9468 13.8476L22.3415 18.6503C22.2368 18.7399 22.1587 18.8565 22.1159 18.9875C22.0731 19.1185 22.0672 19.2588 22.0988 19.3929L23.8122 26.5729C23.8466 26.717 23.8376 26.868 23.7862 27.0069C23.7349 27.1459 23.6435 27.2665 23.5237 27.3535C23.4038 27.4405 23.2609 27.4901 23.1129 27.4959C22.9649 27.5017 22.8185 27.4636 22.6922 27.3863L16.3922 23.5396C16.2745 23.4679 16.1393 23.4299 16.0015 23.4299C15.8637 23.4299 15.7285 23.4679 15.6108 23.5396L9.31084 27.3876C9.18451 27.4649 9.03811 27.5031 8.89011 27.4972C8.74212 27.4914 8.59917 27.4418 8.47933 27.3548C8.35948 27.2678 8.26812 27.1472 8.21677 27.0083C8.16543 26.8693 8.1564 26.7183 8.19084 26.5743L9.90417 19.3929C9.93595 19.2588 9.9301 19.1185 9.88729 18.9875C9.84448 18.8564 9.76635 18.7398 9.6615 18.6503L4.05617 13.8476C3.94392 13.7511 3.86272 13.6235 3.82277 13.481C3.78282 13.3384 3.78591 13.1873 3.83166 13.0465C3.8774 12.9057 3.96375 12.7815 4.07986 12.6897C4.19596 12.5979 4.33663 12.5424 4.48417 12.5303L11.8415 11.9409C11.9792 11.9299 12.1111 11.8812 12.2229 11.8C12.3346 11.7189 12.4218 11.6085 12.4748 11.4809L15.3082 4.66627Z"
                            stroke="#FFA21B"
                            strokeWidth="2.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-5 md:space-y-6">
                    <div>
                      <label className="font-Montserrat text-xs md:text-base text-p_text block mb-4">
                        Your Review
                      </label>
                      <textarea
                        rows=""
                        cols=""
                        className="bg-[#F5F5F5] rounded-xl h-[132px] w-full focus:outline-none px-4 py-2"
                      ></textarea>
                    </div>
                    <div>
                      <label className="font-Montserrat text-xs md:text-base text-p_text block mb-4">
                        Name
                      </label>
                      <input
                        type=""
                        name=""
                        value=""
                        className="bg-[#F5F5F5] rounded-xl h-12 w-full focus:outline-none px-4 py-2"
                      />
                    </div>
                    <div>
                      <label className="font-Montserrat text-xs md:text-base text-p_text block mb-4">
                        Email
                      </label>
                      <input
                        type=""
                        name=""
                        value=""
                        className="bg-[#F5F5F5] rounded-xl h-12 w-full focus:outline-none px-4 py-2"
                      />
                    </div>
                    <button className="w-full md:w-[124px] h-[34px] md:h-[56px] bg-primary_3 font-Montserrat font-medium text-white rounded md:rounded-xl">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
          {/* 
            <div className="panelContainer border-t  pt-8">
              {productReviewsData.map(
                ({ id, description, userRatings, user, addRatings }) =>
                  tabActive === id && (
                    <div key={id}>
                      <div id="panel1" className="panel">
                        <p className="font-Montserrat text-xs md:text-base text-p_text">
                          {description}
                        </p>
                      </div>

                      <div id="panel2" className="panel">
                        <p className="font-Montserrat font-medium text-xl text-text_color mb-6">
                          2 Reviews
                        </p>

                        <div className="flex gap-2 md:gap-12 mb-6 border-b pb-6">
                          <div>
                            <svg
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="48"
                                height="48"
                                rx="8"
                                fill="#EBEBEE"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16.7127 14.8571C16.7127 13.0385 17.4351 11.2944 18.7211 10.0084C20.0071 8.72245 21.7512 8 23.5698 8C25.3885 8 27.1326 8.72245 28.4186 10.0084C29.7045 11.2944 30.427 13.0385 30.427 14.8571C30.427 16.6758 29.7045 18.4199 28.4186 19.7059C27.1326 20.9918 25.3885 21.7143 23.5698 21.7143C21.7512 21.7143 20.0071 20.9918 18.7211 19.7059C17.4351 18.4199 16.7127 16.6758 16.7127 14.8571ZM10.9999 36.3505C11.0513 33.0506 12.3982 29.9033 14.75 27.5879C17.1017 25.2725 20.2696 23.9748 23.5698 23.9748C26.8701 23.9748 30.038 25.2725 32.3897 27.5879C34.7414 29.9033 36.0883 33.0506 36.1397 36.3505C36.1437 36.5726 36.0828 36.7911 35.9645 36.9792C35.8463 37.1673 35.6757 37.3168 35.4738 37.4095C31.7392 39.1218 27.6783 40.0055 23.5698 40C19.3245 40 15.291 39.0735 11.6658 37.4095C11.4639 37.3168 11.2934 37.1673 11.1751 36.9792C11.0569 36.7911 10.996 36.5726 10.9999 36.3505Z"
                                fill="#606060"
                              />
                            </svg>
                          </div>
                          <div className="border p-6 rounded-3xl">
                            <ul className="flex mb-[10px]">
                              {userRatings.map(({ id, userRating }) => (
                                <li key={id}>{userRating}</li>
                              ))}
                            </ul>
                            {user.map(
                              ({
                                id,
                                userName,
                                dateOfComment,
                                userComment,
                              }) => (
                                <div key={id}>
                                  <div className="mb-[10px]">
                                    <span className="font-Montserrat font-semibold text-sm md:text-base text-text_color">
                                      {" "}
                                      {userName}
                                    </span>
                                    <span className="font-Montserrat text-xs md:text-base text-p_text">
                                      {dateOfComment}
                                    </span>
                                  </div>
                                  <p className="font-Montserrat text-xs md:text-base text-p_text mb-[10px]">
                                    {userComment}
                                  </p>
                                </div>
                              )
                            )}
                            <div className="flex gap-[10px]">
                              <span>
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4 10L3.29289 10.7071L2.58579 10L3.29289 9.29289L4 10ZM21 18C21 18.5523 20.5523 19 20 19C19.4477 19 19 18.5523 19 18L21 18ZM8.29289 15.7071L3.29289 10.7071L4.70711 9.29289L9.70711 14.2929L8.29289 15.7071ZM3.29289 9.29289L8.29289 4.29289L9.70711 5.70711L4.70711 10.7071L3.29289 9.29289ZM4 9L14 9L14 11L4 11L4 9ZM21 16L21 18L19 18L19 16L21 16ZM14 9C17.866 9 21 12.134 21 16L19 16C19 13.2386 16.7614 11 14 11L14 9Z"
                                    fill="#47A358"
                                  />
                                </svg>
                              </span>
                              <span className="font-Montserrat font-semibold text-xs md:text-base text-[#333333]">
                                Reply
                              </span>
                            </div>
                          </div>
                        </div>

                        <form>
                          <h3 className="font-Montserrat font-semibold text-sm md:text-xl text-text_color mb-4">
                            Add your rating
                          </h3>
                          <ul className="flex gap-4 md:gap-[7px] mb-5 md:mb-8">
                            {addRatings.map(({ id, addRating }) => (
                              <li key={id}>{addRating}</li>
                            ))}
                          </ul>

                          <div className="space-y-5 md:space-y-6">
                            <div>
                              <label className="font-Montserrat text-xs md:text-base text-p_text block mb-4">
                                Your Review
                              </label>
                              <textarea
                                rows=""
                                cols=""
                                className="bg-[#F5F5F5] rounded-xl h-[132px] w-full focus:outline-none px-4 py-2"
                              ></textarea>
                            </div>
                            <div>
                              <label className="font-Montserrat text-xs md:text-base text-p_text block mb-4">
                                Name
                              </label>
                              <input
                                type=""
                                name=""
                                value=""
                                className="bg-[#F5F5F5] rounded-xl h-12 w-full focus:outline-none px-4 py-2"
                              />
                            </div>
                            <div>
                              <label className="font-Montserrat text-xs md:text-base text-p_text block mb-4">
                                Email
                              </label>
                              <input
                                type=""
                                name=""
                                value=""
                                className="bg-[#F5F5F5] rounded-xl h-12 w-full focus:outline-none px-4 py-2"
                              />
                            </div>
                            <button className="w-full md:w-[124px] h-[34px] md:h-[56px] bg-primary_3 font-Montserrat font-medium text-white rounded md:rounded-xl">
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  )
              )}
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
