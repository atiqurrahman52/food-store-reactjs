import ff from '../../assets/images/exotix-food/image-3.webp'
import leaf from "../../assets/images/share/leaf.png";
import exoticFoodData from '../../data/home/exoticFoodData';
const ExoticFood = () => {
    return (
        <section id="news_exotic_food">
        <div className="container">
          <div className="py-16">
         
             <div className="flex flex-col justify-center items-center mb-8">
          <div className="relative">
            <img src={leaf} alt="" />
          </div>
          <div className="absolute flex flex-col justify-center items-center">
            <h3 className="font-Playfair font-semibold text-2xl xl:text-5xl text-text_color mb-2">
            News From Exotic Food
            </h3>
            <h6 className="font-Montserrat font-semibold text-sm xl:text-base text-primary_3 text-center">
            Keep updated with us
            </h6>
          </div>
        </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    exoticFoodData.map(({id,img,title,calendar,date,user,userName}) =>(
                        <div key={id} className="relative overflow-hidden rounded-xl">
                        <img className="w-full" src={img} alt="" />
                        <div className="absolute bg-[#18271BB8] p-6 bottom-0 w-full">
                          <p className="font-Montserrat font-medium text-sm md:text-base text-white mb-4 md:mb-3">
                            {title}
                          </p>
                          <div className="flex justify-between rounded-b-lg">
                            <div className="flex space-x-2">
                              <span className="w-3 md:w-5 h-3 md:h-5">
                               {calendar}
                              </span>
                              <span className="font-Montserrat font-medium text-[10px] md:text-sm text-white">{date}</span>
                            </div>
                            <div className="flex space-x-2">
                              <span className="w-3 md:w-5 h-3 md:h-5">
{/*                              
                                <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10.1242 4.5C10.1242 5.3288 9.79493 6.12366 9.20887 6.70971C8.62282 7.29576 7.82797 7.625 6.99917 7.625C6.17037 7.625 5.37551 7.29576 4.78946 6.70971C4.20341 6.12366 3.87417 5.3288 3.87417 4.5C3.87417 3.6712 4.20341 2.87634 4.78946 2.29029C5.37551 1.70424 6.17037 1.375 6.99917 1.375C7.82797 1.375 8.62282 1.70424 9.20887 2.29029C9.79493 2.87634 10.1242 3.6712 10.1242 4.5ZM0.75 16.265C0.776779 14.6253 1.44695 13.0618 2.61598 11.9117C3.78501 10.7616 5.35924 10.1171 6.99917 10.1171C8.63909 10.1171 10.2133 10.7616 11.3824 11.9117C12.5514 13.0618 13.2216 14.6253 13.2483 16.265C11.2878 17.164 9.15596 17.6279 6.99917 17.625C4.76917 17.625 2.6525 17.1383 0.75 16.265Z" stroke="white" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg> */}
                                  {user}
                                  
                              </span>
                              <span className="font-Montserrat font-medium text-[10px] md:text-sm text-white">{userName}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                    ))
                }

           

            </div>
          </div>
        </div>
      </section>
    );
};

export default ExoticFood;