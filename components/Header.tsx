'use client'
import Link from "next/link";
import { Logo, LogoWithBorder } from "./Icons/Icon"
import { ChevronDown, Menu, X } from "lucide-react";
import { websiteConfig } from "@/app/page";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type HeaderLink = {
   label: string;
   href: string;
}

export const headerLinks: HeaderLink[] = [
   { href: "/", label: "Home" },
   { href: "/about", label: "About" },
   { href: "/services", label: "Services" },
   { href: "/events-networks", label: "Events & Networks" },
   { href: "/resources", label: "Resources" },
   { href: "/book-consultation", label: "Book Consultation" },
   { href: "/testimonials", label: "Testimonials" },
   { href: "/contact", label: "Contact" },
];

type HeaderDropdownProps = {
   label: string;
   dropdownHeaderLinks: HeaderLink[];
}

function HeaderDropdown ({ label, dropdownHeaderLinks }: HeaderDropdownProps) {
   const [openList, setOpenList] = useState(false);

   const autoClose = () => {
      const timeoutClose = setTimeout(() => setOpenList(false), 600);
      return () => clearTimeout(timeoutClose);
   }

   return (
      <AnimatePresence>
         <div className="header-dropdown">
            <div 
               className="text-xxs hover-to-link-color fit bold-700 cursor-pointer accent-color whitespace-nowrap dfb align-center gap-5"
               onClick={() => setOpenList(o => !o)}
            >
               {label.toUpperCase()} <ChevronDown size={16} />
            </div>
            {openList && (
               <motion.div 
                  className="header-dropdown-list"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2, ease: [.03,.09,.67,.99] }}
               >
                  <div className="box full dfb column gap-15" onMouseLeave={autoClose}>
                     {dropdownHeaderLinks.map((link, index) => (
                        <Link href={link.href} key={index}>
                           <div className="text-xxs hover-to-link-color fit bold-700 cursor-pointer accent-color whitespace-nowrap">
                              {link.label.toUpperCase()}
                           </div>
                        </Link>
                     ))}
                  </div>
               </motion.div>
            )}
         </div>
      </AnimatePresence>
   )
}

export default function Header () {
   const router = useRouter();
   const [deviceType, setDeviceType] = useState<"mobile" | "desktop">("desktop");
   const [mobileOpenHeaderLinks, setMobileOpenHeaderLinks] = useState(false);
   const mobileThreshold = 1200;

   useEffect(() => {
      document.body.scrollTo({ top: 0, behavior: "auto" });
      setDeviceType((window.innerWidth >= mobileThreshold) ? "desktop" : "mobile");
      window.addEventListener("resize", () => {
         setDeviceType((window.innerWidth >= mobileThreshold) ? "desktop" : "mobile");
      })
   }, []);

   const dropdown = {
      label: "More",
      items: ["/services", "/book-consultation", "/events-networks", "/resources", "/testimonials"]
   }
   
   return (
      <header className="header" style={{
         backgroundColor: websiteConfig.headerBackgroundColor,
         color: websiteConfig.headerTextColor
      }}>
         <div className="page-container">
            {(deviceType == "desktop") && (<>
               <div className="box full dfb align-center">
                  <div className="box fit h-full dfb align-center cursor-pointer" onClick={() => router.push("/")}>
                     <Logo size={65} />
                  </div>
                  <div className="box full dfb align-center justify-center gap-20">
                     {(dropdown) ? (<>
                        {headerLinks.filter(hl => !dropdown.items.includes(hl.href)).map((link, index) => (
                           <Link href={link.href} key={index}>
                              <div className="text-xxs hover-to-link-color fit bold-700 cursor-pointer accent-color whitespace-nowrap">
                                 {link.label.toUpperCase()}
                              </div>
                           </Link>
                        ))}
                        <HeaderDropdown
                           label={dropdown.label}
                           dropdownHeaderLinks={headerLinks.filter(hl => dropdown.items.includes(hl.href))}
                        />
                     </>) : (<>
                        {headerLinks.map((link, index) => (
                           <Link href={link.href} key={index}>
                              <div className="text-xxs hover-to-link-color fit bold-700 cursor-pointer accent-color whitespace-nowrap">
                                 {link.label.toUpperCase()}
                              </div>
                           </Link>
                        ))}
                     </>)}
                  </div>
                  <div className="box fit dfb align-center justify-end gap-10">
                     <Link href={"/join-community"}>
                        <button className="xxs pd-15 pdx-2 whitespace-nowrap">
                           Sign Up
                        </button>
                     </Link>
                     <Link href={"/contact"}>
                        <button className="xxs pd-15 pdx-2 whitespace-nowrap outline-accent-color">
                           Contact Me
                        </button>
                     </Link>
                  </div>
               </div>
            </>)}
            
            {(deviceType == "mobile") && (<>
               <div className="box full dfb align-center pdx-3">
                  <div className="box fit dfb align-center cursor-pointer" onClick={() => router.push("/")}>
                     <LogoWithBorder size={50} />
                  </div>
                  <div className="box full dfb align-center justify-end">
                     <button className="pd-1 pdx-1 outline-black no-shadow transparent" onClick={() => setMobileOpenHeaderLinks(true)}>
                        <Menu size={28} />
                     </button>
                  </div>
                  <AnimatePresence>
                     {mobileOpenHeaderLinks && (
                        <motion.div
                           className="header-links-mobile"
                           initial={{ x: -900 }}
                           animate={{ x: 0 }}
                           exit={{ x: -900 }}
                           transition={{ duration: 0.2, ease: "easeIn" }}
                        >
                           <div className="box full dfb align-center justify-end mb-2">
                              <button className="transparent no-hover-scale no-shadow" onClick={() => setMobileOpenHeaderLinks(false)}>
                                 <X />
                              </button>
                           </div>
                           <div className="box full dfb column gap-20">
                              {headerLinks.map((link, index) => (
                                 <Link href={link.href} key={index}>
                                    <div className="text-ml hover-to-link-color fit bold-700 cursor-pointer accent-color whitespace-nowrap">
                                       {link.label.toUpperCase()}
                                    </div>
                                 </Link>
                              ))}
                           </div>
                           <div className="box fit dfb column pd-2 gap-10">
                              <Link href={"/join-community"}>
                                 <button className="xxs pd-15 pdx-2 whitespace-nowrap">
                                    Sign Up
                                 </button>
                              </Link>
                              <Link href={"/contact"}>
                                 <button className="xs pd-15 pdx-2 whitespace-nowrap outline-accent-color">
                                    Contact Me
                                 </button>
                              </Link>
                           </div>
                        </motion.div>
                     )}
                  </AnimatePresence>
               </div>
            </>)}
         </div>
      </header>
   )
}
