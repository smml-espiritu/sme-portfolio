import { SvgCv } from "./icons/cv-logo";
import SvgSmeLogo from "./icons/svg-sme-logo";
import { Button } from "./ui/button";
import { SIDEBAR_DATA } from "@/data/side-bar";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SideBar = () => {
  return (
    <div className="max-w-[345px] bg-black text-[#fff] h-screen hidden sm:block sticky top-0 z-40">
      <div className="flex flex-col items-center px-5 py-10 h-full gap-20">
        <div>
          <SvgSmeLogo />
        </div>
        <div className="flex self-start">
          <div className="flex flex-col gap-10">
            {SIDEBAR_DATA.map((data, index) => (
              <div key={index}>
                <Link href={data.link}>
                  <Button
                    size={"sm"}
                    variant={"ghost"}
                    className="flex items-center gap-7 hover:scale-125 hover:font-bold"
                  >
                    {data.icon}
                    {data.title}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <SvgCv />
              </TooltipTrigger>
              <TooltipContent>
                <p>Currently unavailable</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
