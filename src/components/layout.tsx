import React, { ReactNode } from "react";
import SideBar from "./side-bar";
import NavBar from "./nav-bar";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={`bg-[#151313] ${inter.className}`}>
      <NavBar />
      <div className="flex gap-5">
        <SideBar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
