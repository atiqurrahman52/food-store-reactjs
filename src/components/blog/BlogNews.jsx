import { Link } from "react-router-dom";
import leaf from "../../assets/images/share/leaf.png";
import lemon from "../../assets/images/blog/lemon.webp";
import blogData from "../../data/blog/blogData";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import blogArchivesData from "../../data/blog/blogArchivesData";
import recentPostData from "../../data/blog/recentPostData";
import foodTagsData from "../../data/blog/foodTagsData";
const BlogNews = () => {
  return (
    <section id="blog">
      <div className="container">
        <div className="py-20">
          <div className="flex flex-col justify-center items-center mb-8">
            <div className="relative">
              <img src={leaf} alt="" />
            </div>
            <div className="absolute flex flex-col justify-center items-center">
              <h3 className="font-Playfair font-semibold text-2xl xl:text-5xl text-text_color mb-2">
                News From Exotic Food
              </h3>
              <h6 className="font-Montserrat font-semibold text-sm xl:text-base text-primary_3 text-center">
                Made with ingredients so classic
              </h6>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    blogData.map(({id,img,title,calendar,date,user,userName}) =>(
                        <div key={id} className="relative overflow-hidden rounded-xl">
                  <Link to={`/blog-detail/${id}`}>
                  {/* <Link to='/blog-detail'> */}
                    <img
                      className="w-full"
                      src={img}
                      alt=""
                    />
                 
                  <div className="absolute bg-[#18271BB8] p-6 bottom-0 w-full">
                    <p className="font-Montserrat font-medium text-sm md:text-base text-white mb-4 md:mb-3">
                    {title}
                    </p>
                    <div className="flex justify-between rounded-b-lg">
                      <div className="flex space-x-2">
                        <span className="w-3 md:w-5 h-3 md:h-5">
                        
                          {calendar}
                        </span>
                        <span className="font-Montserrat font-medium text-[10px] md:text-sm text-white">
                          {date}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <span className="w-3 md:w-5 h-3 md:h-5">
                        {user}
                        </span>
                        <span className="font-Montserrat font-medium text-[10px] md:text-sm text-white">
                          {userName}
                        </span>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
                    ))
                }
              </div>

              <div className="block lg:hidden">
                <div className="flex justify-between items-center mt-5">
                  <button className="flex items-center gap-2 border border-[#F5F5F7] py-[6px] md:py-2.5 px-2 md:px-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)] rounded-lg">
                    <span>
                      
                      <ArrowLeft size={16} className="text-[#838D8F]" />
                    </span>
                    <span className="font-Montserrat font-medium text-[10px] md:text-sm text-[#838D8F]">
                      Previous
                    </span>
                  </button>
                  <div>
                    <Link
                      className="bg-[#EDEDE3] text-primary_3 py-1 md:py-2 px-2 md:px-3 rounded-lg"
                      to="#"
                    >
                      1
                    </Link>
                    <Link
                      className="font-Montserrat font-medium text-xs md:text-sm py-1 md:py-2 px-2 md:px-3 text-p_text"
                      to="#"
                    >
                      2
                    </Link>
                    <Link
                      className="font-Montserrat font-medium text-xs md:text-sm py-1 md:py-2 px-2 md:px-3 text-p_text"
                      to="#"
                    >
                      ...
                    </Link>
                    <a
                      className="font-Montserrat font-medium text-xs md:text-sm py-1 md:py-2 px-2 md:px-3 text-p_text"
                      to="#"
                    >
                      6
                    </a>
                  </div>
                  <button className="flex items-center gap-2 border border-[#F5F5F7] py-[6px] md:py-2.5 px-2 md:px-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)] rounded-lg">
                    <span className="font-Montserrat font-medium text-[10px] md:text-sm text-text_color">
                      Next
                    </span>

                    <span>
                     
                      <ArrowRight size={16} className="text-text_color" />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 space-y-6 md:space-y-8">
              <div className="py-5 px-4 bg-[#F5F5F5] rounded-xl md:rounded-2xl">
                <h3 className="font-Montserrat font-semibold text-sm md:text-base text-text_color  mb-5">
                  Blog Archives
                </h3>
                <div className="space-y-4">
                 
                  {
                    blogArchivesData.map(({id,name}) =>(
                        <h4 key={id} className="font-Montserrat text-xs md:text-base text-p_text">
                       {name}
                      </h4>
                    ))
                  }
                
                </div>
              </div>

              <div className="py-5 px-4 bg-[#F5F5F5] rounded-xl md:rounded-2xl">
                <h3 className="font-Montserrat font-semibold text-sm md:text-base text-text_color  mb-5">
                  Recent Posts
                </h3>
                <div className="space-y-5">
                    {
                        recentPostData.map(({id,img,title,date}) =>(
                            <Link to="#" key={id} className="flex items-center gap-3">
                            <div>
                             
                               
                                <img
                                  className="rounded-xl"
                                  src={img}
                                  alt=""
                                />
                            
                            </div>
                            <div>
                              <h3 className="mb-3 font-Montserrat font-medium text-sm text-text_color">
                              {title}
                              </h3>
                              <span className="font-Montserrat font-medium text-xs text-[#699C47]">
                                {date}
                              </span>
                            </div>
                          </Link>
                        ))
                    }


                </div>
              </div>

              <div className="py-5 px-4 bg-[#F5F5F5] rounded-xl md:rounded-2xl">
                <h3 className="font-Montserrat font-semibold text-sm md:text-base text-text_color  mb-5">
                  Tags
                </h3>
                <div className="space-y-4 space-x-2">
                  {
                    foodTagsData.map(({id,name}) =>(
                    <button key={id} className="py-[6px] px-[14px] bg-white rounded-full font-Montserrat text-sm text-p_text">
                     {name}
                  </button>
                    ))
                  }
                  
                
                </div>
              </div>

              <div className="py-5 px-6 bg-[#F1F4E9] rounded-xl md:rounded-2xl">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-Playfair font-black text-xl text-[#699C47] mb-[9px]">
                      Green Lemon & Orange
                    </h3>
                    <button className="py-[9px] md:py-2 px-[29px] md:px-[23px] bg-[#699C47] font-Montserrat font-semibold text-sm md:text-base text-white rounded-lg md:rounded-xl">
                      Shop now
                    </button>
                  </div>
                  <div>
                    <img
                      className="pt-[100px] w-full h-full ml-5"
                      src={lemon}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:block hidden">
            <div className="flex justify-between items-center mt-5">
              <button className="flex items-center gap-2 border border-[#F5F5F7] py-[6px] md:py-2.5 px-2 md:px-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)] rounded-lg">
                <span>
                  
                  <ArrowLeft size={20} className="text-[#838D8F]" />
                </span>
                <span className="font-Montserrat font-medium text-[10px] md:text-sm text-[#838D8F]">
                  Previous
                </span>
              </button>
              <div>
                <a
                  className="bg-[#EDEDE3] text-primary_3 py-1 md:py-2 px-2 md:px-3 rounded-lg"
                  to="#"
                >
                  1
                </a>
                <a
                  className="font-Montserrat font-medium text-xs md:text-sm py-1 md:py-2 px-2 md:px-3 text-p_text"
                  to="#"
                >
                  2
                </a>
                <a
                  className="font-Montserrat font-medium text-xs md:text-sm py-1 md:py-2 px-2 md:px-3 text-p_text"
                  to="#"
                >
                  ...
                </a>
                <a
                  className="font-Montserrat font-medium text-xs md:text-sm py-1 md:py-2 px-2 md:px-3 text-p_text"
                  to="#"
                >
                  6
                </a>
              </div>
              <button className="flex items-center gap-2 border border-[#F5F5F7] py-[6px] md:py-2.5 px-2 md:px-4 shadow-[0_1px_2px_rgba(16,24,40,0.05)] rounded-lg">
                <span className="font-Montserrat font-medium text-[10px] md:text-sm text-text_color">
                  Next
                </span>

                <span>
                <ArrowRight size={20} className="text-text_color" />
                
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogNews;
