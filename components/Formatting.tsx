'use client'
import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";


type CustomLinkProps = {
   href: string;
   target: HTMLAttributeAnchorTarget;
   inline?: boolean;
   className?: string;
   colour: "accent-color" | "black" | "white";
   children: React.ReactNode;
}

export default function CustomLink ({ href, target, className, inline, colour, children }: CustomLinkProps) {
   return (
      <Link
         href={href} target={target} 
         className={`visible-link ${colour == "accent-color" ? 'visible-link-color' : ''} ${className}`}
         style={{ display: inline ? "inline-block" : "block" }}
      >
         {children}
      </Link>
   )
}
