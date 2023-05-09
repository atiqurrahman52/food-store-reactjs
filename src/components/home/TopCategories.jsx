import leaf from "../../assets/images/share/leaf.png";
import topCategoriesData from "../../data/home/topCategoriesData";

const TopCategories = () => {
  return (
    <div className="container">
      <div className="py-[77px] xl:py-[83px]">
        <div className="flex flex-col justify-center items-center mb-8">
          <div className="relative">
            <img src={leaf} alt="" />
          </div>
          <div className="absolute flex flex-col justify-center items-center">
            <h3 className="font-Playfair font-semibold text-2xl xl:text-5xl text-text_color mb-2">
              Top Categories
            </h3>
            <h6 className="font-Montserrat font-semibold text-sm xl:text-base text-primary_3 text-center">
              Categories
            </h6>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 xl:gap-6">
          {topCategoriesData.map(({ id, name, quantity, icon }) => (
            <div
              key={id}
              className="w-[140px] xl:w-[166px] categories group hover:bg-primary_3 bg-[#EEF2F3] rounded-2xl p-2.5 xl:p-4 flex flex-col justify-center items-center"
            >
              <span className="mb-2 xl:mb-4 pt-2 xl:pt-4">{icon}</span>
              <h5 className="text-center mb-2 xl:mb-2.5 font-Montserrat font-medium text-sm xl:text-base group-hover:text-white text-text_color">
                {name}
              </h5>
              <p className="font-Montserrat font-medium text-xs xl:text-sm group-hover:text-white text-p_text">
                {quantity} Item
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
