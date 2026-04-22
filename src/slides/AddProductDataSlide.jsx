import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './AddProductDataSlide.module.css'

export default function AddProductDataSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.addProductData}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Voorbereiding</p>
          <h2>Laten we wat <span className={styles.highlight}>Data</span> toevoegen</h2>
          <p className={styles.subtitle}>
            Voeg productdata toe aan de webapplicatie zodat we iets zinvols hebben om te migreren
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.left}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Open de webapplicatie</h3>
                <p className={styles.stepDesc}>
                  Open op de DC VM een <strong>nieuw tabblad</strong> in Edge en navigeer naar:
                </p>
                <code className={styles.code}>http://192.168.100.11:3000</code>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Voeg je eigen producten toe</h3>
                <p className={styles.stepDesc}>
                  Gebruik de productmanager om een paar eigen producten toe te voegen — deze data maakt later deel uit van de databasemigratie
                </p>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <img
              src="/ProductManager.png"
              alt="Product Manager web application"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
