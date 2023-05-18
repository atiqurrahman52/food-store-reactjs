import { useParams } from "react-router-dom";
import ProductDescription from "../components/productDetail/ProductDescription";
import ProductDetailBanner from "../components/productDetail/ProductDetailBanner";
import ProductReviews from "../components/productDetail/ProductReviews";
import RelatedProduct from "../components/productDetail/RelatedProduct";
import productData from "../data/product/productData";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const [data, setData] = useState([]);
  const router = useParams();

  const singleProductData = productData[router.id];
  const relatedProducts = productData.filter(
    (product) => product.category === singleProductData.category
  );

  useEffect(() => {
    setData(singleProductData);
  }, [singleProductData]);

  return (
    <div>
      <ProductDetailBanner />
      <ProductDescription data={data} />
      <ProductReviews data={data} />
      <RelatedProduct data={relatedProducts} />
    </div>
  );
};

export default ProductDetail;
