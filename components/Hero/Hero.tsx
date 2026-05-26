'use client'
import Link from "next/link";

type HeroActions = | {
   label: React.ReactNode | string;
   type: 'link';
   buttonStyle: "green" | "grey" | "outline-black" | "outline-accent-color" | "transparent" | "delete" | "normal";
   buttonSize?: "xxs" | "xs" | "s" | "sm" | "m" | "ml" | "l";
   href: string;
} | {
   label: React.ReactNode | string;
   type: 'action';
   buttonStyle: "green" | "grey" | "outline-black" | "outline-accent-color" | "transparent" | "delete" | "normal" | "secondary-color";
   buttonSize?: "xxs" | "xs" | "s" | "sm" | "m" | "ml" | "l";
   action: () => void;
}

type HeroProps = {
   name: string;
   description: string | React.ReactNode;
   style: "version-1" | "version-2";
   actions?: HeroActions[];
   backgroundOpacity?: number;
   formContent?: React.ReactNode;
}

export default function Hero ({ name, description, style, backgroundOpacity, actions, formContent }: HeroProps) {

   if (style == "version-1") {
      return (
         <div className="hero-section">
            <section className="hero" style={{ backgroundColor: `rgba(0,0,0,${backgroundOpacity || 0.15}` }}>
               <div className="page-container">

                  <div className="box full dfb column gap-10">
                     <div className="text-xb full bold-900 text-center">{name.toUpperCase()}</div>
                     <div className="text-m full bold-500 text-center">{description}</div>
                     {(actions) && (<div className="box full pd-2 dfb align-center justify-center gap-10 wrap">
                        {actions.map((action, index) => {
                           const buttonClassName = `${action.buttonSize || 's'} pd-15 pdx-2 whitespace-nowrap ${action.buttonStyle}`;
                           if (action.type == "action") {
                              return <button 
                                 key={index} 
                                 onClick={() => { if (action.action) action?.action(); }}
                                 className={buttonClassName}
                              >{action.label}</button>
                           } else if (action.type == "link") {
                              return <Link key={index} href={action.href!}>
                                 <button className={buttonClassName}>{action.label}</button>
                              </Link>
                           }
                        })}
                     </div>)}
                  </div>

               </div>
            </section>
         </div>
      )

   } else if (style == "version-2") {
      return (
         <div className="hero-section">
            <section className="hero" style={{ backgroundColor: `rgba(0,0,0,${backgroundOpacity || 0.15}` }}>
               <div className="page-container">
                  <div className="horizontal-convertible full gap-10">

                     <div className="box full h-full dfb column gap-10">
                        <div className="text-xb full bold-900">{name.toUpperCase()}</div>
                        <div className="text-m full bold-500">{description}</div>
                        {(actions) && (<div className="box full pd-2 dfb align-center gap-10 wrap">
                           {actions.map((action, index) => {
                              const buttonClassName = `${action.buttonSize || 's'} pd-15 pdx-2 whitespace-nowrap ${action.buttonStyle}`;
                              if (action.type == "action") {
                                 return <button 
                                    key={index} 
                                    onClick={() => { if (action.action) action?.action(); }}
                                    className={buttonClassName}
                                 >{action.label}</button>
                              } else if (action.type == "link") {
                                 return <Link key={index} href={action.href!}>
                                    <button className={buttonClassName}>{action.label}</button>
                                 </Link>
                              }
                           })}
                        </div>)}
                     </div>
                     <div className="box full h-full dfb align-center justify-center">{formContent}</div>

                  </div>
               </div>
            </section>
         </div>
      )
   }

}
