import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const TopMenu = () => {
  return (
    <>
        <div className='topmenu'>
            <div className='language'>
              <button className='langBtn'>
                  English 
                  <FontAwesomeIcon icon={faAngleDown} />
              </button>
              <div className='dropdown'>
                  <button>বাংলা</button>
              </div>
            </div>
        </div>
    </>
  )
}

export default TopMenu