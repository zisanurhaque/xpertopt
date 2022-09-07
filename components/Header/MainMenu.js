import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const MainMenu = () => {

    const logoWidth = "30px"
    const logoHeight = "30px"
    
  return (
    <>
        <div className='menubar'>
            <li>
                <a>
                    Our Services
                    <FontAwesomeIcon icon={faAngleDown} />
                </a>
                <div className='dropdown'>
                    <div className='col'>
                        <h6>
                            Amazon Services
                        </h6>
                        <div className='list'>
                            <Image src='/menu/fam.svg' alt='Full Account Management' width={logoWidth} height={logoHeight}/>
                            <a href='/services/amazon-full-account-management'>Full Account Management</a>
                        </div>
                        <div className='list'>
                            <Image src='/menu/seo.svg' alt='Full Account Management' width={logoWidth} height={logoHeight}/>
                            <a href='/services/amazon-seo'>Search Engine Optimization (SEO)</a>
                        </div>
                        <div className='list'>
                            <Image src='/menu/ppc.svg' alt='Full Account Management' width={logoWidth} height={logoHeight}/>
                            <a href='/services/amazon-ppc-management'>Sponsored Ads Management (PPC)</a>
                        </div>
                        <div className='list'>
                            <Image src='/menu/pl.svg' alt='Full Account Management' width={logoWidth} height={logoHeight}/>
                            <a href='/services/amazon-product-launch'>Product Launch</a>
                        </div>
                        <div className='list'>
                            <Image src='/menu/asp.svg' alt='Full Account Management' width={logoWidth} height={logoHeight}/>
                            <a href='/services/account-suspension-appeal-reinstatement'>Unverified Review Post</a>
                        </div>
                        <div className='list'>
                            <Image src='/menu/lo.svg' alt='Full Account Management' width={logoWidth} height={logoHeight}/>
                            <a href='/services/listing-optimization'>Listing Optimization</a>
                        </div>
                        <div className='list'>
                            <Image src='/menu/bpa.svg' alt='Full Account Management' width={logoWidth} height={logoHeight}/>
                            <a href='/services/brand-protection-assistance'>Brand Protection & Assistance</a>
                        </div>
                        <div className='list'>
                            <Image src='/menu/asp.svg' alt='Full Account Management' width={logoWidth} height={logoHeight}/>
                            <a href='/services/account-suspension-appeal-reinstatement'>Account Suspention Appeal & Reinstatement</a>
                        </div>
                        <div className='list'>
                            <Image src='/menu/rf.svg' alt='Full Account Management' width={logoWidth} height={logoHeight}/>
                            <a href='/services/amazon-reimbursement-refund'>Reimbursement & Refund</a>
                        </div>
                        <div className='list'>
                            <Image src='/menu/wpp.svg' alt='Full Account Management' width={logoWidth} height={logoHeight}/>
                            <a href='/services/amazon-wholesale-partnership'>Wholesale Partnership Program</a>
                        </div>
                    </div>

                    <div className='col'>
                        <h6>
                            Walmart Services
                        </h6>
                        <div className='list'>
                            <Image src='/menu/fam.svg' alt='Full Account Management' width={logoWidth} height={logoHeight}/>
                            <a href='/services/amazon-full-account-management'>Full Account Management</a>
                        </div>
                        <div className='list'>
                            <Image src='/menu/seo.svg' alt='Full Account Management' width={logoWidth} height={logoHeight}/>
                            <a href='/services/amazon-seo'>Search Engine Optimization (SEO)</a>
                        </div>
                        <div className='list'>
                            <Image src='/menu/ppc.svg' alt='Full Account Management' width={logoWidth} height={logoHeight}/>
                            <a href='/services/amazon-ppc-management'>Sponsored Ads Management (PPC)</a>
                        </div>
                        <div className='list'>
                            <Image src='/menu/pl.svg' alt='Full Account Management' width={logoWidth} height={logoHeight}/>
                            <a href='/services/amazon-product-launch'>Product Launch</a>
                        </div>
                        <div className='list'>
                            <Image src='/menu/asp.svg' alt='Full Account Management' width={logoWidth} height={logoHeight}/>
                            <a href='/services/account-suspension-appeal-reinstatement'>Unverified Review Post</a>
                        </div>
                        <div className='list'>
                            <Image src='/menu/lo.svg' alt='Full Account Management' width={logoWidth} height={logoHeight}/>
                            <a href='/services/listing-optimization'>Listing Optimization</a>
                        </div>
                        <div className='list'>
                            <Image src='/menu/bpa.svg' alt='Full Account Management' width={logoWidth} height={logoHeight}/>
                            <a href='/services/brand-protection-assistance'>Brand Protection & Assistance</a>
                        </div>
                        <div className='list'>
                            <Image src='/menu/asp.svg' alt='Full Account Management' width={logoWidth} height={logoHeight}/>
                            <a href='/services/account-suspension-appeal-reinstatement'>Account Suspention Appeal & Reinstatement</a>
                        </div>
                        <div className='list'>
                            <Image src='/menu/rf.svg' alt='Full Account Management' width={logoWidth} height={logoHeight}/>
                            <a href='/services/amazon-reimbursement-refund'>Reimbursement & Refund</a>
                        </div>
                        <div className='list'>
                            <Image src='/menu/wpp.svg' alt='Full Account Management' width={logoWidth} height={logoHeight}/>
                            <a href='/services/amazon-wholesale-partnership'>Wholesale Partnership Program</a>
                        </div>
                    </div>

                    <div className='col'>
                        <h6>
                            Digital Marketing Services
                        </h6>
                        <div className='list'>
                            <Image src='/menu/ppc.svg' alt='Full Account Management' width={logoWidth} height={logoHeight}/>
                            <a href='/services/amazon-full-account-management'>Social Media Management</a>
                        </div>
                        <div className='list'>
                            <Image src='/menu/wpp.svg' alt='Full Account Management' width={logoWidth} height={logoHeight}/>
                            <a href='/services/amazon-seo'>Lead Genaration</a>
                        </div>
                        <div className='list'>
                            <Image src='/menu/ppc.svg' alt='Full Account Management' width={logoWidth} height={logoHeight}/>
                            <a href='/services/amazon-ppc-management'>Instagram Marketing</a>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <a href='/'>
                    About Us
                </a>
            </li>
            <li>
                <a href='/'>
                    Our Clients
                </a>
            </li>
            <li>
                <a href='/'>Our Partners</a>
            </li>
        </div>
    </>
  )
}

export default MainMenu