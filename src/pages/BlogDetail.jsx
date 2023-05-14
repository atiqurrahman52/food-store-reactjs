import { useParams } from "react-router-dom";
import BlogDetailBanner from "../components/blogDetail/BlogDetailBanner";
import BlogDetails from "../components/blogDetail/BlogDetails";
import blogData from "../data/blog/blogData";


const BlogDetail = () => {
   const {id} = useParams();
//    const singleBlog = blogData?.find((item) => item.id === parseInt(id));
const singleBlog = blogData?.find((item) => item.id === parseInt (id));
    return (
        <div>
          <BlogDetailBanner />
          <BlogDetails data ={singleBlog} />
        </div>
    );
};

export default BlogDetail;