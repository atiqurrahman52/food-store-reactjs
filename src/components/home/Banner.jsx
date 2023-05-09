

const Banner = () => {
    return (
        <div className="container">
      <div className="py-16 lg:py-24">
        <div className="banner-lg rounded-md max-h-[369px] bg-cover bg-center bg-no-repeat hidden md:block">
          <div className="py-16 md:py-[84px] pl-6 md:pl-[120px]">
            <div className="space-y-3 mb-6">
              <h4 className="font-Playfair font-black text-white text-base md:text-xl">
                Organic
              </h4>
              <h2 className="font-Playfair font-black text-2xl md:text-[34px] text-white">
                Fruits and Vegetable
              </h2>
              <h4 className="font-NotoSans text-sm md:text-lg text-white">
                35% OFF IN JUNE-JULY
              </h4>
            </div>
            <button className="bg-primary_3 rounded text-white md:rounded-2xl py-2 md:py-2.5 px-6">
              Shop now
            </button>
          </div>
        </div>

        {/* <!-- For Mobile  --> */}
        <div className="banner-mobile rounded-md max-h-[369px] bg-cover bg-center bg-no-repeat md:hidden">
          <div className="py-16 md:py-[84px] pl-6 md:pl-[120px]">
            <div className="space-y-3 mb-6">
              <h4 className="font-Playfair font-black text-white text-base md:text-xl">
                Organic
              </h4>
              <h2 className="font-Playfair font-black text-2xl md:text-[34px] text-white">
                Fruits and Vegetable
              </h2>
              <h4 className="font-NotoSans text-sm md:text-lg text-white">
                35% OFF IN JUNE-JULY
              </h4>
            </div>
            <button className="bg-primary_3 rounded text-white md:rounded-2xl py-2 md:py-2.5 px-6">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Banner;