import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './ConfigureApplianceSlide.module.css'

export default function ConfigureApplianceSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.configureAppliance}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 2</p>
          <h2>Appliance configureren: <span className={styles.highlight}>Vereisten instellen</span></h2>
          <p className={styles.subtitle}>
            Genereer de appliance-sleutel in de Azure Portal voordat je de appliance configureert
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.left}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Open de Azure Portal op de DC VM</h3>
                <p className={styles.stepDesc}>
                  Open een browser in de RDP-sessie en ga naar <strong>portal.azure.com</strong>
                </p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Zoek het Azure Migrate-project</h3>
                <p className={styles.stepDesc}>
                  Ga naar resourcegroep <strong>rg-migrate-ws</strong> en open het Azure Migrate-project
                </p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Genereer de projectsleutel</h3>
                <ul className={styles.list}>
                  <li>Klik op <strong>Discover</strong> op de overzichtspagina</li>
                  <li>Selecteer <strong>Using appliance</strong> voor Azure</li>
                  <li>Kies <strong>Yes, with Hyper-V</strong></li>
                  <li>Naam de appliance: <strong>az-migrate</strong></li>
                  <li>Klik op <strong>Generate Key</strong> en kopieer de sleutel</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <img
              src="/discover-key.png"
              alt="Azure Migrate Discover — generate project key"
              className={styles.screenshot}
            />
          </div>
        </div>

        <div className={styles.note}>
          <span className={styles.noteIcon}>⚠️</span>
          <p className={styles.noteText}>
            Houd dit browservenster <strong>open</strong> — je hebt het later nog nodig.
          </p>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
