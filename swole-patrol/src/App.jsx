import { useState } from "react";
import Hero from "./components/hero";
import Generator from "./components/Generator";
import Workout from "./components/Workout";

function App() {
  return (
    <>
      <Hero />
      <Generator />
      <Workout />
    </>
  );
}

export default App;
