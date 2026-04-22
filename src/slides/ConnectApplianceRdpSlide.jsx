import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './ConnectApplianceRdpSlide.module.css'

export default function ConnectApplianceRdpSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.connectApplianceRdp}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 3</p>
          <h2>Verbinding maken met de <span className={styles.highlight}>Appliance</span></h2>
          <p className={styles.subtitle}>
            Open een RDP-sessie naar de Azure Migrate-appliance
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.instructions}>
            <p>Voer het tunnelscript uit om een RDP-sessie naar de appliance te maken:</p>
            <code className={styles.code}>./tunnel-appl.ps1</code>
            <p>Er wordt een tunnel aangemaakt in een nieuw terminalvenster. <strong>Sluit dit venster niet</strong> (je kunt het minimaliseren).</p>
            <p>Gebruik het wachtwoord dat je voor de appliance hebt ingesteld, de gebruikersnaam is <strong>Administrator</strong>.</p>
          </div>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
