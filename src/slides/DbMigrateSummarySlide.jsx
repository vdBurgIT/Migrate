import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './DbMigrateSummarySlide.module.css'

export default function DbMigrateSummarySlide({ index, project }) {
  return (
    <Slide index={index} className={styles.dbMigrateSummary}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 34</p>
          <h2>Bekijken &amp; <span className={styles.highlight}>Migreren</span></h2>
          <p className={styles.subtitle}>
            Controleer de samenvatting en start de migratie
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.left}>
            <div className={styles.instructions}>
              <p>Bekijk de volledige migratiesamenvatting — de instellingen, runtime-server en gegevens van de bron- en doelserver staan allemaal vermeld ter verificatie.</p>
              <p>Als alles er correct uitziet, klik dan op <strong>Start validation and migration</strong> om het proces te starten.</p>
              <p>De wizard valideert eerst de configuratie en begint dan met het migreren van de <strong>webapp</strong>-database naar Azure Database for PostgreSQL flexible server.</p>
            </div>
          </div>

          <div className={styles.right}>
            <img
              src="/dbmigrate-summary.png"
              alt="Migration summary and start"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
