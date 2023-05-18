

const NewsLetter = () => {
    return (
        <div className="container">
        <div className="py-1">
          <div className="subscribe-lg h-[259px] rounded-md md:block hidden">
            <div className="flex justify-between items-center gap-8 pt-20 md:mx-2 xl:mx-40">
  
              <div>
                <h3 className="font-Playfair font-black  text-[40px] text-white">
                  Subscribe <br />
                  Newsletter</h3>
              </div>
  
              <div className="flex items-center w-[548px]  h-12 bg-white rounded-xl">
                <input type="" name=""  className="w-full h-12 px-3 outline-none rounded-xl"
                  placeholder="Your email address..." />
                <button className="w-[250px] h-12 bg-primary_3 text-white rounded-xl font-Montserrat font-semibold text-base"
                  type="">
                  Subsrcribe Now
                </button>
              </div>
  
            </div>
          </div>
  
          {/* <!-- For mobile   --> */}
          <div className="subscribe-mobile h-[263px] w-full md:w-fit bg-no-repeat bg-cover bg-center rounded-md md:hidden block">
            <div className="flex flex-col items-center justify-center px-4 py-4">
  
              <div>
                <h3 className="font-Playfair font-black text-2xl text-white py-10">
                  Subscribe <br />
                  Newsletter</h3>
              </div>
  
  
              <div className="flex items-center w-full  h-8 bg-white rounded-xl">
                <input type="" name=""  className="w-full h-8 px-3 outline-none rounded"
                  placeholder="Email Address" />
                <button className="w-[190px] h-8 bg-primary_3 text-white rounded font-Montserrat text-xs" type="">
                  Subsrcribe Now
                </button>
              </div>
  
  
  
            </div>
          </div>
  
        </div>
      </div>
    );
};

export default NewsLetter;