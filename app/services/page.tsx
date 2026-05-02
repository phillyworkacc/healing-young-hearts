'use client'
import Card from '@/components/Card/Card'
import CustomSection from '@/components/CustomSection/CustomSection'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header'
import ImageSection from '@/components/ImageSection/ImageSection'
import AboutUsImage from '@/public/assets/hero-section-bg.jpeg'
import { CSSProperties } from 'react'

export default function ServicesPage () {
   const serviceCardStyles: CSSProperties = {
      padding: "20px 25px"
   }

   const servicesList = [
      {
         title: "Training",
         content: <>
            <div className="text-xs full mb-1">Leadership Training</div>
            <div className="text-xs full mb-1">Whole Staff Training</div>
            <div className="text-xs full">Specialist Development Pathways</div>
         </>
      },
      {
         title: "Consultancy",
         content: "Culture reviews, policy alignment, staff/student voice, environment mapping"
      },
      {
         title: "System Change",
         content: "Trust-wide implementation, local authority work, evaluation frameworks"
      }
   ]

   return (<>
      <Header />
      <ImageSection image={AboutUsImage} backgroundOpacity={0.5}>
         <div className="box full dfb column gap-10 pd-2">
            <div className="text-xxb full text-left color-white bold-700">Services</div>
         </div>
      </ImageSection>
      <CustomSection 
         textColor="black" bgColor="#fcfcfc"
         customSectionConfig={{
            title: "", titleSize: "l", type: "version-1", align: "left"
         }}
      >
         <div className="box full dfb gap-10 wrap">
            {servicesList.map((servicesListItem, index) => (
               <Card styles={serviceCardStyles} key={index}>
                  <div className="text-l bold-600 full">{servicesListItem.title}</div>
                  <div className="text-xs pd-1 grey-5 full line-height-14">{servicesListItem.content}</div>
               </Card>
            ))}
         </div>
      </CustomSection>
      <Footer />  
   </>)
}
