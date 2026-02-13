import React from 'react'
import styles from './ArtCard.module.css'
import Link from 'next/link'

const ArtCard = () => {
    return (
        <Link href="/art-info" className={styles.LinkWrapper}>
            <div className={styles.workCard}>
                <img className={styles.thumbnail} src="/assets/ourSpecialGallery/image 1.png" alt="/assets/OtherWorks/Group 95.png" />
                <div className={styles.workInfo}>
                    <span className={styles.title}>
                        Charles V, bust length...
                    </span>
                    <span className={styles.author}>
                        Giovanni Britto
                    </span>
                    <p className={styles.status}>
                        Public
                    </p>
                </div>
                <div className={styles.bookmarkBtn}>
                    <img src="/assets/header/bookmark.png" alt="bookmark" />
                </div>
            </div>
        </Link>
    )
}

export default ArtCard