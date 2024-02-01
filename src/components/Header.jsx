import React from "react";
import logo from "../assets/react.svg";

export default function Header() {
  return (
    <div className=" border-b-[0.0625rem]">
      <div className="flex p-3">
        <img src={logo} className="mr-2 h-9" />

        <p className=" text-2xl">React Course - CountOpedia</p>
      </div>
    </div>
  );
}
