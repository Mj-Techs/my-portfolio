import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Wrapper, Sidediv, Main } from "./App-style";

const App = () => {
  return (
    <Wrapper>
      <Sidediv>
        <Sidebar />
      </Sidediv>
      <Main>
        <Navbar />
      </Main>
    </Wrapper>
  );
};
export default App;
