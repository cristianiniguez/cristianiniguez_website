'use client'

import Link from 'next/link'
import clsx from 'clsx'

import Navbar from './Navbar'
import useScroll from '../hooks/useScroll'
import styles from '../styles/components/Header.module.scss'

const Header = () => {
  const scroll = useScroll()

  return (
    <header
      className={clsx(styles.header, {
        [styles['header--black']]: scroll > 100
      })}
    >
      <Link className={styles.header__link} href="/">
        <p className={styles.header__logo}>CI</p>
      </Link>
      <Navbar />
    </header>
  )
}

export default Header
