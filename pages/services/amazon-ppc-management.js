import React from 'react'
import Header from '../../components/Header/index'
import Banner from '../../components/Banner/index'
import { pageHeader } from '../../components/Banner/data'
import CommonSec from '../../components/CommonSec/index'
import Faq from '../../components/FAQ/index'
import faqData from '../../components/FAQ/ppc'
import Partners from '../../components/Partners'
import TalkToUs from '../../components/TalkToUs'
import Footer from '../../components/Footer'
import commonSecData from '../../components/CommonSec/ppc'

const PpcManagement = () => {
  return (
    <>
        <Header/>
        <Banner data={pageHeader[3]}/>
        <CommonSec data={commonSecData}/>
        <Faq data={faqData}/>
        <Partners/>
        <TalkToUs/>
        <Footer/>
    </>
  )
}

export default PpcManagement