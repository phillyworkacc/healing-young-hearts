'use client'
import CustomSection from '@/components/CustomSection/CustomSection'
import Header from '@/components/Header'
import Footer from '@/components/Footer/Footer'
import ContactUsForm from '@/forms/ContactUs'

export default function BookConsultationPage () {
   return (<>
      <Header />
      <CustomSection
         textColor="black" bgColor="#fefefe"
			customSectionConfig={{ title: "", type: "version-1", align: "left" }}
      >
         <div className="box full dfb justify-center">
            <ContactUsForm title="Book Free Consultation" />
         </div>
      </CustomSection>
      <Footer />
   </>)
}
