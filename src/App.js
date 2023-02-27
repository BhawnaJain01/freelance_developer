import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./Pages/MainPage/Mainpage";
import Workspace from "./Pages/workspace/Workspace";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />}></Route>
          <Route path="/workspace" element={<Workspace />}></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
