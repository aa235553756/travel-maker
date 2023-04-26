import React from 'react'
import TourCard from '@/common/components/card/TourCard'
import { TbMapSearch } from 'react-icons/tb'

export default function MoreJourney() {
  return (
    <div>
      <h2 className="flex items-center space-x-2 mb-4">
        <TbMapSearch className="text-xl" />
        <span className="text-xl">更多隨心所欲行程</span>
      </h2>
      <div className="flex flex-col space-y-5 mb-[100px] md:flex-row md:space-y-0 md:space-x-6 md:mb-[160px]">
        <TourCard
          tourName="好瘋狂熱血少年"
          countAttr={4}
          likes={100}
          isLike={true}
          showLike={true}
          creator={''}
          showCreator={false}
          imagesUrl={['/logo.png']}
        />
        <TourCard
          tourName="好瘋狂熱血少年"
          countAttr={4}
          likes={100}
          isLike={true}
          showLike={true}
          creator={''}
          showCreator={false}
          imagesUrl={['/logo.png']}
        />
        <div className="hidden lg:block">
          <TourCard
            tourName="好瘋狂熱血少年"
            countAttr={4}
            likes={100}
            isLike={true}
            showLike={true}
            creator={''}
            showCreator={false}
            imagesUrl={['/logo.png']}
          />
        </div>
      </div>
    </div>
  )
}
