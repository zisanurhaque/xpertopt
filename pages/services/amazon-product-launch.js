import React from 'react'
import Header from '../../components/Header/index'
import Banner from '../../components/Banner/index'
import { pageHeader } from '../../components/Banner/data'
import CommonSec from '../../components/CommonSec/index'
import Partners from '../../components/Partners'
import TalkToUs from '../../components/TalkToUs'
import Footer from '../../components/Footer'
import commonSecData from '../../components/CommonSec/product-launch'

const ProductLaunch = () => {
  return (
    <>
        <Header/>
        <Banner data={pageHeader[4]}/>
        <CommonSec data={commonSecData}/>
        <Partners/>
        <TalkToUs/>
        <Footer/>
    </>
  )
}

export default ProductLaunch