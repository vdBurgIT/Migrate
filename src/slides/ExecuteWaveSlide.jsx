import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './ExecuteWaveSlide.module.css'

export default function ExecuteWaveSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.executeWave}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 26</p>
          <h2><span className={styles.highlight}>Wave</span> uitvoeren</h2>
          <p className={styles.subtitle}>
            Voer de migratie uit voor de Ubuntu VM
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.left}>
            <div className={styles.instructions}>
              <p>Ga terug naar de wave planning en <strong>voer de wave uit</strong> in de tijdlijn.</p>
              <p>Bekijk en voer de <strong>HyperV Servers to Azure VM</strong> uit.</p>
              <p>Klik op <strong>Execute Migration</strong> voor de Ubuntu VM.</p>
              <p>Bekijk de doelinstellingen — kies <strong>vnet-migration-target</strong> als netwerk om naar te deployen. Je kunt het bestaande opslagaccount selecteren of het hulpprogramma er één laten aanmaken.</p>
              <p>Klik door de migratiewizard totdat je op <strong>Execute Migration</strong> kunt klikken.</p>
            </div>
          </div>

          <div className={styles.right}>
            <img
              src="/ExecuteWave.png"
              alt="Execute Wave"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
