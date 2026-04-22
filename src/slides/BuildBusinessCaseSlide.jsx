import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './BuildBusinessCaseSlide.module.css'

export default function BuildBusinessCaseSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.buildBusinessCase}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 14</p>
          <h2><span className={styles.highlight}>Business Case</span> opbouwen</h2>
          <p className={styles.subtitle}>
            Begin met het opbouwen van je business case vanuit de Azure Migrate hub
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.left}>
            <div className={styles.instructions}>
              <p>Navigeer naar de sectie <strong>Business case</strong> in Azure Migrate.</p>
              <p>Klik op <strong>Build business case</strong> om de assessment te configureren.</p>
            </div>
          </div>

          <div className={styles.right}>
            <img
              src="/BuildBusinessCase.png"
              alt="Build Business Case"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
