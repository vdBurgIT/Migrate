import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './RegisterHyperVHostsSlide.module.css'

export default function RegisterHyperVHostsSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.registerHosts}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 24</p>
          <h2><span className={styles.highlight}>Hyper-V Hosts</span> registreren</h2>
          <p className={styles.subtitle}>
            Installeer de Azure Site Recovery Provider op de VM-DC
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.left}>
            <div className={styles.instructions}>
              <p>Download en installeer <strong>AzureSiteRecoveryProvider.exe</strong> op de VM-DC. Gebruik de browser op die machine om het gemakkelijk te maken.</p>
              <p>Download ook het <strong>registratiesleutelbestand</strong>.</p>
              <p>Voer het installatieprogramma en de registratie uit. Als dit lukt, toont de registratiewizard: <em>"The Server was registered in the Azure Site Recovery vault"</em>.</p>
            </div>
          </div>

          <div className={styles.right}>
            <img
              src="/RegisterHyperVHosts.png"
              alt="Register Hyper-V Hosts"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
