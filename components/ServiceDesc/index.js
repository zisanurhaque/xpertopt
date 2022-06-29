import React from 'react'
import Image from 'next/image'

const ServiceDesc = ({data}) => {
  return (
    <>
        <div className='serviceDesc'>
            {
              data.map((item) => (
                <div className='card' key={"item.title"}>
                    <Image src={item.image} alt={item.title} width={"50px"} height={"50px"}/>
                    <h6>{item.title}</h6>
                    <p>
                        {item.desc}
                    </p>
                </div>
              ))
            }
        </div>
    </>
  )
}

export default ServiceDesc