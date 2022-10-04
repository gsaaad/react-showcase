import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import ComponentsChest from "./components/ComponentsChest/ComponentsChest";

function App() {
  return (
    <div className="App sm:m-2 rounded-xl">
      <Header />
      <ComponentsChest />
    </div>
  );
}

export default App;
