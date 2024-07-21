import ContentLayout from "@site/src/components/ContentLayout";
import Layout from "@theme/Layout";
import React from "react";

function LegalNotice() {
  return (
    <Layout>
      <ContentLayout>
        <h1>Legal Notice</h1>
        <div>
          <h2>Editor</h2>
          This website www.algodema.com is edited by the company algodema SAS
          <ul>
            <li>Address: 22 rue du docteur arnaudet 92190 Meudon, France</li>
            <li>Email: contact@algodema.com</li>
            <li>Registration number: 984 653 345 R.C.S. Nanterre</li>
            <li>VAT number: FR35 984653345</li>
          </ul>
        </div>
        <div>
          <h2>Data Privacy</h2>
          <p>
            We are vigilant about the protection of your personal data. For any
            questions regarding this, please write to the following address:
            contact@algodema.com This website respects the following rules:
          </p>
          <ul>
            <li>
              <p>No data collection without your knowledge</p>
            </li>
            <li>
              <p>No transfer to third parties</p>
            </li>
            <li>
              <p>
                No use of the collected information beyond processing the
                request or for a duration of one year if you have agreed to be
                contacted later. You have the right to access, as provided by
                the data protection officer: contact@algodema.com You also have
                the right to inquire about, correct, transfer, and delete
                personal data concerning you, to be exercised with the data
                protection officer at the same address above. Your personal data
                is collected following one of the two following actions:
              </p>
            </li>
            <li>
              <p>The use of the contact form, to allow algodema to respond.</p>
            </li>
            <li>
              <p>Subscribing to our newsletter and its follow-up.</p>
            </li>
          </ul>
          <p>
            In all cases mentioned above, your collected personal data is
            neither transferred nor sold nor used for any purpose other than the
            one for which it was collected.
          </p>
        </div>
        <div>
          <h2>Copyrights</h2>
          <p>
            All content on this website is subject to French and international
            copyright and intellectual property laws. Reproduction of all or
            part of the website is strictly prohibited, including visual
            illustrations, texts, and photographic representations. However,
            feel free to be inspired by algodema content, Insights and
            illustrations! The trademarks and logos of algodema, as well as the
            distinctive signs and names of third-party companies appearing on
            the website, are protected by their respective owners and cannot be
            used for any purpose without their prior authorization.
          </p>
        </div>
        <div>
          <h2>Responsibility</h2>
          <p>
            We strive to provide accurate, complete, and up-to-date information
            on our website. However, the website and all information, texts,
            names, images, photos, logos, links, etc. are provided "as is" and
            without express or implied warranty. In particular, we do not
            guarantee the accuracy or completeness of the information presented
            on this website, nor do we guarantee that the use of this website
            will be uninterrupted and error-free.
          </p>
        </div>
      </ContentLayout>
    </Layout>
  );
}

export default LegalNotice;
