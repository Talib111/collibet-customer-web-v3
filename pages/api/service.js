

import Image from "next/image";
import React from "react";
export async function getServerSideProps() {
  try {
    const response = await fetch("https://64ae3caac85640541d4ca779.mockapi.io/bobb");

    if (response.ok) {
      const data = await response.json();
      return {
        props: {
          product: data,
        },
      };
    } else {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        product: [],
      },
    };
  }
}

const Services = ({ product }) => {
  return (
    <section className="bg-white">
      <div className="container px-4 py-12 mx-auto text-center">
        <h1 className="text-4xl font-semibold text-gray-800 xl:text-5xl">
          Services You Need At{" "}
          <span className="text-green-500">Super Fast Speed</span>
        </h1>

        <div className="flex flex-wrap justify-center mt-10">
          {product && product.length > 0 ? (
            product.map((item, id) => (
              <div
                key={id}
                className="bg-black bg-opacity-10 rounded-xl shadow-lg mx-4 my-6 max-w-sm transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative h-56">
                  <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-0"></div>
                  <div className="flex justify-center items-center h-20 w-20 rounded-full mx-auto">
                    <Image
                      width={500}
                      height={500}
                      src={item.avatar}
                      className="w-32"
                      alt="Logo"
                    />
                  </div>
                  <div className="mt-4 px-4">
                    <h3 className="text-lg font-semibold text-gray-800 truncate">
                      {item.name}
                    </h3>
                    <p className="text-gray-700 truncate">{item.createdAt}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
