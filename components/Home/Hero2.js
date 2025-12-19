import { GlobalContext } from "context/globalContext";
import { PiIcon, TvIcon } from "lucide-react";
import React, { useContext } from "react";
import Image from "next/image";


const Hero2 = (props) => {
  // const token = localStorage.getItem('token');
  // console.log(token)
  // console.log("KKKKKKKK")
  const { state, logout } = useContext(GlobalContext);
  const { isAuthenticated, user } = state;
  console.log(isAuthenticated)
  console.log("isAuthenticated")
  // console.log("token "+token)
  return (
    <div>
      <section className="bg-gradient-to-r from-indigo-300 to-indigo-400 w-full h-[70vh] overflow-hidden ">
        {/* <div className="container px-6 py-16 mx-auto text-center flex flex-col md:flex-row"> */}
        <div className="container px-6 py-16 pb-0 mx-auto text-center flex flex-col md:flex-row ">
          <div className="max-w-lg mx-auto flex-1 flex md:block flex-col justify-center items-center">
            <h2 className="mx-auto text-4xl md:text-6xl text-left font-semibold tracking-tight text-[#FDBF34]">
              Services
            </h2>
            <h2 className="mx-auto text-4xl md:text-5xl text-left font-semibold tracking-tight text-white">
              You can count on.
            </h2>

            <p className="mt-6 text-2xl text-gray-200 text-center md:text-left">
              Get instant access to reliable and affordable service
            </p>
            <div className=" text-center md:text-left">
              <button onClick={() => props?.setcategoryModal(true)} className="px-10 py-3 mt-6 text-sm leading-5 text-center text-white capitalize bg-[#FDBF34] rounded-lg hover:bg-sky-700 lg:mx-0 lg:w-auto focus:outline-none font-semibold">
                Book Now
              </button>
            </div>
          </div>

          <div className="flex-1 justify-center mt-10 flex relative ">
            <div className="relative -bottom-4 md:bottom-0">
              <Image
                width={791}
                height={454}
                className={''}
                src="/Images/partner.png"
                alt="logo"
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero2;


