import React, { ReactNode } from "react";
import SideBar from "./side-bar";
import NavBar from "./nav-bar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="flex gap-5">
        <SideBar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
