import { CartaItem } from "@site/src/domain/ui/carta/CartaItem";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./Carta.module.css";
import RightArrow from "../RightArrow/RightArrow";
interface Props {
  cartaItem: CartaItem;
}
function Carta({ cartaItem }: Props) {
  const imageOnly = cartaItem.title === "";
  return (
    <div className={styles.cartaContainer}>
      {imageOnly && (
        <img
          className={styles.cartaImageOnly}
          src={useBaseUrl(cartaItem.image.src)}
          alt={`${cartaItem.image.alt}`}
        />
      )}
      {!imageOnly && (
        <>
          <img
            className={styles.cartaImage}
            src={useBaseUrl(cartaItem.image.src)}
            alt={`${cartaItem.image.alt}`}
          />

          <div className={styles.cartaContentContainer}>
            <a href={useBaseUrl(cartaItem.readMoreUrl)}>
              <h6 className={styles.cartaContentTitle}>{cartaItem.title}</h6>
            </a>
            <p className={styles.cartaContentParagraph}>
              {cartaItem.paragraph}
            </p>
            <a
              href={useBaseUrl(cartaItem.readMoreUrl)}
              className={styles.cartaContentReadMore}
            >
              Read more <RightArrow />
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default Carta;
