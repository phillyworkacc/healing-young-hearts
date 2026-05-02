'use client'
import Link from "next/link";
import { Logo } from "../Icons/Icon";
import { websiteConfig } from "@/app/page";
import LogosTrustBar from "../LogosTrustBar";
import { headerLinks } from "../Header";

export default function Footer () {
   const { accentColor, name } = websiteConfig;
   return (<>
      <LogosTrustBar />
      <section 
         className="footer"
         style={{ backgroundColor: `${accentColor}4d`, color: "black" }}
      >
         <div className="page-container">
            <div className="box full dfb column gap-10">
               <Logo size={60} />
               <div className="text-m pd-2 bold-500 full">
                  &copy; {new Date().getFullYear()} Copyright {name}
               </div>
               <div className="box full pd-05">
                  <div className="horizontal-convertible gap-10">
                     <div className="box full dfb column gap-10">
                        <div className="text-s bold-700">{websiteConfig.name}</div>
                        {headerLinks.map((link, index) => (
                           <Link key={index} href={link.href} className="text-xs fit"><div className="text-xs fit visible-link">{link.label}</div></Link>
                        ))}
                     </div>
                  </div>
               </div>
               {/* <div className="box full dfb align-center gap-20 wrap pd-15 mt-1">
                  <Link href='/privacy-policy' className="text-s fit">
                     <div className="text-xs fit visible-link">Privacy Policy</div>
                  </Link>
                  <Link href='/terms' className="text-s fit">
                     <div className="text-xs fit visible-link">Terms and Conditions</div>
                  </Link>
               </div> */}
            </div>
         </div>
      </section>
   </>)
}
