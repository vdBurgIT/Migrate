import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './ReviewAssessmentLiftShiftSlide.module.css'

export default function ReviewAssessmentLiftShiftSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.reviewAssessment}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 19</p>
          <h2>Assessment bekijken — <span className={styles.highlight}>Lift &amp; Shift</span></h2>
          <p className={styles.subtitle}>
            Verken de assessment voor de UbuntuVM en maak een migratiewave aan
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.left}>
            <div className={styles.instructions}>
              <p>Verken de assessment voor deze enkele VM en let op het verschil. De assessment heeft al besloten dat deze workload een <strong>lift-and-shift kandidaat</strong> is.</p>
              <p>Je kunt een <strong>wave</strong> aanmaken vanuit deze stap om de workload te groeperen voor migratie.</p>
            </div>
          </div>

          <div className={styles.right}>
            <img
              src="/ReviewAssessment-LiftShift.png"
              alt="Review Assessment — Lift and Shift"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
