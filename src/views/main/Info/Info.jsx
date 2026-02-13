import React from 'react'
import styles from './Info.module.css'

const Info = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        
        {/* LEFT — IMAGE */}
        <div className={styles.imageBlock}>
          <img src="/assets/ourSpecialGallery/image 1.png" alt="Artwork" />
          <button className={styles.bookmarkBtn}>
            <img src="/assets/header/bookmark.png" alt="bookmark" />
          </button>
        </div>

        {/* RIGHT — INFO */}
        <div className={styles.infoBlock}>
          <h1 className={styles.title}>
            Charles V, bust length, holding a sword, facing right
          </h1>

          <div className={styles.artist}>
            <span className={styles.name}>Giovanni Britto</span>
            <span className={styles.dates}>1535–45</span>
          </div>

          <div className={styles.section}>
            <h2>Overview</h2>

            <div className={styles.meta}>
              <div>
                <p>Artist nationality: <span className={styles.Font}>German</span></p>
                
              </div>

              <div>
                <p>Dimensions Sheet: <span className={styles.Font}>19 3/8 × 13 11/16 in. (49.2 × 34.8 cm)</span></p>
              </div>

              <div>
                <p>Credit Line: <span className={styles.Font}>Rogers Fund, 1917</span></p>
              </div>

              <div>
                <p>Repository: <span className={styles.Font}>Metropolitan Museum of Art, New York, NY</span></p>
              </div>

              <div>
                <p>Status: <span className={styles.Font}>Public</span></p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Info