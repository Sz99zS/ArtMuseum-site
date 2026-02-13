import React from 'react'
import styles from './OurSpecialGallery.module.css'

const OurSpecialGallery = () => {
  return (
    <div>
        <div className={styles.OurSpecialGalleryTextBox}>
            <div className={styles.OurSpecialGalleryText1}>
            <p><span>Topics for you</span></p>
            </div>

            <div className={styles.OurSpecialGalleryText2}>
                <p>Our special gallery</p>
            </div>
        </div>




        {/* Сетка галереи */}
        <div className={styles.Gallery}>
          {/* Карточка 1 */}
            <div className={styles.ArtCard}>
                <div className={styles.ImagePlaceholder}>
                    <img src="/assets/OurSpecialGallery/image 1.png" alt="Заглушка" />
                        <div className={styles.CardInfo}>
                            <div>
                                <h3>Charles V, bust length...</h3>
                                <p className={styles.ArtistName}>Giovanni Britto</p>
                                <p className={styles.Status}>Public</p>
                            </div>
                            <div className={styles.ImageFavorite}>
                                <button className={styles.FavBtn}><img className={styles.ImageBookmark} src="/assets/header/bookmark.png" alt="Bookmark logo" /></button>
                            </div>
                        </div>
                </div>
            </div>
          {/* Карточка 2 */}
            <div className={styles.ArtCard}>
                <div className={styles.ImagePlaceholder}>
                    <img src="/assets/OurSpecialGallery/image 1.png" alt="Заглушка" />
                        <div className={styles.CardInfo}>
                            <div>
                                <h3>Charles V, bust length...</h3>
                                <p className={styles.ArtistName}>Giovanni Britto</p>
                                <p className={styles.Status}>Public</p>
                            </div>
                            <div className={styles.ImageFavorite}>
                                <button className={styles.FavBtn}><img className={styles.ImageBookmark} src="/assets/header/bookmark.png" alt="Bookmark logo" /></button>
                            </div>
                        </div>
                </div>
            </div>
          {/* Карточка 3 */}
            <div className={styles.ArtCard}>
                <div className={styles.ImagePlaceholder}>
                    <img src="/assets/OurSpecialGallery/image 1.png" alt="Заглушка" />
                        <div className={styles.CardInfo}>
                            <div>
                                <h3>Charles V, bust length...</h3>
                                <p className={styles.ArtistName}>Giovanni Britto</p>
                                <p className={styles.Status}>Public</p>
                            </div>
                            <div className={styles.ImageFavorite}>
                                <button className={styles.FavBtn}><img className={styles.ImageBookmark} src="/assets/header/bookmark.png" alt="Bookmark logo" /></button>
                            </div>
                        </div>
                </div>
            </div>

        </div>



        <div className={styles.PaginationPlaceholder}>
            <button className={styles.ActivePage}>1</button>
            <button className={styles.PageBtn}>2</button>
            <button className={styles.PageBtn}>3</button>
            <button className={styles.PageBtn}>4</button>
            <button className={styles.ArrowBtn}>&gt;</button>
        </div>
    </div>
  )
}

export default OurSpecialGallery