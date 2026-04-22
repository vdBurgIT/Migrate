import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './HyperVHostCredentialsSlide.module.css'

export default function HyperVHostCredentialsSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.hyperVHostCredentials}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 6</p>
          <h2>HyperV Host <span className={styles.highlight}>Credentials</span></h2>
          <p className={styles.subtitle}>
            Voeg de Hyper-V host-credentials toe zodat de appliance je omgeving kan detecteren
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.left}>
            <h3 className={styles.sectionTitle}>Credential toevoegen</h3>

            <div className={styles.fieldGroup}>
              <div className={styles.field}>
                <span className={styles.fieldLabel}>Brontype</span>
                <span className={styles.fieldValue}>Hyper-V Host/Cluster</span>
              </div>
              <div className={styles.field}>
                <span className={styles.fieldLabel}>Weergavenaam</span>
                <span className={styles.fieldValue}>Datacenter</span>
              </div>
              <div className={styles.field}>
                <span className={styles.fieldLabel}>Gebruikersnaam</span>
                <span className={styles.fieldValue}>azureuser</span>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <img
              src="/Hyperv-Host-Credentials.png"
              alt="Hyper-V Host Credentials configuration"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
