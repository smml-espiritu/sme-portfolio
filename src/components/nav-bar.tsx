import React from "react";
import SvgSmeLogo from "./icons/svg-sme-logo";
import { Button } from "./ui/button";
import { SvgMenu } from "./icons/nav-bar-icon/svg-menu-icon";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SIDEBAR_DATA } from "@/data/side-bar";
import Link from "next/link";
import { H2 } from "./ui/typography";
import { SvgCvNormal } from "./icons/cv-normal";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const NavBar = () => {
  return (
    <div className="w-screen bg-black text-[#fff] h-[72px] sm:hidden sticky top-0 z-40">
      <div className="h-full flex justify-center items-center">
        <Popover>
          <PopoverTrigger>
            <SvgCvNormal />
          </PopoverTrigger>
          <PopoverContent>Currently unavailable</PopoverContent>
        </Popover>

        <SvgSmeLogo className="h-[50px]" />
        <Sheet>
          <SheetTrigger asChild>
            <SvgMenu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-white">Sammuel Espiritu</SheetTitle>
              <SheetDescription className="text-white">
                Front-end Developer
              </SheetDescription>
              <div className="flex self-start pt-[30%]">
                <div className="flex flex-col gap-10">
                  {SIDEBAR_DATA.map((data, index) => (
                    <div key={index}>
                      <div className="flex items-center gap-7">
                        {data.icon}
                        <SheetClose asChild>
                          <Link href={data.link}>
                            <H2 className="text-white">{data.title}</H2>
                          </Link>
                        </SheetClose>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default NavBar;
