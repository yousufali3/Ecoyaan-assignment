import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const RevAbout = () => {
  return (
    <Grid container spacing={2} columns={16} marginTop={10}>
      <Grid item xs={6}>
        <Item>
          {/*   ===== About content ===== */}

          <img
            className="h-96 w-full  rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt="nature image"
          />
        </Item>
      </Grid>
      <Grid item xs={10}>
        <Item>
          {" "}
          <div className="w-full   order-1 lg:order-2 text-left">
            <div className="lg:ml-[330px] mr-[40px]">
              <h2 className=" text-[44px]  mb-6 leading-[54px] font-[700] text-headingColor;">
                Proud to be one of the nations best
              </h2>
              <p className="text-[18px] leading-[30px] font-[400] text-textColor mt-[18px] mb-6">
                {" "}
                for 30 years in a row, U.S. news & world Report has recognized
                us Texas. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Vel, totam.consectetur adipisicing elit. Vel, totam.
              </p>
              <p className="text-[18px] leading-[25px] font-[400] text-textColor  mt-[30px] ">
                Our Best is something we strive for each day, caring ofr our
                patients-not looking back at what we accomplished but towards
                what we can do tomorrow. providing the best. consectetur
                adipisicing elit. Dicta, distinctio.{" "}
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
          </div>
        </Item>
      </Grid>
    </Grid>
  );
};

export default RevAbout;
