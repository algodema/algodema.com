"use strict";(self.webpackChunkalgodema=self.webpackChunkalgodema||[]).push([[246],{8788:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=a(4848),n=a(8453);const i={slug:"software-architecture-logical-view",title:"Software Architecture: The Logical View",date:"2021-10-17 12:49:31 +0100",authors:["reda"],tags:["software","architecture","4+1","logical view"]},r=void 0,o={permalink:"/blog/software-architecture-logical-view",source:"@site/blog/2021-10-17-software-architecture-logical-view.mdx",title:"Software Architecture: The Logical View",description:"author",date:"2021-10-17T12:49:31.000Z",tags:[{inline:!0,label:"software",permalink:"/blog/tags/software"},{inline:!0,label:"architecture",permalink:"/blog/tags/architecture"},{inline:!0,label:"4+1",permalink:"/blog/tags/4-1"},{inline:!0,label:"logical view",permalink:"/blog/tags/logical-view"}],readingTime:4.315,hasTruncateMarker:!1,authors:[{name:"Reda Jaifar",title:"Lead Developer",url:"https://github.com/reda-jaifar",imageURL:"https://avatars.githubusercontent.com/u/10919693?s=400&u=b30e8e86baebe277b11a4117560d601fd34bd245&v=4",key:"reda",page:null}],frontMatter:{slug:"software-architecture-logical-view",title:"Software Architecture: The Logical View",date:"2021-10-17 12:49:31 +0100",authors:["reda"],tags:["software","architecture","4+1","logical view"]},unlisted:!1,nextItem:{title:"DevOps: Strengthen your digital transformation",permalink:"/blog/devops-strengthen-your-digital-transformation"}},c={authorsImageUrls:[void 0]},l=[{value:"The layered architecture style",id:"the-layered-architecture-style",level:2},{value:"The Hexagonal Architecture Style",id:"the-hexagonal-architecture-style",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",em:"em",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"author",src:a(4783).A+"",width:"2000",height:"1250"}),"\n",(0,s.jsx)(t.a,{href:"https://dz2cdn1.dzone.com/storage/article-thumb/8685724-thumb.jpg",children:"photo source"})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"The 1+4 Model View",src:a(5601).A+"",width:"1280",height:"634"}),"\n",(0,s.jsx)(t.em,{children:"The 4+1 view model describes an application\u2019s architecture using four views, along with scenarios that show how the elements within each view collaborate to handle requests"})]}),"\n",(0,s.jsx)(t.h2,{id:"the-layered-architecture-style",children:"The layered architecture style"}),"\n",(0,s.jsx)(t.p,{children:"This is my first architecture style I've discovered 10 years ago thanks to my java enterprise application course teacher, Ths idea\nconsist of organizing the elements of an application into layers. Those elements could be java classes grouped by the responsibility type\nthey manage and respect the rule that each layer should depend only on the layer below it, Another version also tolerate that a layer can\ndepends on the any of the layers below it."}),"\n",(0,s.jsx)(t.p,{children:"Even though we can apply this architecture style to any of the 4 model view we've seen above, It is most likely to be used in the logical view\nas follows:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Presentation layer"}),": groups classes & interfaces that handle the UI interactions, Such as desktop application UI that handles user interactions like Click, Press, etc..."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Business logic layer"}),": contains classes where we implement the business logic of the system. For example classes that calculate the shortest route for delivering merchandise from stock house to customer."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Persistence layer"}),": contains interfaces and classes that interact with database or file system. For example classes that communicate with a MySQL database."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"3 Tier Java Application Architecture",src:a(5097).A+"",width:"3168",height:"1262"}),"\n",(0,s.jsx)("i",{children:"In the above figure, we illustrate the 3 tier architecture for a java application, classes of the same layer are grouped using packages.Note that architecture is beyond\nany programming language, so for example in case of a C# application we group classes in namespaces instead of packages for java."})]}),"\n",(0,s.jsx)(t.p,{children:"The years go by and the software development community began to recognize some drawbacks of N Tier architecture, below we list some of them:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Single Presentation Layer"}),": With the evolution of the web and mobile applications, many systems provide the same functions, For example a desktop application\nfor logistics providing the feature of calculating the shortest route and cost of a delivery, While the business logic remains the same,\nthe interactions with the system are evolving with mobile and web users."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Single Persistence Layer"}),": Modern systems needs to interact with many and/or different storage systems rather than one database."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Layer dependencies"}),": As the business logic depends on the persistence one, we are prevented from testing the business logic in an isolation."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"These disadvantages lead to an alternative architecture style we present next."}),"\n",(0,s.jsx)(t.h2,{id:"the-hexagonal-architecture-style",children:"The Hexagonal Architecture Style"}),"\n",(0,s.jsxs)(t.p,{children:["This architecture style organizes the logical view in a way that puts the business logic at the center. In contrast to the layered\narchitecture that has a presentation layer, we have here one or more inbound adapters that handle requests from the outside by invoking\nthe business logic. The same applied to the persistence layer, the application has or more outbound adapters that are invoked by the business logic and invoke external applications.\nThe main characteristic of this architecture style is that the business logic doesn't depend on these adapters, instead they depend on it.\nThe Business logic has one or more ports.A ",(0,s.jsx)(t.strong,{children:"port"})," defines a set of operations and is how the business logic interacts with\nwhat's outside it. For example in java these ports are a Java Interface. we distinguish inbound and outbound ports. An inbound port is an API exposed by\nthe business logic, which enables it to be invoked by external applications, for example a REST API.An outbound port is how the business\nlogic invokes external systems like Database Access Repositories."]}),"\n",(0,s.jsx)(t.p,{children:"Like the ports there are inbound and outbound adapters. An inbound adapter handles requests from the outside world\nby invoking an inbound port. For example in the case of a Java Web Application using Spring framework, An inbound\nadapter is a Rest Controller that will invoke inbound port exposed by the business logic.\nAn outbound adapter implements an outbound port and handles requests from the business logic by invoking an external\napplication or service.An example of an outbound adapter is an Event Publisher to Kafka or any other Event streaming system."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hexagonal Architecture",src:a(9259).A+"",width:"590",height:"463"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"The Figure above shows an example of the hexagonal architecture where the business logic has one or more adapters to communicate with external systems"})}),"\n",(0,s.jsxs)(t.p,{children:["Let me remind you that decoupling the business logic from the presentation and data access is the important benefit\nof the hexagonal architecture style. This is very useful also when it comes to testing as you can use ",(0,s.jsx)("abbr",{title:"Test Driven Development",children:(0,s.jsx)(t.strong,{children:"TDD"})}),"\neasily as you can test your business logic in an isolation.It also defines new model for the modern applications where the\nbusiness logic can be invoked by multiple adapters each one of them invokes an external system."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"The Hexagonal Architecture style is well fit to define the architecture of each service in a microservice architecture."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Both the layered and hexagonal architectures are a set of constraints and rules on how elements within the logical\nview are connected and how they communicate."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Software_architecture",children:"Software Architecture Definition by Wikipedia"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.cs.ubc.ca/~gregor/teaching/papers/4+1view-architecture.pdf",children:"The \u201c4+1\u201d View Model of Software Architecture by Philippe Kruchten"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.sei.cmu.edu/our-work/software-architecture/",children:"Advancing the Practice of Software Architecture by Software Engineering Institute"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5601:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/1plus4model-logical-view-3636354c22277d70aec68c9aad98b367.png"},9259:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/hexagonal-architecture-a2755d762525908a8ce5960d5b3c9072.jpeg"},4783:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/logical-view-6cc2a6673c829dc04e742c8844b1a00a.jpeg"},5097:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/n-tier-architecture-style-java-599c1deef248b1d2cc822794932fc698.jpg"},8453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>o});var s=a(6540);const n={},i=s.createContext(n);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);