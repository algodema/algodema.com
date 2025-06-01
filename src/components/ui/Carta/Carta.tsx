import { CartaItem } from '@site/src/domain/ui/carta/CartaItem'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './Carta.module.css'
import RightArrow from '../RightArrow/RightArrow'

interface Props {
  cartaItem: CartaItem
}

function Carta({ cartaItem }: Props) {
  const imageOnly = cartaItem.title === ''

  return (
    <div className={styles.cartaContainer}>
      {imageOnly ? (
        <img
          className={styles.cartaImageOnly}
          src={useBaseUrl(cartaItem.image.src)}
          alt={cartaItem.image.alt}
          loading='lazy'
        />
      ) : (
        <div className={styles.cartaInner}>
          <img
            className={styles.cartaImage}
            src={useBaseUrl(cartaItem.image.src)}
            alt={cartaItem.image.alt}
            loading='lazy'
          />
          <div className={styles.cartaContentContainer}>
            <a
              href={useBaseUrl(cartaItem.readMoreUrl)}
              className={styles.cartaContentTitle}
            >
              {cartaItem.title}
            </a>
            <p className={styles.cartaContentParagraph}>
              {cartaItem.paragraph}
            </p>
            <a
              href={useBaseUrl(cartaItem.readMoreUrl)}
              className={styles.cartaContentReadMore}
              aria-label={`Read more about ${cartaItem.title}`}
            >
              Read more <RightArrow className={styles.readMoreArrow} />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Carta
