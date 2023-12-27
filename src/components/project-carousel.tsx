"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PROJECT_DATA } from "@/data/project-data";
import { Card2, ToolsCard } from "./wrapper";
import { H2, SubH } from "./ui/typography";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Badge } from "./ui/badge";
import Image from "next/image";

const ProjectCarousel = () => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {PROJECT_DATA.map((data, index) => (
          <CarouselItem key={index}>
            <div className=" bg-black w-full rounded-[8px]">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                  <div className="border border-[#737171] rounded-[8px] w-full">
                    <Image
                      alt={data.title}
                      src={data.img}
                      className="rounded-[8px]"
                    />
                  </div>

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
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex gap-5 justify-center pt-4">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default ProjectCarousel;
