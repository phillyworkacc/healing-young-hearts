import { websiteConfig } from "@/app/page";
import { formatMilliseconds } from "./date";

export function contactFormEmail (name: string, email: string, phone: string, message: string) {
   return `Hello Siobhán,

You've received a new message through the Contact Us form on your website.

Here are the details:

Name: ${name}
Email: ${email}
Phone (if provided): ${phone}

Message:
${message}

Submitted on: ${formatMilliseconds(Date.now())}

—
Website Notification
${websiteConfig.name}`;
}

export function bookingConsultationFormTemplate (name: string, email: string, phone: string, message: string) {
   return `Hello Siobhán,

You've received a new free consultation booking request through your website.

Here are the details:

Name: ${name}
Email: ${email}
Phone (if provided): ${phone}
Message / Reason for booking:
${message}

Submitted on: ${formatMilliseconds(Date.now())}

—
Website Notification
${websiteConfig.name}`;
}