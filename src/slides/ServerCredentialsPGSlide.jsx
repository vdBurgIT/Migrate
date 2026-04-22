import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './ServerCredentialsPGSlide.module.css'

export default function ServerCredentialsPGSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.serverCredentialsPG}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 10</p>
          <h2>Server Credentials — <span className={styles.highlight}>PostgreSQL</span></h2>
          <p className={styles.subtitle}>
            Voeg de PostgreSQL-credentials toe voor gastdetectie
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.left}>
            <h3 className={styles.sectionTitle}>Credentials toevoegen</h3>

            <div className={styles.fieldGroup}>
              <div className={styles.field}>
                <span className={styles.fieldLabel}>Gebruikersnaam</span>
                <code className={styles.fieldCode}>webadmin</code>
              </div>
              <div className={styles.field}>
                <span className={styles.fieldLabel}>Wachtwoord</span>
                <code className={styles.fieldCode}>webadmin123</code>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <img
              src="/Credentials-PG.png"
              alt="Add credentials for PostgreSQL"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
