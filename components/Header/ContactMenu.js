import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const ContactMenu = () => {
  return (
    <>
        <div className='contact-menu'>
            <a href='tel:+8801723321714' className='contactNumber'>
              <FontAwesomeIcon icon={faPhone} />
            +880-1723-321-714
            </a>
            <a href='mailto:founder.xpertopt@gmail.com' className='contactBtn'>
              Contact Us
            </a>
        </div>
    </>
  )
}

export default ContactMenu