import styles from "./OurValues.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
function ValueParagraph({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className={styles.valueParagraphContainer}>
      <h1 className={styles.valueParagraphTitle}>{title}</h1>
      <p className={styles.valueParagraphContent}>{content}</p>
    </div>
  );
}

function OurValues() {
  return (
    <div className={styles.rootContainer}>
      <div>
        <img
          src={useBaseUrl("/img/about/values.jpg")}
          alt="values"
          width={800}
          height={800}
        />
      </div>
      <div>
        <ValueParagraph
          title="Why Algodema exist?"
          content="We established algodema with the purpose of pursuing our passion daily: crafting dependable, trustworthy, and
        enduring software and systems in collaboration with our clients and partners, all aimed at enhancing quality
        of life. Whether it be a straightforward shopping application or a sophisticated air traffic management
        system, our driving force remains the tangible and meaningful impact our creations have on society."
        />

        <div className={styles.valuesContainer}>
          <h1 className={styles.valuesContainerTitle}>
            We are a values-driven team
          </h1>
          <ValueParagraph
            title="Transparency in Communication"
            content="From the initial interaction to ongoing support, we prioritize clear and honest communication with our
          customers. This means being upfront about what the products or the services can and cannot do, as well as any
          limitations or risks involved."
          />

          <ValueParagraph
            title="Ethical Practices"
            content="Operate with integrity and adhere to ethical business practices at all times. This means respecting customer
          privacy, safeguarding their data, and ensuring compliance with relevant regulations and standards."
          />

          <ValueParagraph
            title="Long-Term Partnerships"
            content="Focus on building long-term relationships with our customers rather than pursuing short-term gains.
          Continuously demonstrate our commitment to their success by providing ongoing support, guidance, and proactive"
          />
        </div>
      </div>
    </div>
  );
}

export default OurValues;
