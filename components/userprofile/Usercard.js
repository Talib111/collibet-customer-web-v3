import React from "react";
import Image from "next/image";

function Cart() {
  return (
    <>
      <div className="item shadow-xl glassy-service rounded-lg p-4 flex flex-col items-center justify-center">
        <section className="p-4 bg-white border border-gray-400 rounded-md shadow-md dark:bg-gray-800">
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white mb-2">
            Hello
          </h2>

          <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
            <Image
              width={300}
              height={300}
              className="object-cover w-full rounded-xl aspect-square"
              src="https://res.cloudinary.com/dcxnmagjx/image/upload/v1688847155/Rectangle_7_2_lzo4bp.png"
              alt=""
            />

            <h1 className="mt-4 text-3xl font-semibold text-gray-900 capitalize dark:text-white">
              MD Rehan Ansari
            </h1>

            <p className="mt-2 text-gray-600  dark:text-gray-300 text-lg">
              rehan101err0r@gmail.com
            </p>
            <p className="mt-2 text-gray-600 capitalize dark:text-gray-300 text-lg">
              121-House Hindpiri
            </p>
            <p className="mt-2 text-gray-600 capitalize dark:text-gray-300 text-lg">
              Ranchi Jharkhand
            </p>
            <p className="mt-2 text-gray-600 capitalize dark:text-gray-300 text-lg">
             +91 9153939990
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Cart;
