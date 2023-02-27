import React from "react";
import { Text } from "@chakra-ui/react";

export default function Working() {
  return (
    <div
      style={{
        border: "1px solid white",
        margin: "auto",
        width: "75vw",
        height: "120vh",
      }}
    >
      <Text
        style={{ textAlign: "center" }}
        bgGradient="linear(to-l, #ffffff, #ff2894)"
        bgClip="text"
        fontSize="2xl"
        fontWeight="bold"
      >
        How it Works
      </Text>
    </div>
  );
}
