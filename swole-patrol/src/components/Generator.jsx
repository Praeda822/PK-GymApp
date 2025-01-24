// rfc
import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/swoldier";

function Header(props) {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm-text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}

export default function Generator() {
  // In regards to anything I expect the user to interact with (any anything interactive in React), I need to keep track of the state, in this case I need to keep track of the modal state
  // So instead of defining them like I traditionally would:

  // Handles the dropdown for muscle groups
  // let showModal = false;

  // I instead define them as React Stateful variables:
  // Remembering to import useState from react...
  // So the syntax ends up being: const [variableName, setVariableName] = useState(initialValue)
  const [showModal, setShowModal] = useState(false);
  const [poison, setPosion] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");

  function toggleModal() {
    // Now, instead of directly changing the variable, I use the setter function to update the state
    // showModal = !showModal;
    setShowModal(!showModal);
  }

  function updateMuscles(muscleGroup) {
    if (muscles.length > 2) {
      return;
    }

    if (poison !== "individual") {
      setMuscles([muscleGroup]);
      return;
    }

    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
      return;
    }

    setMuscles([...muscles, muscleGroup]);
  }

  // SectionWrapper will contain the generator for child elements that WON"T be repeated
  return (
    <SectionWrapper
      header={"generate your workout"}
      title={["It's", "Huge", "o'clock"]}
    >
      <Header
        index={"01"}
        title={"Pick your poison"}
        description={"Select the workout you wish to endure"}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              onClick={() => {
                setPosion(type);
              }}
              className={
                "bg-slate-950 border duration-200 hover:border-red-700 py-3 rounded-lg " +
                (type === poison ? "border-red-700" : "border-red-400")
              }
              key={typeIndex}
            >
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>

      <Header
        index={"02"}
        title={"Lock-on Targets"}
        description={"Select your muscle groups"}
      />
      <div className="bg-slate-950  border bordcer-solid border-red-400 rounded-lg flex flex-col">
        <button
          onClick={toggleModal}
          className="relative p-3 flex items-center justify-center "
        >
          <p>Select muscle groups</p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>
        {showModal && (
          <div className="flex flex-col px-3 pb-3">
            {(poison === "individual"
              ? WORKOUTS[poison]
              : Object.keys(WORKOUTS[poison])
            ).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button
                  onClick={() => {
                    updateMuscles(muscleGroup);
                  }}
                  key={muscleGroupIndex}
                  className={
                    "hover:text-red-700 duration-200 " +
                    (muscles.includes(muscleGroup) ? "text-red-700" : "")
                  }
                >
                  <p className="uppercase">
                    {muscleGroup.replaceAll("_", " ")}
                  </p>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <Header
        index={"03"}
        title={"Conquer your goals"}
        description={"Select your ultimate objective."}
      />
      <div className="grid grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              onClick={() => {
                setGoal(scheme);
              }}
              className={
                "bg-slate-950 border duration-200 hover:border-red-700 py-3 rounded-lg " +
                (scheme === goal ? "border-red-700" : "border-red-400")
              }
              key={schemeIndex}
            >
              <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
