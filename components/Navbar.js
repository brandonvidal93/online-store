import Image from "next/image";
import Link from 'next/link';

// STYLES
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className = { styles.content }>
      <Link href = '/'>
        <a>
          <Image
            src = "/img/logo.png"
            width = { 50 }
            height = { 50 }
            objectFit = 'contain'
            objectPosition = 'center' />
        </a>
      </Link>

      <ul className = { styles.content }>
        <li>
          <Link href = '/login'>
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link href = '/singup'>
            <a>Singup</a>
          </Link>
        </li>
        <li>
          <Link href = '/checkout'>
            <a>Checkout</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
