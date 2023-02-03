import React from 'react'
import HomeBanner from '../images/concrete-1.jpg'
import HexArt from '../images/hex-art.svg'
import Card from './Card'
import ImageBanner from './ImageBanner'

export default function Home() {
  return (
    <main>
      <ImageBanner image={HomeBanner} smallText='Rental Tough' bigText='High quality equipment for your fleet' />
      <div id='appfinder-quicklink'>
          <h2>Try our application solver tool</h2>
          <button className='white-button'>Click Here</button>
        </div>
      <div id='page-segment'>
        <h2>Browse Machines By Category</h2>
        <div className='browse-quicklinks'>
          <Card text='CONCRETE GRINDERS' image='https://www.edcoinc.com/storage/products/TL-9%20Turbo-Lite%20Grinder%20Machine%20Thumbnail.jpg'/>
          <Card text='WALK BEHIND SAWS' image='https://www.edcoinc.com/storage/products/SK-14%20Gas%20Machine%20Thumbnail.jpg'/>
          <Card text='MASONRY SAWS' image='https://www.constructioncomplete.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/e/d/edc-bb14saw_2.jpg'/>
          <Card text='VACUUMS' image='https://edcostore.com/wp-content/uploads/2017/12/VAC200_wHEPA.jpg'/>
        </div>

        <button className='red-button'>More Categories</button>
      </div>
      <ImageBanner image='https://hips.hearstapps.com/hmg-prod/images/concrete-wall-royalty-free-image-1572896179.jpg' smallText='In business since 1959' bigText='Learn about our mission' />
    </main>
  )
}
