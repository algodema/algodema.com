import Service from "@site/src/domain/service/Service";
import styles from "./ServicesSection.module.css";
import { CartaItem } from "@site/src/domain/ui/carta/CartaItem";
import CartaList from "../ui/Carta/CartaList";

interface ServiceSectionProps {
  services: Service[];
}

function ServicesSection({ services }: ServiceSectionProps) {
  const cartaItems: CartaItem[] = services.slice(0, 6).map((service, index) => ({
    index,
    title: service.title,
    image: service.image,
    paragraph: service.content,
    readMoreUrl: `/what-we-do/service/${service.slug}`,
    slug: service.slug,
  }));

  return (
    <div className={styles.servicesContainer}>
      <h1 className={styles.servicesTitle}>Our Services</h1>
      <CartaList items={cartaItems} />
    </div>
  );
}

export default ServicesSection;
