"use client"
import { CustomImgIcon } from "./Icons/Icon"
import AccreditedLogo from "@/public/tiscuk-logo.jpg"

export default function LogosTrustBar() {
   return (
      <section className="logo-trust-bar">
         <div className="page-container">
            <div className="box full dfb wrap gap-30">
               <CustomImgIcon url={AccreditedLogo.src} size={140} />
            </div>
         </div>
      </section>
   )
}
