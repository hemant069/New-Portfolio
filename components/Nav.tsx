import React from "react";

const Nav = () => {
  const Addnav = [
    {
      name: "Home",
    },
    {
      name: "Resume",
    },
    {
      name: "Project",
    },
    {
      name: "Service",
    },
    {
      name: "About",
    },
  ];
  return (
    <div className="flex items-center gap-8">
      {Addnav.map((el, i) => (
        <div key={i}>{el.name}</div>
      ))}
    </div>
  );
};

export default Nav;
