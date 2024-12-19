import React from "react";
type ChildComponentProps = {
  Connect: () => void;
  ProjectScroll: () => void;
};
const Nav: React.FC<ChildComponentProps> = ({ ProjectScroll, Connect }) => {
  const Addnav = [
    {
      name: "Resume",
    },
    {
      name: "Project",
    },
    {
      name: "Connect with Me :)",
    },
  ];
  return (
    <div className="flex items-center gap-8">
      {Addnav.map((el, i) => (
        <div
          className="cursor-pointer   hover:border-b-2 border-b-red-800"
          onClick={
            el.name === "Project"
              ? ProjectScroll
              : el.name === "Connect with Me :)"
              ? Connect
              : () => console.log("Nothing")
          }
          key={"manu" + i}
        >
          {el.name}
        </div>
      ))}
    </div>
  );
};

export default Nav;
