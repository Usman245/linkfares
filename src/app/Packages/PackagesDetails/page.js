"use client"
import PackagesDetailBanner from "@/app/components/PackagesDetailBanner"
import PackagesDetailCard from "@/app/components/PackagesDetailCard"
import PackagesDetailMiniBanner from "@/app/components/PackagesDetailMiniBanner"
import PackagesFilter from "@/app/components/PackagesFilters"


const page = () => {
    return (
        <div>
            <PackagesDetailBanner />
            <PackagesDetailMiniBanner />
            <div className="container w-full flex gap-4">
                <div className="xs:hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex 2xl:w-2/6 xl:w-2/6 lg:w-2/6">
                    <PackagesFilter />
                </div>
                <PackagesDetailCard />
            </div>
        </div>
    )
}

export default page