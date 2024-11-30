import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";
import { CircleChevronLeft, SquareMenu } from "lucide-react";

const MobiNav = () => {
  return (
    <div className="flex flex-col">
      <Drawer direction="left">
        <DrawerTrigger asChild>
          <SquareMenu size={32} />
        </DrawerTrigger>
        <DrawerContent className="h-full w-[20rem] left-0">
          <div className="p-4 text-black">
            <div className="flex flex-col items-center  justify-between">
              <div>Home</div>
              <div>Resume</div>
              <div>Project</div>
              <div>Service</div>
              <div>About</div>
              <DrawerClose asChild>
                <CircleChevronLeft />
              </DrawerClose>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobiNav;