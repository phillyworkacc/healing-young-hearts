import type { StaticImageData } from "next/image";

type ServiceList = {
   name: React.ReactNode | string;
   description?: React.ReactNode | string;
   image?: StaticImageData;
   href: string;
}[]