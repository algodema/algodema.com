import HomeSlides from '@site/src/components/HomeSlides/HomeSlides'
import OurMethodSection from '@site/src/components/OurMethodSection/OurMethodSection'
import Layout from '@theme/Layout'
import { featuredClients } from '@site/src/data/featuredClients'
import FeaturesCards from '@site/src/components/FeaturedCards/FeaturedCards'

function HomePage() {
  return (
    <Layout>
      <div className='container'>
        <section>
          <HomeSlides />
        </section>
        <section>
          <OurMethodSection />
        </section>
        <section>
          <FeaturesCards
            title='Featured client stories'
            featured={featuredClients}
          />
        </section>
      </div>
    </Layout>
  )
}

export default HomePage
