import ContentLayout from "@site/src/components/ContentLayout";
import Layout from "@theme/Layout";
import React from "react";
import styles from "./index.module.css";

function LegalNotice() {
  return (
    <Layout>
      <ContentLayout>
        <div className={styles.legalWrapper}>
          <main className={styles.content}>
            <h1 className={styles.title}>Legal Notice</h1>

            <section>
              <h2>Editor</h2>
              <p>
                This website (<strong>www.algodema.com</strong>) is published by
                <strong> algodema SAS</strong>.
              </p>
              <ul>
                <li>
                  <strong>Address:</strong> 22 rue du docteur arnaudet, 92190
                  Meudon, France
                </li>
                <li>
                  <strong>Email:</strong> <a href="mailto:contact@algodema.com">contact@algodema.com</a>
                </li>
                <li>
                  <strong>Registration number:</strong> 984 653 345 R.C.S.
                  Nanterre
                </li>
                <li>
                  <strong>VAT number:</strong> FR35 984653345
                </li>
              </ul>
            </section>

            <section>
              <h2>Data Privacy</h2>
              <p>
                We take the protection of your personal data seriously. For
                questions, contact us at <a href="mailto:contact@algodema.com">contact@algodema.com</a>.
              </p>
              <ul>
                <li>No collection without consent.</li>
                <li>No transfer to third parties.</li>
                <li>
                  Data is used only to process your request or, when agreed,
                  for up to one year to follow up. You may request access,
                  correction, transfer, or deletion by contacting the address
                  above.
                </li>
                <li>Use of the contact form to reply to inquiries.</li>
                <li>Newsletter subscription when explicitly requested.</li>
              </ul>
              <p>
                Collected data is never sold or used beyond the stated purpose.
              </p>
            </section>

            <section>
              <h2>Copyrights</h2>
              <p>
                All content is protected by copyright and intellectual property
                laws. Reproduction without permission is prohibited. Trademarks
                and logos are the property of their respective owners.
              </p>
            </section>

            <section>
              <h2>Responsibility</h2>
              <p>
                The site is provided "as is" without warranty. We endeavour to
                keep information accurate and up to date, but make no guarantees
                regarding completeness or uninterrupted availability.
              </p>
            </section>
          </main>
        </div>
      </ContentLayout>
    </Layout>
  );
}

export default LegalNotice;
