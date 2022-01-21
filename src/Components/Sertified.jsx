import React from "react";
import MoJadiApp from "./../Assets/Images/mojadiapp.png";
import Gradien from "./../Assets/Images/gradien.png";
import MoLondry from "./../Assets/Images/molondry.png";
import SopRtsp from "./../Assets/Images/31rtsp-ori.png";
import CoeJtm from "./../Assets/Images/teknik_mesin.png";
import WayKanan from "./../Assets/Images/waykanan.png";

export default function Sertified() {
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

  return (
    <div className="relative bg-slate-50 w-full">
      <div className="container mx-auto px-6 py-12">
        <p className="text-slate-800 text-lg font-semibold">
          Satisfied Clients i have worked with :
        </p>
        <div className="snap-x md:snap-none flex snap-mandatory max-h-32 w-full overflow-x-scroll md:overflow-auto scrollbar space-x-2 py-4">
          {client.map((data, index) => {
            return (
              <div
                key={index}
                className={`flex justify-center snap-center w-1/2 md:w-1/6 flex-shrink-0 md:flex-shrink p-4`}
              >
                <img
                  className="h-full w-auto object-contain"
                  src={data.src}
                  alt={data.title}
                  title={data.title}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
