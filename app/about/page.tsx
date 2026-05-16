'use client'
import CustomSection from '@/components/CustomSection/CustomSection'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header'
import ImageSection from '@/components/ImageSection/ImageSection'
import AboutUsImage from '@/public/assets/hero-section-bg.jpeg'
import CustomLink from '@/components/Formatting'
import Spacing from '@/components/Spacing/Spacing'
import AboutImage from '@/public/images/image4.png'

export default function AboutPage () {
   const customLinkProps = {
      target: "_blank",
      inline: true,
      colour: "accent-color" as const,
   }

   return (<>
      <Header />
      <ImageSection image={AboutUsImage} backgroundOpacity={0.5}>
         <div className="box full dfb column gap-10 pd-2">
            <div className="text-xxb full text-left color-white bold-700">About</div>
         </div>
      </ImageSection>

      <CustomSection 
         textColor="black" bgColor="#fcfcfc"
         customSectionConfig={{
            title: "", titleSize: "l", type: "version-2", align: "left",
            image: AboutImage.src
         }}
      >
         <div className="text-l bold-600 full pd-1">About Healing Young Hearts</div>
         <div className="text-sm pd-05 full line-height-15">
            Healing Young Hearts was founded by me, Siobhán Garrett, a therapeutic education consultant, trainer and former school leader with over 20 years’ experience across education, leadership and therapeutic practice.
         </div>
         <div className="text-sm pd-05 full line-height-15">
            The Healing Young Hearts philosophy is rooted in the understanding that emotionally safe relationships are central to wellbeing, learning and resilience. My work draws on research around trauma, belonging, social buffering and relational practice to help organisations create environments where both children and adults feel safe, valued and connected.
         </div>
         <div className="text-sm pd-05 full line-height-15">
            I work with schools, colleges, local authorities and organisations across the UK and Ireland, supporting sustainable implementation of trauma-informed and relational approaches at both strategic and practical levels.
         </div>

         <Spacing />

         <div className="text-m bold-600 full pd-1">Professional Affiliations</div>
         <div className="text-sm pd-05 full line-height-15">
            I value being part of professional communities committed to evidence-informed, relational and trauma-informed practice across education, psychology and mental health.
         </div>
         <div className="text-sm pd-05 full line-height-15">
            My work is informed by ongoing engagement with organisations including:
         </div>
         <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>
               <CustomLink href='https://the-arc.org.uk/' {...customLinkProps}>Attachment Research Community (ARC)</CustomLink> — supporting attachment-aware and trauma-informed practice across education settings.
            </li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>
               <CustomLink href='https://sebda.org/' {...customLinkProps}>SEBDA (Social, Emotional and Behavioural Difficulties Association)</CustomLink> — promoting social and emotional wellbeing, inclusion and evidence-informed SEMH practice for children and young people.
            </li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>
               UK Trauma Council Community of Practice — engaging with current trauma research, interdisciplinary collaboration and evidence-informed approaches to supporting children and young people affected by trauma.
            </li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>
               <CustomLink href='https://www.trauma-informed.uk/' {...customLinkProps}>Trauma Informed Schools UK</CustomLink> — supporting schools and organisations to develop trauma-informed and relational approaches.
            </li>
         </ul>
         <div className="text-sm pd-1 mt-1 full line-height-15">
            Alongside my consultancy work, I am a Regional Lead and licensed trainer with <CustomLink href='https://www.trauma-informed.uk/' {...customLinkProps}>Trauma Informed Schools UK</CustomLink> and am currently undertaking postgraduate study and research in psychology, trauma and child and adolescent mental health through <CustomLink href='https://www.ucl.ac.uk/' {...customLinkProps}>University College London (UCL)</CustomLink> in partnership with <CustomLink href='https://www.annafreud.org/' {...customLinkProps}>Anna Freud Centre</CustomLink>.
         </div>
      </CustomSection>

      <Footer />  
   </>)
}
