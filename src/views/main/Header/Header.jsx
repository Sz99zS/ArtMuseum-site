import React from 'react'
import styles from './Header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.LinkHome}>
        <Link href="/">
          <img className={styles.ImageMuseum} src="/assets/header/museum-logo header.svg" alt="Museum logo" />
        </Link>
      </div>

      <div>
        <div className={styles.LinkFavorites}>
          <Link href="/favorites" className={styles.LinkWrapper}>
            <div className={styles.Button}>
              <img className={styles.ImageBookmark} src="/assets/header/bookmark.png" alt="Bookmark logo" />
              <p className={styles.TextHeader}>Your favorites</p>
            </div>
          </Link>
        </div>
      </div>
    </div>


  )
}

export default Header