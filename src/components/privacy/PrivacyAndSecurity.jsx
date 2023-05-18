import { useState, useEffect } from "react";
import privacyData from "../../data/privacy/privacyData";

const PrivacyAndSecurity = () => {
  const [tabActive, setTabActive] = useState(0);
  const [data, setData] = useState(privacyData[tabActive]);

  useEffect(() => {
    setData(privacyData[tabActive]);
  }, [tabActive, data]);
  const { items } = data;


  return (
    <div className="py-10">
      <div className="container">
        <ul className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mb-16 md:mb-12">
          {privacyData.map(({ id, header }) => (
            <li
              key={id}
              onClick={() => setTabActive(id)}
              className={`cursor-pointer font-Montserrat font-medium text-base text-[#A3C5E3] ${
                id === tabActive && "text-[#0077E5]"
              } `}
            >
              {header}
            </li>
          ))}
        </ul>

        
          <div>
            {items.map(({ id, title, description }) => (
              <div key={id} className="mb-10 md:mb-20">
                <h3 className="font-Montserrat font-medium text-lg md:text-[32px] text-text_color mb-6">
                  {title}
                </h3>
                <p className="font-Montserrat text-xs md:text-base text-p_text">
                  {description}
                </p>
              </div>
            ))}
          </div>
       
      </div>
    </div>
  );
};

export default PrivacyAndSecurity;
