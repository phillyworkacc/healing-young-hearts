'use client'
import CustomSection from '@/components/CustomSection/CustomSection'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header'
import ImageSection from '@/components/ImageSection/ImageSection'
import Spacing from '@/components/Spacing/Spacing'
import { websiteConfig } from '../page'

export default function EventsAndNetworksPage () {
   const customLinkProps = {
      target: "_blank",
      inline: true,
      colour: "accent-color" as const,
   }

   return (<>
      <Header />
      <ImageSection image={websiteConfig.imageSectionsImg} backgroundOpacity={0.5}>
         <div className="box full dfb column gap-10 pd-2">
            <div className="text-xxb full text-left color-white bold-700">Events And Networks</div>
         </div>
      </ImageSection>

      <CustomSection 
         textColor="black" bgColor="accent-color-20"
         customSectionConfig={{
            title: "", titleSize: "l", type: "version-1", align: "left"
         }}
      >
         <div className="text-l bold-600 full pd-1">Events, Networks & Professional Learning</div>
         <div className="text-sm pd-05 full line-height-15">
            I facilitate professional learning, collaboration and reflective spaces that bring educators, leaders and practitioners together around trauma-informed and relational practice.
         </div>

         <Spacing />

         <div className="text-m bold-600 full pd-1">I offer:</div>
         <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Professional Networks</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Conferences & Keynotes</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Training Events</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Collaborative Learning Spaces</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Multi-Agency Conversations</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Staff Development Opportunities</li>
         </ul>

         <Spacing />
         
         <div className="text-m bold-600 full pd-1">Get in touch to discuss:</div>
         <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Conference speaking</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Bespoke events</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Network facilitation</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Professional learning partnerships</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Collaborative projects</li>
         </ul>
      </CustomSection>

      <Footer />  
   </>)
}
