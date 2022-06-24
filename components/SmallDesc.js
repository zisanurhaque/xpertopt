import React from 'react'
import Image from 'next/image'

const SmallDesc = () => {
  return (
    <>
        <div className='smallDesc'>
            <div className='contents'>
                <h1>Selling online with the right approach.<span>.</span></h1>
                <p>
                    We help brands build loyalty and trust in an industry that’s extremely cluttered and competitive. Our thought-provoking and customized strategies have allowed us to grow our brands to over $10 million in annual revenue in under 5 years!
                </p>

                <p>
                    We’ve taken all the things we learned, mistakes we’ve made, and trimmed the fat to create this effective marketing and brand building platform to clients of all sizes: solo-preneurs, partnerships, startups, local businesses and enterprises. We focus on straightforward true and tried methods to minimize costs and to ensure results.
                </p>
            </div>
            <div className='image'>
                <div className='top'>
                    <Image src={"/sec1logo2.svg"} alt='logo1' width="400px" height='400px'/>
                </div>
                <Image src={"/sec1.jpg"} alt='image' width="400px" height='268px'/>
                <div className='bottom'>
                    <Image src={"/sec1logo2.svg"} alt='logo2' width="400px" height='400px'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default SmallDesc