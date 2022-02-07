import React from 'react';

export default function ErrorPage() {
  return (
    <div className="bg-black relative overflow-hidden h-screen">
      <img src="https://t4.ftcdn.net/jpg/01/79/97/33/360_F_179973328_WmTgchiYSNEUWrGggispWfYdT2xLDhbZ.jpg" classNameName="absolute h-full w-full object-cover" alt="astronaut on a crater with cellphone"/>
      <div className="inset-0 bg-black opacity-25 absolute"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
      <div className="w-full font-mono flex flex-col items-center relative z-10">
        <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
            You&#x27;re alone here
        </h1>
        <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
            404
        </p>
      </div>
      </div>
    </div>

  );
}
