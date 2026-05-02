'use client'
import CustomSection from '@/components/CustomSection/CustomSection'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header'
import ImageSection from '@/components/ImageSection/ImageSection'
import AboutUsImage from '@/public/assets/hero-section-bg.jpeg'

export default function ApproachPage () {
   const principles = [
      "Safety",
      "Trustworthiness & Transparency",
      "Peer Support",
      "Collaboration & Mutuality",
      "Empowerment, Voice & Choice",
      "Cultural, Historical & Gender Awareness",
   ]
   
   return (<>
      <Header />
      <ImageSection image={AboutUsImage} backgroundOpacity={0.5}>
         <div className="box full dfb column gap-10 pd-2">
            <div className="text-xxb full text-left color-white bold-700">Approach</div>
         </div>
      </ImageSection>
      <CustomSection 
         textColor="black" bgColor="#fcfcfc"
         customSectionConfig={{
            title: "", titleSize: "l", type: "version-1", align: "left"
         }}
      >
         <div className="text-xxxl bold-700 full">Grounded in SAMHSA trauma-informed principles:</div>
         <div className="box full dfb column">
            {principles.map((principle, index) => (
               <div key={index} className="text-s pd-1 full line-height-14">{principle}</div>
            ))}
         </div>
      </CustomSection>
      <Footer />  
   </>)
}
