import React from 'react'

const Faq = () => {
  return (
    <>
        <div className='faq'>
            <h3>Frequently Asked Questions<span>.</span></h3>
            <div className='container'>
                <div className='card'>
                    <h6><span>{">"}</span>What is Amazon SEO?</h6>
                    <p>
                        Amazon SEO is the practice of ensuring that the content you have on your product listings is optimized for the marketplace. When done correctly, Amazon’s search algorithm can more efficiently pick up your listings and display them to the right shoppers.
                    </p>
                </div>
                <div className='card'>
                    <h6><span>{">"}</span>How to Improve SEO on Amazon?</h6>
                    <p>
                        Improving SEO on Amazon consists of various ranking factors. A great way to get started is by making sure that the below are practiced:
                    </p>
                    <ul>
                        <li><span>{">"}</span>Amazon product title optimization</li>
                        <li><span>{">"}</span>Including the right keywords for your product description</li>
                        <li><span>{">"}</span>Updated bullet points</li>
                        <li><span>{">"}</span>Relevant backend keywords</li>
                        <li><span>{">"}</span>Clear product images</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Faq