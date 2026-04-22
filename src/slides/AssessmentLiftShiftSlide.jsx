import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './AssessmentLiftShiftSlide.module.css'

export default function AssessmentLiftShiftSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.assessmentLiftShift}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 18</p>
          <h2>Assessment aanmaken — <span className={styles.highlight}>Lift &amp; Shift</span></h2>
          <p className={styles.subtitle}>
            Maak een specifieke assessment aan voor de UbuntuVM lift-and-shift migratie
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.left}>
            <div className={styles.instructions}>
              <p>Verken gerust de assessment die de business case heeft aangemaakt.</p>
              <p>We kunnen ook assessments toevoegen voor <strong>specifieke workloads</strong>. Laten we er één aanmaken voor de <strong>UbuntuVM</strong> — dit wordt een lift-and-shift migratie.</p>
            </div>
          </div>

          <div className={styles.right}>
            <img
              src="/CreateAssessment-LiftAndShift.png"
              alt="Create Assessment — Lift and Shift"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
