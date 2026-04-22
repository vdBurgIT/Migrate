import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './OnPremiseCostsSlide.module.css'

export default function OnPremiseCostsSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.onPremiseCosts}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 12</p>
          <h2>On-Premise <span className={styles.highlight}>Kosten</span></h2>
          <p className={styles.subtitle}>
            Bekijk en pas de on-premise kostenveronderstellingen aan in het migrate-project
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.left}>
            <div className={styles.instructions}>
              <p>De on-premise kosten zijn <strong>vooraf ingevuld</strong> met standaardwaarden, maar kunnen worden aangepast aan je eigen omgeving en voorkeuren.</p>
              <p>De business case-generator gebruikt deze cijfers om <strong>kosten en besparingen te berekenen</strong> bij de vergelijking van on-premise vs. Azure.</p>
            </div>
          </div>

          <div className={styles.right}>
            <img
              src="/BusinessCase-OnPremiseCosts.png"
              alt="Azure Migrate — On-Premise Costs configuration"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
