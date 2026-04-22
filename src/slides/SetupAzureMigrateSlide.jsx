import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './SetupAzureMigrateSlide.module.css'

export default function SetupAzureMigrateSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.setupAzureMigrate}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 23</p>
          <h2><span className={styles.highlight}>Azure Migrate</span> instellen</h2>
          <p className={styles.subtitle}>
            Volg de wave-begeleiding om de migratie in te stellen
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.left}>
            <div className={styles.instructions}>
              <p>Volg de wave-begeleiding om alle stappen uit te voeren die nodig zijn voor de migratie.</p>
              <p>Begin met <strong>Discover</strong>, selecteer <strong>Azure VM</strong> als doel in de regio waar je project zich bevindt.</p>
              <p>Klik op <strong>Create resources needed for the migration</strong>. Azure regelt dit.</p>
            </div>
          </div>

          <div className={styles.right}>
            <img
              src="/SetupAzureMigrate.png"
              alt="Setup Azure Migrate"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
