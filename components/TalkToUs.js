import React from 'react'
import Image from 'next/image'

const TalkToUs = () => {
  return (
    <>
        <div className='talkToUs'>
            <div className='contents'>
                <h1>
                    Start thriving and grow your brand with Seller Interactive.
                </h1>
                <p>
                    Use the power and influence of advertising to increase sales. Learn more about how you can benefit from our management expertise.
                </p>
                <a href='mailto:marketing@xpertopt.com'>Talk to us</a>
            </div>
            <Image src={"/talk.png"} alt="Talk To Us" width={"400px"} height="400px"/>
        </div>
    </>
  )
}

export default TalkToUs