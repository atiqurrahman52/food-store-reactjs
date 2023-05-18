import { Link } from 'react-router-dom';
import notFound from '../../assets/images/not-found/not-found.webp'

const NotFound = () => {
    return (
        <div className="container flex justify-center items-center pt-20">
        <div className="py-20">
            <img className="w-[296px] md:w-full h-[116px] md:h-full" src={notFound} alt="" />
          <div className="mb-12 text-center">
            <p className="font-Playfair font-black text-[40px] text-primary_3">Error...</p>
            <p className="font-Montserrat font-semibold text-base text-primary_3">Page not found</p>
          </div>
         <div className="md:w-max mx-auto">
            <button className="w-full md:w-[308px] h-10 md:h-[56px] bg-primary_3 text-white font-Montserrat font-semibold text-base rounded md:rounded-xl">
                <Link to="/">Back To Home</Link>
              </button>
         </div>
        </div>
        
     </div>
    );
};

export default NotFound;