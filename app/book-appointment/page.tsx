'use client'
import CustomSection from "@/components/CustomSection/CustomSection"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header"
import ImageSection from "@/components/ImageSection/ImageSection"
import { websiteConfig } from "../page"

export default function BookAppointmentPage () {
   return (<>
      <Header />
      <ImageSection image={websiteConfig.imageSectionsImg} backgroundOpacity={0.5}>
         <div className="box full dfb column gap-10 pd-2">
            <div className="text-xxb full text-left color-white bold-700">Book Appointment</div>
         </div>
      </ImageSection>
      <CustomSection 
         textColor="black" bgColor="#fcfcfc"
         customSectionConfig={{
            title: "", titleSize: "l", type: "version-1", align: "left"
         }}
      >
         <div className="text-sm full pd-1 mb-2">
            Book me below
         </div>  
         <iframe 
            src="https://cal.com/siobhan-garrett-wehrlo"
            frameBorder="0"
            style={{ width: "100%", height: "700px", borderRadius: "20px" }}
         />
      </CustomSection>
      <Footer />  
   </>)
}
