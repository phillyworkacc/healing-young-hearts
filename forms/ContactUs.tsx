'use client'
import { websiteConfig } from "@/app/page"
import { Logo } from "@/components/Icons/Icon"
import { useState } from "react";
import { toast } from "sonner";
import AwaitButton from "@/components/AwaitButton/AwaitButton";
import PhoneInput, { isValidUKMobile } from "@/components/PhoneInput";
import { sendMinwebEmail } from "@/app/actions/sendMail";
import { bookingConsultationFormTemplate, contactFormEmail } from "@/utils/emailTemplate";

export default function ContactUsForm ({ title }: { title?: string }) {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");
   const [message, setMessage] = useState("");

   const sendMessageBtn = async (callback: Function) => {
      if (name == "") {
         toast.error("Please enter your name");
         callback();
         return;
      }
      if (email == "") {
         toast.error("Please enter your email");
         callback();
         return;
      }
      if (phoneNumber == "") {
         toast.error("Please enter your phone number");
         callback();
         return;
      }
      if (!isValidUKMobile(phoneNumber)) {
         toast.error("Please enter a valid phone number");
         callback();
         return;
      }
      if (message == "") {
         toast.error("Please enter your message");
         callback();
         return;
      }
      await sendMinwebEmail(
         "Serenity Mental Health - Contact Form Submission",
         title
            ? bookingConsultationFormTemplate(name, email, phoneNumber, message)
            : contactFormEmail(name, email, phoneNumber, message)
      );
      toast.success(title ? "Booking Request Sent!" : "Message Sent!")
      setName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
      callback();
   }

   
   return (
      <div 
         className="box fit radius-10 dfb column gap-10 pd-3 pdx-3"
         style={{ backgroundColor: websiteConfig.formColors.background, color: websiteConfig.formColors.color, width: "100%", maxWidth: "700px" }}
      >
         <div className="box full dfb align-center gap-10">
            <Logo size={40} />
            <div className="text-xl fit bold-700 text-center">{title || "Contact Form"}</div>
         </div>
         <div className="box full pd-1 dfb column gap-8">
            <div className="text-sm full bold-600 text-left">Name *</div>
            <input
               type="text"
               className="xs full pd-15 pdx-2 radius-10"
               placeholder="John Doe"
               value={name}
               onChange={e => setName(e.target.value)}
            />
         </div>
         <div className="box full pd-1 dfb column gap-8">
            <div className="text-sm full bold-600 text-left">Email *</div>
            <input
               type="email"
               className="xs full pd-15 pdx-2 radius-10"
               placeholder="john@example.com"
               value={email}
               onChange={e => setEmail(e.target.value)}
            />
         </div>
         <div className="box full pd-1 dfb column gap-8">
            <div className="text-sm full bold-600 text-left">Phone Number *</div>
            <PhoneInput
               placeholder="Your Phone Number"
               className="xs full pd-15 pdx-2 radius-10"
               value={phoneNumber}
               onChange={v => setPhoneNumber(v)}
            />
         </div>
         <div className="box full pd-1 dfb column gap-8">
            <div className="text-sm full bold-600 text-left">Your Enquiry *</div>
            <textarea 
               className="xs full h-20 pd-15 pdx-2 radius-10" 
               placeholder="A message about your enquiry"
               value={message}
               onChange={e => setMessage(e.target.value)}
            />
         </div>
         <AwaitButton className="xs full pd-15 radius-10" onClick={sendMessageBtn}>
            Send Message
         </AwaitButton>
      </div>
   )
}
