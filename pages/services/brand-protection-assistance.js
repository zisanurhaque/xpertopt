import Header from '../../components/Header'
import Banner from '../../components/Banner/index'
import { pageHeader } from '../../components/Banner/data'
import ServiceDesc from '../../components/ServiceDesc/index'
import data from '../../components/ServiceDesc/brand-protection'
import CommonSec from '../../components/CommonSec/index'
import ServiceShortDesc from '../../components/ServiceDesc/allServiceShortDesc'
import TalkToUs from '../../components/TalkToUs'
import Footer from '../../components/Footer'
import commonSecData from '../../components/CommonSec/brand-protection'
import Faq from '../../components/FAQ/index'
import faqData from '../../components/FAQ/brand-protection'

const BrandProtection = () => {
  return (
    <>
        <Header/>
        <Banner data={pageHeader[6]}/>
        <ServiceDesc data={data}/>
        <CommonSec data={commonSecData}/>
        <Faq data={faqData}/>
        <ServiceShortDesc/>
        <TalkToUs/>
        <Footer/>
    </>
  )
}

export default BrandProtection