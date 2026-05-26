'use client'
import Link from "next/link";
import LogosTrustBar from "../LogosTrustBar";
import { Logo } from "../Icons/Icon";
import { websiteConfig } from "@/app/page";
import { headerLinks } from "../Header";
import Spacing from "../Spacing/Spacing";

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
               <Spacing />
               <div className="box full mb-3">
                  <div className="text-xxs bold-500 full mb-1">&copy; {name}. All rights reserved.</div>
                  <div className="text-xxs pd-05 bold-500 full">Healing Young Hearts Ltd is registered in England and Wales (16057232).</div>
                  <div className="text-xxs bold-500 full">Registered Office: Epping, Essex, CM16 5AG</div>
               </div>
               <div className="box full dfb pd-05">
                  <div className="horizontal-convertible gap-10" style={{ maxWidth: "400px" }}>
                     <div className="box full dfb column gap-10">
                        <div className="text-sm bold-700">{websiteConfig.name}</div>
                        {headerLinks.map((link, index) => (
                           <Link key={index} href={link.href} className="text-xs fit"><div className="text-xs fit visible-link">{link.label}</div></Link>
                        ))}
                     </div>
                  </div>
                  <div className="horizontal-convertible gap-10" style={{ maxWidth: "400px" }}>
                     <div className="box full dfb column gap-10">
                        <div className="text-sm bold-700">Terms</div>
                        <Link href={'/terms'} className="text-xs fit hover-to-link-color">
                           <div className="text-xs fit visible-link">Terms and Conditions</div>
                        </Link>
                     </div>
                  </div>
                  <div className="horizontal-convertible gap-10" style={{ maxWidth: "400px" }}>
                     <div className="box full dfb column gap-10">
                        <div className="text-sm bold-700">Social Links</div>
                        <Link href={'https://www.linkedin.com/in/siobh%C3%A1n-garrett-b1b4a51b6/'} className="text-xs fit hover-to-link-color">
                           <div className="text-xs fit visible-link">Siobhán Garrett's LinkedIn</div>
                        </Link>
                        <Link href={'https://www.instagram.com/healing_young_hearts/'} className="text-xs fit hover-to-link-color">
                           <div className="text-xs fit visible-link">@healing_young_hearts Instagram</div>
                        </Link>
                        <Link href={'https://uk.bookshop.org/shop/HYH/'} className="text-xs fit hover-to-link-color">
                           <div className="text-xs fit visible-link">Healing Young Hearts - Bookshop.org</div>
                        </Link>
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
