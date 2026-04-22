import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './AppliancePrerequisitesSlide.module.css'

export default function AppliancePrerequisitesSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.appliancePrereqs}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 4</p>
          <h2>Appliance configureren: <span className={styles.highlight}>Bijwerken &amp; Registreren</span></h2>
          <p className={styles.subtitle}>
            Plak de projectsleutel, laat de appliance bijwerken en meld je aan bij Azure
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.left}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Plak de projectsleutel</h3>
                <p className={styles.stepDesc}>
                  Open de configuratiemanager van de appliance en plak de <strong>Azure Migrate-projectsleutel</strong> die je eerder hebt gekopieerd, klik dan op <strong>Verify</strong>
                </p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Wacht op automatische update</h3>
                <p className={styles.stepDesc}>
                  De appliance installeert de nieuwste updates automatisch — dit duurt een paar minuten. De browser ververst zichzelf wanneer dit klaar is.
                </p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Aanmelden bij Azure</h3>
                <p className={styles.stepDesc}>
                  Klik op <strong>Login</strong>, voer je Azure-accountgegevens in en wacht tot de registratie van de appliance is voltooid
                </p>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <img
              src="/appliance-prerequisites.png"
              alt="Appliance configuration manager — set up prerequisites"
              className={styles.screenshot}
            />
          </div>
        </div>

        <div className={styles.note}>
          <span className={styles.noteIcon}>⚠️</span>
          <p className={styles.noteText}>
            Houd de RDP-sessie naar de appliance <strong>open</strong> — je hebt deze nodig voor de volgende stappen. Sluit het niet.
          </p>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
