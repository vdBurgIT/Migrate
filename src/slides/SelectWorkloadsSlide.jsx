import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './SelectWorkloadsSlide.module.css'

export default function SelectWorkloadsSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.selectWorkloads}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 15</p>
          <h2><span className={styles.highlight}>Workloads</span> selecteren</h2>
          <p className={styles.subtitle}>
            Kies welke gedetecteerde workloads je wilt opnemen in de business case
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.left}>
            <div className={styles.instructions}>
              <p>Selecteer de workloads die je wilt opnemen in de business case.</p>
              <p><strong>Selecteer de az-migrate appliance niet</strong> — deze is ook gedetecteerd, maar we migreren deze niet.</p>
            </div>
          </div>

          <div className={styles.right}>
            <img
              src="/WorkloadsForBusinessCase.png"
              alt="Select workloads for business case"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
