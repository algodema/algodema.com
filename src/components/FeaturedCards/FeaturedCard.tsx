import FeaturedCardData from '@site/src/domain/FeaturedCard/FeaturedCardData'
import clsx from 'clsx'
import styles from './FeaturedCards.module.css'

function FeaturedCard({ title, subject, content }: FeaturedCardData) {
  return (
    <div className={clsx(styles.card)}>
      <div className='text--center'>
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className='text--center padding-horiz--md'>
        <h3 className={styles.client}>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default FeaturedCard
