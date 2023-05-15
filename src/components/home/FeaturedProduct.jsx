import { useState } from "react";
import featuredProductData from "../../data/product/featuredProductData";
import leaf from '../../assets/images/share/leaf.png'

const FeaturedProduct = () => {

  const [tabData, setTabData] = useState(featuredProductData[0].items);
    return (
        <div className="container">
        <div className="py-[47px] xl:py-[53px]">
    
          <div className="flex flex-col justify-center items-center mb-8">
            <div className="relative">
              <img src={leaf} alt="" />
            </div>
            <div className="absolute flex flex-col justify-center items-center">
              <h3 className="font-Playfair font-semibold text-2xl xl:text-5xl text-text_color mb-2">
                Featured Product
              </h3>
              <h6 className="font-Montserrat font-semibold text-sm xl:text-base text-primary_3 text-center">
                Best Products
              </h6>
            </div>
          </div>
    
          <ul className="tabs flex justify-end items-center gap-2 mb-5 xl:mb-8">
            {
              featuredProductData.map(({id,name}) =>(
                <li
                onClick={() => setTabData(featuredProductData[id].items)}
                key={id}
                className="tab cursor-pointer current border border-[#EBEBEE] py-2 px-3 xl:px-4 rounded-xl font-Montserrat text-xs xl:text-base text-p_text"
                data-tab="tab-1">{name}</li>
              ))
            }
            
          </ul>
    
          <div id="tab-1" className="tab-content current">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {
                tabData.map(({id,img,name,productName,productDescription,price}) =>(
                        
                  <div
                  key={id}
                className="border border-[#EBEBEE] overflow-hidden rounded-lg md:rounded-2xl shadow-[0_0px_42px_rgba(119,119,119,0.05)]">
                <a href="./pages/product-details.html">
                  <img className="mb-4 xl:mb-[17px] w-full" src={img} alt="" />
                </a>
    
                <div className="p-6 pt-4">
                  <h3
                    className="text-center border-b border-[#CCCCCC] pb-3 xl:pb-4 font-Montserrat font-medium text-sm md:text-[22px] text-text_color">
                    {productName}
                  </h3>
                  <p className="text-center font-Montserrat text-xs md:text-sm text-p_text mt-4 mb-3 xl:mb-6">
                  {productDescription}
                  </p>
                  <p className="font-Montserrat font-semibold text-xl md:text-[32px] text-text_color text-center mb-4">
                    ${price}
                  </p>
                  <div className="mx-auto rounded-xl w-[256px] xl:w-[308px] h-10 xl:h-12 overflow-hidden">
                    <button
                      className="cart-add-btn bg-[#EBEBEE] w-full h-full font-Montserrat font-medium text-sm md:text-base text-text_color mb-6">
                      Add to cart
                    </button>
    
                    <div
                      className="btn-group counter-btn flex justify-between items-center px-8 w-full h-full bg-primary_3 text-white"
                      role="group" aria-label="Basic outlined example">
                      <button type="button" className="add-cart remove-btn text-2xl">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.2358 12H5.23584" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                            strokeLinejoin="round" />
                        </svg>
    
                      </button>
                      <input disabled="" className="text-center w-20 bg-transparent text-2xl" value="1" />
                      <button type="button" className="add-cart add-btn text-2xl">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.2646 4.5V19.5M19.7646 12H4.76465" stroke="white" strokeWidth="1.5"
                            strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
    
                      </button>
                    </div>
                  </div>
                </div>
              </div>
                ))
              }
              
    
            </div>
          </div>
    
    
    
          
    
        </div>
    
      </div>
    );
};

export default FeaturedProduct;