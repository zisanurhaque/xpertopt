import Image from 'next/image'

const Brand = () => {
  return (
    <>
        <div className='brand'>
            <a href='/'>
                <Image src='/logo.png' alt="XpertOpt" width={"150px"} height={"35px"}/>
            </a>
        </div>
    </>
  )
}

export default Brand