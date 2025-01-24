import React from "react";

export default function Button(props) {
  const { text } = props;
  return (
    <button className="px-8 py-4 rounded-md border-[2px] bg-slate-950 border-red-700 border-solid redShadow duration-200">
      <p>{text}</p>
    </button>
  );
}
