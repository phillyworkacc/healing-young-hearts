'use client'
import CustomSection from '@/components/CustomSection/CustomSection'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header'
import ImageSection from '@/components/ImageSection/ImageSection'
import Spacing from '@/components/Spacing/Spacing'
import CustomLink from '@/components/Formatting'
import { websiteConfig } from '../page'
import Testimonial from '@/components/Testimonial/Testimonial'

export default function TestimonialsPage () {
   const customLinkProps = {
      target: "_blank",
      inline: true,
      colour: "accent-color" as const,
   }

   const testimonials = [
      {
         author: "GM",
         description: <>
            I recently attended ACEs training delivered by Siobhán, and I was genuinely impressed by both the content and the way it was delivered.

Siobhán’s pedagogy was thoughtful, engaging, and clearly grounded in a deep understanding of trauma-informed practice. Rather than simply communicating information to us, she invited us into the conversation, creating a learning environment that encouraged reflection, discussion, and meaningful participation throughout.

What stood out most was her ability to approach complex and sensitive themes in a way that felt accessible, supportive, and practically relevant to those working with young people.

I would highly recommend Siobhán to any school, college, or organisation looking to develop trauma-informed understanding and practice.
         </>
      },
      {
         author: "JD",
         description: <>
            Siobhan is an excellent Trauma Informed trainer. An effective communicator who shared her knowledge and understanding with our school and personalised it to our context. Highly recommended.
         </>
      },
      {
         author: "Anonymous",
         description: <>
            Thank you! Your guidance, feedback, and encouragement have genuinely shaped the direction I want to take in my career, and I’m incredibly grateful for your time and expertise.
         </>
      }
   ]

   return (<>
      <Header />
      <ImageSection image={websiteConfig.imageSectionsImg} backgroundOpacity={0.5}>
         <div className="box full dfb column gap-10 pd-2">
            <div className="text-xxb full text-left color-white bold-700">Testimonials</div>
         </div>
      </ImageSection>

      <CustomSection 
         textColor="black" bgColor="accent-color-20"
         customSectionConfig={{
            title: "", titleSize: "l", type: "version-1", align: "left"
         }}
      >
         <div className="text-l bold-600 full pd-1">Feedback & Impact</div>
         <div className="text-sm pd-05 full line-height-15">
            I am proud to work alongside schools, colleges and organisations committed to creating emotionally safe, relational and inclusive cultures.
         </div>

         <Spacing />

         <div className="box full dfb column gap-10">
            {testimonials.map((testimonial, index) => (
               <Testimonial key={index} name={testimonial.author} description={testimonial.description} />
            ))}
         </div>
      </CustomSection>

      <CustomSection 
         textColor="black" bgColor="accent-color-10"
         customSectionConfig={{
            title: "", titleSize: "l", type: "version-1", align: "left"
         }}
      >
         <div className="text-sm pd-05 full line-height-15">
            Proud to have worked as part of the London Violence Reduction Unit and <CustomLink href='https://www.nurtureuk.org/' {...customLinkProps}>nurtureuk</CustomLink> Nurturing London VRU Programme, supporting schools across London to develop nurturing, trauma-informed and relational approaches to inclusion, wellbeing and violence reduction. The programme supported over 24,000 children and young people across 13 boroughs, helping schools strengthen belonging, reduce exclusions and improve staff confidence in responding to SEMH needs.
         </div>
         <div className="text-sm pd-05 full line-height-15">
            The programme and its impact were later explored in The International Journal of Nurture in Education in Andrea Middleton's paper: The nurtureuk Violence Reduction Unit programme: Exploring a model for reducing school exclusions and instances of youth violence through nurture practice. 
         </div>
         <div className="text-m bold-600 full pd-1">Read more:</div>
         <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>
               <CustomLink href='https://www.nurtureuk.org/our-programmes/london-violence-reduction-programme/' {...customLinkProps}>London VRU Programme Impact</CustomLink>
            </li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Read the Journal Paper</li>
         </ul>
      </CustomSection>
      <Footer />
   </>)
}
