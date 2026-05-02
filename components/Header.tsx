'use client'
import Link from "next/link";
import { LogoWithBorder } from "./Icons/Icon"
import { Menu, X } from "lucide-react";
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
   { href: "/about", label: "About Me" },
   { href: "/services", label: "Services" },
   { href: "/approach", label: "Approach" },
   { href: "/belonging", label: "Belonging" },
];

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
   
   return (
      <header className="header" style={{
         backgroundColor: websiteConfig.headerBackgroundColor,
         color: websiteConfig.headerTextColor
      }}>
         <div className="page-container">
            {(deviceType == "desktop") && (<>
               <div className="box full dfb align-center">
                  <div className="box fit h-full dfb align-center cursor-pointer" onClick={() => router.push("/")}>
                     <LogoWithBorder size={65} />
                  </div>
                  <div className="box full dfb align-center justify-center gap-20">
                     {headerLinks.map((link, index) => (
                        <Link href={link.href} key={index}>
                           <div className="text-s hover-to-accent-color fit bold-700 cursor-pointer accent-color whitespace-nowrap">
                              {link.label.toUpperCase()}
                           </div>
                        </Link>
                     ))}
                  </div>
                  <div className="box fit dfb align-center justify-end gap-10">
                     <Link href={"/contact"}>
                        <button className="xs pd-15 pdx-2 whitespace-nowrap">
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
                     <button className="pd-1 pdx-1 outline-black no-shadow" onClick={() => setMobileOpenHeaderLinks(true)}>
                        <Menu />
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
                                    <div className="text-ml hover-to-accent-color fit bold-700 cursor-pointer accent-color whitespace-nowrap">
                                       {link.label.toUpperCase()}
                                    </div>
                                 </Link>
                              ))}
                           </div>
                           <div className="box fit dfb column pd-2 gap-10">
                              <Link href={"/contact"}>
                                 <button className="xs pd-15 pdx-2 whitespace-nowrap">
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
