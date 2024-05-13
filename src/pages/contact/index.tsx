import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import emailjs from "@emailjs/browser";
import React from "react";

import { Toaster } from "sonner";
import { toast } from "sonner";
import { translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import ContentLayout from "@site/src/components/ContentLayout";

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
        <section>
          <Toaster dir="auto" position="top-center" duration={9000} />
          <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
            <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Contact Us
            </h2>
            <p className="mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
              Let&apos;s get the conversation started, at your service
            </p>
            <form action="" onSubmit={sendMessage} className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  id="email"
                  className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  ref={subjectRef}
                  type="text"
                  id="subject"
                  className="dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  ref={messageRef}
                  id="message"
                  rows={6}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-50 dark:focus:ring-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="rounded-lg bg-primary-50 px-5 py-3 text-center text-sm font-medium hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-fit"
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
