import { useEffect, useState } from "react";
import leaf from "../../assets/images/share/leaf.png";
import productData from "../../data/product/productData";
import ProductCard from "../shop/ProductCard";

const FeaturedProduct = () => {
  const [tabActive, setTabActive] = useState();
  const [tabData, setTabData] = useState([]);

// const newArrivalData = products.filter(product => product.date)
const bestSellData = productData.sort((a, b) => b.numberOfSell - a.numberOfSell)
console.log(bestSellData)
// const bestSellData = products.filter(product => product.sa)


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
          {["new arrival", "best sell", "featured"].map((item, i) => (
            <li
              onClick={() => setTabActive(item)}
              key={i}
              // className="cursor-pointer current border border-[#EBEBEE] py-2 px-3 xl:px-4 rounded-xl font-Montserrat text-xs xl:text-base text-p_text"
              className={`capitalize cursor-pointer current border border-[#EBEBEE] py-2 px-3 xl:px-4 rounded-xl font-Montserrat text-xs xl:text-base text-p_text
              ${item === tabActive && "text-primary_3"} `}
            >
              {item}
            </li>
          ))}
        </ul>

        <div id="tab-1" className="tab-content current">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productData.map((item, i) => (
              <ProductCard key={i} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
