import React from 'react'
import Link from 'next/link'
import styles from './HeaderHome.module.css'

const HeaderHome = () => {
    return (
        <div className={styles.Header}>

            <img
                className={styles.ImageMuseum}
                src="/assets/header/museum-logo header.svg"
                alt="Museum logo"
            />

            <div className={styles.Buttons}>

                <Link href="/" className={styles.HomeButton}>
                    <img
                        className={styles.ImageHome}
                        src="/assets/HeaderHome/home.png"
                        alt="Home"
                    />
                    <p className={styles.TextHeader}>Home</p>
                </Link>

                <Link href="/favorites" className={styles.BookmarkButton}>
                    <img
                        className={styles.ImageBookmark}
                        src="/assets/header/bookmark.png"
                        alt="Favorites"
                    />
                    <p className={styles.TextHeader}>Your favourites</p>
                </Link>

            </div>
        </div>
    )
}

export default HeaderHome