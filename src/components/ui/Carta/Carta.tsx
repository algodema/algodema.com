import { CartaItem } from "@site/src/domain/ui/carta/CartaItem";
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
          src={`${cartaItem.image.src}`}
          alt={`${cartaItem.image.alt}`}
        />
      )}
      {!imageOnly && (
        <>
          <img
            className={styles.cartaImage}
            src={`${cartaItem.image.src}`}
            alt={`${cartaItem.image.alt}`}
          />

          <div className={styles.cartaContentContainer}>
            <a href={cartaItem.readMoreUrl}>
              <h6 className={styles.cartaContentTitle}>{cartaItem.title}</h6>
            </a>
            <p className={styles.cartaContentParagraph}>
              {cartaItem.paragraph}
            </p>
            <a
              href={cartaItem.readMoreUrl}
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
