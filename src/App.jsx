import { useState } from "react";
import Header from "./components/Header";
import { HeaderBuild } from "./components/StaticBuild";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HeaderBuild />
    </>
  );
}

export default App;
