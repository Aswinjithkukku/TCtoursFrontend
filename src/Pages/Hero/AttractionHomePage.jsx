import React from 'react'
import BlogSection from '../General/BlogSection'
import HeroSection from '../General/HeroSection'
import NearbySection from '../General/NearbySection'
import TopSellingSection from '../General/TopSellingSection'
import SpecialofferCardSection from '../General/SpecialofferCardSection'
import SubscribeSection from '../General/SubscribeSection'
import BestSellingSection from '../General/BestSellingSection'


function AttractionHomePage() {
  return (
    <div className='bg-soft md:space-y-10'>
      <HeroSection />
      <SpecialofferCardSection />
      <BestSellingSection />
      <TopSellingSection />
      <BlogSection />
      <NearbySection />
      <SubscribeSection />
    </div>
  )
}

export default AttractionHomePage