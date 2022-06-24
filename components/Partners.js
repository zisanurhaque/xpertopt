import Image from "next/image"

const Partners = () => {
  return (
    <>
        <div className='partners'>
            <h3>Our Partners</h3>
            <div className='container'>
                <div className='logo'>
                    <Image src={"/partners/adobe.webp"} alt={"logo"} width="120px" height="60px"/>
                </div>
                <div className='logo'>
                    <Image src={"/partners/amazon.webp"} alt={"logo"} width="120px" height="60px"/>
                </div>
                <div className='logo'>
                    <Image src={"/partners/facebookAds.webp"} alt={"logo"} width="120px" height="60px"/>
                </div>
                <div className='logo'>
                    <Image src={"/partners/amazonAd.webp"} alt={"logo"} width="120px" height="60px"/>
                </div>
                <div className='logo'>
                    <Image src={"/partners/google.webp"} alt={"logo"} width="120px" height="60px"/>
                </div>
                <div className='logo'>
                    <Image src={"/partners/walmart.webp"} alt={"logo"} width="120px" height="60px"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Partners