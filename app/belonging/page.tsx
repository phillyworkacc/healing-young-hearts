'use client'
import CustomSection from '@/components/CustomSection/CustomSection'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header'
import ImageSection from '@/components/ImageSection/ImageSection'
import { websiteConfig } from '../page'

export default function BelongingPage () {   
   return (<>
      <Header />
      <ImageSection image={websiteConfig.imageSectionsImg} backgroundOpacity={0.5}>
         <div className="box full dfb column gap-10 pd-2">
            <div className="text-xxb full text-left color-white bold-700">Belonging</div>
         </div>
      </ImageSection>
      <CustomSection 
         textColor="black" bgColor="#fcfcfc"
         customSectionConfig={{
            title: "", titleSize: "l", type: "version-1", align: "left"
         }}
      >
         <div className="text-s pd-1 full line-height-14">
            Children and young people thrive when they feel they belong.
         </div>
      </CustomSection>
      <Footer />  
   </>)
}
