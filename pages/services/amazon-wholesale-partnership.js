import Header from '../../components/Header'
import Banner from '../../components/Banner/index'
import { pageHeader } from '../../components/Banner/data'
import CommonSec from '../../components/CommonSec/index'
import Faq from '../../components/FAQ/index'
import faqData from '../../components/FAQ/wholesale'
import TalkToUs from '../../components/TalkToUs'
import Footer from '../../components/Footer'
import commonSecData from '../../components/CommonSec/wholesale'

const WholesaleProgram = () => {
  return (
    <>
        <Header/>
        <Banner data={pageHeader[9]}/>
        <CommonSec data={commonSecData}/>
        <Faq data={faqData}/>
        <TalkToUs/>
        <Footer/>
    </>
  )
}

export default WholesaleProgram