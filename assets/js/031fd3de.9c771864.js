"use strict";(self.webpackChunkalgodema=self.webpackChunkalgodema||[]).push([[4743],{5070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(4848),s=n(8453);const o={slug:'software-testing-from-separate-activity-to-core-development"',title:"Software testing from separate activity to core development",date:"2021-03-06 12:56:31 +0100",authors:["reda"],tags:["testing"]},a="Agile redefine our testing philosophy",r={permalink:'/blog/software-testing-from-separate-activity-to-core-development"',source:"@site/blog/2021-03-06-software-testing-from-separate-activity-to-core-development.mdx",title:"Software testing from separate activity to core development",description:"author",date:"2021-03-06T12:56:31.000Z",tags:[{inline:!0,label:"testing",permalink:"/blog/tags/testing"}],readingTime:5.145,hasTruncateMarker:!1,authors:[{name:"Reda Jaifar",title:"Lead Developer",url:"https://github.com/reda-jaifar",imageURL:"https://avatars.githubusercontent.com/u/10919693?s=400&u=b30e8e86baebe277b11a4117560d601fd34bd245&v=4",key:"reda",page:null}],frontMatter:{slug:'software-testing-from-separate-activity-to-core-development"',title:"Software testing from separate activity to core development",date:"2021-03-06 12:56:31 +0100",authors:["reda"],tags:["testing"]},unlisted:!1,prevItem:{title:"DevOps: Strengthen your digital transformation",permalink:"/blog/devops-strengthen-your-digital-transformation"},nextItem:{title:"Few and permanent rather than many and intermittent",permalink:"/blog/few-and-permanent-many-and-intermittent"}},l={authorsImageUrls:[void 0]},d=[{value:"Unit tests",id:"unit-tests",level:2},{value:"Integration tests",id:"integration-tests",level:2},{value:"End to End Tests",id:"end-to-end-tests",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"author",src:n(2089).A+"",width:"1136",height:"798"}),"\n",(0,i.jsx)(t.a,{href:"https://www.railwaysignalling.eu/istanbul-ankara-high-speed-railway-aims-to-open-in-february2014/cropped-b-broshure-forside4-jpg",children:"photo source"})]}),"\n",(0,i.jsx)(t.p,{children:"I remember these days when we used to write testing code after implementing the software features to make sure\nthat the code is working, avoid bugs. Besides, we create some scripts to automate interactions with the program."}),"\n",(0,i.jsx)(t.p,{children:"Writing testing code was a separate activity from programming."}),"\n",(0,i.jsx)(t.p,{children:"When Agile was born in early 2000 as the fruit of a working group including Martin Fowler, The manifesto defines how agile methods\nwill speed up the software development to bring new products to market faster. The testing activity starts taking a new\ndefinition from a side part activity to undistinguished work of software development, Especially with\nthe Xtreme programming method that takes the TDD as its core paradigm. We will cover in further detail the TDD in a\ndedicated section below, but first, let's review the different types of tests."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"NB: there are plenty of test types we can code and run, in this post, I share with you only the main ones\nfrom a developer's perspective. Below is a non-exhaustive list of test types:"}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Functional testing"}),"\n",(0,i.jsx)(t.li,{children:"Load and stress testing"}),"\n",(0,i.jsx)(t.li,{children:"Usability testing"}),"\n",(0,i.jsx)(t.li,{children:"Security and Vulnerability testing"}),"\n",(0,i.jsx)(t.li,{children:"Monkey testing"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"unit-tests",children:"Unit tests"}),"\n",(0,i.jsx)(t.p,{children:"This type of software testing covers small and isolated components of software to make sure they behave as expected,\nNowadays these code fragments are writing by the developer itself while implementing the product's features. There are some\nproperties that these tests should hold"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"They should be fast."}),"\n",(0,i.jsx)(t.li,{children:"Run frequently as part of the continuous integration process, so they are executed after each commit."}),"\n",(0,i.jsx)(t.li,{children:"They need to be readable, Maintainable, and Trustworthy."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"integration-tests",children:"Integration tests"}),"\n",(0,i.jsx)(t.p,{children:"The main role of this type of test is to confirm that the independently developed components that compose an application\nor a system are working as expected together. For example in a Layered architecture-based application, you may want to make\nsure that your DAO or Repositories are working fine, or verify the web layer interactions with the business layer are matching\nthe desired behavior, here where the integration tests come to."}),"\n",(0,i.jsx)(t.p,{children:"Integration tests may cover a variety  of scenarios, here are some common ones:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Testing 2 or more components interactions and data flow"}),"\n",(0,i.jsx)(t.li,{children:"Verify the data sent by a component is well-formatted by another one before processing it."}),"\n",(0,i.jsx)(t.li,{children:"Verify components handle cases where they lost connectivity between them."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"end-to-end-tests",children:"End to End Tests"}),"\n",(0,i.jsx)(t.p,{children:"They may take also the name of broad-stack tests or full-stack tests, Despite their slow time of execution they constitute\nan important value for the product's quality as they test the behavior of the application in a real environment.\nThey are intended to reproduce the end-user interaction with the product and make sure that every feature is responding as it what designed.\nThese tests have the advantage of testing the software with all its parts connected, on the other hand, they have the\npain of slower to run and difficult to maintain, the reason why it's recommended to reduce the number of these tests compared to\nunit or integration ones as shown in the following figure:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"the test pyramid",src:n(672).A+"",width:"850",height:"492"})}),"\n",(0,i.jsx)(t.h1,{id:"tdd-test-driven-development",children:"TDD: Test Driven Development"}),"\n",(0,i.jsxs)(t.p,{children:["Since its apparition there is many books have been published, I recommend reading one or more to understand this philosophy is deep and acquire\nsolid skills for writing tests, Here is my must-read ",(0,i.jsxs)("span",{children:[(0,i.jsx)(t.strong,{children:"Test Driven Development By Example"}),", ",(0,i.jsx)(t.strong,{children:"Kent Beck"})," "]})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"I'll define TDD as a programming style in which production and test code are written together, with the production code\njust after test one."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"By now we have described the TDD, there are some rules to take into consideration:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Rule one:     We don't write production code before we've written a failing test."}),"\n",(0,i.jsx)(t.li,{children:"Rule two:     We don't write additional tests than sufficient to implement our first scenario of a use case."}),"\n",(0,i.jsx)(t.li,{children:"Rule three:   We don't write more production code than needed to pass the currently failing test."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"As the TDD is relatively becoming a mature discipline, it started encouraging further innovations derived from it, such as BDD\nwhose main goal is to get developers, testers, and people from the business to talk to each other. In other words"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"the real intent is to try and work out what your customer or business wants from the software before you start working on it"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Once we adopt the TDD and start working this way with testing side by side with production code, we'll write many tests\nper use case or (feature), and more by component and you can imagine the numbers of lines we'll end up with,\nmanaging tests code became as important as production one. I encourage you to keep tests clean.\n",(0,i.jsx)(t.strong,{children:"what makes a test clean"}),"? Readability, shortness, and expressive. The following snippet shows an example of a test written\nwith the intention to make it clean, but surely the is no perfect example to follow, just keep in mind to give your test code your attention."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'@Test\n  public void testAcceptBooking() {\n    // given a booking id\n    BookingId bookingId = "48e58688-adc2-4e3d-be9d-f5129723b351";\n\n    // when\n    Either<AcceptBookingError, BookingResponse> either = acceptBookingUseCase\n                                                          .accept(bookingId);\n\n    // then\n    assertThat(either.get().getStatus()).isEqualTo(BookingStatus.ACCEPTED);\n  }\n'})}),"\n",(0,i.jsxs)(t.p,{children:["There is another concept that makes our tests more readable, convenient, and easier to maintain, ",(0,i.jsx)(t.strong,{children:"Domain-Specific Testing Language"}),"\nThe idea is to create a set of functions and utilities to hide the details of the implementation of your test, the example above we can write\nit this way"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"@Test\n  public void testAcceptBooking() {\n    giving()\n        ._a_bookinId()\n    .when()\n        .we_accept_a_booking()\n    .then()\n        .the_booking_should_has_accepted_status();\n  }\n"})}),"\n",(0,i.jsxs)(t.p,{children:["As described by ",(0,i.jsx)(t.strong,{children:"Robert Martin"})," in his book ",(0,i.jsx)(t.strong,{children:"Clean Code"})," a clean test follow other rules that form the F.I.R.S.T acronym"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Fast: Tests shoud be fast"}),"\n",(0,i.jsx)(t.li,{children:"Independent: Tests should not depend on each other"}),"\n",(0,i.jsx)(t.li,{children:"Repeatable: Tests should be repeatable in any environment"}),"\n",(0,i.jsx)(t.li,{children:"Self-Validating: The tests should have a boolean output"}),"\n",(0,i.jsx)(t.li,{children:"Timely: Tests should be written before production code."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Finally, we want to think about tests as the compass to reach our destination which is the final secure, viable, and high-quality product we build."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://martinfowler.com/testing/",children:"Martin Fowler's blog"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.pearson.com/us/higher-education/program/Martin-Clean-Code-A-Handbook-of-Agile-Software-Craftsmanship/PGM63937.html",children:"Clean Code Book by Robert C.Martin"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://cucumber.io/blog/bdd/intro-to-bdd-and-tdd/",children:"Cucumber Blog"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.agilealliance.org/glossary/tdd/",children:"Agile Alliance"})}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},2089:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/software-testing-from-separate-activity-to-core-development-9cad4fb888f382f8dd9e54430b619909.jpeg"},672:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/test-pyramid-6ad7cfb6a008322bd4e552a7c5628d6d.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(6540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);