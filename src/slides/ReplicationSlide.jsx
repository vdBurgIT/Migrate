import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './ReplicationSlide.module.css'

export default function ReplicationSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.replication}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 27</p>
          <h2>Schijf <span className={styles.highlight}>Replicatie</span></h2>
          <p className={styles.subtitle}>
            Wacht op de Hyper-V schijfreplicatie naar Azure
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.left}>
            <div className={styles.instructions}>
              <p>Zodra de migratie is gestart, worden de Hyper-V schijf(ven) als eerste <strong>gerepliceerd naar Azure</strong>. Van die schijf wordt een Azure VM aangemaakt.</p>
              <p>Dit is een goed moment om een koffie te pakken en te wachten tot de replicatie klaar is. ☕</p>
            </div>
          </div>

          <div className={styles.right}>
            <img
              src="/Replication.png"
              alt="Replication in progress"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
