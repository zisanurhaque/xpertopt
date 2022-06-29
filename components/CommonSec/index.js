import React from 'react'
import Image from 'next/image'

const CommonSec = () => {
  return (
    <>
        <div className='commonSec'>
            <div className='contents'>
                <h3>Premium account management strategies that work<span>.</span></h3>
                <p>
                    As the largest e-commerce platform in the world, Amazon opens sellers to a wealth of opportunities for starting and developing a thriving business. With its expansive customer base, you'll always have an opportunity for turning a huge profit from selling your products. However, given the strict guidelines and standards of the marketplace, your account's strategic management is a must.

                    For this purpose, you can always rely on Seller Interactive's professional service. With us, your business is always in the best hands. We provide comprehensive management services focused on optimizing your operations. Our advanced tactics and customized approach are tailored to maximize your potential while accounting for the details on Amazon.
                </p>
            </div>
            <div className='image'>
                <Image src={'/sec1.webp'} alt={''} height={'400px'} width={'500px'}/>
            </div>
        </div>
    </>
  )
}

export default CommonSec