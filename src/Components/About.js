import React from 'react'
import ImageBanner from './ImageBanner'
import HexArt from '../images/hex-art.svg'
import Hexs from '../images/hex-row.svg'


export default function About() {
  return (
    <>
      <ImageBanner smallText='About Us' bigText='Our History, Beliefs, and Ambitions' image='https://media.architecturaldigest.com/photos/5ab291792ed63a101d561dba/3:2/w_2910,h_1940,c_limit/305_CP_1705_720_HC.jpg'/>
      <article className='about-segment'>
        <h1>Our History</h1>
        <p>
          In 1959, rental store employees Leo Swan and Ed Harding noted that their customers had reoccurring problems when resurfacing uneven concrete floors.  At that time, the ways to level and smooth concrete surfaces were limited to one’s hands or crudely modified buffing machines.  To help their customers, the budding entrepreneurs created the modern day concrete floor grinder.  While this lone grinder was only intended to satisfy their current clientele, news of its existence spread, and wait times for the grinder swelled.  Eventually, with this grinder as their cornerstone, Leo and Ed founded Equipment Development Company, or EDCO –a manufacturer of “Rental-Tough” products.  Today, the Swan and Harding families own and operate EDCO, offering an array of products.
        </p>
      <img src={Hexs} alt='hex art' />
      <h1>What We Believe</h1>
        <p>
          We believe in Training.  We always provide the knowledge needed to be successful with EDCO products.  We are trainers before sellers. We believe in Quality & Safety.  To ensure both we practice LEAN Manufacturing and create our products inside one modern facility in historic Frederick, Maryland, USA. We believe in Technology.  EDCO invests in both manufacturing and training technology. From Laser Fabricating to Powder Coating to CNC Machining, our facility contains the latest manufacturing equipment and software.  From YouTube to Twitter to Webinars, and QRCs, we love web-based training technology. We believe in American Manufacturing.  We say EDCO products “Stayed In America”.  While other manufacturers move over seas and back when convenient, we believe in the importance of staying home and working smarter.  EDCO’s commitment to American manufacturing is unwavering.
        </p>
      <img src={Hexs} alt='hex art' />
      <h1>What Keeps Us Up At Night</h1>
      <p>
        Everyone at EDCO understands we don’t exist without our customers.  EDCO and EDCO Fabrication customers deserve safe, long-lasting products and our help making them successful. We make sure all questions are answered. Some companies just say they answer all inquiries, we actually do. Test us!
      </p>
      <img src={Hexs} alt='hex art' />
      <h1>Who Do We Want To Be</h1>
      <p className='last-about-para'>
        We want to be our customers’ most trusted vendor. We want to be the leader.  We strive to be ahead of the curve and create. We want to be proud
      </p>
      <div className='art-container'>
        <img className='hex-art' src={HexArt} alt='hex art'/>
        <img className='hex-art alt-position' src={HexArt} alt='hex art'/>
      </div> 
      </article>
    </>
  )
}
