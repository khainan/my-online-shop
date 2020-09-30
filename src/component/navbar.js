import React from "react"
import { ReactNavbar } from "react-responsive-animate-navbar"
import LogoTey from '../logo-tey.jpg'

function Navbar() {
  return (
    <ReactNavbar
      logo={LogoTey}
      menu={[
        { name: "HOME", to: "/" },
        { name: "PORTFOLIO", to: "/portfolio" },
        { name: "ABOUT ME", to: "/about" },
        { name: "CONTACT", to: "/contact" },
      ]}
      social={[
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/talia-yunita-76029a1a5/",
          icon: ["fab", "linkedin-in"],
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/taliayunitas/",
          icon: ["fab", "instagram"],
        }
      ]}
    />
  );
}

export default Navbar