const CartBanner = () => {
  return (
    <div>
      <div className="sub-header h-[300px] bg-cover bg-center bg-no-repeat hidden md:block">
        <h3 className="flex justify-center h-full items-center font-Playfair font-black text-xl md:text-5xl text-text_color">
          My Cart
        </h3>
      </div>

      <div className="sub-header-mobile h-[180px] bg-cover bg-center bg-no-repeat md:hidden">
        <h3 className="flex justify-center h-full items-center font-Playfair font-black text-xl md:text-5xl text-text_color">
          My Cart
        </h3>
      </div>
    </div>
  );
};

export default CartBanner;
