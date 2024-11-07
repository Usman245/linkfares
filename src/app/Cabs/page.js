import React from 'react'
import CabsHomePageBanner from '../components/cabs/CabsHomePageBanner'
import CarRentalDestinations from '../components/cabs/CarRentalDestinations'
import CarDeals from '../components/cabs/CarDeals'
import ProcessForHireCar from '../components/cabs/ProcessForHireCar'

const page = () => {
  return (
    <div className=' '>
        <CabsHomePageBanner/>
        <CarRentalDestinations/>
        <CarDeals/>
        <ProcessForHireCar/>
    </div>
  )
}

export default page