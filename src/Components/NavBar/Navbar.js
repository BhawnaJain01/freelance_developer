import React from "react";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Navbar() {
  return (
    <div
      style={{
        // border: "1px solid white",
        paddingTop: "10px",
        margin: "auto",
        width: "75vw",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <img style={{ width: "250px" }} src="logo2.png" alt="" />

      <div>
        <Button
          style={{ marginTop: "30px" }}
          rightIcon={<ArrowForwardIcon />}
          colorScheme="purple"
        >
          Start Building{" "}
        </Button>
      </div>
    </div>
  );
}
