import React from 'react'
import styles from './MainHero.module.css'

const MainHero = () => {
  return (
    <div className={styles.Block}>
        <div className={styles.MainHeroTitle}>
            <p>
                let's find some <span className={styles.MainHeroTextArt}>art</span> here!
            </p>
        </div>

        <div className={styles.MainHeroSearchTextBlock}>
            <div className={styles.MainHeroTextBox}>
                <input placeholder='Search Art, Artist, Work...'></input>
            </div>

            <div>
                <img class={styles.SearchMark} src="/assets/Main Hero/search.png" alt="SearchLogo" />
            </div>
        </div>
    </div>
  )
}

export default MainHero