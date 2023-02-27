import React from "react";
// import Banner from "../../Components/LandingCompo/Banner";
// import Connect from "../../Components/LandingCompo/Connect.jsx";
// import Working from "../../Components/LandingCompo/Working";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { ArrowForwardIcon } from "@chakra-ui/icons";
import video1 from "../../assets/workspace video.mp4";
import Navbar from "../../Components/NavBar/Navbar";
import "./Workspace.css"    

export default function Workspace() {
  return (
    <>
    
    <div className="mainworkspace">
    {/* <Navbar/> */}
      <div>
        <video className="videowork" src={video1} autoPlay="true" loop="true" muted  />
      </div>
      <p className="headline"><span style={{fontFamily:"cursive"}}>Automate</span>  your buisness's
      back office with workspace</p>
      <p className="subheading">Get Organised. Get buisness. Get paid.</p>
      <div className="register-button">
      <Button rightIcon={<ArrowForwardIcon />} colorScheme='cyan' variant='outline'>
        Get Started
      </Button>
      </div>
    </div>
    <div style={{backgroundImage: " linear-gradient(11deg, rgba(25,33,36,1) 0%, rgba(3,16,20,1) 27%, rgba(0,0,0,1) 70%, rgba(0,0,0,1) 80%)" }}>
     <div style={{height:"100vh" , width:"75vw" , border:"1px solid white" , margin:"auto" }}>

     </div>
    </div>
    </>
  );
}
