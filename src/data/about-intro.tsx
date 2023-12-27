import { SvgFacebook } from "@/components/icons/about-intro-icon/svg-facebook";
import { SvgGmail } from "@/components/icons/about-intro-icon/svg-gmail";
import { SvgLinkedin } from "@/components/icons/about-intro-icon/svg-linkedin";
import { SvgLocation } from "@/components/icons/about-intro-icon/svg-location";
import { SvgWork } from "@/components/icons/about-intro-icon/svg-work";
import { SvgWorld } from "@/components/icons/about-intro-icon/svg-world";
import { SvgX } from "@/components/icons/about-intro-icon/svg-x";
import { SvgGithub } from "@/components/icons/about-intro-icon/svg-github";

export const ABOUT_INTRO = [
  {
    icon: <SvgWork />,
    title: "Front End Developer at Techstacks Ph",
    isLink: false,
  },
  {
    icon: <SvgWork />,
    title: "Former Data Entry at Truck Smart Solution",
    isLink: false,
  },
  {
    icon: <SvgLocation />,
    title: "Based in Philippines",
    isLink: false,
  },
  {
    icon: <SvgWorld />,
    title: "techstacksph.com",
    isLink: true,
    link: "https://techstacksph.com/",
  },
  {
    icon: <SvgGithub />,
    title: "github.com/smml-espiritu",
    isLink: true,
    link: "https://github.com/smml-espiritu",
  },
  {
    icon: <SvgLinkedin />,
    title: "linkedin.com/in/sammuel-espiritu-b0b937245/",
    isLink: true,
    link: "https://www.linkedin.com/in/sammuel-espiritu-b0b937245/",
  },
  {
    icon: <SvgFacebook />,
    title: "facebook.com/besurex/",
    isLink: true,
    link: "https://www.facebook.com/besurex",
  },
  {
    icon: <SvgX />,
    title: "twitter.com/smmlEspiritu",
    isLink: true,
    link: "https://twitter.com/smmlEspiritu",
  },
  {
    icon: <SvgGmail />,
    title: "techstacks.sam@gmail.com",
    isLink: false,
  },
];
