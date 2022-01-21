import React from "react";
import MoJadiApp from "./../Assets/Images/mojadiapp.png";
import Gradien from "./../Assets/Images/gradien.png";
import MoLondry from "./../Assets/Images/molondry.png";
import SopRtsp from "./../Assets/Images/31rtsp-ori.png"
import CoeJtm from "./../Assets/Images/teknik_mesin.png"
import WayKanan from "./../Assets/Images/waykanan.png"

export default function Sertified() {
  return (
    <div className="relative bg-slate-50 w-full">
      <div className="container mx-auto px-6 py-12">
        <p className="text-slate-800 text-lg font-semibold">
          Satisfied Clients i have worked with :
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
          <div className="p-4 hover:shadow-md transition-all rounded-md flex justify-center">
            <img
              className="h-full w-auto"
              src={MoJadiApp}
              alt="PT. Mojadi Aplikasi Indonesia"
              title="PT. Mojadi Aplikasi Indonesia"
            />
          </div>
          <div className="p-4 hover:shadow-md transition-all rounded-md max-h-24 flex justify-center">
            <img
              className="h-full w-auto"
              src={CoeJtm}
              alt="COE JTM Unila"
              title="COE JTM Unila"
            />
          </div>
          <div className="p-4 hover:shadow-md transition-all rounded-md max-h-24 flex justify-center">
            <img
              className="h-full w-auto"
              src={Gradien}
              alt="CV. Gradien Digital Indonesia"
              title="CV. Gradien Digital Indonesia"
            />
          </div>
          <div className="p-4 hover:shadow-md transition-all rounded-md max-h-24 flex justify-center">
            <img
              className="h-full w-auto"
              src={SopRtsp}
              alt="PT. 31 RTSP Construction"
              title="PT. 31 RTSP Construction"
            />
          </div>
          <div className="p-4 hover:shadow-md transition-all rounded-md max-h-24 flex justify-center">
            <img
              className="h-full w-auto"
              src={MoLondry}
              alt="Molondry.id"
              title="Molondry.id"
            />
          </div>
          <div className="p-4 hover:shadow-md transition-all rounded-md max-h-24 flex justify-center">
            <img
              className="h-full w-auto rounded"
              src={WayKanan}
              alt="PT. Makmur Way Kanan"
              title="PT. Makmur Way Kanan"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
