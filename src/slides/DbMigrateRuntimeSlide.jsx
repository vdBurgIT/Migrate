import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './DbMigrateRuntimeSlide.module.css'

export default function DbMigrateRuntimeSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.dbMigrateRuntime}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 30</p>
          <h2>Runtime <span className={styles.highlight}>Server</span></h2>
          <p className={styles.subtitle}>
            Configureer de runtime-server die de migratie uitvoert
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.left}>
            <div className={styles.instructions}>
              <p>Een <strong>runtime-server</strong> is vereist als de bron een privé-eindpunt of privé-IP-adres heeft.</p>
              <p>Selecteer <strong>Yes</strong> voor "Use runtime server" en configureer:</p>
              <ul className={styles.list}>
                <li>Resourcegroep: <strong>rg-migration-target</strong></li>
                <li>Servernaam: de vooraf gedeployde runtime-server</li>
                <li>Virtueel netwerk: <strong>vnet-migrate-target</strong></li>
                <li>Subnet: <strong>snet-postgres-migrate</strong></li>
              </ul>
              <p className={styles.warning}>⚠️ Verwijder de runtime-server na de migratie om doorlopende kosten te vermijden.</p>
            </div>
          </div>

          <div className={styles.right}>
            <img
              src="/dbmigrate-runtime.png"
              alt="Runtime server configuration"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
