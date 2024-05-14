import clsx from "clsx";
import React from "react";
import styles from "./OurMethodSection.module.css";

function OurMethodSection() {
  return (
    <div className="row">
      <div className="col col--6">
        <div className="col-demo">
          <img
            src="/img/home/business-people-are-brainstorming.jpg"
            alt="4keys"
            width={538}
            height={428}
          />
        </div>
      </div>
      <div className="col col--6">
        <div className="col-demo">
          <h1>Framing, Design, Plan, Engineering</h1>
          <p>
            In the realm of software engineering, framing sets the groundwork by
            delineating the scope, objectives, and constraints of a project. It
            involves understanding the problem domain and identifying key
            requirements before proceeding to design.
          </p>
          <p>
            Design in software engineering encompasses the architecture, user
            interface, and overall structure of the system. It involves creating
            blueprints that outline how different components will interact and
            function together to fulfill the project goals efficiently and
            effectively.
          </p>
          <p>
            Plans in software engineering provide a roadmap for development,
            outlining timelines, tasks, and resources needed to bring the design
            to fruition. This involves breaking down the project into manageable
            phases and setting milestones to track progress.
          </p>
          <p>
            Engineering in software development involves the implementation of
            the design, utilizing coding languages, algorithms, and best
            practices to build robust, scalable, and maintainable software
            systems. It also involves rigorous testing, debugging, and
            optimization to ensure that the final product meets quality
            standards and user expectations. Together, framing, design, plan,
            and engineering form the backbone of software development, enabling
            the creation of innovative and reliable software solutions.
          </p>
          <a
            href="contact"
            className={clsx(`button  button--lg ${styles.getInTouchButton}`)}
          >
            How can we help you?
          </a>
        </div>
      </div>
    </div>
  );
}

export default OurMethodSection;
