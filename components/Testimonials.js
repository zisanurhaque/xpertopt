import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const Testimonials = () => {

  return (
    <>
        <div className='testimonials'>
            <h1>Testimonials<span>.</span></h1>
            <div className='container'>
                <Carousel 
                    infiniteLoop={true} 
                    autoPlay={true}
                    interval={2000}
                >
                    <div className='card'>
                        <h2>"Working with Seller Interactive has been a refreshing experience"</h2>
                        <p>
                            "Working with Seller Interactive has been a refreshing experience. Mohamed, has taken the project and owned it from start to finish. He has communicated clearly, always been on time and delivered to our expectations. Most importantly, they have delivered on month over month sales growth in a short time frame through Amazon. We will continue to work with SI and their talented team for the future."                        </p>
                        <div className='details'>
                            <div className='logo'>
                                <Image src={"/testimonials/adobe.png"} alt="logo" width={"120px"} height="60px"/>
                            </div>
                            <h4>Ioanna Wildeg</h4>
                            <p>Director of Marketing, SoLo Nutrition</p>
                        </div>
                    </div>
                    <div className='card'>
                        <h2>"An all-star solution!"</h2>
                        <p>
                            "From the moment we started together, I was assigned very skilled project manager who took the time to understand the status of my business, and my goals going forward. Several calls and e-mails later we had an agreeable strategy… and budget. In very short order, my Amazon presence was refreshed and testing of our strategy had commenced... I am 100% delighted."
                        </p>
                        <div className='details'>
                            <div className='logo'>
                                <Image src={"/testimonials/amazon.png"} alt="logo" width={"120px"} height="60px"/>
                            </div>
                            <h4>Skip Lei</h4>
                            <p>Owner, TriBella LLC</p>
                        </div>
                    </div>
                    <div className='card'>
                        <h2>"The team at Seller Interactive know their stuff!"</h2>
                        <p>
                            "Our account team at Seller Interactive has been really great: they’re so quick to respond when we need new images or help to troubleshoot our Amazon listings. I love that they do the write-ups and A+ content focused on a few keywords that we can then bid aggressively on with Sponsored Products. I love the look of the images - they’re so much more professional and creative than what we could come up with ourselves. I think it’s really helped with conversions and gives customers confidence in our brand."
                        </p>
                        <div className='details'>
                            <div className='logo'>
                                <Image src={"/testimonials/adobe.png"} alt="logo" width={"120px"} height="60px"/>
                            </div>
                            <h4>Caeser Wong</h4>
                            <p>Owner, Gator Cable</p>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    </>
  )
}

export default Testimonials