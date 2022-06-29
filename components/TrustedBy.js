import React from 'react'
import Image from 'next/image'

const TrustedBy = () => {
  return (
    <>
        <div className='trustedBy'>
            <h6>Trusted by brands around the world</h6>
            <div className='container'>
                <div className='logo'>
                    <Image 
                        src={"/trusted/logo1.webp"} 
                        alt="logo1" width={"120px"} 
                        height={"60px"} 
                    />
                </div>
                <div className='logo'>
                    <Image 
                        src={"/trusted/logo2.webp"} 
                        alt="logo2" width={"120px"} 
                        height={"60px"} 
                    />
                </div>
                <div className='logo'>
                    <Image 
                        src={"/trusted/logo3.webp"} 
                        alt="logo3" width={"120px"} 
                        height={"60px"} 
                    />
                </div>
                <div className='logo'>
                    <Image 
                        src={"/trusted/logo4.webp"} 
                        alt="logo4" width={"120px"} 
                        height={"60px"} 
                    />
                </div>
                <div className='logo'>
                    <Image 
                        src={"/trusted/logo5.webp"} 
                        alt="logo5" width={"120px"} 
                        height={"60px"} 
                    />
                </div>
                <div className='logo'>
                    <Image 
                        src={"/trusted/logo6.webp"} 
                        alt="logo6" width={"120px"} 
                        height={"60px"} 
                    />
                </div>
                <div className='logo'>
                    <Image 
                        src={"/trusted/logo7.webp"} 
                        alt="logo7" width={"120px"} 
                        height={"60px"} 
                    />
                </div>
                <div className='logo'>
                    <Image 
                        src={"/trusted/logo8.webp"} 
                        alt="logo8" width={"120px"} 
                        height={"60px"} 
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default TrustedBy