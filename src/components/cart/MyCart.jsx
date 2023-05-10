import { Link } from "react-router-dom";
import cartData from "../../data/cart/cartData";


const MyCart = () => {
    return (
      
        <div className="container">
           <div className="py-10 md:py-20 px-0 md:px-20">
              <div className="border rounded-xl overflow-hidden mb-6 md:mb-8">
                  <p className="bg-[#F5F5F5] h-14 md:h-11 px-6 flex items-center font-Montserrat font-medium text-sm md:text-base text-text_color mb-3">Shopping Cart</p>
                  <div className="space-y-3">
                        
                        {
                            cartData.map(({id,img,productName,perPrice,totalPrice}) =>(
                                <div key={id} className="px-3 md:px-6 border-b md:pb-5">
  
                                <div className="flex justify-between">
                                  <div className="flex justify-center gap-3 md:gap-4">
                                     <div>
                                         <img className="rounded-xl w-[90px] md:w-[99px] h-[90px] md:h-[99px]" src={img} alt="" />
                                     </div>
                                     <div>
                                         <p className="font-Montserrat font-medium text-sm md:text-base text-text_color mb-[10px]">{productName}</p>
                                         <p className="font-Montserrat font-medium text-xs md:text-base text-p_text mb-[10px]">${perPrice}</p>
                                   
                                         <div className="w-[118px]  h-[34px] border bg-[#F5F5F5] rounded-lg flex justify-between px-4">
                                           <button className="counter__decrement">
                                             <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                               <path d="M14.625 9H3.375" stroke="#606060" strokeWidth="1.5" strokeLinecap="round"
                                                 strokeLinejoin="round" />
                                             </svg>
                           
                                           </button>
                                           <input type="" name="" value="0" className="counter__input w-5 md:h-7 ml-3 focus:outline-none bg-[#F5F5F5]" />
                                           <button className="counter__increment">
                                             <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                               <path d="M9 3.375V14.625M14.625 9H3.375" stroke="#606060" strokeWidth="1.5" strokeLinecap="round"
                                                 strokeLinejoin="round" />
                                             </svg>
                           
                                           </button>
                                         </div>
                                       
                              
                                     </div>
                                   <button className="flex !items-end">
                                             <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                 <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="#F5F5F5"/>
                                                 <path d="M9 11.1992H10.6H23.4" stroke="#D64647" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                 <path d="M21.7996 11.2V22.4C21.7996 22.8243 21.631 23.2313 21.331 23.5314C21.0309 23.8314 20.624 24 20.1996 24H12.1996C11.7753 24 11.3683 23.8314 11.0682 23.5314C10.7682 23.2313 10.5996 22.8243 10.5996 22.4V11.2M12.9996 11.2V9.6C12.9996 9.17565 13.1682 8.76869 13.4682 8.46863C13.7683 8.16857 14.1753 8 14.5996 8H17.7996C18.224 8 18.6309 8.16857 18.931 8.46863C19.231 8.76869 19.3996 9.17565 19.3996 9.6V11.2" stroke="#D64647" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                 <path d="M14.5996 15.1992V19.9992" stroke="#D64647" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                 <path d="M17.7998 15.1992V19.9992" stroke="#D64647" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                 <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#EBEBEE"/>
                                                 </svg>           
                                  </button>
                                  </div>
                 
                                  <div className="hidden md:block">
                                     <p className="font-Montserrat font-medium text-base text-text_color mb-3">Total:</p>
                                     <p className="font-Montserrat font-medium text-base text-text_color">${totalPrice}</p>
                                  </div>
                              </div>
              
                              <div className="md:hidden">
                                <div className="flex justify-between max-w-[260px] pt-4">
                                <p className="font-Montserrat font-medium text-base text-text_color mb-3">Total:</p>
                                <p className="font-Montserrat font-medium text-base text-text_color">${totalPrice}</p>
                                </div>
                             </div>
              
                              </div>
                            ))
                        }
  
                </div>
               
               
                 
              </div>
  
              <div className="flex justify-end">
                <div className="max-w-[356px]">
                  <div className="space-x-4 mb-8 md:mb-6">
                  
                    <input className="rounded-lg md:rounded-xl border w-[161px] md:w-[192px] h-10 md:h-12 focus:outline-none px-3" placeholder="Coupon Code" type="text" name=""  />
                    <button className="bg-[#606060] w-[103px] md:w-[132px] h-10 md:h-12 rounded-lg md:rounded-xl font-Montserrat font-medium text-base text-white">Apply</button>
                  </div>
  
                  <div className="bg-[#F5F5F5] p-6 rounded-lg md:rounded-xl">
                      <h3 className="font-Montserrat text-base md:text-xl text-text_color mb-4">Cart Totals</h3>
                      <div className="border-b pb-3 space-y-3">
                        <div className="flex justify-between">
                          <h5 className="font-Montserrat text-xs md:text-base text-text_color">Sub Totals</h5>
                          <span className="font-Montserrat font-medium text-xs md:text-base text-text_color">$1256.00</span>
                        </div>
                        <div className="flex justify-between">
                          <h5 className="font-Montserrat text-xs md:text-base text-text_color">Shipping</h5>
                          <span className="font-Montserrat font-medium text-xs md:text-base text-text_color">$70.00</span>
                        </div>
                      </div>
  
                      <div className="flex justify-between pt-[22px] mb-4">
                        <h5 className="font-Montserrat text-xs md:text-base text-text_color">Total</h5>
                        <span className="font-Montserrat font-medium text-xs md:text-base text-text_color">$70.00</span>
                      </div>
  
                      <Link to="/checkout">
                        <button className="w-[248px] md:w-[308px] h-[37px] md:h-11 bg-primary_3 rounded-lg font-Montserrat font-semibold text-sm md:text-base text-white">Proceed to Checkout</button>
                      </Link>
                  </div>
                  
                </div>
              </div>
              
           </div>
          
        </div>
      
   
    );
};

export default MyCart;