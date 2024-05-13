import React from "react";
import Carta from "./Carta";
import { CartaItem } from "@site/src/domain/ui/carta/CartaItem";
import { ImageProps } from "@site/src/domain/ImageProps";

interface CartaListProps {
  items: CartaItem[];
  annex?: ImageProps;
}
function CartaList({ items, annex }: CartaListProps) {
  return (
    <div className="flex flex-col  flex-wrap gap-1 md:flex-row">
      {items.map((cartaItem: CartaItem) => (
        <Carta cartaItem={cartaItem} key={cartaItem.index} />
      ))}
      {annex && <img src={`${annex.src}`} alt={`${annex.src}`} />}
    </div>
  );
}

export default CartaList;
