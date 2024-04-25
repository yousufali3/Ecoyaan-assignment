import React from "react";

const About = () => {
  return (
    <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 lg:pl-[140px] text-left">
      <h2 className=" text-[44px]  mb-6 leading-[54px] font-[700] text-headingColor;">
        Proud to be one of the nations best
      </h2>
      <p className="text-[18px] leading-[30px] font-[400] text-textColor mt-[18px] mb-6">
        {" "}
        for 30 years in a row, U.S. news & world Report has recognized us Texas.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, totam.
      </p>
      <p className="text-[18px] leading-[25px] font-[400] text-textColor  mt-[30px] ">
        Our Best is something we strive for each day, caring ofr our
        patients-not looking back at what we accomplished but towards what we
        can do tomorrow. providing the best. consectetur adipisicing elit.
        Dicta, distinctio.{" "}
      </p>
      <a to="/">
        <button
          class="select-none rounded-lg mt-2 bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Learn More
        </button>
      </a>
    </div>
  );
};

export default About;
