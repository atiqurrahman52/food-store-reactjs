
import leaf from "../../assets/images/share/leaf.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import teamMemberData from "../../data/contact/teamMemberData";
import { Link } from "react-router-dom";

const TeamMember = () => {
  return (
    <section id="team_member">
      <div className="container">
        <div className="py-20">
          <div className="flex flex-col justify-center items-center mb-8">
            <div className="relative">
              <img src={leaf} alt="" />
            </div>
            <div className="absolute flex flex-col justify-center items-center">
              <h3 className="font-Playfair font-semibold text-2xl xl:text-5xl text-text_color mb-2">
                Team Member
              </h3>
              <h6 className="font-Montserrat font-semibold text-sm xl:text-base text-primary_3 text-center">
                Team
              </h6>
            </div>
          </div>

          <div className="relative">
            <Swiper
              slidesPerView="auto"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              grabCursor={true}
              spaceBetween={24}
              centeredSlides={false}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              speed={1000}
              freeMode={true}
              Pagination={true}
              allowTouchMove={true}
              loopFillGroupWithBlank={true}
              modules={[Autoplay, Navigation, Pagination]}
              className="!px-2 !py-10"
              pagination={{
                dynamicBullets: true,
              }}
              navigation={{
                prevEl: ".coursePrev-btn",
                nextEl: ".courseNext-btn",
              }}
            >
              {teamMemberData.map(({ id, img, designation, name, social }) => (
                <SwiperSlide key={id}>
                  <div className="border rounded-xl overflow-hidden">
                    <div className="mb-6">
                      <img className="w-full" src={img} alt="" />
                    </div>
                    <h5 className="font-Montserrat font-medium text-sm md:text-base text-primary_3 text-center mb-5">
                      {designation}
                    </h5>
                    <h3 className="font-Montserrat font-semibold text-base md:text-xl text-text_color text-center mb-5">
                      {name}
                    </h3>
                    <ul className="flex gap-5 mx-auto w-max mb-5">
                      {social.map(({ id, icon }) => (
                        <li key={id}>
                          <Link to="#">{icon}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
