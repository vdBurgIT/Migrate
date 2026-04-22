import { BottomBar, Slide } from '@deckio/deck-engine'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import SpotlightCard from '@/components/ui/spotlight-card'
// Wrapper components compose shadcn primitives into deck-friendly blocks.
// See src/components/presentation/ for the full set.
import SectionBadge from '@/components/presentation/SectionBadge'
import styles from './FeaturesSlide.module.css'

const features = [
  {
    icon: '🧩',
    title: 'shadcn Ready',
    badge: 'UI',
    desc: 'shadcn/ui components pre-installed — Button, Card, Badge, Separator, and Alert. Add more with the CLI.',
    code: 'npx shadcn@latest add dialog sheet tabs',
    delay: '0s',
  },
  {
    icon: '✨',
    title: 'ReactBits Animations',
    badge: 'Motion',
    desc: 'BlurText, SpotlightCard, DecryptedText — hover these cards to see the spotlight effect live.',
    code: '@react-bits/spotlight-card',
    delay: '0.12s',
  },
  {
    icon: '🎨',
    title: 'Theme System',
    badge: 'Design',
    desc: 'Choose light or dark appearance during scaffolding. Set once, consistent everywhere.',
    code: 'Appearance via ThemeProvider',
    delay: '0.24s',
  },
  {
    icon: '📦',
    title: 'Export Anywhere',
    badge: 'Build',
    desc: 'Export to PDF, capture screenshots, or deploy as a static site. Your slides, your way.',
    code: 'npm run build',
    delay: '0.36s',
  },
]

export default function FeaturesSlide() {
  return (
    <Slide index={1} className={styles.slide}>
      <div className="content-frame content-gutter">
        <div className={styles.content}>
          <div className={styles.header}>
            <SectionBadge className={styles.eyebrow}>Capabilities</SectionBadge>
            <h2 className={styles.title}>What You Can Build</h2>
            <p className={styles.lead}>
              Everything you need to create polished, interactive presentations.
            </p>
          </div>

          <div className={styles.grid}>
            {features.map((f, i) => (
              <SpotlightCard
                key={i}
                className={styles.spotCard}
                spotlightColor="color-mix(in srgb, var(--accent) 25%, transparent)"
                style={{ animationDelay: f.delay }}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.cardIcon}>{f.icon}</span>
                  <h3 className={styles.cardTitle}>{f.title}</h3>
                  <Badge variant="secondary" className={styles.cardBadge}>{f.badge}</Badge>
                </div>
                <p className={styles.cardDesc}>{f.desc}</p>
                <code className={styles.cardCode}>{f.code}</code>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>

      <BottomBar text="cool-deck" />
    </Slide>
  )
}
