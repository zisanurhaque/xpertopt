import Image from 'next/image'

const Banner = ({data}) => {
  return (
    <div className='banner'>
        <div className='asset'>
          <Image src='/banner.svg' alt='Banner' height={"100%"} width={"100vh"}/>
        </div>
        <div className='contents'>
          <div className='texts'>
            <h1>{data.title}<span>.</span></h1>
            <p>{data.desc}</p>
            <a href={data.link}>{data.linkTitle}</a>
          </div>
          <Image src={data.image} alt={data.title} width={"550px"} height={"400px"}/>
        </div>
    </div>
  )
}

export default Banner