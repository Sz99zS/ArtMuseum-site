import React from 'react'
import styles from './OtherWorks.module.css'
import ArtCard from '@/Components/ArtCard/ArtCard'

export const OtherWorks = () => {
  return (
    <div className={styles.ComponentOtherWorks}>
        <div className={styles.Textbox}>
            <div className={styles.Text1}>
                <p>Here some more</p>
            </div>
            <div className={styles.Text2}>
                <p>Other works for you</p>
            </div>
        </div>

        <div className={styles.Library}>
            <div className={styles.Row}>
                <ArtCard />
                <ArtCard />
                <ArtCard />
            </div>

            <div className={styles.Row}>
                <ArtCard />
                <ArtCard />
                <ArtCard />
            </div>

            <div className={styles.Row}>
                <ArtCard />
                <ArtCard />
                <ArtCard />
            </div>
        </div>
    </div>
  )
}