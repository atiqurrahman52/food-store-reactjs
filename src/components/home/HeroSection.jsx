import leaf from '../../assets/images/hero/leaf.webp'
import hero from '../../assets/images/hero/hero.webp'
const HeroSection = () => {
    return (
        
        <div className="hero-bg h-full xl:h-[calc(100vh-88px)] bg-cover bg-no-repeat bg-center">
          <div className="container h-full flex justify-center items-center">
            <div className="grid md:grid-cols-2 gap-6">
             
              <div className="py-10 xl:py-16">
                <h5 className="text-white font-Montserrat font-semibold text-sm lg:text-base mb-5 lg:mb-4">
                  All Natural Products
                </h5>
                <div className="relative">
                  <h3 className="text-white font-Playfair font-extrabold text-[32px] xl:text-[72px] mb-5 xl:mb-4">
                    Healthy food & <br />
                    <span className="text-[#D64647]">Organic</span> market
                  </h3>
                  <img className="absolute top-[-80px] left-[403px] xl:block hidden" src={leaf}
                    alt="" />
                </div>
                <p className="text-white font-Montserrat text-xs lg:text-sm mb-5 xl:mb-[74px]">
                  Exotic food is food produced by methods that <br />
                  company with the standards of organic farming
                </p>
                <button
                  className="bg-white text-primary_3 font-Montserrat font-semibold text-base py-2 xl:py-4 px-10 xl:px-12 rounded xl:rounded-xl">
                  Shop now
                </button>
              </div>
              <div className="py-5">
                <img className="h-full w-full" src={hero} alt="" />
              </div>
            </div>
          </div>
        </div>
      
    );
};

export default HeroSection;