"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PROJECT_DATA } from "@/data/project-data";
import { SubH } from "./ui/typography";
import { Badge } from "./ui/badge";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const ProjectCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 10000, stopOnInteraction: true })
  );
  return (
    <Carousel
      className="w-full"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
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
