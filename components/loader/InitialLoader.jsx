import React from 'react';
import Image from 'next/image';

export default function InitialLoader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image src="/Loader.svg" alt="loader" width={40} height={40} />
    </div>
  );
}
