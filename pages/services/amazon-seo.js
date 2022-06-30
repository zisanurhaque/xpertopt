import React from 'react'
import Header from '../../components/Header/index'
import Banner from '../../components/Banner/index'
import { pageHeader } from '../../components/Banner/data'
import data from '../../components/ServiceDesc/amazon-seo'
import ServiceDesc from '../../components/ServiceDesc/index'
import CommonSec from '../../components/CommonSec/index'
import Partner from '../../components/Partners'
import TalkToUs from '../../components/TalkToUs'
import Footer from '../../components/Footer'
import Faq from '../../components/FAQ'

const AmazonSeo = () => {
  return (
    <>
      <Header/>
      <Banner data={pageHeader[2]}/>
      <ServiceDesc data={data}/>
      <CommonSec/>
      <Faq/>
      <TalkToUs/>
      <Partner/>
      <Footer/>
    </>
  )
}

export default AmazonSeo