import UmrahAllPackages from '@/app/components/UmrahAllPackages'
import UmrahPackageBanner from '@/app/components/UmrahPackageBanner'
import UmrahPackagesAbout from '@/app/components/UmrahPackagesAbout'
import React from 'react'

const page = () => {
    return (
        <div>
            <UmrahPackageBanner />
            <UmrahAllPackages />
            <UmrahPackagesAbout />
        </div>
    )
}

export default page