import ArtCard from '@/Components/ArtCard/ArtCard'
import styles from './Favorites.module.css'
import React from 'react'

const Favorites = () => {
    return (
        <div>
            <div className={styles.text}>
                <h1>
                    <span className={styles.top}>Here Are Your</span>

                    <span className={styles.bottom}>
                        <img
                            src="/assets/Favorites/BigBookmark.png"
                            alt="bookmark"
                            className={styles.icon} />
                        Favorites
                    </span>
                </h1>
            </div>
            <div>
                <div className={styles.FavoritesListHeader}>
                    <p>Saved by you</p>
                    <p>Your favorites list</p>
                </div>
                <div className={styles.FavoritesList}>
                    <ArtCard />
                    <ArtCard />
                    <ArtCard />
                    <ArtCard />
                    <ArtCard />
                    <ArtCard />
                    <ArtCard />
                    <ArtCard />
                    <ArtCard />
                    <ArtCard />
                    <ArtCard />
                    <ArtCard />
                    <ArtCard />
                    <ArtCard />
                    <ArtCard />
                    <ArtCard />
                    <ArtCard />
                    <ArtCard />
                </div>
            </div>
        </div>
    )
}

export default Favorites