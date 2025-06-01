import Service from "../../domain/service/Service";
import { Language } from "../../domain/translation/Language";

export const services: Service[] = [
  {
    language: Language.EN,
    title: "software architecture",
    content:
      "The software architecture of a computing system is the set of structures needed to reason about the system, which comprise software elements, relations among them, and properties of both. by SEI We can decrypt the above definition as structuring a system as a whole recessed block into parts connected, complementary and modular. The more these parts are decoupled and can work independently, and communicate to each other effectively the more our architecture will fill its mission to ensure a maintainable, extensible and homogeneous system.",
    image: {
      src: "/img/services/architecture.jpg",
      alt: "software architecture",
    },
    slug: "software-architecture",
  },
  {
    language: Language.EN,
    title: "Software engineering",
    content:
      "Our dedication to engineering excellence has propelled us to emerge as a premier technology consultancy, leveraging global teams' capabilities to deploy software on a large scale.",
    image: {
      src: "/img/services/programming.avif",
      alt: "engineering",
    },
    slug: "software-engineering",
  },
  {
    language: Language.EN,
    title: "Cloud",
    content:
      "Our expertise in cloud migration and modernization synchronizes your business and cloud strategies, facilitating smooth planning and implementation of transformative endeavors. This approach unleashes potent new functionalities and promotes cooperation throughout your organization. We aid in constructing, modernizing, and transitioning to cost-effective cloud solutions that provide enduring competitive edge and drive sustained business value for years to come.",
    image: {
      src: "/img/services/cloud.jpg",
      alt: "cloud",
    },
    slug: "cloud",
  },
  {
    language: Language.EN,
    title: "Product Management",
    content:
      "Unlock the full potential of your product with our expert Product Management services. We specialize in guiding businesses through every stage of the product lifecycle, from ideation to launch and beyond. Why Choose Our Product Management Services? Strategic Vision: We help you define a clear product vision aligned with your business goals, ensuring that every feature and enhancement serves a purpose and drives value. Customer-Centric Approach: Understanding your customers' needs and pain points is crucial. We conduct in-depth market research and user interviews to gather insights that inform product decisions. Agile Methodology: Our agile product management approach allows for flexibility and adaptability, ensuring that your product evolves in response to feedback and market changes. Cross-Functional Collaboration: We foster collaboration between design, development, marketing, and sales teams to ensure seamless execution and alignment across all departments. Data-Driven Decisions: Harness the power of data analytics to measure product performance, track key metrics, and make informed decisions that drive growth and user engagement. Continuous Improvement: Our iterative process focuses on continuous learning and improvement, allowing us to optimize your product based on real-world feedback and evolving market trends. Benefits of Our Product Management Services: Increased ROI: By focusing on delivering features that resonate with your target audience, we help maximize your return on investment. Faster Time-to-Market: Our streamlined processes and agile methodologies ensure efficient product development cycles, getting your product to market faster. Competitive Advantage: Stay ahead of the competition with a product that stands out for its innovation, quality, and user experience. Scalable Solutions: Our strategic approach lays the groundwork for scalability, allowing your product to grow and adapt as your business expands. Partner with us to transform your product ideas into market-ready solutions that captivate users, drive business growth, and set you on the path to long-term success. Let's collaborate to create products that make a difference!",
    image: {
      src: "/img/services/product.jpeg",
      alt: "product",
    },
    slug: "product-management",
  },
  {
    language: Language.EN,
    title: "Artificial Intelligence ",
    content:
      "Artificial Intelligence (AI) has rapidly transitioned from a futuristic concept to a competitive necessity. However, many organizations find themselves stuck in the experimentation phase, struggling to scale AI solutions that deliver tangible business value.",
    image: {
      src: "/img/services/ai.jpg",
      alt: "ai",
    },
    slug: "artificial-intelligence",
  },
];
