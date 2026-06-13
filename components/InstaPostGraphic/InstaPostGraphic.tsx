'use client'
import Link from 'next/link'
import './InstaPostGraphic.css'

type InstaPostGraphicProps = {
   postLink: string;
   imageLink: string;
}

export default function InstaPostGraphic ({ postLink, imageLink }: InstaPostGraphicProps) {
   return (
      <Link href={postLink} target='_blank' className='insta-post-graphic-link'>
         <div className='insta-post-graphic'>
            <img 
               src={imageLink}
               alt="insta post image"
            />
         </div>
      </Link>
   )
}
