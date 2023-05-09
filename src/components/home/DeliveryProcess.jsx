import leaf from '../../assets/images/share/leaf.png'

const DeliveryProcess = () => {
    return (
      
        <div className="container">
          <div className="pb-16">
            <div className="flex flex-col justify-center items-center mb-8">
              <div className="relative">
                <img src={leaf} alt="" />
              </div>
              <div className="absolute flex flex-col justify-center items-center">
                <h3 className="font-Playfair font-semibold text-2xl xl:text-5xl text-text_color mb-2">
                  Delivery process
                </h3>
                <h6 className="font-Montserrat font-semibold text-sm xl:text-base text-primary_3 text-center">
                  How To get Delivered
                </h6>
              </div>
            </div>
    
            <div className="grid grid-cols-1 lsm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 xl:gap-[151px]">
    
              <div
                className="process process1 relative mx-auto border border-csk w-[166px] h-[180px] xl:h-[186px] rounded-lg xl:rounded-xl flex flex-col justify-center items-center">
                <span>
                  <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2.66667" y="2.66667" width="60.6667" height="60.6667" rx="30.3333" fill="#699C47" />
                    <path
                      d="M50.5 41.9874V24.0134C50.4986 23.7538 50.4288 23.4991 50.2976 23.2751C50.1663 23.0511 49.9784 22.8656 49.7526 22.7374L33.7109 13.7139C33.4948 13.5891 33.2496 13.5234 33 13.5234C32.7504 13.5234 32.5052 13.5891 32.2891 13.7139L16.2474 22.7374C16.0216 22.8656 15.8337 23.0511 15.7024 23.2751C15.5712 23.4991 15.5014 23.7538 15.5 24.0134V41.9874C15.5014 42.247 15.5712 42.5017 15.7024 42.7257C15.8337 42.9497 16.0216 43.1352 16.2474 43.2634L32.2891 52.2868C32.5052 52.4116 32.7504 52.4773 33 52.4773C33.2496 52.4773 33.4948 52.4116 33.7109 52.2868L49.7526 43.2634C49.9784 43.1352 50.1663 42.9497 50.2976 42.7257C50.4288 42.5017 50.4986 42.247 50.5 41.9874Z"
                      stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M41.9323 37.4661V27.987L24.25 18.2344" stroke="white" strokeWidth="2.33333"
                      strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M50.2982 23.2656L33.1628 33L15.6992 23.2656" stroke="white" strokeWidth="2.33333"
                      strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M33.1641 33L33 52.4687" stroke="white" strokeWidth="2.33333" strokeLinecap="round"
                      strokeLinejoin="round" />
                    <rect x="2.66667" y="2.66667" width="60.6667" height="60.6667" rx="30.3333" stroke="#ADCF96"
                      strokeWidth="4.66667" />
                  </svg>
                </span>
                <p className="font-Montserrat font-semibold text-sm md:text-base text-text_color mt-6 mb-2.5">
                  Choose Product
                </p>
                <p className="font-Montserrat text-base text-p_text">
                  Get delivered fast
                </p>
    
                {/* <!-- dot --> */}
                <div
                  className="dots flex items-center gap-4 absolute top-[calc(100%+20px)] lg:top-[unset] xl:left-[calc(100%+36px)]">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#D9D9D9] active"></span>
                  <span className="inline-block h-2 w-2 rounded-full bg-[#D9D9D9]"></span>
                  <span className="inline-block h-2 w-2 rounded-full bg-[#D9D9D9]"></span>
                  <span className="inline-block h-2 w-2 rounded-full bg-[#D9D9D9]"></span>
                </div>
              </div>
    
              <div
                className="process process2 relative mx-auto border border-csk w-[166px] h-[180px] xl:h-[186px] rounded-lg xl:rounded-xl flex flex-col justify-center items-center">
                <span>
                  <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2.66667" y="2.66667" width="60.6667" height="60.6667" rx="30.3333" fill="#699C47" />
                    <path
                      d="M21.332 34.6914V44.6664C21.332 44.9758 21.4549 45.2726 21.6737 45.4914C21.8925 45.7102 22.1893 45.8331 22.4987 45.8331H43.4987C43.8081 45.8331 44.1049 45.7102 44.3237 45.4914C44.5425 45.2726 44.6654 44.9758 44.6654 44.6664V34.6914"
                      stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M22.2064 20.1641H43.7897C44.0428 20.1661 44.2885 20.2495 44.4907 20.4017C44.6929 20.554 44.8408 20.7672 44.9126 21.0099L46.998 28.3307H18.998L21.0835 21.0099C21.1553 20.7672 21.3032 20.554 21.5054 20.4017C21.7076 20.2495 21.9533 20.1661 22.2064 20.1641Z"
                      stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M28.3314 28.332V30.6654C28.3314 31.903 27.8397 33.09 26.9645 33.9652C26.0894 34.8404 24.9024 35.332 23.6647 35.332C22.427 35.332 21.2401 34.8404 20.3649 33.9652C19.4897 33.09 18.998 31.903 18.998 30.6654V28.332"
                      stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M37.6654 28.332V30.6654C37.6654 31.903 37.1737 33.09 36.2985 33.9652C35.4234 34.8404 34.2364 35.332 32.9987 35.332C31.761 35.332 30.574 34.8404 29.6989 33.9652C28.8237 33.09 28.332 31.903 28.332 30.6654V28.332"
                      stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M46.9993 28.332V30.6654C46.9993 31.903 46.5077 33.09 45.6325 33.9652C44.7573 34.8404 43.5704 35.332 42.3327 35.332C41.095 35.332 39.908 34.8404 39.0329 33.9652C38.1577 33.09 37.666 31.903 37.666 30.6654V28.332"
                      stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="2.66667" y="2.66667" width="60.6667" height="60.6667" rx="30.3333" stroke="#ADCF96"
                      strokeWidth="4.66667" />
                  </svg>
                </span>
                <p className="font-Montserrat font-semibold text-sm md:text-base text-text_color mt-6 mb-2.5">
                  Choose Store
                </p>
                <p className="font-Montserrat text-base text-p_text">
                  Get delivered fast
                </p>
    
    
                {/* <!-- dot --> */}
                <div
                  className="dots flex items-center gap-4 absolute top-[calc(100%+20px)] lg:top-[unset] xl:left-[calc(100%+36px)]">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#D9D9D9]"></span>
                  <span className="inline-block h-2 w-2 rounded-full bg-[#D9D9D9] active"></span>
                  <span className="inline-block h-2 w-2 rounded-full bg-[#D9D9D9]"></span>
                  <span className="inline-block h-2 w-2 rounded-full bg-[#D9D9D9]"></span>
                </div>
              </div>
    
              <div
                className="process process3 relative border mx-auto border-csk w-[166px] h-[180px] xl:h-[186px] rounded-lg xl:rounded-xl flex flex-col justify-center items-center">
                <span>
                  <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2.66667" y="2.66667" width="60.6667" height="60.6667" rx="30.3333" fill="#699C47" />
                    <path d="M28.3333 41.1641L19 43.4974V22.4974L28.3333 20.1641" stroke="white" strokeWidth="2.33333"
                      strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M37.6654 45.8307L28.332 41.1641V20.1641L37.6654 24.8307V45.8307Z" stroke="white"
                      strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M37.6641 24.8333L46.9974 22.5V43.5L37.6641 45.8333" stroke="white" strokeWidth="2.33333"
                      strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="2.66667" y="2.66667" width="60.6667" height="60.6667" rx="30.3333" stroke="#ADCF96"
                      strokeWidth="4.66667" />
                  </svg>
                </span>
                <p className="font-Montserrat font-semibold text-sm md:text-base text-text_color mt-6 mb-2.5">
                  Share Location
                </p>
                <p className="font-Montserrat text-base text-p_text">
                  Get delivered fast
                </p>
    
    
                {/* <!-- dot --> */}
                <div
                  className="dots flex lsm:hidden lg:flex items-center gap-4 absolute top-[calc(100%+20px)] lg:top-[unset] xl:left-[calc(100%+36px)]">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#D9D9D9]"></span>
                  <span className="inline-block h-2 w-2 rounded-full bg-[#D9D9D9]"></span>
                  <span className="inline-block h-2 w-2 rounded-full bg-[#D9D9D9] active"></span>
                  <span className="inline-block h-2 w-2 rounded-full bg-[#D9D9D9]"></span>
                </div>
              </div>
    
              <div
                className="process process4 relative mx-auto border border-csk w-[166px] h-[180px] xl:h-[186px] rounded-lg xl:rounded-xl flex flex-col justify-center items-center">
                <span>
                  <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2.66667" y="2.66667" width="60.6667" height="60.6667" rx="30.3333" fill="#699C47" />
                    <path
                      d="M40.5449 26.4844H46.7574C46.9899 26.4829 47.2173 26.5517 47.4099 26.6819C47.6025 26.812 47.7513 26.9973 47.8366 27.2136L49.8783 32.3177"
                      stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.2129 35.8184H40.5462" stroke="white" strokeWidth="2.33333" strokeLinecap="round"
                      strokeLinejoin="round" />
                    <path
                      d="M42.2949 46.3184C44.2279 46.3184 45.7949 44.7514 45.7949 42.8184C45.7949 40.8854 44.2279 39.3184 42.2949 39.3184C40.3619 39.3184 38.7949 40.8854 38.7949 42.8184C38.7949 44.7514 40.3619 46.3184 42.2949 46.3184Z"
                      stroke="white" strokeWidth="2.33333" strokeMiterlimit="10" />
                    <path
                      d="M24.7949 46.3184C26.7279 46.3184 28.2949 44.7514 28.2949 42.8184C28.2949 40.8854 26.7279 39.3184 24.7949 39.3184C22.8619 39.3184 21.2949 40.8854 21.2949 42.8184C21.2949 44.7514 22.8619 46.3184 24.7949 46.3184Z"
                      stroke="white" strokeWidth="2.33333" strokeMiterlimit="10" />
                    <path d="M38.7949 42.8184H28.2949" stroke="white" strokeWidth="2.33333" strokeLinecap="round"
                      strokeLinejoin="round" />
                    <path
                      d="M21.2962 42.819H18.3796C18.0701 42.819 17.7734 42.6961 17.5546 42.4773C17.3358 42.2585 17.2129 41.9618 17.2129 41.6523V25.319C17.2129 25.0096 17.3358 24.7128 17.5546 24.4941C17.7734 24.2753 18.0701 24.1523 18.3796 24.1523H40.5462V39.7857"
                      stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M40.5449 32.3184H49.8783V41.6517C49.8783 41.9611 49.7553 42.2579 49.5365 42.4767C49.3178 42.6954 49.021 42.8184 48.7116 42.8184H45.7949"
                      stroke="white" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="2.66667" y="2.66667" width="60.6667" height="60.6667" rx="30.3333" stroke="#ADCF96"
                      strokeWidth="4.66667" />
                  </svg>
                </span>
                <p className="font-Montserrat font-semibold text-sm md:text-base text-text_color mt-6 mb-2.5">
                  Check & Payment
                </p>
                <p className="font-Montserrat text-base text-p_text">
                  Get delivered fast
                </p>
              </div>
    
            </div>
          </div>
        </div>
  
    );
};

export default DeliveryProcess;