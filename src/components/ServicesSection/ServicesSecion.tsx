import Service from "@site/src/domain/service/Service";
import styles from "./ServicesSecton.module.css";
import { CartaItem } from "@site/src/domain/ui/carta/CartaItem";
import CartaList from "../ui/Carta/CartaList";

interface ServiceSectionProps {
  services: Service[];
}
function ServicesSection({ services }: ServiceSectionProps) {
  const cartaItems: CartaItem[] = services
    .slice(0, 6)
    .map((service, index) => ({
      index: index,
      title: service.title,
      image: service.image,
      paragraph: service.content,
      readMoreUrl: `/what-we-do/service?name=${service.slug}`,
      slug: service.slug,
    }));
  return (
    <div className={styles.servicesContainer}>
      <h1 className={styles.servicesTitle}>Our services</h1>
      <CartaList items={cartaItems} />
    </div>
  );
}

export default ServicesSection;
