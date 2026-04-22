import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './DbMigrateSourceSlide.module.css'

export default function DbMigrateSourceSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.dbMigrateSource}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 31</p>
          <h2><span className={styles.highlight}>Bronserver</span></h2>
          <p className={styles.subtitle}>
            Verbinding maken met de on-premises PostgreSQL-bron
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.left}>
            <div className={styles.instructions}>
              <p>Voer de verbindingsgegevens van de <strong>bronserver</strong> in voor de on-premises PostgreSQL-instantie:</p>
              <ul className={styles.list}>
                <li>Servernaam: <strong>10.0.0.4</strong></li>
                <li>Port: <strong>5432</strong></li>
                <li>Beheerdersinlog: <strong>webadmin</strong></li>
                <li>Wachtwoord: <strong>webadmin123</strong></li>
                <li>SSL mode: <strong>Prefer</strong></li>
              </ul>
              <p>Klik op <strong>Connect to source</strong> en wacht tot de connectiviteitstest is voltooid.</p>
            </div>
          </div>

          <div className={styles.right}>
            <img
              src="/dbmigrate-source.png"
              alt="Source server configuration"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
