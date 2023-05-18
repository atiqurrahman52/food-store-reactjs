import leaf from "../../assets/images/share/leaf.png";
import exoticFoodData from "../../data/home/exoticFoodData";
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
            {exoticFoodData.map(
              ({ id, img, title, calendar, date, user, userName }) => (
                <div key={id} className="relative overflow-hidden rounded-xl">
                  <img className="w-full" src={img} alt="" />
                  <div className="absolute bg-[#18271BB8] p-6 bottom-0 w-full">
                    <p className="font-Montserrat font-medium text-sm md:text-base text-white mb-4 md:mb-3">
                      {title}
                    </p>
                    <div className="flex gap-4">
                      <div className="flex space-x-2">
                        <span className="w-3 md:w-5 h-3 md:h-5">
                          {calendar}
                        </span>
                        <span className="font-Montserrat font-medium text-[10px] md:text-sm text-white">
                          {date}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <span className="w-3 md:w-5 h-3 md:h-5">{user}</span>
                        <span className="font-Montserrat font-medium text-[10px] md:text-sm text-white">
                          {userName}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExoticFood;
