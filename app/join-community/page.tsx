'use client'
import CustomSection from "@/components/CustomSection/CustomSection"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header"
import ImageSection from "@/components/ImageSection/ImageSection"
import { websiteConfig } from "../page"
import { useState } from "react"

export default function JoinCommunity () {
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [company, setCompany] = useState("");
   const [role, setRole] = useState("");

   return (<>
      <Header />
      <ImageSection image={websiteConfig.imageSectionsImg} backgroundOpacity={0.5}>
         <div className="box full dfb column gap-10 pd-2">
            <div className="text-xxb full text-left color-white bold-700">Join Community</div>
         </div>
      </ImageSection>

      <CustomSection 
         textColor="black" bgColor="accent-color-20"
         customSectionConfig={{
            title: "", titleSize: "l", type: "version-1", align: "left"
         }}
      >
			<div className="text-sm pd-05 full line-height-15 mb-1">
				Sign up to receive reflective, evidence-informed insights on trauma-informed practice, belonging, relational leadership, staff wellbeing and emotionally sustainable cultures in education.
			</div>
			<div className="text-sm pd-05 full line-height-15 mb-1">
				By subscribing, you agree to receive occasional emails from Healing Young Hearts. You can unsubscribe at any time. Please see the Privacy Policy for more information.
			</div>

         <div className="box full pd-1">
            <form
               action="https://trauma-informed.us6.list-manage.com/subscribe/post?u=0f16e3acd46502f6311ed7374&amp;id=0a3bcd2b75&amp;f_id=00bbc2e1f0"
               method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank"
            >
               <div className="indicates-required text-sm pd-05 full line-height-15 mb-1">
                  <span className="asterisk">*</span> Indicates Required Fields
               </div>

               <div className="box full dfb column gap-10">
                  <input 
                     type="text" name="FNAME"
                     className=" text xs pd-12 pdx-2 mw-500 full" id="mce-FNAME" 
                     required={true}
                     placeholder="First Name *"
                  />
                  <input 
                     type="text" name="LNAME"
                     className=" text xs pd-12 pdx-2 mw-500 full" id="mce-LNAME" 
                     required={true}
                     placeholder="Last Name *"
                  />
                  <input
                     type="email" name="EMAIL" 
                     className="required email xs pd-12 pdx-2 mw-500 full"
                     id="mce-EMAIL" 
                     placeholder="Email *"
                     required={true} 
                  />
                  <input 
                     type="text" name="COMPANY"
                     className=" text xs pd-12 pdx-2 mw-500 full" id="mce-COMPANY" 
                     placeholder="Company"
                  />
                  <input 
                     type="text" name="MMERGE8"
                     className=" text xs pd-12 pdx-2 mw-500 full" id="mce-MMERGE8" 
                     placeholder="Role"
                  />
               </div>

               <div id="mce-responses" className="clear">
                  <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                  <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
               </div>

               <div 
                  aria-hidden="true" 
                  style={{ position: "absolute", left: "-5000px" }}
               >
                  <input type="text" name="b_0f16e3acd46502f6311ed7374_0a3bcd2b75" tabIndex={-1} value="" />
               </div>
               
               <div className="box full mt-1">
                  <div className="clear">
                     <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="button xs full mw-400 pd-12 pdx-2">Subscribe</button>
                  </div>
               </div>
            </form>
         </div>
      </CustomSection>
      
      <Footer />
      <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js" defer></script>
      <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-sms-phone.js" defer></script>
      <script type="text/javascript" src="/mailchimp/form.js" defer></script>
   </>)
}
