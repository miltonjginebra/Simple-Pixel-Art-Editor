import React from "react";
import UserContext from "./components/UserContext";
import "./App.css";
import Toolbar from "./components/Toolbar";
import Canvas from "./components/Canvas";

function App() {
  return (
    <div className="App">
      <UserContext.Provider
        value={{
          loggedIn: false,
          username: null,
          token: null,
          selectedTool: "pencil",
          selectedColor: "#000",
        }}
      >
        <Toolbar />
        <Canvas />
      </UserContext.Provider>
    </div>
  );
}

export default App;
