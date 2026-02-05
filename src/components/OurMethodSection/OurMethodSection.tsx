import clsx from "clsx";
import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./OurMethodSection.module.css";

function OurMethodSection() {
  return (
    <div className="row">
      <div className="col col--6">
        <div className="col-demo">
          <img
            src={useBaseUrl("/img/home/gen-e2.png")}
            alt="4keys"
            width={538}
            height={428}
          />
        </div>
      </div>
      <div className="col col--6">
        <div className="col-demo">

            <h1>Transform Your Software Delivery with Gen‑e2 – Generative AI Enhanced Engineering</h1>

            <section>
              <p>At <strong>Algodema</strong>, we bring the future of software development to your organization with <strong>Gen‑e2</strong>, an AI-driven engineering methodology designed to accelerate product delivery while ensuring exceptional quality. Gen‑e2 leverages <strong>generative AI</strong> to handle up to <strong>95% of code, documentation, architecture, and infrastructure</strong>, allowing your teams to focus on <strong>strategic decision-making, product vision, and quality oversight</strong>.</p>
            </section>
            <section>
              <p>Our approach transforms the traditional software development lifecycle into a <strong>context-driven, AI-first process</strong>, where humans define requirements, constraints, and objectives, and AI executes the implementation consistently and efficiently. Early adopters have achieved <strong>2–5× faster delivery</strong>, reduced bottlenecks, and improved developer satisfaction.</p>
            </section>
            <section>
              <h2>Why Choose Algodema for Gen‑e2?</h2>
              <ul>
                <li><strong>Accelerated Delivery:</strong> Significantly reduce time-to-market with AI-powered execution.</li>
                <li><strong>High-Quality Results:</strong> AI-generated deliverables ensure consistency and minimize errors.</li>
                <li><strong>Strategic Focus:</strong> Engineers and product teams operate at higher-value levels.</li>
                <li><strong>Seamless Integration:</strong> Fully compatible with Agile, DevOps, and modern software practices.</li>
              </ul>
            </section>
            <section>
              <h2>Our Services Include</h2>
              <ul>
                <li>End-to-end <strong>Gen‑e2 adoption</strong> and consulting</li>
                <li><strong>Process design and AI integration</strong> tailored to your organization</li>
                <li><strong>Training and upskilling</strong> teams for AI-assisted product development</li>
                <li><strong>Ongoing support and optimization</strong> to maximize productivity and ROI</li>
              </ul>
            </section>
            <section>
              <p>With <strong>Algodema</strong>, harness the power of generative AI to <strong>innovate faster, reduce costs, and maintain a competitive edge</strong>. Let us help you transform your software delivery with the next-generation of AI-enhanced engineering.</p>
            </section>
          <a
            href="contact"
            className={clsx(`button  button--lg ${styles.getInTouchButton}`)}
          >
            Start Building Today
          </a>
        </div>
      </div>
    </div>
  );
}

export default OurMethodSection;
