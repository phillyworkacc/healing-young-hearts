'use client'
import CustomSection from '@/components/CustomSection/CustomSection'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header'
import ImageSection from '@/components/ImageSection/ImageSection'
import AboutUsImage from '@/public/assets/hero-section-bg.jpeg'
import CustomLink from '@/components/Formatting'
import Spacing from '@/components/Spacing/Spacing'

export default function ResourcesPage () {
   const customLinkProps = {
      target: "_blank",
      inline: true,
      colour: "accent-color" as const,
   }

   return (<>
      <Header />
      <ImageSection image={AboutUsImage} backgroundOpacity={0.5}>
         <div className="box full dfb column gap-10 pd-2">
            <div className="text-xxb full text-left color-white bold-700">Resources</div>
         </div>
      </ImageSection>

      <CustomSection 
         textColor="black" bgColor="#fcfcfc"
         customSectionConfig={{
            title: "", titleSize: "l", type: "version-1", align: "left"
         }}
      >
         <div className="text-l bold-600 full pd-1">Resources & Recommended Reading</div>
         <div className="text-sm pd-05 full line-height-15">
            I share articles, reflections, evidence-informed resources and practical guidance exploring trauma-informed practice, belonging, neurodiversity, wellbeing and relational approaches in education.
         </div>

         <Spacing />

         <div className="text-m bold-600 full pd-1">This section will include:</div>
         <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Articles & Insights</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Blogs & Reflections</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Downloadable Resources</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Research & Evidence</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Podcast & Media Features</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Recommended Reading</li>
         </ul>
         <div className="text-sm pd-1 mt-1 full line-height-15">
            Browse my curated professional reading recommendations through my affiliate . <CustomLink href='https://uk.bookshop.org/shop/HYH' {...customLinkProps}>Bookshop.org Store</CustomLink>.
         </div>
      </CustomSection>

      <Footer />  
   </>)
}
