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
    <div className="relative w-full bg-slate-50">
      <div className="container px-6 py-12 mx-auto">
        <p className="text-lg font-semibold text-slate-800">
          Satisfied Clients i have worked with :
        </p>
        <div className="flex w-full py-4 space-x-2 overflow-x-scroll snap-x md:snap-none snap-mandatory max-h-32 md:overflow-auto scrollbar">
          {client.map((data, index) => {
            return (
              <div
                key={index}
                className={`flex justify-center snap-center snap-always w-1/2 md:w-1/6 flex-shrink-0 md:flex-shrink p-4`}
              >
                <img
                  className="object-contain w-auto h-full"
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
