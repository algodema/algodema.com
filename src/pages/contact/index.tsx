import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import emailjs from "@emailjs/browser";
import React from "react";

import { Toaster } from "sonner";
import { toast } from "sonner";
import { translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import ContentLayout from "@site/src/components/ContentLayout";
import styles from "./contact.module.css";

function Contact() {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const emailRef = React.useRef<HTMLInputElement>(null);
  const subjectRef = React.useRef<HTMLInputElement>(null);
  const messageRef = React.useRef<HTMLTextAreaElement>(null);
  const sendMessage = (e: any) => {
    e.preventDefault();
    const templateParams = {
      email: emailRef?.current?.value,
      subject: subjectRef?.current?.value,
      message: messageRef?.current?.value,
    };

    emailjs
      .send(
        customFields.emailJsServiceId ?? "",
        customFields.emailJsTemplateId ?? "",
        templateParams,
        customFields.emailJsUserId
      )
      .then(
        function (_response) {
          toast.success(translate({ id: "contact.sendmessage.success" }));
        },
        function (_error) {
          toast.error(translate({ id: "contact.sendmessage.error" }), {
            description: translate({
              message: "contact.sendmessage.error.description",
            }),
          });
        }
      );
    emailRef!.current!.value = "";
    subjectRef!.current!.value = "";
    messageRef!.current!.value = "";
  };

  return (
    <Layout>
      <ContentLayout>
        <section className={styles.rootContainer}>
          <Toaster dir="auto" position="top-center" duration={9000} />
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Contact Us</h2>
            <p className={styles.subTitle}>
              Let&apos;s get the conversation started, at your service
            </p>
            <form action="" onSubmit={sendMessage} className={styles.form}>
              <div>
                <label htmlFor="email" className={styles.formLabel}>
                  Your email
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  id="email"
                  className={styles.emailInput}
                  placeholder="your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className={styles.formLabel}>
                  Subject
                </label>
                <input
                  ref={subjectRef}
                  type="text"
                  id="subject"
                  className={styles.subjectInput}
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className={styles.formLabel}>
                  Your message
                </label>
                <textarea
                  ref={messageRef}
                  id="message"
                  rows={6}
                  className={styles.messageInput}
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className={styles.submitButton}
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </ContentLayout>
    </Layout>
  );
}

export default Contact;
