import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './DbMigrateSetupSlide.module.css'

export default function DbMigrateSetupSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.dbMigrateSetup}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 29</p>
          <h2>Migratie <span className={styles.highlight}>Instellen</span></h2>
          <p className={styles.subtitle}>
            Configureer de PostgreSQL-migratiewizard
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.left}>
            <div className={styles.instructions}>
              <p>Open het <strong>Migration</strong>-paneel op de doel-PostgreSQL flexible server en start een nieuwe migratie.</p>
              <p>Vul de instellingsgegevens in:</p>
              <ul className={styles.list}>
                <li>Migratienaam: <strong>webdb</strong></li>
                <li>Bronservertype: <strong>On-premises server</strong></li>
                <li>Migratieoptie: <strong>Validate and migrate</strong></li>
                <li>Migratiemodus: <strong>Offline</strong></li>
              </ul>
            </div>
          </div>

          <div className={styles.right}>
            <img
              src="/dbmigrate-setup.png"
              alt="Migration setup wizard"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
