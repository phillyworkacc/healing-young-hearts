'use client'
import { websiteConfig } from "@/app/page";

type CustomSectionConfig = | {
   type: "version-1";
   title: React.ReactNode | string;
   titleSize?: "l" | "xl" | "xxl" | "xxxl" | "b" | "xb";
   align: "left" | "center";
   icon?: React.ReactNode;
} | {
   type: "version-2";
   title: React.ReactNode | string;
   titleSize?: "l" | "xl" | "xxl" | "xxxl" | "b" | "xb";
   image: string;
   align: "left" | "center";
   icon?: React.ReactNode;
}

type CustomSectionProps = {
   customSectionConfig: CustomSectionConfig;
   children: React.ReactNode;
   bgColor: string;
   textColor: string;
}

export default function CustomSection ({ customSectionConfig, children, bgColor, textColor }: CustomSectionProps) {
   const { sectionBgColor } = websiteConfig;
   const bgColorsOptions = ["accent-color-10", "accent-color-20", "accent-color-30", "accent-color-50", "accent-color-70", "accent-color-90"];
   const bgColors: Record<string, string> = {
      "accent-color-10": sectionBgColor + "1a",
      "accent-color-20": sectionBgColor + "2d",
      "accent-color-30": sectionBgColor + "4d",
      "accent-color-50": sectionBgColor + "80",
      "accent-color-70": sectionBgColor + "b3",
      "accent-color-90": sectionBgColor + "e5",
   }

   if (customSectionConfig.type == "version-1") {
      const { title, align, icon, titleSize } = customSectionConfig;
      return (
         <section 
            className="custom-section"
            style={{ backgroundColor: bgColorsOptions.includes(bgColor) ? bgColors[bgColor!] : bgColor || sectionBgColor, color: textColor }}
         >
            <div className="page-container">
               {icon ? (<>
                  <div className={`box full dfb align-center justify-${align == 'left' ? 'start' : align} gap-10`}>
                     {icon} <div className={`text-${titleSize || 'b'} bold-700 fit whitespace-nowrap text-${align}`}>{title}</div>
                  </div>
               </>) : (<>
                  <div className={`text-b bold-700 full text-${align}`}>{title}</div>
               </>)}
               <div className={`box full text-${align}`}>{children}</div>
            </div>
         </section>
      )
   } else if (customSectionConfig.type == "version-2") {
      const { title, image, align, icon, titleSize } = customSectionConfig;
      return (
         <section 
            className="custom-section"
            style={{ backgroundColor: bgColorsOptions.includes(bgColor) ? bgColors[bgColor!] : bgColor || sectionBgColor, color: textColor }}
         >
            <div className="page-container">
               <div className="box full">
                  {icon ? (<>
                     <div className={`box full dfb align-center justify-${align == 'left' ? 'start' : align} gap-10 pd-1 mb-1`}>
                        {icon} <div className={`text-${titleSize || 'b'} bold-700 fit whitespace-nowrap text-${align}`}>{title}</div>
                     </div>
                  </>) : (<>
                     <div className={`text-b bold-700 full text-${align} pd-1 mb-1`}>{title}</div>
                  </>)}
               </div>
               <div className="horizontal-convertible full dfb gap-10">
                  <div className="box full text-left">{children}</div>
                  <div className="box full">
                     <img className="image-fit" src={image} alt='custom-section-image' />
                  </div>
               </div>
            </div>
         </section>
      )
   }
}
