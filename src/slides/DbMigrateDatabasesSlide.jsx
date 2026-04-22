import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './DbMigrateDatabasesSlide.module.css'

export default function DbMigrateDatabasesSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.dbMigrateDatabases}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 33</p>
          <h2><span className={styles.highlight}>Databases</span> selecteren</h2>
          <p className={styles.subtitle}>
            Kies welke databases je wilt valideren en migreren
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.left}>
            <div className={styles.instructions}>
              <p>De wizard detecteert alle databases op de bronserver. Selecteer de databases die je wilt migreren.</p>
              <p>Selecteer voor deze workshop de <strong>webapp</strong>-database en laat <strong>postgres</strong> uitgevinkt.</p>
              <p>Je kunt tot 8 databases migreren in één migratierun.</p>
            </div>
          </div>

          <div className={styles.right}>
            <img
              src="/dbmigrate-databases.png"
              alt="Select databases to migrate"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
