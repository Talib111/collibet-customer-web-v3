import Image from "next/image";
import React from "react";

const Hero = () => {
 
  return (
    <div>
      <section className="bg-gray-100 ">
        <div className="container px-6 py-16 mx-auto text-center">
          <div className="max-w-lg mx-auto">
            <h2 className="max-w-4xl  mx-auto text-4xl font-semibold tracking-tight text-gray-800 xl:text-4xl dark:text-gray-800 text-center">
              Services You Can <span className="text-red-800">Count On</span>
            </h2>

            <p className="mt-6 text-gray-600 text-xl">
              Get instant access to reliable and affordable service
            </p>
          </div>

          <div className="flex justify-center mt-10">
            <Image
            height={100}
            width={100}
              className="object-cover w-full h-96 rounded-xl lg:w-5/5"
              src="https://res.cloudinary.com/dcxnmagjx/image/upload/v1687524216/wallpaperflare.com_wallpaper_anjnk5.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;


