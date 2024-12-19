import React from "react";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { CircleChevronLeft, SquareMenu } from "lucide-react";
import Link from "next/link";

const MobiNav = () => {
  return (
    <div className="flex flex-col">
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <SquareMenu size={32} />
        </DrawerTrigger>
        <DrawerContent className="h-full w-[20rem] left-0">
          <div className="p-4 text-black">
            <div className="flex flex-col items-center  justify-between">
              <div>
                <Link
                  href={
                    "https://drive.google.com/file/d/1-_jmtYaXVYKAyEKoQSmhLvoiU4kjqBTx/view?usp=drive_link"
                  }
                >
                  Resume
                </Link>
              </div>
              <div>Project</div>
              <div>Connect with Me :)</div>
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
