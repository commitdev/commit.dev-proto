import {
  ApplyLink,
  ArticlePreview,
  Logo,
  Footer,
  Heading,
  Page,
  Testimonials,
  Text,
  StaticImage,
} from 'components'
import ConnectSvg from 'public/connect.svg'
import ElevateSvg from 'public/elevate.svg'
import ExploreSvg from 'public/explore.svg'
import {
  WhatsRight,
  HowItWorks,
  SpSection,
  TimelineSection,
  WhyCommitSection,
} from 'sections'
import styles from 'styles/Home.module.css'

import { SectionSeparator } from '../components'
import PlatformSection from '../sections/platform-section'

const { h2 } = Heading.VARIANT

const Home = () => (
  <Page>
    <section className={`${styles.hero} ${styles.dark}`}>
      <div className={styles.sectionContent}>
        <div className={styles.heroContent}>
          <Heading className={styles.heroHeading}>Refactor your career</Heading>
          <Text sectionText className={styles.heroText}>
            Until now, your growth was dependent on your company.
            <span className={styles.heroTextExtra}>We changed that.</span>
          </Text>
          <ApplyLink />
          <Text className={styles.heroTagline}> </Text>
        </div>
      </div>
    </section>
    <WhatsRight />
    <section className={styles.features}>
      <div className={styles.featuresTransition} />
      <div className={styles.gridSection}>
        <div className={styles.feature}>
          <ConnectSvg />
          <Heading variant={h2} className={styles.featureHeading}>
            Connect
          </Heading>
          <Text>
            Build meaningful relationships in a distributed community of
            Software Engineers
          </Text>
        </div>
        <div className={styles.feature}>
          <ExploreSvg />
          <Heading variant={h2} className={styles.featureHeading}>
            Explore
          </Heading>
          <Text>
            Build your network in a distributed community of Software Engineers
          </Text>
        </div>
        <div className={styles.feature}>
          <ElevateSvg />
          <Heading variant={h2} className={styles.featureHeading}>
            Elevate
          </Heading>
          <Text>
            Refine or expand your expertise through hands-on projects,
            peer-to-peer coaching & professional development opportunities
          </Text>
        </div>
      </div>
    </section>
    <HowItWorks />
    <section className={styles.articles}>
      <Heading variant={h2} className={styles.articlesHeading}>
        Featured Articles
      </Heading>
      <div className={styles.gridSection}>
        <ArticlePreview
          media={
            <StaticImage
              name="person-looking-at-monitor.jpeg"
              alt="Person looking at computer monitor"
            />
          }
          heading="My job at Commit is to create an incredible experience for engineers"
          text="One August in the 1990s, I drove across Canada, with a good friend.
          I have so many fond memories of the journey: our debates about how
          to solve the world's problems, the lengthy and..."
          link="https://blog.commit.dev/articles/b5i3amkjq2nz7y4apq4jsfd66hudu8"
        />
        <ArticlePreview
          media={<StaticImage name="lillian-liang.jpeg" alt="Lillian Liang" />}
          heading="Lillian Liang, Plastiq Inc."
          text="Lillian Liang is a Commit engineer who joined Plastiq earlier this
          year. We talked to her about her journey to Commit and Plastiq..."
          link="https://blog.commit.dev/articles/committed-to-success-lillian-liang-plastiq-inc"
        />
        <ArticlePreview
          media={
            <StaticImage
              name="monolith-diagram.png"
              alt="Monolith architecture"
            />
          }
          heading="Streaming out the monolith"
          text="As a monolithic code base builds up over time, it can become harder
          and harder to maintain, and more difficult to extract data from,
          especially if..."
          link="https://blog.commit.dev/articles/streaming-out-the-monolith"
        />
      </div>
      <SectionSeparator />
      <TimelineSection />
      <WhyCommitSection />
    </section>
    <PlatformSection />
    <section className={styles.testimonials}>
      <div className={styles.flexSection}>
        <Heading variant={h2} className={styles.testimonialsHeading}>
          What Our Engineering Partners Have to Say
        </Heading>
        <Testimonials className={styles.testimonialsCarousel} />
      </div>
    </section>
    <SpSection>
      <Logo
        url="https://www.procurify.com/"
        alt="Procurify logo"
        name="procurify.png"
      />
      <Logo url="https://certn.co/" alt="Certn logo" name="certn.png" />
      <Logo
        url="https://www.dapperlabs.com/"
        alt="Dapper logo"
        name="dapper.png"
      />
      <Logo url="https://www.usepatch.com/" alt="Patch logo" name="patch.png" />
      <Logo
        url="https://www.plastiq.com/"
        alt="Plastiq logo"
        name="plastiq.png"
      />
    </SpSection>
    <Footer />
  </Page>
)

export default Home
