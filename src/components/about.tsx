import { Button } from "@/components/ui/button";
import { H1, H2, SubH } from "@/components/ui/typography";
import Image from "next/image";
import Profile from "../../public/assets/projects/profile-icon.png";
import Link from "next/link";
import { ABOUT_INTRO } from "@/data/about-intro";
import { TOOLS_DATA } from "@/data/tools-data";
import { ToolsCard } from "@/components/wrapper";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const About = () => {
  return (
    <div className="lg:max-w-[1075px] pb-10 min-h-screen sm:pt-10 text-white">
      <div className="w-screen px-5 md:pl-0 lg:px-0 md:w-full lg:w-[1055px]">
        <div className="flex justify-center md:justify-start items-center h-[98px]">
          <H1>About</H1>
        </div>
        <div className="grid grid-cols-1 gap-5">
          <div className="border border-[#737171] bg-black w-full max-w-[600px] md:max-w-[992px] lg:max-w-[1055px] rounded-[8px]">
            <div className="flex flex-col lg:flex-row items-center text-center justify-center lg:justify-evenly p-5 gap-6">
              <Image src={Profile} alt={"Sam"} />
              <div className="">
                <H2>Sammuel Melosantos Espiritu</H2>
                <SubH className="text-[#969191]">
                  Front-end Developer at{" "}
                  <Link
                    className="text-[#21CD9C] font-extrabold"
                    href={"https://techstacksph.com/"}
                    target="_blank"
                  >
                    Techstacks Ph
                  </Link>
                </SubH>
              </div>
              <Button className="bg-black border w-28 border-[#737171] rounded-[8px]">
                Get in touch
              </Button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 w-full">
            <div className="flex flex-col gap-5 lg:gap-7 border border-[#737171] bg-black rounded-[8px] p-5 lg:w-[400px]">
              {ABOUT_INTRO.map((data, index) => (
                <div key={index}>
                  {data.isLink ? (
                    <Link
                      className="flex gap-3 items-center"
                      href={data.link as string}
                      target="blank"
                    >
                      {data.icon}{" "}
                      <p className="text-xs text-[#969191] hover:text-white hover:scale-110 hover:font-bold">
                        {data.title}
                      </p>
                    </Link>
                  ) : (
                    <div className="flex gap-3 items-center">
                      {data.icon}{" "}
                      <p className="text-xs text-[#969191]">{data.title}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-5 w-full">
              <div className="border border-[#737171] flex flex-col gap-5 bg-black rounded-[8px] p-5">
                <p>
                  Hello there, I&apos;m Samuel Espiritu, I am a dedicated
                  frontend developer, channeling my energy into the world of
                  code and crafting seamless digital experiences. With a strong
                  foundation in coding and a natural flair for design, I find
                  joy in merging these two worlds to create visually appealing
                  and user-friendly interfaces.
                </p>
                {/* <p>
                  My journey in the realm of web development is driven by a
                  commitment to not just write lines of code but to craft
                  interactive and intuitive designs. Exploring the nuances of
                  frontend development, I aim to bring forth innovation and
                  creativity in every project I undertake.
                </p> */}
                <p>
                  In addition to my technical skills, I am continually refining
                  my design sensibilities to enhance the visual aspects of my
                  projects. Join me on this exciting journey where technology
                  meets creativity, and let&apos;s build the future of the
                  digital landscape together!
                </p>
              </div>
              <div className="border border-[#737171] bg-black rounded-[8px] p-5 flex flex-col gap-5">
                <H2>Skills</H2>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-5">
                  {TOOLS_DATA.map((data, index) => (
                    <TooltipProvider key={index}>
                      <Tooltip>
                        <TooltipTrigger>
                          <ToolsCard className="lg:w-24 lg:h-24">
                            {data.icon}
                          </ToolsCard>
                        </TooltipTrigger>
                        <TooltipContent>{data.title}</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
