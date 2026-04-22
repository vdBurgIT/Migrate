import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './WavePlanningSlide.module.css'

export default function WavePlanningSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.wavePlanning}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 21</p>
          <h2>Wave <span className={styles.highlight}>Planning</span></h2>
          <p className={styles.subtitle}>
            Configureer de migratiewave voor de Ubuntu-workload
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.left}>
            <div className={styles.instructions}>
              <p>Klik op <strong>"Ubuntu"</strong> om de wave te openen en te configureren.</p>
            </div>
          </div>

          <div className={styles.right}>
            <img
              src="/WavePlanning.png"
              alt="Wave Planning"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
