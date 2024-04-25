import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import About from "./About";

import RevAbout from "./RevAbout";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Mainpage = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 6 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={10}>
          <Item>
            {/*   ===== About content ===== */}
            <About />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            {" "}
            <img
              className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
              src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
              alt="nature image"
            />
          </Item>
        </Grid>
      </Grid>

      <RevAbout />

      <Grid container spacing={2} columns={16} marginTop={10}>
        <Grid item xs={10}>
          <Item>
            {/*   ===== About content ===== */}
            <About />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            {" "}
            <img
              className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
              src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
              alt="nature image"
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Mainpage;
