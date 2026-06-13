'use client'
import CustomSection from '@/components/CustomSection/CustomSection'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header'
import ImageSection from '@/components/ImageSection/ImageSection'
import CustomLink from '@/components/Formatting'
import Spacing from '@/components/Spacing/Spacing'
import { websiteConfig } from '../page'
import { Instagram } from 'lucide-react'
import Link from 'next/link'
import InstaPostGraphic from '@/components/InstaPostGraphic/InstaPostGraphic'

export default function ResourcesPage () {
   const customLinkProps = {
      target: "_blank",
      inline: true,
      colour: "accent-color" as const,
   }

   const instaPosts = [
      {
         postLink: "https://www.instagram.com/p/DZg5Gxcimvy/",
         imageLink: "https://scontent-lhr6-2.cdninstagram.com/v/t51.82787-15/724239105_17930352687320877_2998083722937624069_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=MzkxODM4MjgyOTg3MjUwNzg5MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTI1NC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=Znw2_iUXC9YQ7kNvwHo0p4-&_nc_oc=AdpyuLguOJyl5tOpbPZpEnqYtbzpcCNB6Lj_pGUk4fj_PgCmj1J_pqNlqfNHQbV7UfLSHZLeemK6Dk6ofqMfyusg&_nc_zt=23&_nc_ht=scontent-lhr6-2.cdninstagram.com&_nc_gid=bhb7rP_mbkk3BIMdZnTPsA&_nc_ss=7b6a8&oh=00_Af-64Ld9r6Ypvbkkvv_yNjEfmhicQ9rbcLsYT47tvwy1uw&oe=6A332EA5"
      },
      {
         postLink: "https://www.instagram.com/p/DZdF9lyCpeH/",
         imageLink: "https://scontent-lhr8-1.cdninstagram.com/v/t51.82787-15/721757604_17930144205320877_4390346916795641906_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=MzkxNzMxMzQ3MzU3MDgzODQwNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTI1NC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=_2dbsH1P-icQ7kNvwHrFAXN&_nc_oc=AdrtoPHSdwurBwnATdLvyci7zNn448xBupZ7xblBTL3M9ilXFATnUHDllAnFBKk0UkVGFOUZeJhCgz-uCtI1YPQf&_nc_zt=23&_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_gid=bhb7rP_mbkk3BIMdZnTPsA&_nc_ss=7b6a8&oh=00_Af_bZoCcBS7CxyEivhqiCN5K6synGAoNf-RHtBSBnhOMVA&oe=6A332B54"
      },
      {
         postLink: "https://www.instagram.com/p/DZZtbuNCov5/?img_index=1",
         imageLink: "https://scontent-lhr8-1.cdninstagram.com/v/t51.82787-15/720259096_17929905453320877_1811129633983805583_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=MzkxNjM2MTEzNjE5NDg4NTY5NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTI1NC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=GOwnAiYmA9UQ7kNvwEOJZmx&_nc_oc=AdqxtgfDIxlywkb8XjfSUj6RKx-_RL3cJwzXDoyaR1Nmi98klBe9MnRr51nrwYy2ZxDoW0O1Ndq77z4IJ9ib-sjB&_nc_zt=23&_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_gid=bhb7rP_mbkk3BIMdZnTPsA&_nc_ss=7b6a8&oh=00_Af-TyxTZMUQtyzhoJHftwgK11bAFiH4Ms--r-yrf2aV1-Q&oe=6A33361B"
      },
      {
         postLink: "https://www.instagram.com/p/DZX_CzlkSeZ/",
         imageLink: "https://scontent-lhr6-1.cdninstagram.com/v/t51.82787-15/721463401_17929815105320877_4671913875558581190_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzkxNTg3NTY3MDc4MjE5MTUxMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTI1NC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=rEPSrKTuQx0Q7kNvwG7xy6X&_nc_oc=AdqgtZu-QcLD_T4fmZCm67Aez_-fS-hf60ia54lpBo8cFH8XuLJCy1U44_lR_hKs4MJKPFW5yZi5geXXquvZF4Zf&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lhr6-1.cdninstagram.com&_nc_gid=QFmvB7Tek6A6Yl3Ku8c0PA&_nc_ss=7a22e&oh=00_Af8ze1s_W8Ey-U25gS6oCmupXbx8c8DApkQYZcTCIQCjaw&oe=6A3321E1"
      }
   ]

   return (<>
      <Header />
      <ImageSection image={websiteConfig.imageSectionsImg} backgroundOpacity={0.5}>
         <div className="box full dfb column gap-10 pd-2">
            <div className="text-xxb full text-left color-white bold-700">Resources</div>
         </div>
      </ImageSection>

      <CustomSection 
         textColor="black" bgColor="accent-color-20"
         customSectionConfig={{
            title: "", titleSize: "l", type: "version-1", align: "left"
         }}
      >
         <div className="text-l bold-600 full pd-1">Resources & Recommended Reading</div>
         <div className="text-sm pd-05 full line-height-15">
            I share articles, reflections, evidence-informed resources and practical guidance exploring trauma-informed practice, belonging, neurodiversity, wellbeing and relational approaches in education.
         </div>

         <Spacing />

         <div className="text-m bold-600 full pd-1">This section will include:</div>
         <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Articles & Insights</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Blogs & Reflections</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Downloadable Resources</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Research & Evidence</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Podcast & Media Features</li>
            <li className='text-sm pd-1' style={{ display: "list-item" }}>Recommended Reading</li>
         </ul>
         <div className="text-sm pd-1 mt-1 full line-height-15">
            Browse my curated professional reading recommendations through my affiliate . <CustomLink href='https://uk.bookshop.org/shop/HYH' {...customLinkProps}>Bookshop.org Store</CustomLink>.
         </div>
      </CustomSection>

      <CustomSection 
         textColor="black" bgColor="accent-color-20"
         customSectionConfig={{ title: "Our Instagram", titleSize: "l", type: "version-1", align: "left" }}
      >
         <div className="box full dfb wrap gap-10">
            {instaPosts.map((instaPost, index) => (
               <InstaPostGraphic
                  key={index}
                  imageLink={instaPost.imageLink}
                  postLink={instaPost.postLink}
               />
            ))}
         </div>
         <div className="box full dfb column gap-10 mt-1">
            <Link href={'https://www.instagram.com/healing_young_hearts/'} target='_blank' className='box fit'>
               <button className="xs pd-13 full mw-400"><Instagram size={20} /> Visit our Instagram</button>
            </Link>
         </div>
      </CustomSection>

      <Footer />  
   </>)
}
