import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './MigrateLiftShiftSlide.module.css'

export default function MigrateLiftShiftSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.migrateLiftShift}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 28</p>
          <h2>Migreren — <span className={styles.highlight}>Lift &amp; Shift</span></h2>
          <p className={styles.subtitle}>
            Test en voltooi de migratie met Azure Site Recovery
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.left}>
            <div className={styles.instructions}>
              <p>Daarna kun je een <strong>testmigratie</strong> uitvoeren (dit heeft geen invloed op de originele machine) en uiteindelijk een <strong>definitieve migratie</strong> als de test succesvol is — dit stopt de Hyper-V VM.</p>
              <p>Kies <strong>Testing → Start test migration</strong></p>
              <p>Als geslaagd, kies <strong>Testing → Cleanup test migration</strong></p>
              <p>Kies dan <strong>Completion → Migrate</strong></p>
              <p><strong>⚠️ WAARSCHUWING:</strong> Gebruik GEEN reservering (dit is specifiek voor deze workshop).</p>
              <p>Je hebt nu met succes een Hyper-V VM gemigreerd naar Azure met Azure Site Recovery.</p>
            </div>
          </div>

          <div className={styles.right}>
            <img
              src="/Migrate-LiftandShift.png"
              alt="Migrate — Lift and Shift"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
