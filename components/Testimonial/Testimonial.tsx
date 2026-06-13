'use client'
import "./Testimonial.css"

type TestimonialProps = {
   name: string;
   description: string | React.ReactNode;
}

export default function Testimonial ({ name, description }: TestimonialProps) {
   return (
      <div className="testimonial-card">
         <div className="quote-mark">❝</div>
         <div className="box full mt-3 pd-2">
            <div className="text-s line-height-19">{description}</div>
         </div>
         <div className="testimonial-rating">★★★★★</div>
         <div className="box full dfb column gap-5 mt-1">
            <div className="text-s full bold-700">{name}</div>
            <div className="text-xxs grey-4 full">Testimonial</div>
         </div>
      </div>
   )
}
