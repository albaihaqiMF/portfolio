import React from "react";
import Sertified from "../Components/Sertified";
import Works from "../Components/Works";
import Navbar from "./../Components/Navbar";

export default function Welcome() {
  return (
    <div className="antialiased">
      <Navbar />
      <div className="h-[75vh] md:h-[85vh] flex flex-col justify-center bg-gradient-to-br from-indigo-400 to-theme-4 transition-all duration-300 relative">
        <div className="container relative z-30 p-6 mx-auto">
          <p className="mb-6 font-semibold text-indigo-900 text-md md:text-lg">
            Muhammad Fahmi Albaihaqi, <span>Web Developer</span>
          </p>
          <p className="text-xl lg:text-2xl xl:text-3xl font-semibold w-full md:w-[480px] bg-gradient-to-br from-indigo-50 to-pink-50 bg-clip-text text-transparent mb-14">
            Specialist in creating web with Tailwind CSS and Laravel
          </p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/fhmalba/"
              className="flex items-center px-3 py-2 text-xs font-semibold text-white transition-all duration-300 border-2 rounded-md shadow md:px-5 md:text-base hover:border-indigo-500 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-cyan-50 hover:text-indigo-500 hover:shadow-lg"
              title="LinkedIn"
            >
              LinkedIn{" "}
              <span className="ml-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </span>
            </a>
            <a
              href="https://wa.me/6281273453552"
              className="flex items-center px-3 py-2 text-xs font-semibold text-white transition-all duration-300 border-2 rounded-md shadow md:px-5 border-emerald-500 bg-emerald-500 md:text-base hover:bg-emerald-50 hover:text-emerald-500 hover:border-2 hover:shadow-lg"
            >
              WhatsApp{" "}
              <span className="ml-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div className="absolute bottom-32 right-12 md:right-16 transform -rotate-[27deg] z-0">
          <svg
            className="w-56 h-56 md:w-60 md:h-60 xl:w-72 xl:h-72"
            viewBox="0 0 238 252"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M119 119.5L0 0.5V251.5L32.5 219V168L65 198V163.5L32.5 131V85L119 171.5L205.5 85V131L184.75 111.25V134V153.25L205.5 171.5V219L238 251.5V0.5L119 119.5Z"
              fill="rgba(117,179,243,.5)"
            />
          </svg>
        </div>
      </div>
      <div className="relative z-10 -mt-20 sm:-mt-24 md:-mt-32 lg:-mt-[186px]">
        <svg
          viewBox="0 0 1428 174"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g
              transform="translate(-2.000000, 44.000000)"
              fill="#F8FAFC"
              fillRule="nonzero"
            >
              <path
                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                opacity="0.100000001"
              ></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
              ></path>
              <path
                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                id="Path-4"
                opacity="0.200000003"
              ></path>
            </g>
            <g
              transform="translate(-4.000000, 76.000000)"
              fill="#F8FAFC"
              fillRule="nonzero"
            >
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
            </g>
          </g>
        </svg>
      </div>
      <Sertified />
      <Works />
    </div>
  );
}
