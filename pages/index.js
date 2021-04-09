import {
  ApplyLink,
  Logo,
  Footer,
  Heading,
  Page,
  Testimonials,
  Text,
} from 'components'
import {
  EngineersWhoJoinedSection,
  FeaturedArticles,
  WhatsRight,
  HowItWorks,
  SpSection,
  PlatformSection,
  TimelineSection,
  WhyCommitSection,
} from 'sections'
import styles from 'styles/Home.module.css'

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
    <HowItWorks />
    <FeaturedArticles />
    <TimelineSection />
    <WhyCommitSection />
    <PlatformSection />
    <EngineersWhoJoinedSection />
    <section className={styles.testimonials}>
      <div className={styles.flexSection}>
        <Heading variant={h2} className={styles.testimonialsHeading}>
          What Our Engineering Partners Have to Say
        </Heading>
        <Testimonials className={styles.testimonialsCarousel} />
      </div>
    </section>
    <Footer />
  </Page>
)

export default Home
