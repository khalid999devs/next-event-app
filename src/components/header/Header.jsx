import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <div>
        <div className='topNav'>
          <Image
            src={'/images/logo_black.png'}
            width={50}
            height={50}
            alt={'LOGO'}
          />
          <nav>
            <ul>
              <li>
                <Link href='/' legacyBehavior passHref>
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href='/events' legacyBehavior passHref>
                  <a>Events</a>
                </Link>
              </li>
              <li>
                <Link href='/about-us' legacyBehavior passHref>
                  <a>About us</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className='title'>Lorem ipsum dolor sit amet</p>
      </div>
    </header>
  )
}

export default Header
