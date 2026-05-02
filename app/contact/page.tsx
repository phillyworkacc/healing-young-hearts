'use client'
import Link from 'next/link'
import CustomSection from '@/components/CustomSection/CustomSection'
import Header from '@/components/Header'
import Footer from '@/components/Footer/Footer'
import ContactUsForm from '@/forms/ContactUs'
import { Mail } from 'lucide-react'
import { websiteConfig } from '../page'

export default function ContactPage () {
   return (<>
      <Header />
      <CustomSection 
         textColor="black" bgColor="accent-color-30"
         customSectionConfig={{
            title: "Contact Me".toUpperCase(),
            titleSize: "l", type: "version-1", align: "left"
         }}
      >
         <div className="horizontal-convertible full gap-40">
            <div className="box full">
               <div className="text-sm pd-1 full text-left">
                  If you'd like to arrange a free consultation, ask any questions, or talk about your personal needs, please complete the enquiry form. You can also call or text me on the number below. If I'm unable to answer straight away, just leave a short message, and I'll get back to you as soon as I can.
               </div>
               <div className="text-l mt-3 full text-left bold-600">Cancellation Policy</div>
               <div className="text-sm pd-1 full text-left">
                  If you'd like to arrange a free consultation, ask any questions, or talk about your personal needs, please complete the enquiry form. You can also call or text me on the number below. If I'm unable to answer straight away, just leave a short message, and I'll get back to you as soon as I can.
               </div>
               <div className="box full pd-1 dfb column gap-10">
                  <Link href={`mailto:${websiteConfig.email}`} target="_blank">
                     <button className="xs pd-15 full"><Mail size={17} /> Send an Email</button>
                  </Link>
                  {/* <Link href={`tel:${websiteConfig.phoneNumber.replaceAll(' ','')}`}>
                     <button className="s pd-15 full"><Phone /> {websiteConfig.phoneNumber}</button>
                  </Link> */}
               </div>
            </div>
            <div className="box full">
               <ContactUsForm />
            </div>
         </div>
      </CustomSection>
      <Footer />
   </>)
}
