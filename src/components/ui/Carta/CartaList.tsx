import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Carta from "./Carta";
import { CartaItem } from "@site/src/domain/ui/carta/CartaItem";
import { ImageProps } from "@site/src/domain/ImageProps";
import styles from "./CartaList.module.css";

interface CartaListProps {
  items: CartaItem[];
  annex?: ImageProps;
}
function CartaList({ items, annex }: CartaListProps) {
  return (
    <div className={styles.cartaListContainer}>
      {items.map((cartaItem: CartaItem) => (
        <Carta cartaItem={cartaItem} key={cartaItem.index} />
      ))}
      {annex && <img src={useBaseUrl(annex.src)} alt={`${annex.src}`} />}
    </div>
  );
}

export default CartaList;
