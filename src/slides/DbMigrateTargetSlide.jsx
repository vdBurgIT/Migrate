import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './DbMigrateTargetSlide.module.css'

export default function DbMigrateTargetSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.dbMigrateTarget}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 32</p>
          <h2><span className={styles.highlight}>Doelserver</span></h2>
          <p className={styles.subtitle}>
            Controleer het doel Azure Database for PostgreSQL
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.left}>
            <div className={styles.instructions}>
              <p>De gegevens van de <strong>doelserver</strong> zijn vooraf ingevuld vanuit de flexible server waarop je de migratiewizard hebt geopend:</p>
              <ul className={styles.list}>
                <li>Resourcegroep: <strong>rg-migration-target</strong></li>
                <li>Locatie: <strong>swedencentral</strong></li>
                <li>PostgreSQL-versie: <strong>16</strong></li>
                <li>Beheerdersinlog: <strong>pgadmin</strong></li>
              </ul>
              <p>Voer het wachtwoord <strong>P@ssw0rd1234!</strong> in voor de doelserver en klik op <strong>Connect to target</strong> om de connectiviteit te verifiëren.</p>
            </div>
          </div>

          <div className={styles.right}>
            <img
              src="/dbmigrate-target.png"
              alt="Target server configuration"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
