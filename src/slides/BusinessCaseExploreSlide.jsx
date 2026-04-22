import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './BusinessCaseExploreSlide.module.css'

export default function BusinessCaseExploreSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.businessCaseExplore}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 17</p>
          <h2><span className={styles.highlight}>Business Case</span> verkennen</h2>
          <p className={styles.subtitle}>
            Bekijk de uitkomst van je business case-assessment
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.left}>
            <div className={styles.instructions}>
              <p>Nadat de business case is gegenereerd, verken je de resultaten.</p>
              <p>Bekijk de <strong>kostenvergelijking</strong>, verwachte besparingen en migratiegereedheid voor je geselecteerde workloads.</p>
            </div>
          </div>

          <div className={styles.right}>
            <img
              src="/BusinessCaseExplore.png"
              alt="Business Case Explore — outcome overview"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
