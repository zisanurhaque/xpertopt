import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='card'>
                <a href='/'>
                    <Image src={"/logo.png"} alt="XpertOpt" width={"150px"} height="35px"/>
                </a>
                <p>
                    Grow your brand with SI
                </p>
                <span>© 2022 | XpertOpt.com All Rights Reserved. <a href='https://zisanurhaque.herokuapp.com'>Powered By @Zisanur Haque</a></span>
            </div>

            <div className='card'>
                <h5>Services</h5>
                <a href='/'>Full Account Management</a>
                <a href='/'>Search Engine Optimization (SEO)</a>
                <a href='/'>Sponsored Ads Management (PPC)</a>
                <a href='/'>Product Launch</a>
                <a href='/'>Listing Optimization</a>
                <a href='/'>Brand Protection & Assistance</a>
                <a href='/'>Account Suspension Appeal & Reinstatement</a>
                <a href='/'>Reimbursement & Refund</a>
                <a href='/'>FBA Wholesale Partnership Program</a>
                <a href='/'>Amazon Demand-Side Platform Advertising</a>
            </div>

            <div className='card'>
                <h5>COMPANY</h5>
                <a href='/'>Why Seller Interactive?</a>
                <a href='/'>Our Story</a>
                <a href='/'>Our Team</a>
                <h5></h5>
                <h5></h5>
                <h5>RESOURCES</h5>
                <a href='/'>Testimonials</a>
                <a href='/'>Our Partners</a>
            </div>

            <div className='card'>
                <h5>CONTACT US</h5>
                <a href='mailto:marketing@xpertopt.com'>marketing@xpertopt.com</a>
                <a href='/'>+880 0171-2345-456</a>
                <a href='/'>
                    Jaldhaka, Nilphamari, Rangpur - 5400, Dhaka, Bangladesh
                </a>
            </div>
        </div>
    </>
  )
}

export default Footer