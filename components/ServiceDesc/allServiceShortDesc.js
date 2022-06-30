import React from 'react'
import Image from 'next/image'
import serviceData from './serviceData'

const ServiceShortDesc = () => {
  return (
    <>
        <div className='serviceShortDesc'>
            <h3>Our Full Amazon Seller Account Management service covers <span>-</span></h3>
            <div className='container'>
                {
                    serviceData.map((item) => (
                        <div className='card' key={item.title}>
                            <div className='image'>
                                <Image src={item.image} alt={item.title} width={"50px"} height={"50px"}/>
                            </div>
                            <div className='contents'>
                                <h6>{item.title}</h6>
                                <p>
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default ServiceShortDesc