import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './ServerCredentialsUbuntuSlide.module.css'

export default function ServerCredentialsUbuntuSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.serverCredentialsUbuntu}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 8</p>
          <h2>Server Credentials — <span className={styles.highlight}>Ubuntu</span></h2>
          <p className={styles.subtitle}>
            Geef servercredentials op voor gastdetectie van geïnstalleerde software, bestandsshares, afhankelijkheden en workloads
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.left}>
            <h3 className={styles.sectionTitle}>Credentials toevoegen</h3>

            <div className={styles.fieldGroup}>
              <div className={styles.field}>
                <span className={styles.fieldLabel}>Besturingssysteem</span>
                <span className={styles.fieldValue}>Linux</span>
              </div>
              <div className={styles.field}>
                <span className={styles.fieldLabel}>Gebruikersnaam</span>
                <code className={styles.fieldCode}>ubuntu</code>
              </div>
              <div className={styles.field}>
                <span className={styles.fieldLabel}>Wachtwoord</span>
                <code className={styles.fieldCode}>ubuntu</code>
              </div>
            </div>

            <p className={styles.hint}>
              Klik op <strong>Add more</strong> om de volgende set credentials toe te voegen
            </p>
          </div>

          <div className={styles.right}>
            <img
              src="/Credentials-ubuntu.png"
              alt="Add credentials for Ubuntu server"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
