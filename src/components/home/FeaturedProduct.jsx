import { useEffect, useState } from "react";
import leaf from "../../assets/images/share/leaf.png";
import productData from "../../data/product/productData";
import ProductCard from "../shop/ProductCard";
// import { format, parse, compareDesc, compareAsc } from "date-fns";
// import moment from "moment";

const FeaturedProduct = () => {
  const [tabActive, setTabActive] = useState("new arrival");
  const [tabData, setTabData] = useState([]);

  // const newArrivalData = productData.sort(compareAsc);

  // const newArrivalData = productData.sort((a, b) =>
  //   compareAsc(
  //     parse(a.dateCreated, "MMMM dd, yyyy", new Date()),
  //     parse(b.dateCreated, "MMMM dd, yyyy", new Date())
  //   )
  // );

  // const newArrivalData = productData.sort((a, b) => {
  //   const dateA = new Date(a.dateCreated);
  //   const dateB = new Date(b.dateCreated);
  //   return dateA - dateB;
  // });

  // const newArrivalData = productData.sort((a, b) => moment(a.dateCreated, "MMMM DD, YYYY") - moment(b.dateCreated, "MMMM DD, YYYY"));


  // console.log(newArrivalData);

  const bestSellData = productData.sort(
    (a, b) => b.numberOfSell - a.numberOfSell
  );
  const featuredData = productData.filter((product) => product.isFeatured);

  useEffect(() => {
    setTabData(
      (tabActive === "new arrival" && productData) ||
        (tabActive === "best sell" && bestSellData) ||
        (tabActive === "featured" && featuredData)
    );
  }, [bestSellData, featuredData]);

  // console.log(newArrivalData.map(item=> item.dateCreated));

  // format(new Date(2014, 1, 11), "MM/dd/yyyy");
  //=> '02/11/2014'

  // const dates = [
  //   { dateFF: "May 15, 2023" },
  //   { dateFF: "March 15, 2023" },
  //   { dateFF: "February 15, 2023" },
  // ];

  // dates.sort(compareAsc);

  // console.log(productData.sort(compareAsc));

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
              ${
                item === tabActive && "text-primary_3 border border-primary_3"
              } `}
            >
              {item}
            </li>
          ))}
        </ul>

        <div id="tab-1" className="tab-content current">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tabData.map((item, i) => (
              <ProductCard key={i} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
