import { Card2, ToolsCard } from "@/components/wrapper";
import { H1, H2, SubH } from "@/components/ui/typography";
import React from "react";
import { PROJECT_DATA } from "@/data/project-data";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { SvgLink } from "@/components/icons/svg-link";

const Projects = () => {
  return (
    <div className="lg:max-w-[1075px] pb-10 min-h-screen sm:pt-10 text-white">
      <div className="w-screen px-5 md:pl-0 lg:px-0 md:w-full lg:w-[1055px]">
        <div className="flex justify-center md:justify-start items-center h-[98px]">
          <H1>Projects</H1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {PROJECT_DATA.map((data, index) => (
            <Card2 key={index}>
              <div className="flex flex-col gap-5 p-5">
                <H2>{data.title}</H2>
                <div className="flex flex-col gap-5">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <ToolsCard>
                          <div className="rounded-[8px] w-full">
                            <Image
                              alt={data.title}
                              src={data.img}
                              className="rounded-[8px]"
                            />
                          </div>
                        </ToolsCard>
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="flex flex-col gap-2 p-2">
                          <p className="font-bold text-lg">Check it out!</p>
                          {data.links.map((link, i) => (
                            <div className="flex justify-between" key={i}>
                              <p className="text-base font-medium">
                                {link.title}
                              </p>
                              <Link href={link.link} target="_blank">
                                <SvgLink className="h-6 w-6" />
                              </Link>
                            </div>
                          ))}
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <div>
                    <SubH>{data.description}</SubH>
                  </div>
                  <div className="flex gap-5">
                    {data.tags.map((tag, i) => (
                      <Badge variant="outline" key={i}>
                        {tag.tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
