import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './AzureLoginSlide.module.css'

export default function AzureLoginSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.azureLogin}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Vereisten</p>
          <h2>Inloggen bij <span className={styles.highlight}>Azure</span></h2>
          <p className={styles.subtitle}>
            Installeer de Bastion CLI-extensie en verifieer met je Azure-subscription
          </p>
        </div>

        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Voeg de Bastion-extensie toe</h3>
              <p className={styles.stepDesc}>
                Installeer de Azure Bastion-extensie voor de Azure CLI — vereist voor tunneling naar VM's later
              </p>
              <code className={styles.code}>az extension add --name bastion</code>
            </div>
          </div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Aanmelden bij Azure</h3>
              <p className={styles.stepDesc}>
                Verifieer met je Azure-account via de CLI
              </p>
              <code className={styles.code}>az login</code>
            </div>
          </div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Selecteer een subscription</h3>
              <p className={styles.stepDesc}>
                Stel de doelsubscription in voor alle volgende opdrachten
              </p>
              <code className={styles.code}>
                az account set --subscription "&lt;subscription-id&gt;"
              </code>
            </div>
          </div>
        </div>

        <div className={styles.note}>
          <span className={styles.noteIcon}>ℹ️</span>
          <p className={styles.noteText}>
            Je account moet de rol <strong>Owner</strong> hebben op de subscription
          </p>
        </div>

        <div className={styles.note}>
          <span className={styles.noteIcon}>🛠️</span>
          <p className={styles.noteText}>
            Controleer de vereisten op{' '}
            <a
              href="https://github.com/azureholic/az-migrate-workshop/blob/main/workshop/prereq.md"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              prereq.md
            </a>{' '}
            voordat je met de workshop begint. Als je de workshopomgeving moet inrichten, volg dan die instructies.
          </p>
        </div>
      </div>

      <BottomBar text="azure-migrate-workshop" />
    </Slide>
  )
}
