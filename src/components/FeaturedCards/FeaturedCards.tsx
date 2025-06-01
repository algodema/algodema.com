import FeaturedCardData from '@site/src/domain/FeaturedCard/FeaturedCardData'
import FeaturedCard from './FeaturedCard'
import styles from './FeaturedCards.module.css'

type FeaturesCardsProps = {
  title: string
  featured: FeaturedCardData[]
}

function FeaturesCards({ title, featured }: FeaturesCardsProps) {
  return (
    <section className={styles.features}>
      <div className='container'>
        <h1>{title}</h1>
        <div className='row'>
          {featured.map((props, idx) => (
            <FeaturedCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesCards
