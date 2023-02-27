import React from "react";
import Banner from "../../Components/LandingCompo/Banner";
import Connect from "../../Components/LandingCompo/Connect.jsx";
import Working from "../../Components/LandingCompo/Working";
import Navbar from "../../Components/NavBar/Navbar";

export default function Mainpage() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#0B041B",
          width: "100vw",
          height: "100vh",
          backgroundImage: "radial-gradient( rgb(29 1 44), rgb(6 0 19))",
        }}
      >
        <Navbar />
        <Banner />
      </div>
      <div style={{ backgroundColor: "#090017" }}>
        <Connect />
      </div>
      <div
        style={{
          backgroundColor: "#090017",
          backgroundImage: "radial-gradient( rgb(29 1 44), rgb(6 0 19))",
        }}
      >
        <Working />
      </div>
    </>
  );
}
