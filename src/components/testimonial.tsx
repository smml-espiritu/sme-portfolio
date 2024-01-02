import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { H2, SubH } from "./ui/typography";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { TESTIMONIAL_DATA } from "@/data/testimonial-data";

const Testimonial = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  return (
    <Carousel
      className="w-full"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {TESTIMONIAL_DATA.map((data, index) => (
          <CarouselItem key={index}>
            <div className=" bg-black w-[517px] rounded-[8px]">
              <div className="flex flex-col gap-5">
                <div className="flex gap-5 ">
                  <Image
                    width={70}
                    height={70}
                    src={data.icon}
                    alt={data.name}
                  />
                  <div className="flex flex-col justify-around">
                    <H2>{data.name}</H2>
                    <SubH>{data.position}</SubH>
                  </div>
                </div>
                <div>
                  <SubH>{data.message}</SubH>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <div className="flex gap-5 justify-center pt-4">
        <CarouselPrevious />
        <CarouselNext />
      </div> */}
    </Carousel>
  );
};

export default Testimonial;
