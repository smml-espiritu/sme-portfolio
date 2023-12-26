import SvgAboutLine from "@/components/icons/side-bar-icon/svg-about";
import SvgContactLine from "@/components/icons/side-bar-icon/svg-contact";
import SvgFolderLine from "@/components/icons/side-bar-icon/svg-folder";
import SvgHomeClient from "@/components/icons/side-bar-icon/svg-home";

export const SIDEBAR_DATA = [
  {
    title: "Home",
    icon: <SvgHomeClient />,
    link: "/",
  },
  {
    title: "About",
    icon: <SvgFolderLine />,
    link: "/about",
  },
  {
    title: "Projects",
    icon: <SvgAboutLine />,
    link: "/project",
  },
  {
    title: "Contact",
    icon: <SvgContactLine />,
    link: "/contact",
  },
];
