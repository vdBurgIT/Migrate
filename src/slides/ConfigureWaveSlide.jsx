import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './ConfigureWaveSlide.module.css'

export default function ConfigureWaveSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.configureWave}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 22</p>
          <h2><span className={styles.highlight}>Wave</span> configureren</h2>
          <p className={styles.subtitle}>
            Stel replicatie in voor de Hyper-V host
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.left}>
            <div className={styles.instructions}>
              <p>Voor een lift-and-shift migratie moeten we <strong>replicatie</strong> instellen voor de Hyper-V host.</p>
              <p>Configureer de wave-instellingen om replicatie van de UbuntuVM naar Azure in te schakelen.</p>
              <p><strong>Zorg ervoor dat je toegang verleent aan de MSI voordat je verdere stappen onderneemt.</strong></p>
            </div>
          </div>

          <div className={styles.right}>
            <img
              src="/ConfigureWave.png"
              alt="Configure Wave"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
