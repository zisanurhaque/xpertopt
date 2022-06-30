import React from 'react'

const Faq = ({data}) => {
  return (
    <>
        <div className='faq'>
            <h3>Frequently Asked Questions<span>.</span></h3>
            <div className='container'>
                {
                    data.map((item) => (
                        <div className='card' key={item.title}>
                            <h6><span>{">"}</span>{item.title}</h6>
                            {
                                item.desc?.map((p) => (
                                    <p key={p}>
                                        {p}
                                    </p>
                                ))
                            }
                            <ul>
                                {
                                    item.list.map((li) => (
                                        <li key={li}><span>{">"}</span>{li}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Faq