import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './BusinessCaseSlide.module.css'

export default function BusinessCaseSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.businessCase}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 13</p>
          <h2>Inventaris bekijken &amp; <span className={styles.highlight}>Business Case</span> opbouwen</h2>
          <p className={styles.subtitle}>
            Bekijk je gedetecteerde inventaris in de Azure Portal en genereer een business case voordat je migreert
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.left}>
            <div className={styles.inventory}>
              <h3 className={styles.sectionTitle}>Jouw Inventaris</h3>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>4</span>
                  <span className={styles.statLabel}>Machines</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>5</span>
                  <span className={styles.statLabel}>Workloads</span>
                </div>
              </div>
            </div>

            <div className={styles.instructions}>
              <p>We gaan verschillende migraties uitvoeren, te beginnen met een <strong>lift and shift</strong>. Maar eerst bouwen we een business case.</p>
              <p>Er is een <strong>AI-assistent (Migration Agent)</strong> beschikbaar die je door dit proces kan begeleiden, maar nu kiezen we voor <strong>"Build business case"</strong> handmatig om de stappen beter te begrijpen.</p>
            </div>

            <div className={styles.callout}>
              <strong>Belangrijk:</strong> Selecteer de az-migrate appliance niet — deze gaan we niet migreren.
            </div>
          </div>

          <div className={styles.right}>
            <img
              src="/BusinessCase.png"
              alt="Azure Portal — Build Business Case"
              className={styles.screenshot}
            />
          </div>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
