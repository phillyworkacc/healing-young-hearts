'use client'
import CustomSection from '@/components/CustomSection/CustomSection'
import Footer from '@/components/Footer/Footer'
import CustomLink from '@/components/Formatting'
import Header from '@/components/Header'
import ImageSection from '@/components/ImageSection/ImageSection'
import AboutUsImage from '@/public/assets/hero-section-bg.jpeg'

export default function TermsAndConditionsPage () {
   const customLinkProps = {
      target: "_blank",
      inline: true,
      colour: "accent-color" as const,
   }
   
   return (<>
      <Header />
      <ImageSection image={AboutUsImage} backgroundOpacity={0.5}>
         <div className="box full dfb column gap-10 pd-2">
            <div className="text-xxb full text-left color-white bold-700">Terms and Conditions</div>
         </div>
      </ImageSection>

      <CustomSection 
         textColor="black" bgColor="#fcfcfc"
         customSectionConfig={{
            title: "", titleSize: "l", type: "version-1", align: "left"
         }}
      >
         <div className="text-s full line-height-15">
         Welcome to the Healing Young Hearts website.
         </div>

         <div className="text-s full line-height-15">
         By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use. If you disagree with any part of these terms, please do not use this website.
         </div>

         <div className="text-s full line-height-15">
         The terms “Healing Young Hearts”, “Healing Young Hearts Ltd”, “we”, “our” or “us” refer to the owner of this website. The term “you” refers to the user or viewer of this website.
         </div>

         <br />

         <div className="text-m bold-600 full pd-1">Website Use</div>

         <div className="text-s full line-height-15">
         The content of this website is provided for general information, professional reflection and educational purposes only. Content may be updated or changed without notice.
         </div>

         <div className="text-s full line-height-15">
         Whilst every effort is made to ensure information is accurate and up to date, Healing Young Hearts makes no warranties or guarantees regarding the completeness, accuracy, reliability or suitability of information contained on this website.
         </div>

         <div className="text-s full line-height-15">
         Any reliance placed on information found on this website is at your own risk.
         </div>

         <br />

         <div className="text-m bold-600 full pd-1">Intellectual Property</div>

         <div className="text-s full line-height-15">
         Unless otherwise stated, all content on this website remains the intellectual property of Healing Young Hearts Ltd.
         </div>

         <div className="text-s full line-height-15">
         This includes:
         </div>

         <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Written content</li>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Frameworks and models</li>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Training materials</li>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Graphics and branding</li>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Downloadable resources</li>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Presentations and publications</li>
            <li className='text-s pd-05' style={{ display: "list-item" }}>The HYH Framework and associated language</li>
         </ul>

         <div className="text-s full line-height-15">
         Content may not be reproduced, distributed, adapted, recorded or commercially used without prior written permission.
         </div>

         <br />

         <div className="text-m bold-600 full pd-1">External Links</div>

         <div className="text-s full line-height-15">
         This website may contain links to external websites for additional information or resources.
         </div>

         <div className="text-s full line-height-15">
         Healing Young Hearts has no responsibility for the content, availability or privacy practices of external websites and inclusion of links does not imply endorsement.
         </div>

         <br />

         <div className="text-m bold-600 full pd-1">Limitation of Liability</div>

         <div className="text-s full line-height-15">
         Healing Young Hearts shall not be liable for any direct, indirect or consequential loss or damage arising from use of this website or reliance on information provided through it.
         </div>

         <div className="text-s full line-height-15">
         Content is intended for educational, reflective and professional development purposes only and should not replace clinical, therapeutic, medical, safeguarding or legal advice.
         </div>

         <br />

         <div className="text-m bold-600 full pd-1">Governing Law</div>

         <div className="text-s full line-height-15">
         Your use of this website and any disputes arising from its use shall be governed by the laws of England and Wales.
         </div>

         <br />

         <div className="text-l bold-600 full pd-1">Privacy Policy</div>

         <div className="text-m bold-600 full pd-1">How Healing Young Hearts Uses Your Data</div>

         <div className="text-s full line-height-15">
         Healing Young Hearts is committed to protecting your privacy and handling personal information with care, integrity and transparency.
         </div>

         <div className="text-s full line-height-15">
         Personal information may be collected when you:
         </div>

         <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Submit an enquiry</li>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Complete a booking form</li>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Register for training or events</li>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Subscribe to newsletters or updates</li>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Request resources or services</li>
         </ul>

         <div className="text-s full line-height-15">
         Information collected may include:
         </div>

         <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Name</li>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Organisation name</li>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Email address</li>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Telephone number</li>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Invoicing information</li>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Relevant professional information</li>
         </ul>

         <div className="text-s full line-height-15">
         Your information will only be used for purposes connected to the services provided by Healing Young Hearts.
         </div>

         <div className="text-s full line-height-15">
         Your data will never be sold or shared with third parties for marketing purposes.
         </div>

         <br />

         <div className="text-m bold-600 full pd-1">Data Storage & Retention</div>

         <div className="text-s full line-height-15">
         Information is stored securely and retained only for as long as necessary for:
         </div>

         <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Professional administration</li>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Legal obligations</li>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Insurance purposes</li>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Safeguarding responsibilities</li>
         </ul>

         <div className="text-s full line-height-15">
         Where information is no longer required, it will be securely deleted or destroyed.
         </div>

         <br />

         <div className="text-m bold-600 full pd-1">Your Rights</div>

         <div className="text-s full line-height-15">
         Under UK GDPR legislation, you have the right to:
         </div>

         <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Access your personal data</li>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Request correction of inaccurate data</li>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Request deletion of your data</li>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Restrict or object to processing</li>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Withdraw consent for communications</li>
         </ul>

         <div className="text-s full line-height-15">
         Requests relating to personal data can be made via{" "}
         <CustomLink href='mailto:[Insert Contact Email]' {...customLinkProps}>
            [Insert Contact Email]
         </CustomLink>.
         </div>

         <div className="text-s full line-height-15">
         If you have concerns regarding data use, you also have the right to contact the Information Commissioner’s Office (ICO):{" "}
         <CustomLink href='https://ico.org.uk/' {...customLinkProps}>
            ICO Website
         </CustomLink>
         </div>

         <br />

         <div className="text-m bold-600 full pd-1">Cookie Policy</div>

         <div className="text-s full line-height-15">
         This website may use cookies and analytics tools to improve website functionality and understand how visitors engage with the site.
         </div>

         <div className="text-s full line-height-15">
         Cookies may be used for:
         </div>

         <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Website performance</li>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Analytics</li>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Embedded social media content</li>
            <li className='text-s pd-05' style={{ display: "list-item" }}>User preferences</li>
         </ul>

         <div className="text-s full line-height-15">
         You can control cookie settings through your browser preferences at any time.
         </div>

         <div className="text-s full line-height-15">
         By continuing to use this website, you consent to the use of cookies unless disabled through your browser settings.
         </div>

         <br />

         <div className="text-l bold-600 full pd-1">Booking Terms & Conditions</div>

         <div className="text-m bold-600 full pd-1">Training & Events</div>

         <div className="text-s full line-height-15">
         Bookings for training, events and professional learning activities are confirmed upon receipt of payment or written agreement.
         </div>

         <div className="text-s full line-height-15">
         Full payment terms will be outlined at the time of booking.
         </div>

         <br />

         <div className="text-m bold-600 full pd-1">Delegate Cancellation</div>

         <div className="text-s full line-height-15">
         If you are unable to attend a booked event or training:
         </div>

         <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Refunds are not normally available</li>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Substitute delegates may attend in your place with prior agreement</li>
            <li className='text-s pd-05' style={{ display: "list-item" }}>Transfers to alternative dates may be offered at discretion</li>
         </ul>

         <div className="text-s full line-height-15">
         Non-attendance does not remove responsibility for payment.
         </div>

         <br />

         <div className="text-m bold-600 full pd-1">Cancellation by Healing Young Hearts</div>

         <div className="text-s full line-height-15">
         Healing Young Hearts reserves the right to cancel or reschedule training or events where necessary.
         </div>

         <div className="text-s full line-height-15">
         In these circumstances:
         </div>

         <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
         <li className='text-s pd-05' style={{ display: "list-item" }}>An alternative date may be offered</li>
         <li className='text-s pd-05' style={{ display: "list-item" }}>Or a full refund provided</li>
         </ul>

         <div className="text-s full line-height-15">
         Healing Young Hearts accepts no responsibility for external costs incurred relating to cancellations.
         </div>

         <br />

         <div className="text-m bold-600 full pd-1">Consultancy & Bespoke Training Terms</div>

         <div className="text-s full line-height-15">
         Once consultancy or bespoke training dates are agreed, the following cancellation terms apply:
         </div>

         <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
         <li className='text-s pd-05' style={{ display: "list-item" }}>Cancellation within 5 working days: 100% fee payable</li>
         <li className='text-s pd-05' style={{ display: "list-item" }}>Cancellation within 6–15 working days: 50% fee payable</li>
         <li className='text-s pd-05' style={{ display: "list-item" }}>Cancellation within 16–30 working days: 35% fee payable</li>
         </ul>

         <div className="text-s full line-height-15">
         Where work has already commenced, fees may also reflect work completed, preparation time and associated project costs.
         </div>

         <div className="text-s full line-height-15">
         All cancellations must be confirmed in writing.
         </div>

         <br />

         <div className="text-m bold-600 full pd-1">Reflective Supervision Agreement</div>

         <div className="text-s full line-height-15">
         Reflective supervision provided through Healing Young Hearts is intended as a confidential, reflective and professionally supportive space.
         </div>

         <div className="text-s full line-height-15">
         Supervision is not therapy, crisis intervention or emergency mental health support.
         </div>

         <div className="text-s full line-height-15">
         Confidentiality will be respected except where:
         </div>

         <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
         <li className='text-s pd-05' style={{ display: "list-item" }}>Safeguarding concerns arise</li>
         <li className='text-s pd-05' style={{ display: "list-item" }}>There is risk of harm</li>
         <li className='text-s pd-05' style={{ display: "list-item" }}>Legal obligations require disclosure</li>
         </ul>

         <div className="text-s full line-height-15">
         Where concerns emerge relating to risk or safeguarding, these will be discussed openly and appropriate actions agreed in line with safeguarding responsibilities.
         </div>

         <div className="text-s full line-height-15">
         Healing Young Hearts works collaboratively with a network of highly experienced therapeutic practitioners and associates who provide supervision aligned with relational, trauma-informed and ethically grounded practice.
         </div>

         <br />

         <div className="text-m bold-600 full pd-1">Copyright Notice</div>

         <div className="text-s full line-height-15">
         © Healing Young Hearts Ltd. All rights reserved.
         </div>

         <div className="text-s full line-height-15">
         No part of this website or associated materials may be reproduced, distributed or stored without prior written permission from Healing Young Hearts Ltd.
         </div>
      </CustomSection>
      <Footer />
   </>)
}
