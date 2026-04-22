import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './CreateWaveUbuntuSlide.module.css'

export default function CreateWaveUbuntuSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.createWave}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 20</p>
          <h2><span className={styles.highlight}>Wave</span> aanmaken — Ubuntu</h2>
          <p className={styles.subtitle}>
            Groepeer de UbuntuVM in een migratiewave
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.left}>
            <div className={styles.instructions}>
              <p>Maak een migratie-<strong>wave</strong> aan voor de UbuntuVM-workload.</p>
              <p>Waves laten je workloads groeperen en hun migratievoortgang als batch bijhouden.</p>
            </div>
          </div>

          <div className={styles.right}>
            <img
              src="/CreateWave-Ubuntu.png"
              alt="Create Wave — Ubuntu"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
