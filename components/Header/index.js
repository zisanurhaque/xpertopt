import Brand from './Brand'
import TopMenu from './TopMenu'
import MainMenu from './MainMenu'
import ContactMenu from './ContactMenu'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'

const Header = () => {

  const [menuToggle, setMenuToggle] = useState(false)

  useEffect(() => {
      window.addEventListener("scroll", () => {
        if(!window.scrollY < 1){
          document.querySelector('.sticky').style.cssText = `
            box-shadow: 0px 0px 5px 0px rgb(206, 206, 206);
            position: absolute;
            background: white;
          `
        }else{
          document.querySelector('.sticky').style.cssText = `
            box-shadow: unset;
            position: unset;
            background: none;
          `
        }
      })
  }, [])

  return (
    <>

      <Head>
        <title>XpertOpt</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="XpertOpt.com Is A Startup Digital Marketing & SEO Company" />
        <link rel="icon" type="image/x-icon" sizes="16x16" href="/favicon.ico"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"}/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900&display=swap" rel="stylesheet"/> 
      </Head>

        
        <div className='headerContainer'>

          <TopMenu/>

          <div className='header webHeader sticky'>
              <Brand/>
              <MainMenu/>
              <ContactMenu/>
          </div>

          {
            menuToggle ? 
              <div className='header'>
                <button className='toggler' onClick={() => setMenuToggle(false)}>
                  <FontAwesomeIcon icon={faClose} />
                </button>
                  <Brand/>
                  <MainMenu/>
                  <ContactMenu/>
              </div>:
              <div className="mobileHeader">
                  <div className='mobileMenu'>
                    <Brand/>
                    <button className='toggler' onClick={() => setMenuToggle(true)}>
                    <FontAwesomeIcon icon={faBars} /></button>
                  </div>
              </div>
          }
        </div>
        
    </>
  )
}

export default Header