import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './CheckApplianceSlide.module.css'

export default function CheckApplianceSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.checkAppliance}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 5</p>
          <h2>Appliance <span className={styles.highlight}>controleren</span></h2>
          <p className={styles.subtitle}>
            Je kunt nu in de Azure Portal controleren of de appliance aanwezig is
          </p>
        </div>

        <div className={styles.screenshotWrapper}>
          <img
            src="/az-portal-appliance.png"
            alt="Azure Portal showing the appliance"
            className={styles.screenshot}
          />
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
