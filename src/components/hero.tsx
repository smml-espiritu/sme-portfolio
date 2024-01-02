import { H1, H2, H3, SubH } from "./ui/typography";
import { Button } from "./ui/button";
import { Card1, Card2, RootWrapper, ToolsCard } from "./wrapper";
import { TOOLS_DATA } from "@/data/tools-data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ProjectCarousel from "./project-carousel";
import Link from "next/link";

const HeroPage = () => {
  return (
    <RootWrapper>
      <div>
        <div className="flex justify-center md:justify-start items-center h-[98px]">
          <H1>Frontend Alchemy</H1>
        </div>
        <div className="grid items-center justify-center grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="grid max-w-[517px] grid-cols-2 gap-5 ">
            <Card1>
              <div className="flex flex-col w-full h-full text-center justify-center items-center gap-6">
                <H2>
                  Front-end <br /> Developer
                </H2>
                <SubH>View Projects</SubH>
              </div>
            </Card1>
            <Card1>
              <div className="flex flex-col w-full h-full text-center justify-center items-center gap-6">
                <H2>
                  Aspiring UI/UX <br /> Designer
                </H2>
                <SubH>View Projects</SubH>
              </div>
            </Card1>
            <Card1>
              <div className="flex flex-col w-full h-full text-center justify-center items-center gap-6">
                <H3>1</H3>
                <SubH>Completed Projects</SubH>
              </div>
            </Card1>
            <Card1>
              <div className="flex flex-col w-full h-full text-center justify-center items-center gap-6">
                <H3>1</H3>
                <SubH>Completed Design</SubH>
              </div>
            </Card1>
          </div>
          <Card2>
            <div className="flex flex-col w-full h-full justify-center p-5 gap-6">
              <H2>Frontend Alchemy: Where Code Meets Design</H2>
              <SubH className="text-[#969191]">
                Merging code and design to craft seamless and captivating
                digital experiences. As a frontend developer and aspiring UI/UX
                designer, I strive to create interfaces that seamlessly blend
                functionality with aesthetic appeal, elevating the user journey
                through every click and scroll.
              </SubH>
              <Button className="bg-black border border-[#737171] rounded-[8px]">
                <Link href="/contact">Get in touch</Link>
              </Button>
            </div>
          </Card2>
          <Card2>
            <div className="flex flex-col items-center gap-5 p-5">
              <H2 className="self-start">Projects</H2>
              <ProjectCarousel />
            </div>
          </Card2>
          <Card2>
            <div className="flex flex-col gap-5 p-5">
              <H2>Tools I used</H2>
              <div className="grid grid-cols-4 gap-5">
                {TOOLS_DATA.map((data, index) => (
                  <TooltipProvider key={index}>
                    <Tooltip>
                      <TooltipTrigger>
                        <ToolsCard>{data.icon}</ToolsCard>
                      </TooltipTrigger>
                      <TooltipContent>{data.title}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
          </Card2>
        </div>
      </div>
    </RootWrapper>
  );
};

export default HeroPage;
