import Banner from '../components/Banner/index'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Partners from '../components/Partners'
import SmallDesc from '../components/SmallDesc'
import TalkToUs from '../components/TalkToUs'
import Testimonials from '../components/Testimonials'
import TrustedBy from '../components/TrustedBy'
import {pageHeader} from '../components/Banner/data'

export default function Home() {

  return (
    <div>
      <Header/>
      <div className='homeBanner'>
        <Banner data={pageHeader[0]}/>
      </div>
      <TrustedBy/>
      <Partners/>
      <SmallDesc/>
      <Testimonials/>
      <TalkToUs/>
      <Footer/>
    </div>
  )
}
