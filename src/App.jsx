import { useState } from "react";
import Header from "./components/Header";
import { HeaderBuild } from "./components/StaticBuild";
import CategoryMenu from "./components/CategoryMenu";

// import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <Header /> */}
      <CategoryMenu />
      {/* <HeaderBuild /> */}
    </>
  );
}

export default App;
