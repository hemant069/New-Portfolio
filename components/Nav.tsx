import React from "react";
type ChildComponentProps = {
  Connect: () => void;
  ProjectScroll: () => void;
};
type handleresume = {
  handleResume: () => void;
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
  const handleResume = (): void => {
    window.location.href =
      "https://drive.google.com/file/d/1-_jmtYaXVYKAyEKoQSmhLvoiU4kjqBTx/view?usp=drive_link";
  };
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
              : el.name === "Resume"
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
