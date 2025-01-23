// rfc
import React from "react";

export default function hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justfy-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>
          DOMINATE. <span className="text-red-700 font-semibold ">DESTROY</span>
          . DEVOUR GAINS.
        </p>
        <h1 className="uppercase font-semibold text-4xl sm_text-5xl md:text-6xl lg:text-7xl">
          <span className="text-red-700">Swole</span> Patrol
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        Yo, welcome to <span>SWOLE</span> PATROL, the only gym where the weights
        fear you. We’re not here to “exercise” or “stay healthy”—we’re here to
        build rigs so chiseled, they make Michelangelo’s David look like a
        recently divorced dad. This isn’t cardio boot camp for Karen and her
        kale smoothies—this is where testosterone levels are higher than your
        rent, and every rep is a middle finger to mediocrity. Leg day?
        <span className="text-red-700 font-medium"> Mandatory</span>. Tank tops?
        <span className="text-red-700 font-medium"> Always</span>. Complaining?
        Bro,{" "}
        <span className="text-red-700 font-medium">
          save it for your therapist
        </span>
        . We don’t just lift weights; we lift lifestyles. So, if you’re ready to
        trade excuses for gains, welcome aboard the SWOLE EXPRESS, next stop:
        Absolute Unit City.
      </p>
      <button className="px-8 py-4 rounded-md border-[2px] bg-slate-950 border-red-700 border-solid redShadow duration-200">
        <p>Accept & Begin</p>
      </button>
    </div>
  );
}
