import React from "react";
type ChildComponentProps = {
  Connect: () => void;
  ProjectScroll: () => void;
};
type handleresume = {
  handleResume: () => void;
};
const Nav = () => {
  const Addnav = [
    {
      name: "Resume",
    },

  ];
  const handleResume = (): void => {
    window.location.href =
      "https://drive.google.com/file/d/1-_jmtYaXVYKAyEKoQSmhLvoiU4kjqBTx/view?usp=drive_link";
  };
  return (
    <div className="flex items-center gap-8">
      {Addnav.map((el, i) => (
        <div
          className="cursor-pointer text-foreground hover:text-red-600 dark:hover:text-red-400 
                     hover:border-b-2 border-b-red-600 dark:border-b-red-500 transition-colors"
          onClick={

            el.name === "Resume"
              ? handleResume
              : () => console.log("Noting")
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
