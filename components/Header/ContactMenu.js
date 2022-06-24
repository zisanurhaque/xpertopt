import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const ContactMenu = () => {
  return (
    <>
        <div className='contact-menu'>
            <a href='/' className='contactNumber'>
              <FontAwesomeIcon icon={faPhone} />
            +880 0171-2345-456
            </a>
            <a href='mailto:marketing@xpertopt.com' className='contactBtn'>
              Contact Us
            </a>
        </div>
    </>
  )
}

export default ContactMenu