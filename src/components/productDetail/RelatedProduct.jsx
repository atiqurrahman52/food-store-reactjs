import leaf from "../../assets/images/share/leaf.png";

import ProductCard from "../shop/ProductCard";

const RelatedProduct = ({ data }) => {
  return (
    <div className="container">
      <div className="py-20">
        <div className="flex flex-col justify-center items-center mb-8">
          <div className="relative">
            <img src={leaf} alt="" />
          </div>
          <div className="absolute flex flex-col justify-center items-center">
            <h3 className="font-Playfair font-semibold text-2xl xl:text-5xl text-text_color mb-2">
              Related Product
            </h3>
            <h6 className="font-Montserrat font-semibold text-sm xl:text-base text-primary_3 text-center">
              Keep updated with us
            </h6>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.slice(0, 3).map((item, i) => (
            <ProductCard key={i} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;
