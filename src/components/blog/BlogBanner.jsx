

const BlogBanner = () => {
    return (
        <div>
    <div className="sub-header h-[300px] bg-cover bg-center bg-no-repeat hidden md:block">
     <div className="flex flex-col justify-center items-center h-full">
      <h3 className="font-Playfair font-black text-xl md:text-5xl text-text_color mb-[14px]">Blog</h3>
     
      <div className="relative">
        <input type="" name="search" placeholder="Search" className="bg- text-p_text w-[508px] h-[50px] px-4 pr-10 rounded-2xl  text-sm focus:outline-none" />
        <button  className="absolute right-0  top-1/2 -translate-y-1/2 mr-4">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.9998 19.0008L13.8028 13.8038M13.8028 13.8038C15.2094 12.3972 15.9996 10.4895 15.9996 8.50028C15.9996 6.51108 15.2094 4.60336 13.8028 3.19678C12.3962 1.79021 10.4885 1 8.49931 1C6.51011 1 4.60238 1.79021 3.19581 3.19678C1.78923 4.60336 0.999023 6.51108 0.999023 8.50028C0.999023 10.4895 1.78923 12.3972 3.19581 13.8038C4.60238 15.2104 6.51011 16.0006 8.49931 16.0006C10.4885 16.0006 12.3962 15.2104 13.8028 13.8038Z" stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            
        </button>
      </div>
     </div>
      
    </div>

    {/* <!-- for mobile  --> */}
    <div className="sub-header-mobile h-[180px] bg-cover bg-center bg-no-repeat md:hidden">
     <div className="flex flex-col justify-center items-center h-full">
      <h3 className="font-Playfair font-black text-xl md:text-5xl text-text_color mb-5">Blog</h3>
      <div className="relative">
        <input type="" name="search" placeholder="Search For products" className="bg- text-p_text w-[230px] h-10 px-4 pr-10 rounded  text-sm focus:outline-none" />
        <button  className="absolute right-0  top-1/2 -translate-y-1/2 mr-4">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.9998 19.0008L13.8028 13.8038M13.8028 13.8038C15.2094 12.3972 15.9996 10.4895 15.9996 8.50028C15.9996 6.51108 15.2094 4.60336 13.8028 3.19678C12.3962 1.79021 10.4885 1 8.49931 1C6.51011 1 4.60238 1.79021 3.19581 3.19678C1.78923 4.60336 0.999023 6.51108 0.999023 8.50028C0.999023 10.4895 1.78923 12.3972 3.19581 13.8038C4.60238 15.2104 6.51011 16.0006 8.49931 16.0006C10.4885 16.0006 12.3962 15.2104 13.8028 13.8038Z" stroke="#606060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            
        </button>
      </div>
     </div>
    </div>
    
  </div>
    );
};

export default BlogBanner;