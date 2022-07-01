import Header from '../../components/Header'
import Banner from '../../components/Banner/index'
import { pageHeader } from '../../components/Banner/data'
import CommonSec from '../../components/CommonSec/index'
import ServiceShortDesc from '../../components/ServiceDesc/allServiceShortDesc'
import TalkToUs from '../../components/TalkToUs'
import Footer from '../../components/Footer'
import commonSecData from '../../components/CommonSec/refund'
import Faq from '../../components/FAQ/index'
import faqData from '../../components/FAQ/refund'

const ReimbursementRefund = () => {
  return (
    <>
    
        <Header/>
        <Banner data={pageHeader[8]}/>
        <CommonSec data={commonSecData}/>
        <Faq data={faqData}/>
        <ServiceShortDesc/>
        <TalkToUs/>
        <Footer/>
    
    </>
  )
}

export default ReimbursementRefund