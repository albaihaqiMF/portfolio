import React from "react";

import MoJadiApp from "./../Assets/Portfolio/mojadiapp-page.png";
import Gradien from "./../Assets/Portfolio/ulak-2-page.png";
import MoLondry from "./../Assets/Portfolio/molondry-page.png";
import SopRtsp from "./../Assets/Portfolio/sop31-page.png";
import CoeJtm from "./../Assets/Portfolio/coe-page.png";
import WayKanan from "./../Assets/Portfolio/ulak-page.png";
import Slider from "react-slick";

export default function Works() {
  const client = [
    {
      src: MoJadiApp,
      title: "PT. Mojadi Aplikasi Indonesia",
    },
    {
      src: Gradien,
      title: "CV. Gradien Digital Indonesia",
    },
    {
      src: MoLondry,
      title: "Molondry.id",
    },
    {
      src: SopRtsp,
      title: "PT. 31 RTSP Construction",
    },
    {
      src: CoeJtm,
      title: "COE Jurusan Teknik Mesin Unila",
    },
    {
      src: WayKanan,
      title: "PT. Makmur Way Kanan",
    },
  ];

  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <div className="w-full">
      <div className="container px-6 py-12 mx-auto">
        <Slider {...settings} className="w-full">
          {client.map((data, id) => {
            return (
              <div key={id}>
                <div className={`max-h-[50px] md:max-h-60 overflow-hidden mx-1 md:mx-4 rounded-md`}>
                  <img
                    className="object-cover object-top"
                    src={data.src}
                    alt={data.title}
                    title={data.title}
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
