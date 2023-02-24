import React from 'react'
import Playlist from '../images/playlist.svg'
import Camera from '../images/camera.svg'
import Hat from '../images/school-hat.svg'
import Card from './Card'
import ImageBanner from './ImageBanner'
import RedBar from './RedBar'
import ChevronButton from './ChevronButton'
import HexArt from '../images/hex-art.svg'
import { useNavigate } from 'react-router-dom'

export default function Home() {

  const nav = useNavigate();

  return (
    <>
      <ImageBanner image='https://www.talissadecor.com/wp-content/uploads/2016/09/products-2832.jpg' smallText='Rental Tough' bigText='High quality equipment for your fleet' />
      <div className='page-segment-container'>
        <div className='art-container'>
          <img className='hex-art' src={HexArt} alt='hex art'/>
          <img className='hex-art alt-position' src={HexArt} alt='hex art'/>
        </div>
        <div className='break-flow-container'>
          <div id='appfinder-quicklink'>
            <h2>Try our application solver tool</h2>
            <ChevronButton text='Click Here' isWhite={true} onClick={() => nav('/applicationfinder')} />
          </div>
        </div>
        <div className='page-segment'>
          <h2>Browse Machines By Category</h2>
          <div className='browse-quicklinks'>
            <Card text='CONCRETE GRINDERS' image='https://www.edcoinc.com/storage/products/TL-9%20Turbo-Lite%20Grinder%20Machine%20Thumbnail.jpg'/>
            <Card text='CRETE-PLANERS' image='https://www.edcoinc.com/storage/products/CPL-8%20Gas%20Machine%20Thumbnail.jpg'/>
            <Card text='CRETE-CRUSHERS' image='https://www.edcoinc.com/storage/products/CD-5%20Machine%20Thumbnail.jpg'/>
            <Card text='WALK BEHIND SAWS' image='https://www.edcoinc.com/storage/products/SK-14%20Gas%20Machine%20Thumbnail.jpg'/>
            <Card text='MASONRY SAWS' image='https://www.constructioncomplete.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/e/d/edc-bb14saw_2.jpg'/>
            <Card text='VACUUMS' image='https://edcostore.com/wp-content/uploads/2017/12/VAC200_wHEPA.jpg'/>
          </div>
          <ChevronButton text='More Categories' isWhite={false} />
        </div>
      </div>
      
      <ImageBanner image='https://images.squarespace-cdn.com/content/v1/6269861344c82f0cce6477ea/1651264866353-9IFJTSWZJB8BTPEDJSIL/Concrete_02_Interior_2020.jpg?format=2500w' smallText='In business since 1959' bigText='Learn about who we are' buttonText='About Us' />
      <div className='page-segment-container'>
        <div className='art-container'>
          <img className='hex-art' src={HexArt} alt='hex art'/>
          <img className='hex-art alt-position' src={HexArt} alt='hex art'/>
        </div>
        <div className='page-segment'>
          <div className='training-container'>
            <h2 className='training-text'>Check out our training courses and certifications</h2>
            <div className='training-red-bars-container'>
              <RedBar icon={Playlist} text='Browse our training library' clickable={true} />
              <RedBar icon={Camera} text='Learn about our machines' clickable={true} />
              <RedBar icon={Hat} text='Get certified with EDCO products' clickable={true} />
            </div>
          </div>
        </div>
      </div>
      <ImageBanner image='https://i0.wp.com/lupaband.co.uk/wp-content/uploads/2019/12/AdobeStock_305315398-scaled.jpeg?ssl=1' smallText='Become part of the family' bigText='See where you can find EDCO products near you' buttonText='Buy EDCO' />
    </>
  )
}
