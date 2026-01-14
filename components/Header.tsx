"use client";
import Link from "next/link";
import React, { forwardRef, useRef } from "react";
import Nav from "./Nav";
import MobiNav from "./MobiNav";

type ChildComponentProps = {
  Connect: () => void;
  ProjectScroll: () => void;
};
const Header: React.FC<ChildComponentProps> = ({ Connect, ProjectScroll }) => {
  return (
    <div
      className="p-2
    "
    >
      <div className="flex justify-between items-center">
        <Link href={"#"}>
          <p className="text-4xl ">
            Hemant{" "}
            <span className="text-accent text-red-900 rounded-lg">.</span>
          </p>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav Connect={Connect} ProjectScroll={ProjectScroll} />
          <div>
            <div className="border border-red-800 hover:bg-red-700 hover:transition hover:scale-110 delay-300 duration-300 ease-in-out py-1 px-6">
              <Link href={"https://www.linkedin.com/in/hemant-prajapatii/"}>
                {" "}
                Hire Me
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobiNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
