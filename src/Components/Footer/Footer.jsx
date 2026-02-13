import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.Footer}>
        <div>
            <img className={styles.ImageMuseum} src="/assets/footer/museum-logo footer.svg" alt="Museum logo" />
        </div>
    </div>
  )
}

export default Footer