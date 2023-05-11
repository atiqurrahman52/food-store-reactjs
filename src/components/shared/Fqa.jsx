import { useState } from "react";
import leaf from "../../assets/images/share/leaf.png";
import contact from "../../assets/images/contact/contact.webp";
import fqaData from "../../data/fqa/fqaData";
import { Minus, Plus } from "@phosphor-icons/react";
const Fqa = () => {
  const [accordion, setAccordion] = useState(0);
  return (
    <div className="container">
      <div className="py-20">
        <div className="flex flex-col justify-center items-center mb-6 md:mb-8">
          <div className="relative">
            <img src={leaf} alt="" />
          </div>
          <div className="absolute flex flex-col justify-center items-center">
            <h3 className="font-Playfair font-semibold text-2xl xl:text-5xl text-text_color mb-2">
              Some Questions
            </h3>
            <h6 className="font-Montserrat font-semibold text-sm xl:text-base text-primary_3 text-center">
              -How to get deliverer
            </h6>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="acc-container border rounded-xl px-4 md:px-6 py-6">
            {fqaData.map(({ id, title, description }) => (
              <div
                key={id}
                onClick={() => setAccordion(id === accordion ? "" : id)}
                className="py-6 border-b border-[#F5F5F5]"
              >
                <div className="flex justify-between">
                  <p className="font-Montserrat font-medium text-base text-text_color">
                    {title}
                  </p>

                  {id === accordion ? (
                    <Minus className="text-primary_3" size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </div>

                {id === accordion && (
                  <p
                    key={id}
                    className="text-p_text font-Montserrat text-base pt-6"
                  >
                    {description}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div>
            <img className="w-full" src={contact} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fqa;
