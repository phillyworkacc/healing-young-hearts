'use client'
import CustomSection from '@/components/CustomSection/CustomSection'
import Header from '@/components/Header'
import Footer from '@/components/Footer/Footer'
import Link from 'next/link'
import Spacing from '@/components/Spacing/Spacing'
import { House } from 'lucide-react'

export default function NotFoundPage () {
   return (<>
      <Header />   
      <CustomSection
         textColor="black" bgColor="#ececec"
         customSectionConfig={{ title: "Page Not Found", type: "version-1", align: "left" }}
      >
         <div className="text-m pd-2">Head back to the home page</div>
         <Link href='/' className='text-sm fit'>
            <button className="sm pd-1 pdx-3"><House /> Home</button>
         </Link>
         <Spacing size={10} />
      </CustomSection>
      <Footer />
   </>)
}
