'use client'
import "./StrapLine.css"
import { Dot } from "lucide-react"
import { CustomIcon, LogoNoBorder } from "../Icons/Icon"

import ThreeCs1 from "@/public/3cs/1.png"
import ThreeCs2 from "@/public/3cs/2.png"
import ThreeCs3 from "@/public/3cs/3.png"

export default function StrapLine() {
   return (
      <div className="strap-line" style={{ background: `#FAF4ED` }}>
         <div className="page-container" style={{ padding: "40px 20px"}}>

            <div className="horizontal-convertible full dfb gap-10">
               <div className="box fit h-full dfb align-start justify-center">
                  <LogoNoBorder size={130} />
               </div>
               <div className="box full">
                  <div className="text-s full bold-700" style={{  }}>
                     <span style={{ color: "#429A8E" }}>Helping adults</span> <span style={{ color: "#49267A" }}>create the conditions </span>
                     for young hearts to heal and thrive.
                  </div>
                  <div className="box full dfb align-center gap-5 mb-1 wrap">
                     <div className="text-xxs fit grey-5">Trauma-Informed</div> <Dot color="#D96D25" size={35} />
                     <div className="text-xxs fit grey-5">Relationship Led</div> <Dot color="#D96D25" size={35} />
                     <div className="text-xxs fit grey-5">Belonging Centered</div>
                  </div>
                  <div className="box full dfb align-center gap-20 mw-300">
                     <div className="box full dfb column gap-10 align-center">
                        <CustomIcon url={ThreeCs1.src} size={80} round />
                        <div className="text-xs bold-600 full text-center" style={{ color: "#49267A" }}>CURIOSITY</div>
                     </div>
                     <div className="box full dfb column gap-10 align-center">
                        <CustomIcon url={ThreeCs2.src} size={80} round />
                        <div className="text-xs bold-600 full text-center" style={{ color: "#D96D25" }}>COMPASSION</div>
                     </div>
                     <div className="box full dfb column gap-10 align-center">
                        <CustomIcon url={ThreeCs3.src} size={80} round />
                        <div className="text-xs bold-600 full text-center" style={{ color: "#429A8E" }}>CONNECTION</div>
                     </div>
                  </div>
               </div>
            </div>



         </div>
      </div>
   )
}
