import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo-2.webp";
import socialSvgData from "../../data/footer/socialSvgData";
import navbarData from "../../data/navigation/navbarData";
import supportData from "../../data/footer/supportData";
import cardData from "../../data/footer/cardData";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#0F140D] mt-10">
        <div className="container">
          <div className="grid grid-cols-12 py-16 gap-6">
            <div className="col-span-12 md:col-span-4">
              <Link to="/">
                <img className="mb-6 md:mb-[18px]" src={logo} alt="logo" />
              </Link>
              <p className="font-Montserrat text-xs md:text-base text-[#E6F6FF] mb-6 md:mb-10">
                Lorem Ipsum is simply dummy text of the and typesetting
                industry. Lorem Ipsum is dummy text of the printing.
              </p>
              <div className="flex gap-5">
                {socialSvgData.map(({ id, socialSvg, path }) => (
                  <Link key={id} to={path}>
                    {socialSvg}
                  </Link>
                ))}
              </div>
            </div>

            <div className="col-span-12 md:col-span-2">
              <h3 className="font-Montserrat font-semibold md:font-bold text-base md:text-xl text-white mb-8">
                Info
              </h3>
              <ul className="space-y-5">
                {navbarData.map(({ id, title, path }) => (
                  <li
                    className="font-Montserrat font-medium text-xs md:text-base text-white"
                    key={id}
                  >
                    <Link path={path}>{title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-12 md:col-span-2">
              <h3 className="font-Montserrat font-semibold md:font-bold text-base md:text-xl text-white mb-8">
                Support
              </h3>
              <ul className="space-y-5">
                {supportData.map(({ id, title, path }) => (
                  <li
                    key={id}
                    className="font-Montserrat font-medium text-xs md:text-base text-white"
                  >
                    <Link to={path}>{title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-12 md:col-span-4">
              <h3 className="font-Montserrat font-semibold md:font-bold text-base md:text-xl text-white mb-8">
                Contact
              </h3>

              <div className="space-y-5">
                <Link to="#" className="flex gap-2">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5 8.75C12.5 9.41304 12.2366 10.0489 11.7678 10.5178C11.2989 10.9866 10.663 11.25 10 11.25C9.33696 11.25 8.70107 10.9866 8.23223 10.5178C7.76339 10.0489 7.5 9.41304 7.5 8.75C7.5 8.08696 7.76339 7.45107 8.23223 6.98223C8.70107 6.51339 9.33696 6.25 10 6.25C10.663 6.25 11.2989 6.51339 11.7678 6.98223C12.2366 7.45107 12.5 8.08696 12.5 8.75Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.25 8.75C16.25 14.7017 10 18.125 10 18.125C10 18.125 3.75 14.7017 3.75 8.75C3.75 7.0924 4.40848 5.50268 5.58058 4.33058C6.75268 3.15848 8.3424 2.5 10 2.5C11.6576 2.5 13.2473 3.15848 14.4194 4.33058C15.5915 5.50268 16.25 7.0924 16.25 8.75Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p className="font-Montserrat text-xs md:text-base text-white">
                    Brooklyn, New York, <br />
                    United States
                  </p>
                </Link>
                <Link to="tel:+0123-456789" className="flex gap-2">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.875 5.625C1.875 12.5283 7.47167 18.125 14.375 18.125H16.25C16.7473 18.125 17.2242 17.9275 17.5758 17.5758C17.9275 17.2242 18.125 16.7473 18.125 16.25V15.1067C18.125 14.6767 17.8325 14.3017 17.415 14.1975L13.7292 13.2758C13.3625 13.1842 12.9775 13.3217 12.7517 13.6233L11.9433 14.7008C11.7083 15.0142 11.3025 15.1525 10.935 15.0175C9.57073 14.5159 8.33179 13.7238 7.30398 12.696C6.27618 11.6682 5.48406 10.4293 4.9825 9.065C4.8475 8.6975 4.98583 8.29167 5.29917 8.05667L6.37667 7.24833C6.67917 7.0225 6.81583 6.63667 6.72417 6.27083L5.8025 2.585C5.75178 2.38225 5.63477 2.20225 5.47004 2.07361C5.30532 1.94498 5.10234 1.87507 4.89333 1.875H3.75C3.25272 1.875 2.77581 2.07254 2.42417 2.42417C2.07254 2.77581 1.875 3.25272 1.875 3.75V5.625Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p className="font-Montserrat text-xs md:text-base text-white">
                    +0123-456789
                  </p>
                </Link>

                <Link to="mailto:example@example.com" className="flex gap-2">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.125 7.49981V8.25481C18.125 8.59335 18.0334 8.92557 17.8598 9.21622C17.6862 9.50687 17.4372 9.74511 17.1392 9.90565L11.7408 12.8123M1.875 7.49981V8.25481C1.87499 8.59335 1.96663 8.92557 2.1402 9.21622C2.31377 9.50687 2.56279 9.74511 2.86083 9.90565L8.25917 12.8123M8.25917 12.8123L9.11083 12.354C9.38409 12.2068 9.68962 12.1297 10 12.1297C10.3104 12.1297 10.6159 12.2068 10.8892 12.354L11.7417 12.8123L15.625 14.904M8.25917 12.8123L4.375 14.904M18.125 16.2498C18.125 16.7471 17.9275 17.224 17.5758 17.5756C17.2242 17.9273 16.7473 18.1248 16.25 18.1248H3.75C3.25272 18.1248 2.77581 17.9273 2.42417 17.5756C2.07254 17.224 1.875 16.7471 1.875 16.2498V7.36981C1.87514 7.03142 1.96685 6.69937 2.14041 6.40888C2.31397 6.11839 2.56291 5.88029 2.86083 5.71981L9.11083 2.35315C9.38409 2.20596 9.68962 2.12891 10 2.12891C10.3104 2.12891 10.6159 2.20596 10.8892 2.35315L17.1392 5.71981C17.4371 5.88029 17.686 6.11839 17.8596 6.40888C18.0332 6.69937 18.1249 7.03142 18.125 7.36981V16.2498Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p className="font-Montserrat text-xs md:text-base text-white">
                    example@example.com
                  </p>
                </Link>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      {/* <!-- second footer  --> */}
      <div className="bg-[#040A02]">
        <div className="container">
          <div className="py-5">
            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
              <div>
                <p className="font-Montserrat text-xs md:text-base text-white">
                  All Rights Reserved @ Company 2023
                </p>
              </div>
              <ul className="flex space-x-3 md:space-x-6">
                {cardData.map(({ id, cardImg }) => (
                  <li key={id} className="w-[38px] md:w-[62px] h-3 md:h-5">
                    <img src={cardImg} alt="" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
