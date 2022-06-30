import React from 'react'
import Image from 'next/image'

const CommonSec = ({data}) => {
  return (
    <>
        <div className='commonSec'>
            <div className='contents'>
                <h3>{data.title}<span>.</span></h3>
                {
                    data.desc.map((item) => (
                        <p key={item}>{item}</p>
                    ))
                }
            </div>
            <div className='image'>
                <Image src={data.image} alt={data?.title} height={'270px'} width={'500px'}/>
            </div>
        </div>
    </>
  )
}

export default CommonSec