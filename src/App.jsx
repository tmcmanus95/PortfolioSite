import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="bg-gradient-to-b from-blue-200 to-white">
      <Navbar />
      <Outlet />
    </section>
  );
}

export default App;
