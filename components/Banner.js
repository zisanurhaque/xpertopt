import Image from 'next/image'

const Banner = () => {
  return (
    <div className='banner'>
        <div className='asset'>
          <Image src='/banner.svg' alt='Banner' height={"100%"} width={"100vh"}/>
        </div>
        <div className='contents'>
          <div className='texts'>
            <h1>Grow your brand with XpertOpt<span>.</span></h1>
            <p>Take your business to the next level, and let us help you thrive online.</p>
            <a href='mailto:marketing@xpertopt.com'>Schedule a free consultation</a>
          </div>
          <Image src={"/banner.jpg"} alt="Banner Image" width={"580px"} height={"400px"}/>
        </div>
    </div>
  )
}

export default Banner