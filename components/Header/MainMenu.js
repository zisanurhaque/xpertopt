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
                <a href='/'>
                    Our Services
                    <FontAwesomeIcon icon={faAngleDown} />
                </a>
                <div className='dropdown'>
                    <h4>
                        Amazon Services
                    </h4>
                    <div className='list'>
                        <Image src='/menu/fam.svg' alt='Full Account Management' width={logoWidth} height={logoHeight}/>
                        <a href='/'>Full Account Management</a>
                    </div>
                    <div className='list'>
                        <Image src='/menu/seo.svg' alt='Full Account Management' width={logoWidth} height={logoHeight}/>
                        <a href='/'>Search Engine Optimization</a>
                    </div>
                    <div className='list'>
                        <Image src='/menu/ppc.svg' alt='Full Account Management' width={logoWidth} height={logoHeight}/>
                        <a href='/'>Sponsored Ads Management</a>
                    </div>
                    <div className='list'>
                        <Image src='/menu/pl.svg' alt='Full Account Management' width={logoWidth} height={logoHeight}/>
                        <a href='/'>Product Launch</a>
                    </div>
                    <div className='list'>
                        <Image src='/menu/lo.svg' alt='Full Account Management' width={logoWidth} height={logoHeight}/>
                        <a href='/'>Listing Optimization</a>
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