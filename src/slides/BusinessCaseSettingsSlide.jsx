import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './BusinessCaseSettingsSlide.module.css'

export default function BusinessCaseSettingsSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.businessCaseSettings}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 16</p>
          <h2>Business Case <span className={styles.highlight}>Instellingen</span></h2>
          <p className={styles.subtitle}>
            Configureer de doelinstellingen en genereer de business case
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.left}>
            <div className={styles.instructions}>
              <p>Configureer de business case-instellingen om overeen te komen met je doelomgeving.</p>
              <p>Bekijk de opties en klik op <strong>Build business case</strong> om de assessment te genereren.</p>
            </div>
          </div>

          <div className={styles.right}>
            <img
              src="/BusinessCaseSettings.png"
              alt="Business Case Settings"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
