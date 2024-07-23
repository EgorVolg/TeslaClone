import React from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import carinfo from "./carInfo.json"

export const App = () => {
  return (
    <div className="App">
      <Header />
        <Home carinfo={carinfo}/>
    </div>
  );
}

