import CartaList from "components/ui/Carta/CartaList"
import Service from "domain/service/Service"
import { CartaItem } from "domain/ui/carta/CartaItem"

interface ServiceSectionProps {
  services: Service[]
}
function ServicesSection({ services }: ServiceSectionProps) {
  const cartaItems: CartaItem[] = services.slice(0, 6).map((service, index) => ({
    index: index,
    title: service.title,
    image: service.image,
    paragraph: service.content,
    readMoreUrl: `/what-we-do/${service.slug}`,
    slug: service.slug,
  }))
  return <CartaList items={cartaItems} />
}

export default ServicesSection
