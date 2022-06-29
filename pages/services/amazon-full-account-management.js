import Header from '../../components/Header'
import Banner from '../../components/Banner/index'
import { pageHeader } from '../../components/Banner/data'
import ServiceDesc from '../../components/ServiceDesc/index'
import data from '../../components/ServiceDesc/account-management'
import CommonSec from '../../components/CommonSec/index'
import ServiceShortDesc from '../../components/ServiceDesc/serviceShortDesc'
import TalkToUs from '../../components/TalkToUs'
import Footer from '../../components/Footer'

const AccountManagement = () => {
  return (
    <>
        <Header/>
        <Banner data={pageHeader[1]}/>
        <ServiceDesc data={data}/>
        <CommonSec/>
        <ServiceShortDesc/>
        <TalkToUs/>
        <Footer/>
    </>
  )
}

export default AccountManagement