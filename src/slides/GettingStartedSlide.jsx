import { BottomBar, Slide } from '@deckio/deck-engine'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Lightbulb } from 'lucide-react'
// Wrapper components compose shadcn primitives into deck-friendly blocks.
// See src/components/presentation/ for the full set.
import SectionBadge from '@/components/presentation/SectionBadge'
import CalloutAlert from '@/components/presentation/CalloutAlert'
import styles from './GettingStartedSlide.module.css'

export default function GettingStartedSlide() {
  return (
    <Slide index={2} className={styles.slide}>
      <div className="content-frame content-gutter">
        <div className={styles.content}>
          <div className={styles.header}>
            <SectionBadge className={styles.eyebrow}>Workflow</SectionBadge>
            <h2 className={styles.title}>Getting Started</h2>
          </div>

          <div className={styles.timeline}>
            <div className={styles.step} style={{ animationDelay: '0s' }}>
              <div className={styles.stepIndicator}>
                <Badge className={styles.stepBadge}>1</Badge>
                <Separator className={styles.stepLine} />
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Inspect</h3>
                <div className={styles.codeBlock}>
                  <div className={styles.codeDots}>
                    <span /><span /><span />
                  </div>
                  <div className={styles.codeLine}>
                    <span className={styles.codeDim}>$</span> cat components.json && ls src/components/ui
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.step} style={{ animationDelay: '0.15s' }}>
              <div className={styles.stepIndicator}>
                <Badge className={styles.stepBadge}>2</Badge>
                <Separator className={styles.stepLine} />
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Expand</h3>
                <div className={styles.codeBlock}>
                  <div className={styles.codeDots}>
                    <span /><span /><span />
                  </div>
                  <div className={styles.codeLine}>
                    <span className={styles.codeDim}>$</span> npx shadcn@latest add dialog sheet tabs
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.step} style={{ animationDelay: '0.3s' }}>
              <div className={styles.stepIndicator}>
                <Badge className={styles.stepBadge}>3</Badge>
              </div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Compose</h3>
                <div className={styles.codeBlock}>
                  <div className={styles.codeDots}>
                    <span /><span /><span />
                  </div>
                  <div className={styles.codeLine}>
                    <span className={styles.codeKeyword}>import</span> {"{"} Button {"}"} <span className={styles.codeKeyword}>from</span> <span className={styles.codeString}>'@/components/ui/button'</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CalloutAlert icon={<Lightbulb />} title="Pro tip" className={styles.tip}>
            Use the shadcn MCP server in VS Code for AI-assisted component expansion.
          </CalloutAlert>
        </div>
      </div>

      <BottomBar text="cool-deck" />
    </Slide>
  )
}
