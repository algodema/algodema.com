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
          width={1200}
          height={800}
        />
      </div>
      <div>
        <ValueParagraph
          title="Why Algodema exists"
          content="We build reliable, long-lasting software that makes people's lives better. From simple apps to complex systems,
          our focus is on delivering measurable, positive impact for users and partners."
        />

        <div className={styles.valuesContainer}>
          <h1 className={styles.valuesContainerTitle}>A values-driven team</h1>
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
            content="We prefer long-term partnerships: supporting our customers with ongoing guidance and reliable service rather
          than chasing short-term wins."
          />
        </div>
      </div>
    </div>
  );
}

export default OurValues;
