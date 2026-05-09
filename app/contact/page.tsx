'use client'
import Link from 'next/link'
import CustomSection from '@/components/CustomSection/CustomSection'
import Header from '@/components/Header'
import Footer from '@/components/Footer/Footer'
import ContactUsForm from '@/forms/ContactUs'
import { Mail, Phone } from 'lucide-react'
import { websiteConfig } from '../page'
import Spacing from '@/components/Spacing/Spacing'
import CustomLink from '@/components/Formatting'

export default function ContactPage () {
   const customLinkProps = {
      target: "_blank",
      inline: true,
      colour: "accent-color" as const,
   }

   return (<>
      <Header />
      <CustomSection 
         textColor="black" bgColor="accent-color-10"
         customSectionConfig={{
            title: "Contact".toUpperCase(),
            titleSize: "l", type: "version-1", align: "left"
         }}
      >
         <div className="horizontal-convertible full gap-40">
            <div className="box full">
               <div className="text-l bold-600 full pd-1">Get in Touch</div>
               <div className="text-sm pd-05 full line-height-15">
                  Whether you are looking for training, consultancy, supervision, keynote speaking or whole-system support, I would love to hear from you.
               </div>
               <div className="text-m bold-600 full pd-1">I work with:</div>
               <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
                  <li className='text-sm pd-05' style={{ display: "list-item" }}>Schools</li>
                  <li className='text-sm pd-05' style={{ display: "list-item" }}>Colleges</li>
                  <li className='text-sm pd-05' style={{ display: "list-item" }}>Trusts</li>
                  <li className='text-sm pd-05' style={{ display: "list-item" }}>Local authorities</li>
                  <li className='text-sm pd-05' style={{ display: "list-item" }}>Community organisations</li>
                  <li className='text-sm pd-05' style={{ display: "list-item" }}>Multi-agency partnerships</li>
               </ul>

               <Spacing size={2}/>
               <div className="text-l bold-600 full pd-1">Contact Options</div>
               <div className="text-sm pd-05 full line-height-15">
                  You can contact us via Training & Consultancy Enquiries, Speaking Requests, Partnership Opportunities, Network Information, Supervision Enquiries or you can book a call with us below.
               </div>
               <div className="box full dfb column gap-10">
                  <button className="xxs pd-13 full mw-400"><Phone size={17} /> Book a Discovery Call</button>
               </div>

               <Spacing size={2}/>
               <div className="text-l bold-600 full pd-1">Social Links</div>
               <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
                  <li className='text-sm pd-1' style={{ display: "list-item" }}>
                     <CustomLink href='https://www.linkedin.com/in/siobh%C3%A1n-garrett-b1b4a51b6/' {...customLinkProps}>Siobhán Garrett's LinkedIn</CustomLink>
                  </li>
                  <li className='text-sm pd-1' style={{ display: "list-item" }}>
                     <CustomLink href='https://www.instagram.com/healing_young_hearts/' {...customLinkProps}>@healing_young_hearts Instagram</CustomLink>
                  </li>
                  <li className='text-sm pd-1' style={{ display: "list-item" }}>
                     <CustomLink href='https://uk.bookshop.org/shop/HYH/' {...customLinkProps}>Healing Young Hearts - Bookshop.org</CustomLink>
                  </li>
               </ul>
            </div>
            <div className="box full">
               <ContactUsForm />
            </div>
         </div>

         <Spacing size={2} />
         <div className="text-sm pd-1 full text-left">
            Together, we can create relational, compassionate and emotionally sustainable environments where children, young people and adults feel safe, connected and able to thrive.
         </div>
      </CustomSection>
      <Footer />
   </>)
}
