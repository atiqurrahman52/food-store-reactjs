

const BannerCheckout = () => {
    return (
        <section id="sub_header" className="pt-[70px] md:pt-20">
        <div className="sub-header h-[300px] bg-cover bg-center bg-no-repeat hidden md:block">
          <h3 className="flex justify-center h-full items-center font-Playfair font-black text-xl md:text-5xl text-text_color">Check Out</h3>
          
        </div>
    
        {/* <!-- for mobile  --> */}
        <div className="sub-header-mobile h-[180px] bg-cover bg-center bg-no-repeat md:hidden">
          <h3 className="flex justify-center h-full items-center font-Playfair font-black text-xl md:text-5xl text-text_color">Check Out</h3>
          
        </div>
        
      </section>
    );
};

export default BannerCheckout;