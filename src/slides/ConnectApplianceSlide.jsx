import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './ConnectApplianceSlide.module.css'

export default function ConnectApplianceSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.connectAppliance}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stap 1</p>
          <h2>Appliance <span className={styles.highlight}>voorbereiden</span></h2>
          <p className={styles.subtitle}>
            Maak een tunnel naar de DC VM en open de Azure Migrate-appliance via Hyper-V
          </p>
        </div>

        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Open een Bastion-tunnel</h3>
              <p className={styles.stepDesc}>
                Maakt een RDP-tunnel via Azure Bastion en start een remote-desktopsessie naar de DC VM
              </p>
              <code className={styles.code}>./tunnel-dc.ps1</code>
              <p className={styles.hint}>
                Er opent een nieuw terminalvenster voor de tunnel — <strong>sluit dit niet</strong>. Log in met gebruiker <strong>azureuser</strong> (standaard is het Administrator). Het wachtwoord staat op je klembord — plak het met Ctrl+V bij de RDP-prompt.
              </p>
            </div>
          </div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Open Hyper-V Manager</h3>
              <p className={styles.stepDesc}>
                Open Hyper-V Manager vanuit het Startmenu of de taakbalk in de RDP-sessie
              </p>
            </div>
          </div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Verbinding maken met de appliance</h3>
              <p className={styles.stepDesc}>
                Klik met de rechtermuisknop op de Azure Migrate-appliance VM en kies <strong>Connect</strong>
              </p>
            </div>
          </div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Wachtwoord instellen op de appliance</h3>
              <p className={styles.stepDesc}>
                Bij de eerste keer opstarten vraagt de appliance je een beheerderswachtwoord in te stellen — kies een sterk wachtwoord en noteer het
              </p>
              <p className={styles.hint}>
                Na het instellen van het wachtwoord sluit je de applianceverbinding — maar <strong>houd de RDP-sessie naar de DC VM open</strong>, je hebt deze later nodig.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
