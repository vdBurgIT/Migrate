import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './StartDiscoverySlide.module.css'

export default function StartDiscoverySlide({ index, project }) {
  return (
    <Slide index={index} className={styles.startDiscovery}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 11</p>
          <h2>Start <span className={styles.highlight}>Discovery</span></h2>
          <p className={styles.subtitle}>
            Controleer je lijst met credentials en start het detectieproces
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.left}>
            <div className={styles.instructions}>
              <div className={styles.instruction}>
                <div className={styles.stepNumber}>1</div>
                <p>Controleer of je een volledige lijst met geconfigureerde credentials hebt</p>
              </div>
              <div className={styles.instruction}>
                <div className={styles.stepNumber}>2</div>
                <p>Klik op de knop <strong>Start Discovery</strong></p>
              </div>
              <div className={styles.instruction}>
                <div className={styles.stepNumber}>3</div>
                <p>Controleer op de Hyper-V host (in de appliance) of de detectie is gestart</p>
              </div>
            </div>

            <div className={styles.callout}>
              <strong>Vanaf dit punt</strong> heb je de verbinding met de appliance VM niet meer nodig. Alle volgende stappen worden uitgevoerd in de Azure Portal en op de Hyper-V host.
            </div>
          </div>

          <div className={styles.right}>
            <img
              src="/StartDiscovery.png"
              alt="Start Discovery with credentials list"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
