'use client'
import CustomSection from '@/components/CustomSection/CustomSection'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header'
import ImageSection from '@/components/ImageSection/ImageSection'
import AboutUsImage from '@/public/assets/hero-section-bg.jpeg'
import Spacing from '@/components/Spacing/Spacing'
import CustomLink from '@/components/Formatting'

export default function TestimonialsPage () {
   const customLinkProps = {
      target: "_blank",
      inline: true,
      colour: "accent-color" as const,
   }

   return (<>
      <Header />
      <ImageSection image={AboutUsImage} backgroundOpacity={0.5}>
         <div className="box full dfb column gap-10 pd-2">
            <div className="text-xxb full text-left color-white bold-700">Testimonials</div>
         </div>
      </ImageSection>

      <CustomSection 
         textColor="black" bgColor="#fcfcfc"
         customSectionConfig={{
            title: "", titleSize: "l", type: "version-1", align: "left"
         }}
      >
         <div className="text-l bold-600 full pd-1">Feedback & Impact</div>
         <div className="text-sm pd-05 full line-height-15">
            I am proud to work alongside schools, colleges and organisations committed to creating emotionally safe, relational and inclusive cultures.
         </div>

         <Spacing />

         <div className="text-m bold-600 full pd-1">This section will showcase:</div>
         <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Client testimonials</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Case studies</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Organisational impact</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Leadership reflections</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Training feedback</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Partnership projects</li>
         </ul>

         <Spacing />
         
         <div className="text-m bold-600 full pd-1">Focus areas include:</div>
         <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Belonging and inclusion</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Staff wellbeing</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Behaviour and regulation</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Trauma-informed implementation</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Relational culture change</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Emotionally sustainable practice</li>
         </ul>
      </CustomSection>

      <CustomSection 
         textColor="black" bgColor="accent-color-10"
         customSectionConfig={{
            title: "", titleSize: "l", type: "version-1", align: "left"
         }}
      >
         <div className="text-sm pd-05 full line-height-15">
            Proud to have worked as part of the London Violence Reduction Unit and <CustomLink href='https://www.nurtureuk.org/' {...customLinkProps}>nurtureuk</CustomLink> Nurturing London VRU Programme, supporting schools across London to develop nurturing, trauma-informed and relational approaches to inclusion, wellbeing and violence reduction. The programme supported over 24,000 children and young people across 13 boroughs, helping schools strengthen belonging, reduce exclusions and improve staff confidence in responding to SEMH needs.
         </div>
         <div className="text-sm pd-05 full line-height-15">
            The programme and its impact were later explored in The International Journal of Nurture in Education in Andrea Middleton's paper: The nurtureuk Violence Reduction Unit programme: Exploring a model for reducing school exclusions and instances of youth violence through nurture practice. 
         </div>
         <div className="text-m bold-600 full pd-1">Read more:</div>
         <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>
               <CustomLink href='https://www.nurtureuk.org/our-programmes/london-violence-reduction-programme/' {...customLinkProps}>London VRU Programme Impact</CustomLink>
            </li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Read the Journal Paper</li>
         </ul>
      </CustomSection>
      <Footer />
   </>)
}
