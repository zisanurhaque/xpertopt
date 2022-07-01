import Header from '../../components/Header'
import Banner from '../../components/Banner/index'
import { pageHeader } from '../../components/Banner/data'
import CommonSec from '../../components/CommonSec/index'
import ServiceShortDesc from '../../components/ServiceDesc/allServiceShortDesc'
import TalkToUs from '../../components/TalkToUs'
import Footer from '../../components/Footer'
import commonSecData from '../../components/CommonSec/account-suspension'

const AccountSuspension = () => {
  return (
    <>
        <Header/>
        <Banner data={pageHeader[7]}/>
        <CommonSec data={commonSecData}/>
        <ServiceShortDesc/>
        <TalkToUs/>
        <Footer/>
    </>
  )
}

export default AccountSuspension