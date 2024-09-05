"use strict";(self.webpackChunkalgodema=self.webpackChunkalgodema||[]).push([[8613],{1512:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>A,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var n=t(4848),o=t(8453);const a={slug:"software-architecture-implementation-view",title:"Software Architecture: The Implementation View",date:"2021-11-20 18:49:31 +0100",authors:["reda"],tags:["software","architecture","system design","microservices","monolithic"]},s="The implementation view",r={permalink:"/blog/software-architecture-implementation-view",source:"@site/blog/2021-11-20-software-architecture-implementation-view.mdx",title:"Software Architecture: The Implementation View",description:"author",date:"2021-11-20T18:49:31.000Z",tags:[{inline:!0,label:"software",permalink:"/blog/tags/software"},{inline:!0,label:"architecture",permalink:"/blog/tags/architecture"},{inline:!0,label:"system design",permalink:"/blog/tags/system-design"},{inline:!0,label:"microservices",permalink:"/blog/tags/microservices"},{inline:!0,label:"monolithic",permalink:"/blog/tags/monolithic"}],readingTime:6.725,hasTruncateMarker:!1,authors:[{name:"Reda Jaifar",title:"Lead Developer",url:"https://github.com/reda-jaifar",imageURL:"https://avatars.githubusercontent.com/u/10919693?s=400&u=b30e8e86baebe277b11a4117560d601fd34bd245&v=4",key:"reda",page:null}],frontMatter:{slug:"software-architecture-implementation-view",title:"Software Architecture: The Implementation View",date:"2021-11-20 18:49:31 +0100",authors:["reda"],tags:["software","architecture","system design","microservices","monolithic"]},unlisted:!1,prevItem:{title:"Introduction to software functional and behaviour testing",permalink:"/blog/introduction-to-software-functional-and-behaviour-testing"},nextItem:{title:"Software Architecture: The Logical View",permalink:"/blog/software-architecture-logical-view"}},c={authorsImageUrls:[void 0]},l=[{value:"The Monolithic Architecture Style",id:"the-monolithic-architecture-style",level:2},{value:"The Microservices Architecture Style",id:"the-microservices-architecture-style",level:2},{value:"What is a service?",id:"what-is-a-service",level:3},{value:"What is loosely coupled Services and why they should?",id:"what-is-loosely-coupled-services-and-why-they-should",level:3},{value:"<span>Database sharing</span>",id:"database-sharing",level:4},{value:"<span>Code Sharing</span>",id:"code-sharing",level:4},{value:"<span>Synchronous Communication</span>",id:"synchronous-communication",level:4}];function h(e){const i={a:"a",blockquote:"blockquote",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"author",src:t(1600).A+"",width:"1300",height:"700"}),"\n",(0,n.jsx)(i.a,{href:"https://middleware.io/wp-content/uploads/2021/09/What-are-microservices_-How-does-microservices-architecture-work_.jpg",children:"photo source"})]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"The 1+4 Model View",src:t(2198).A+"",width:"1280",height:"634"}),"\n",(0,n.jsx)(i.em,{children:"The 4+1 view model describes an application\u2019s architecture using four views, along with scenarios that show how the elements within each view collaborate to handle requests"})]}),"\n",(0,n.jsx)(i.p,{children:"Includes the result of the build process that can be run or deployed such as a Java JAR or Node.js Package. These artifacts interact\nwith each other in the form of a composition or dependency relationship."}),"\n",(0,n.jsx)(i.h2,{id:"the-monolithic-architecture-style",children:"The Monolithic Architecture Style"}),"\n",(0,n.jsxs)(i.p,{children:["Let's extract the definition of monolithic architecture from an example. Imagine you are invited to develop an enterprise application for\nmanaging music concerts ticketing, One of the requirements is to access the system from the browser and a mobile native application. SO the application\nwill handle HTTP requests, execute a function and access a database to persist the data. One of the design options we may have\nis to create different components each one is responsible for a specific business logic (event subscription, payments, ticket editing ...). if we choose to develop with\nthe java programming language and the spring framework, we'll have one application with many modules interconnected and coupled to accomplish\nthe job. But what about the deployment? what type of build output will generate and how to deploy it into a production environment.\nThe answer is we will generate a single Java WAR file.\n",(0,n.jsx)(i.img,{alt:"author",src:t(9831).A+"",width:"680",height:"580"})]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"The monolithic representation of our example application (Music Event Application) where we can distinguish bounded functions of the system but all in one artifact"})}),"\n",(0,n.jsx)(i.p,{children:"This is what monolithic architecture is about to define the output of your source code as one piece that you can easily:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Deploy (push or put into the production environment, or any other environment such as development or staging)"}),"\n",(0,n.jsx)(i.li,{children:"Scale (run multiple instances of the application in response to increasing traffic)"}),"\n",(0,n.jsx)(i.li,{children:"Debug (in case of non-normal behavior of the system you can explore the logs, check the config, and so on to find the error, all these things are on the same process)"}),"\n"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Question: Now the system is up and running, but a new feature is required which needs to update the payment provider within our application, how can we achieve that?"}),"\n",(0,n.jsx)(i.li,{children:"Answer: we have to update the source code, re-build the whole application, think of a deployment strategy to ensure service continuity of our application."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"In the context of our monolithic application, many drawbacks are rising while changing a small piece of the system:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Even though the change concern only one part of the system, this one becomes indivisible and decoupled, the build and deploy process is slower because all the source code should be re-build to generate the new artifact (Java WAR file)"}),"\n",(0,n.jsx)(i.li,{children:"The whole system is developed with one stack which limits the on-boarding of other developers with different backgrounds"}),"\n",(0,n.jsx)(i.li,{children:"Less re-usability of the components."}),"\n",(0,n.jsx)(i.li,{children:"Increasing the artifact (build output) volume."}),"\n",(0,n.jsx)(i.li,{children:"Reliability as one bug in the ticket editing component can cause the whole system to shut down."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"In the next section, we discuss the alternative and how microservices address many of the drawbacks of monolithic and bring new added value but also some very challenging points to handle."}),"\n",(0,n.jsx)(i.h2,{id:"the-microservices-architecture-style",children:"The Microservices Architecture Style"}),"\n",(0,n.jsx)(i.p,{children:"Microservices architecture style organizes the application as a set of loosely coupled, independently deployable services, Together these services deliver the functional and business\nfeatures of the system we want to build. Let's continue with our Music Event Application example and try in the above illustration to define its microservices architecture:"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"author",src:t(7264).A+"",width:"680",height:"580"}),"\n",(0,n.jsx)(i.em,{children:"The Microservices representation of our example application (Music Event Application) where 3 services communicate through HTTP using REST"})]}),"\n",(0,n.jsx)(i.p,{children:"As we can observe in the illustration each service run in an independent process and also could have its database(recommended), Notice also how these services communicate\nto each other, in this example, I suggest using the REST API through HTTP, but this is not the only communication option we can have, there are more such as messaging using a message broker."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Let's tackle with further detail the microservices inter-communications in a dedicated article, so far and the rest of this document we will use REST as a reference."})}),"\n",(0,n.jsx)(i.h3,{id:"what-is-a-service",children:"What is a service?"}),"\n",(0,n.jsx)(i.p,{children:"As the word service is a most recurrent when we explore the microservice architecture, Here is a definition:"}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"A service is an independent deployable application or software component that provides a set of functionalities accessible\nthrough an API. Service has its own logical architecture, Hexagonal architecture may fit many use-cases, In addition\na service can be developed with its specific technology stack that may differ from other services' technology stacks in a microservices architecture"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"/blog/software-architecture-logical-view",children:"read more about Hexagonal Architecture and alternatives in this article"})}),"\n",(0,n.jsx)(i.h3,{id:"what-is-loosely-coupled-services-and-why-they-should",children:"What is loosely coupled Services and why they should?"}),"\n",(0,n.jsxs)(i.p,{children:["Two services are loosely coupled if changes in the design, implementation, or behavior in one ",(0,n.jsx)(i.strong,{children:"won't"})," cause change in others. In a Microservices architecture, the coupling will happen when\na change in one enforces an almost immediate change to one or more microservices that collaborate with it directly or indirectly."]}),"\n",(0,n.jsx)(i.p,{children:"While designing Microservices architecture, to make the services the less coupling possible, consider the following points:"}),"\n",(0,n.jsx)(i.h4,{id:"database-sharing",children:(0,n.jsx)("span",{style:{color:"orange"},children:"Database sharing"})}),"\n",(0,n.jsx)(i.p,{children:"the data storage is a microservice implementation detail that should be hidden from its clients (usually other microservices).\nIf Microservice A needs to access data of Microservice B, B should provide an API that A will use to consume the needed data"}),"\n",(0,n.jsx)(i.h4,{id:"code-sharing",children:(0,n.jsx)("span",{style:{color:"orange"},children:"Code Sharing"})}),"\n",(0,n.jsx)(i.p,{children:"By definition, microservices do not share codebase, but we may want to avoid redundancy by sharing dependency libraries and\nend up needing to update frequently in response to that libraries' client's change requests. So shared code should be as minimum as possible.\nA good practice that may seem strange at glance is to duplicate code so each service has its copy, so we need to update\nthe library to match Service A requirements, Service B remains un-impacted"}),"\n",(0,n.jsx)(i.h4,{id:"synchronous-communication",children:(0,n.jsx)("span",{style:{color:"orange"},children:"Synchronous Communication"})}),"\n",(0,n.jsxs)(i.p,{children:["In a Microservice architecture, services cooperate to accomplish the job, so they need to communicate either asynchronously or\nsynchronously where the service caller expects a timely response from the callee service might even block while it waits. To address the potential\nresponse latency, we can integrate a caching mechanism or implement the ",(0,n.jsx)(i.a,{href:"https://microservices.io/patterns/reliability/circuit-breaker.html",children:"circuit breaker pattern"})," to avoid cascading failures. These two options\ncould help remediate the system quickly, but for the long term, the best alternative is switching to asynchronous communication\nby using a messaging broker like ",(0,n.jsx)(i.a,{href:"https://kafka.apache.org/",children:"Apache Kafka"}),", So services can cooperate by publishing and consuming messages."]}),"\n",(0,n.jsxs)(i.p,{children:["When it comes to designing the next-generation software, relying on a strong and reliable architecture helps a lot, In\nrecent decades, much great software conquered the market and is serving millions of users while scaling up and down to reduce\ncost and energy or respond to an increasing number of requests. ",(0,n.jsx)(i.strong,{children:"Microservices Architecture"})," is part of other practices\nand engineering designs behind thanks to its benefits, below is a non-exhaustive list:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Independent development: microservices can be developed in isolation to accomplish a defined functionality"}),"\n",(0,n.jsx)(i.li,{children:"Independent deployment: microservices can be deployed individually and independently in any environment (cloud, on-premise, managed infrastructure)"}),"\n",(0,n.jsx)(i.li,{children:"Fault isolation: if one service fails, the system remains up and only the functionality provided by that stopped microservice will be impacted"}),"\n",(0,n.jsxs)(i.li,{children:["Technology stack: different programming languages, frameworks, and technologies can be used to build the same software, usually a ",(0,n.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Software_as_a_service",children:"SaaS"})]}),"\n",(0,n.jsx)(i.li,{children:"Individually scaling: each service can scale as per need, is not necessarily to scale the whole system as is the case of monolithic based  application"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Despite the number of advantages Microservices Architecture is bringing, choosing it over Monolithic Architecture relies upon\non the context, the application domain (banking, delivery, e-commerce, ...) and scope (either is a lightweight application or\na complex evolving application), your organization software engineering capabilities and culture."}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Software_architecture",children:"Software Architecture Definition by Wikipedia"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://www.cs.ubc.ca/~gregor/teaching/papers/4+1view-architecture.pdf",children:"The \u201c4+1\u201d View Model of Software Architecture by Philippe Kruchten"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://www.sei.cmu.edu/our-work/software-architecture/",children:"Advancing the Practice of Software Architecture by Software Engineering Institute"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://microservices.io",children:"Microservice Patterns by Chris Richardson"})}),"\n"]})]})}function A(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},2198:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/1plus4model-implementation-view-a068a758198ebcc76f7fe40ba348a4ea.png"},7264:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/implementation-view-microservices-ab94699ed035702d8a603b7b5af0bade.png"},1600:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/implementation-view-56b583bcc73f5f7008051f5b3991e0bb.jpeg"},9831:(e,i,t)=>{t.d(i,{A:()=>n});const n="data:image/png;base64,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"},8453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>r});var n=t(6540);const o={},a=n.createContext(o);function s(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);