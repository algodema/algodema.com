"use strict";(self.webpackChunkalgodema=self.webpackChunkalgodema||[]).push([[4893],{1078:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=r(4848),i=r(8453);const a={slug:"designing-and-implementing-microservices-with-ddd-and-hexagonal-architecture.mdx",title:"Designing and Implementing Microservices with DDD and Hexagonal Architecture",date:"2022-10-02 15:12:03 +0100",authors:["reda"],tags:["hexagonal architecture","ddd","microservices","clean code"],id:"bmwhaad"},s="Design",o={permalink:"/blog/designing-and-implementing-microservices-with-ddd-and-hexagonal-architecture.mdx",source:"@site/blog/2022-10-02-microservices-from-design-to-implementation-with-ddd-and-hexagonal-architecture/2022-10-02-microservice-from-design-to-implementation-with-ddd-and-hexagonal-architecture.mdx",title:"Designing and Implementing Microservices with DDD and Hexagonal Architecture",description:"Use case",date:"2022-10-02T15:12:03.000Z",tags:[{inline:!0,label:"hexagonal architecture",permalink:"/blog/tags/hexagonal-architecture"},{inline:!0,label:"ddd",permalink:"/blog/tags/ddd"},{inline:!0,label:"microservices",permalink:"/blog/tags/microservices"},{inline:!0,label:"clean code",permalink:"/blog/tags/clean-code"}],readingTime:11.315,hasTruncateMarker:!1,authors:[{name:"Reda Jaifar",title:"Lead Developer",url:"https://github.com/reda-jaifar",imageURL:"https://avatars.githubusercontent.com/u/10919693?s=400&u=b30e8e86baebe277b11a4117560d601fd34bd245&v=4",key:"reda",page:null}],frontMatter:{slug:"designing-and-implementing-microservices-with-ddd-and-hexagonal-architecture.mdx",title:"Designing and Implementing Microservices with DDD and Hexagonal Architecture",date:"2022-10-02 15:12:03 +0100",authors:["reda"],tags:["hexagonal architecture","ddd","microservices","clean code"],id:"bmwhaad"},unlisted:!1,prevItem:{title:"Building RESTFul API With Spring Data",permalink:"/blog/building-restful-api-with-spring-data"},nextItem:{title:"Clean code: Write The Code You Want To Read (Part 2)",permalink:"/blog/clean-write-the-code-you-want-to-read-part2"}},c={authorsImageUrls:[void 0]},l=[{value:"Use case",id:"use-case",level:2},{value:"Personas and User Journey",id:"personas-and-user-journey",level:2},{value:"Architectural Style",id:"architectural-style",level:2},{value:"Domain Design",id:"domain-design",level:2},{value:"Pilot feature",id:"pilot-feature",level:3},{value:"Bootstrap the project",id:"bootstrap-the-project",level:2},{value:"Implement the <code>place order</code> feature using TDD",id:"implement-the-place-order-feature-using-tdd",level:2},{value:"Infrastructure implementation",id:"infrastructure-implementation",level:2},{value:"Conclusion",id:"conclusion",level:3},{value:"References:",id:"references",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(55).A+"",width:"1000",height:"500"})}),"\n",(0,t.jsx)(n.h2,{id:"use-case",children:"Use case"}),"\n",(0,t.jsx)(n.p,{children:"In this phase, we begin by collecting requirements from a business perspective to ensure a thorough understanding of the objectives. Once these requirements are established, we then investigate how architectural patterns and software development methodologies can be utilized to construct the product effectively."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Currently, local grocery stores must either visit large distribution companies or contact them individually to inquire about pricing, stock availability, and delivery schedules when placing orders. This process is time-consuming and inefficient for grocery managers.\nTo address this challenge, we propose developing a platform that enables managers to easily check prices, view stock levels, place orders, and track deliveries in one streamlined solution."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"personas-and-user-journey",children:"Personas and User Journey"}),"\n",(0,t.jsx)(n.p,{children:"To develop a system that effectively tackles the relevant challenges and provides significant value, it is imperative that every aspect of the system is designed with users in focus. This makes it vital to thoroughly understand their frustrations, motivations, and expectations regarding the new product we are creating"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Grocery Manager"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Profile:"})," Typically has a bachelor's degree."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Frustrations:"})," Running out of stock, lack of visibility over deliveries, price comparison is a time-consuming task."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Motivations:"})," Save management time, focus on customer relationships and service quality, ensure stock levels are always adequate."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"architecture--design",children:"Architecture & Design"}),"\n",(0,t.jsx)(n.p,{children:"In the previous section, we presented a brief overview of the business domain, requirements, and one of the system's future users. At this stage, we need to make architectural and design decisions."}),"\n",(0,t.jsx)(n.h2,{id:"architectural-style",children:"Architectural Style"}),"\n",(0,t.jsx)(n.p,{children:"While the brainstorming outputs for this example are somewhat limited, we can easily envision various services, such as Order Service, Provider Service, Delivery Service, and Product Service. Now, suppose we want to develop all these services simultaneously, with different teams specializing in distinct technology stacks. It is essential that these services remain decoupled from one another, ensuring that a change in the design of one service does not affect the others."}),"\n",(0,t.jsx)(n.p,{children:"Regarding deployment, we aim to deploy the Product Service before the others to deliver value as quickly as possible. This necessitates that the services be independently deployable and scalable."}),"\n",(0,t.jsx)(n.p,{children:"By organizing our product around services, we can enhance fault tolerance. For example, if the Delivery Service is unavailable, users should still be able to access other services. For these reasons, we believe that a microservices architecture is the most suitable architectural style for this project."}),"\n",(0,t.jsx)(n.p,{children:"Regarding deployment, we aim to deploy the Product Service before the others to deliver value as quickly as possible. This requires that services be independently deployable and scalable."}),"\n",(0,t.jsx)(n.h2,{id:"domain-design",children:"Domain Design"}),"\n",(0,t.jsx)(n.p,{children:"The complexity of the business domain, the rules, and the number of services (system components) lead us to consider Domain-Driven Design (DDD). So, what is DDD?"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["DDD, as described in the excellent book ",(0,t.jsx)(n.em,{children:"Domain-Driven Design"})," by Eric Evans (Addison-Wesley Professional, 2003), is an approach to building complex software applications that is centered around developing an object-oriented domain model.",(0,t.jsx)(n.br,{}),"\n","A domain model captures knowledge about a domain in a form that can be used to solve problems within that domain."]})}),"\n",(0,t.jsx)(n.p,{children:"In traditional object-oriented design, a domain model is a collection of interconnected classes. For example:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Figure 1",src:r(8042).A+"",width:"452",height:"361"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Figure 1: Object Oriented Domain Model"})}),"\n",(0,t.jsx)(n.p,{children:'With this design, operations such as loading or deleting an Order object encompass more than just the Order itself; they also involve related data, such as order items and delivery details. The absence of clear boundaries complicates updates, as business rules, imagine a business logic such as "minimum order amounts" must be enforced meticulously to preserve invariants'}),"\n",(0,t.jsx)(n.p,{children:"This is where DDD can help, by using Aggregates"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"An aggregate is a cluster of domain objects within a boundary that can be treated as a unit"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Figure 2 shows a simplified version of the domain model aggregates. Designing domain model using the DDD Aggregate pattern recommand that aggregates match a set of rules: 1. Reference only the aggregate root 2. Inter-aggregate references must use primary keys 3. One transaction creates or updates one aggregate"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Figure 2",src:r(9467).A+"",width:"514",height:"397"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Figure 2: Domain Model Aggregates Simplified"})}),"\n",(0,t.jsx)(n.h1,{id:"implementation",children:"Implementation"}),"\n",(0,t.jsxs)(n.p,{children:["Now that we have designed the domain model aggregates and the achitecture implementation view ",(0,t.jsx)(n.strong,{children:"Microservices"}),", let's dive into the architecture logical view ",(0,t.jsx)(n.strong,{children:"Hexagonal Architecture"})," , please refer to this post to learn about\n",(0,t.jsx)(n.a,{href:"/blog/software-architecture-logical-view#the-hexagonal-architecture-style",children:"Architecture Implementation view, Hexagonal option and why we adopt it"})]}),"\n",(0,t.jsx)(n.p,{children:"I'm going to use Kotlin as programming language and maven as a build tool"}),"\n",(0,t.jsx)(n.h3,{id:"pilot-feature",children:"Pilot feature"}),"\n",(0,t.jsx)(n.h2,{id:"bootstrap-the-project",children:"Bootstrap the project"}),"\n",(0,t.jsx)(n.p,{children:"Let's consider the following feature: place order"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"As a grocery manager, I need to place an order for a product so I can provision the stock\nConstraint 1: The minimum order quantity is 20."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Using maven build tool, let's create a project for kotlin."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"create a maven project using the following cmd:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"    mvn archetype:generate \\\n    -DgroupId=com.algodema \\\n    -DartifactId=grocery-marketplace-order-service \\\n    -DarchetypeArtifactId=maven-archetype-quickstart \\\n    -DarchetypeVersion=1.4 \\\n    -DinteractiveMode=false\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"convert the project to kotlin by replacing the src/main/java and src/test/java directories with src/main/kotlin"}),"\n",(0,t.jsx)(n.li,{children:"modify pom.xml for Kotlin, JUnit, and AspectJ"}),"\n",(0,t.jsxs)(n.li,{children:["checkout the project on github: (",(0,t.jsx)(n.a,{href:"https://github.com/algodema/microservices-labs/tree/main/grocery-marketplace-order-service",children:"https://github.com/algodema/microservices-labs/tree/main/grocery-marketplace-order-service"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"implement-the-place-order-feature-using-tdd",children:["Implement the ",(0,t.jsx)(n.code,{children:"place order"})," feature using TDD"]}),"\n",(0,t.jsx)(n.p,{children:"What about starting with writing a test scenario for our uese case using TDD (Test Driven Development), this approach help me immediately implement business logic,\nin this case ensure no order will be created with quantity less than 20 unit."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Kotlin",children:"    @Test\n    fun `should not place order with quantity lower than 20`() {\n\n        val productId: ProductId = ProductId(UUID.randomUUID())\n        val providerId: ProviderId = ProviderId(UUID.randomUUID())\n        val quantity: Int = 16\n\n        val orderCreated = placeOrder.invoke(productId, providerId, quantity)\n\n        Assertions.assertEquals(orderCreated.state, OrderState.PLACED)\n    }\n"})}),"\n",(0,t.jsxs)(n.p,{children:['I started by creating "PlaceOrderFeatureTest" test class, then writing my first test as we see in the snippet above. If we look at the project structure in figure below:\n',(0,t.jsx)(n.img,{alt:"Figure 3",src:r(3594).A+"",width:"2188",height:"1338"})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Within the ",(0,t.jsx)(n.em,{children:"domain"})," package, I created two sub-packages: ",(0,t.jsx)(n.em,{children:"features"})," and ",(0,t.jsx)(n.em,{children:"models"}),". The ",(0,t.jsx)(n.em,{children:"models"})," sub-package includes representations of key domain entities, such as ",(0,t.jsx)(n.em,{children:"Order"}),", ",(0,t.jsx)(n.em,{children:"OrderId"}),", ",(0,t.jsx)(n.em,{children:"ProductId"}),", and ",(0,t.jsx)(n.em,{children:"OrderState"}),".\nMeanwhile, the ",(0,t.jsx)(n.em,{children:"features"})," sub-package contains feature-specific classes, with ",(0,t.jsx)(n.em,{children:"PlaceOrderFeature"})," being the current implementation. It's important to note that in the ",(0,t.jsx)(n.em,{children:"models"})," package, we organize classes according to their respective business domains."]})}),"\n",(0,t.jsxs)(n.p,{children:["The approach involves declaring instances of ",(0,t.jsx)(n.code,{children:"productId"}),", ",(0,t.jsx)(n.code,{children:"providerId"}),", and ",(0,t.jsx)(n.code,{children:"placeOrder"})," prior to the existence of their respective classes. Subsequently, these classes are developed and organized into packages in accordance with the principles of hexagonal architecture,\nwhich positions business logic at the core, as represented by the domain package."]}),"\n",(0,t.jsx)(n.p,{children:"We continue writing tests, they should be fixed and failed as we implement the business requirements in our place order feature."}),"\n",(0,t.jsx)(n.h2,{id:"infrastructure-implementation",children:"Infrastructure implementation"}),"\n",(0,t.jsxs)(n.p,{children:["Now that we created our first feature, we would like to expose it through a REST API endpoint, but also persist the created Order\nin a storage, for the purpose of this tutorial, we will implement a ",(0,t.jsx)(n.strong,{children:"in-memory"})," persistence."]}),"\n",(0,t.jsx)(n.p,{children:"The hexagonal architecture defines ports and adapters as interfaces and implementations consequentially used to make the domain interacting and connecting with other components of the application such as (persistency, api, messaging, ...)"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.strong,{children:"port"})," defines a set of operations that facilitate interaction between business logic and external systems.\nIn our Kotlin example, these ports are represented by Java/Kotlin interfaces.\nAn ",(0,t.jsx)(n.strong,{children:"adapter"})," manages requests from external sources or from the business logic itself by invoking external applications or services, such as databases or message brokers.\nBoth ports and adapters can be categorized as inbound or outbound to distinguish between requests directed toward the business logic and those initiated by it."]})}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{children:(0,t.jsx)(n.code,{children:"Ports destination packages"})}),(0,t.jsx)(n.p,{children:"Ports will reside in the same root package as domain because they are integrated part of it. For our example: com.algodema.grocery.markeplace.domain.ports\nAs mentioned before, we separate them into 2 distinct sub packages:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"com.algodema.grocery.markeplace.domain.ports.inbound"}),"\n",(0,t.jsx)(n.li,{children:"com.algodema.grocery.markeplace.domain.ports.outbound"}),"\n"]}),(0,t.jsx)(n.p,{children:"Where adapters reside in the infrascture root package that we create to group all infrastcutures adapters such as:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"REST API controllers classes"}),"\n",(0,t.jsx)(n.li,{children:"InMemory, Postgres or any other Repository implementations that serve to persist data."}),"\n",(0,t.jsx)(n.li,{children:"External Systems integration such as SAPClient for example."}),"\n"]})]}),"\n",(0,t.jsx)(n.p,{children:"Let's create the follwing ports and adapters:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"OrderRepository as an outbond port."}),"\n",(0,t.jsx)(n.li,{children:"PlaceOrder as inbound port."}),"\n",(0,t.jsx)(n.li,{children:"OrdersApi as inbound adapter that will use PlaceOrder port to expose the feature as REST API endpoint."}),"\n",(0,t.jsx)(n.li,{children:"InMemoryOrderRepostory as an outbound adapter that will implement the OrderRepository port interface."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Below we created the InMemoryOrderRepository class that implements the domain port OrderRepository interface, Note also that we annotate this class\nwith the Spring framework @Repository in order to make it discoverable by Spring IoC container. Remember that we use Spring at the infrastcuture level without any coupling with the domain."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'    package com.algodema.grocery.marketplace.orderservice.infrastructure.spi\n\n    import com.algodema.grocery.marketplace.orderservice.domain.models.order.Order\n    import com.algodema.grocery.marketplace.orderservice.domain.ports.outbound.OrderRepository\n    import org.springframework.stereotype.Repository\n\n    @Repository\n    open class InMemoryOrderRepository: OrderRepository {\n        override fun save(order: Order): Order {\n            throw NotImplementedError("not yet implemented")\n        }\n    }\n'})}),"\n",(0,t.jsx)(n.p,{children:"Next, we will introduce the Spring framework at the infrastructure layer to create a REST API. We rely on the Spring framework's dependency injection to make our component connections decoupled.\nUsing Dependency Injection, the place order feature will hold an instance of OrderRepository to save the created order, and at the infrastructure's API adapter, the REST Controller will hold instances of our features by dependency injection as well."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"This is where Hexagonal Architecture shines. We can replace Spring by any other framework for exposing REST APIs or handling persistence without modifying the code within our domain.\nThis decoupling keeps the domain safe, adaptable, and maintainable, allowing us to change or add new business rules independently of the infrastructure.\nFor example, if we decide to switch to the Quarkus framework because it is better suited for cloud-native environments, the domain remains completely unaffected."})}),"\n",(0,t.jsx)(n.p,{children:"To enable Spring to identify our features for dependency injection, we will create a new root package designated as ddd. This package will encompass the necessary annotations:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Feature Annotation: marks our features classes"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"    package com.algodema.grocery.marketplace.orderservice.ddd\n\n    @Retention(AnnotationRetention.RUNTIME)\n    annotation class Feature()\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After creation, we utilize the Feature annotation to designate our ",(0,t.jsx)(n.strong,{children:"place order"})," functionality accordingly."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Kotlin",children:"    @Feature\n    class PlaceOrder(private val repository: OrderRepository) : PlaceOrder {\n        // ...\n    }\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"As previously noted, we will be utilizing Spring Boot for this project. Therefore, it is essential to incorporate the Spring Boot and Spring Web dependencies into our project, as well as to include the Spring Boot Maven plugin within the Maven build plugins."})}),"\n",(0,t.jsx)(n.p,{children:"Let's create the OrdersApi in the infrastructure package under the sub package api, as follow:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Kotlin",children:'    package com.algodema.grocery.marketplace.orderservice.infrastructure.api\n\n    import com.algodema.grocery.marketplace.orderservice.domain.features.PlaceOrder\n    import com.algodema.grocery.marketplace.orderservice.domain.models.order.Order\n    import com.algodema.grocery.marketplace.orderservice.domain.models.product.ProductId\n    import com.algodema.grocery.marketplace.orderservice.domain.models.provider.ProviderId\n    import org.springframework.web.bind.annotation.PostMapping\n    import org.springframework.web.bind.annotation.RequestBody\n    import org.springframework.web.bind.annotation.RequestMapping\n    import org.springframework.web.bind.annotation.RestController\n\n    @RestController\n    @RequestMapping("/orders")\n    class OrderServiceApi(private val placeOrder: PlaceOrder) {\n\n        @PostMapping\n        fun placeOrder(@RequestBody placeOrderRequest: PlaceOrderRequest): Order {\n\n            val productId: ProductId = ProductId.from(placeOrderRequest.productId)\n            val providerId: ProviderId = ProviderId.from(placeOrderRequest.providerId)\n            val quantity: Int = placeOrderRequest.quantity\n\n            return placeOrder.invoke(productId, providerId, quantity)\n        }\n\n    }\n'})}),"\n",(0,t.jsx)(n.p,{children:"We now need to configure Spring to recognize our annotated features, enabling them to be loaded into its bean container.\nTo achieve this, we will create a configuration class within a subpackage named config under the infrastructure package. Below is our configuration class:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Kotlin",children:'    package com.algodema.grocery.marketplace.orderservice.infrastructure.config\n\n    import com.algodema.grocery.marketplace.orderservice.ddd.Feature\n    import org.springframework.context.annotation.ComponentScan\n    import org.springframework.context.annotation.Configuration\n    import org.springframework.context.annotation.FilterType\n\n    @Configuration\n    @ComponentScan(\n        basePackages = ["com.algodema.grocery.marketplace.orderservice"],\n        includeFilters = [ComponentScan.Filter(\n            type = FilterType.ANNOTATION,\n            value = [Feature::class]\n        )]\n    )\n    open class DomainInjectionConfig\n'})}),"\n",(0,t.jsx)(n.p,{children:"The final step is to transform our application's entry point class into a Spring Boot application as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Kotlin",children:"    package com.algodema.grocery.marketplace.orderservice\n\n    import org.springframework.boot.autoconfigure.SpringBootApplication\n    import org.springframework.boot.runApplication\n\n\n    @SpringBootApplication\n    open class App\n\n    fun main(args: Array<String>) {\n        runApplication<App>(*args)\n    }\n"})}),"\n",(0,t.jsx)(n.p,{children:'You may have noticed the presence of the keyword "open" preceding the classes App, DomainInjectionConfig, and InMemoryOrderRepository. Here is the rationale behind this choice:'}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"In Kotlin, classes are final by default, meaning they cannot be subclassed unless explicitly marked as open.\nThis is different from languages like Java, where classes are open for inheritance by default unless marked as final."}),(0,t.jsx)(n.p,{children:"In Spring Boot (and Spring Framework in general), many of its features rely on proxy-based mechanisms. These mechanisms involve subclassing beans to apply aspects like transaction management, security, lazy initialization, and other cross-cutting concerns.\nFor these proxy-based features to work, Spring needs to be able to create subclasses of certain beans, which means the classes need to be open."})]}),"\n",(0,t.jsxs)(n.p,{children:["For the purpose of this exercice we decided to use the ",(0,t.jsx)(n.strong,{children:"open"})," modifier to make our classes annotated with Spring not final as we have few classes,\nbut for large application we can use the ",(0,t.jsx)(n.a,{href:"https://kotlinlang.org/docs/all-open-plugin.html",children:"All-open compiler plugin"})," instead of preceeding each classe required to be open with the ",(0,t.jsx)(n.strong,{children:"open"})," keyword."]}),"\n",(0,t.jsx)(n.p,{children:"Finally, let's run the application either using your IDE such as Intellij Idea or from command line using maven as follow:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"mvn spring-boot:run\n"})}),"\n",(0,t.jsx)(n.p,{children:"Below a screenshot of the place order request response overview:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Screenshot",src:r(2321).A+"",width:"1630",height:"1316"})}),"\n",(0,t.jsx)(n.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"This post has walked you through the entire process of building a fully functional Microservice, from design to implementation, using DDD and Hexagonal Architecture.\nMy goal was to share knowledge and experiences regarding the methodology, architecture, and patterns needed to create a maintainable, extensible, and deployable Microservice. However, delivering a production-ready product requires addressing more advanced aspects. Below is a non-exhaustive list of such considerations:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Api Errors Handling"}),"\n",(0,t.jsx)(n.li,{children:"Application security"}),"\n",(0,t.jsx)(n.li,{children:"Database persistency"}),"\n",(0,t.jsx)(n.li,{children:"Api documentation"}),"\n",(0,t.jsx)(n.li,{children:"Env variable config"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Keep in mind that no single pattern, architectural style, or programming language suits all software product requirements. It's important to focus on understanding and defining the requirements, parameters, and challenges to make the most informed and effective decisions"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.oreilly.com/library/view/domain-driven-design-tackling/0321125215/",children:"Domain Driven Design"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.manning.com/books/microservices-patterns",children:"Microservies Patterns"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.oreilly.com/library/view/clean-code-a/9780136083238/",children:"Clean Code: A Handbook of Agile Software Craftsmanship by Robert C. Martin"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.spring.io/spring-framework/reference/core/beans/dependencies/factory-collaborators.html",children:"Dependency Injection"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.spring.io/spring-framework/docs/3.2.x/spring-framework-reference/html/beans.html",children:"The IoC Container"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://algodema.com/blog/software-architecture-logical-view",children:"Software Architecture: The Logical View"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://algodema.com/blog/software-architecture-implementation-view",children:"Software Architecture: The Implementation View"})}),"\n"]}),"\n",(0,t.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8042:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/algodema_blog_bmwhaad_fig1-2024-09-29-210114-1949d8c0100d6f863442b9bc398e373f.svg"},9467:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/algodema_blog_bmwhaad_fig2-2024-09-29-210501-1c056cbef5309242e62dd7dd1374015a.svg"},3594:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/order-service-project-structure-1-07a13dc1b2314b8b2a8d8e3aa5c9d911.png"},2321:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/orders-api-place-order-overview-56604468c5189fef62b30d0a41cea215.png"},55:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/build-microservice-with-hexagonal-architecture-and-ddd-879a577b2bcbf0710783af0e12a38018.png"},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>o});var t=r(6540);const i={},a=t.createContext(i);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);