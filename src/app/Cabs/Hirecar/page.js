import CarhireBanner from '@/app/components/cabs/CarhireBanner'
import Faq from '@/app/components/cabs/Faq'
import PopularCarRentalCompanies from '@/app/components/cabs/PopularCarRentalCompanies'
import React from 'react'
import CarHireTabs from '@/app/components/cabs/CarHireTabs'
import CarCollection from '@/app/components/cabs/CarCollection'

const page = () => {
  return (
    <div>
        <CarhireBanner/>
        <CarHireTabs/>
        <CarCollection/>
        <PopularCarRentalCompanies/>
        <Faq/>
    </div>
  )
}

export default page