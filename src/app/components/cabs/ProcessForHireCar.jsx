import React from 'react'
import Image from 'next/image';

const ProcessForHireCar = () => {
  const process = [
    {
      title: "Step 1: Search",
      icon: "/images/pfch1.png",
      desc: "Enter your location and see what's available. From family friendly SUVs to luxury convertibles, youllget a great price on every type of hire car.",
    },
    {
        title:"Step 2: Compare",
        icon:"/images/pfch2.png",
        desc:"Compare rental cars on fuel policy, mileage,provider rating, flexible booking, cleanliness,customer service and more."
    },
    {
        title:"Step 3: Book",
        icon:"/images/pfch3.png",
        desc:"We compare car rental prices on 100s of sites foryou, so once you've found your ride, you'll beredirected to book with the provider, with no extra fees."
    }
  ];
  return (
    <div className='container mt-8'>
      <div className="flex flex-col justify-center items-center bg-[#EFF3F8] rounded-xl py-12 px-4 text-center">
        <h1 className='font-medium text-2xl '>Booking car hire in three simple Steps</h1>
        <div className="flex lg:flex-row flex-col  justify-between gap-8 mt-4">
          {process.map((item, index) =>(
            <div className="flex justify-center gap-[2px] items-center flex-col">
              <Image src={item.icon} width={170} height={170}/>
              <h3 className='font-medium text-xl'>{item.title}</h3>
              <p className='font-normal text-base'>{item.desc}</p>
               
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProcessForHireCar