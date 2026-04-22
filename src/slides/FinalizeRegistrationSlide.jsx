import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './FinalizeRegistrationSlide.module.css'

export default function FinalizeRegistrationSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.finalizeRegistration}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 25</p>
          <h2>Registratie <span className={styles.highlight}>voltooien</span></h2>
          <p className={styles.subtitle}>
            Bevestig de geregistreerde Hyper-V hosts en ga verder
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.left}>
            <div className={styles.instructions}>
              <p>Controleer of de Hyper-V host nu succesvol is geregistreerd.</p>
              <p>Klik op de knop <strong>Finalize Registration</strong> om verder te gaan.</p>
              <p>Wacht op de melding dat de status <strong>Registration finalized</strong> is.</p>
            </div>
          </div>

          <div className={styles.right}>
            <img
              src="/RegisteredHyperVHosts.png"
              alt="Registered Hyper-V Hosts"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
