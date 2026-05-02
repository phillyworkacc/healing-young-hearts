'use client'
import CustomSection from '@/components/CustomSection/CustomSection'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header'
import ImageSection from '@/components/ImageSection/ImageSection'
import AboutUsImage from '@/public/assets/hero-section-bg.jpeg'
import { CustomImgIcon } from '@/components/Icons/Icon'

export default function AboutPage () {
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
            title: "", titleSize: "l", type: "version-1", align: "left"
         }}
      >
         <div className="text-l bold-600 full pd-1">
            Siobhán Garrett
         </div>
         <div className="text-m pd-1 mt-1 full line-height-15">
            I am an education consultant, trainer, and former headteacher with over 20 years' experience across primary, secondary, and further education. I specialise in trauma-informed practice, focusing on how early adversity shapes behaviour, learning, and relationships.
         </div>
      </CustomSection>
      <Footer />  
   </>)
}
