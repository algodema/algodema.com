"use strict";(self.webpackChunkalgodema=self.webpackChunkalgodema||[]).push([[8065],{1553:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=t(4848),a=t(8453),s=t(1432);const r={slug:"building-restful-api-with-spring-data",title:"Building RESTFul API With Spring Data",date:"2023-01-01 20:19:00 +0100",authors:["reda"],tags:["api","restful","rest api","spring data"],id:"bmwhaad"},l=void 0,o={permalink:"/blog/building-restful-api-with-spring-data",source:"@site/blog/2023-01-01-building-restful-api-with-spring-data/2023-01-01-building-restful-api-with-spring-data.mdx",title:"Building RESTFul API With Spring Data",description:"author",date:"2023-01-01T20:19:00.000Z",tags:[{inline:!0,label:"api",permalink:"/blog/tags/api"},{inline:!0,label:"restful",permalink:"/blog/tags/restful"},{inline:!0,label:"rest api",permalink:"/blog/tags/rest-api"},{inline:!0,label:"spring data",permalink:"/blog/tags/spring-data"}],readingTime:8.685,hasTruncateMarker:!1,authors:[{name:"Reda Jaifar",title:"Lead Developer",url:"https://github.com/reda-jaifar",imageURL:"https://avatars.githubusercontent.com/u/10919693?s=400&u=b30e8e86baebe277b11a4117560d601fd34bd245&v=4",key:"reda",page:null}],frontMatter:{slug:"building-restful-api-with-spring-data",title:"Building RESTFul API With Spring Data",date:"2023-01-01 20:19:00 +0100",authors:["reda"],tags:["api","restful","rest api","spring data"],id:"bmwhaad"},unlisted:!1,nextItem:{title:"Designing and Implementing Microservices with DDD and Hexagonal Architecture",permalink:"/blog/designing-and-implementing-microservices-with-ddd-and-hexagonal-architecture.mdx"}},d={authorsImageUrls:[void 0]},c=[{value:"What is a RESTful API?",id:"what-is-a-restful-api",level:2},{value:"The Richardson Maturity Model",id:"the-richardson-maturity-model",level:2},{value:"Level 0: The Swamp of POX",id:"level-0-the-swamp-of-pox",level:3},{value:"Characteristics:",id:"characteristics",level:4},{value:"Level 1: Resources",id:"level-1-resources",level:3},{value:"Characteristics:",id:"characteristics-1",level:4},{value:"Example:",id:"example",level:4},{value:"Level 2: HTTP Verbs",id:"level-2-http-verbs",level:3},{value:"Characteristics:",id:"characteristics-2",level:4},{value:"Example:",id:"example-1",level:4},{value:"Level 3: Hypermedia Controls (HATEOAS)",id:"level-3-hypermedia-controls-hateoas",level:3},{value:"Characteristics:",id:"characteristics-3",level:4},{value:"Example:",id:"example-2",level:4},{value:"Build a product query api using Spring Data",id:"build-a-product-query-api-using-spring-data",level:2},{value:"What is Spring Data",id:"what-is-spring-data",level:3},{value:"The Grocery Marketplace Product Query API Project",id:"the-grocery-marketplace-product-query-api-project",level:3},{value:"Database Schema",id:"database-schema",level:4},{value:"JPA Entities",id:"jpa-entities",level:4},{value:"Repositories",id:"repositories",level:4},{value:"Configurations",id:"configurations",level:4},{value:"Application in Action",id:"application-in-action",level:4},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const i={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"author",src:t(8340).A+"",width:"2940",height:"1960"}),"\n",(0,n.jsx)(i.a,{href:"https://unsplash.com/photos/macro-photography-of-green-leaf-FZ2EM9aeR9o",children:"Photo by Markus Spiske"})]}),"\n","\n",(0,n.jsx)(i.h2,{id:"what-is-a-restful-api",children:"What is a RESTful API?"}),"\n",(0,n.jsxs)(i.p,{children:["RESTful APIs are a cornerstone of modern web development, allowing systems to communicate over HTTP using principles of ",(0,n.jsx)(i.strong,{children:"Representational State Transfer (REST)"}),". RESTful APIs are designed to be scalable, stateless, and follow the HTTP protocol standards, making them highly effective for a wide range of applications."]}),"\n",(0,n.jsxs)(i.p,{children:["In this blog, we'll explore the levels of RESTful APIs as defined by the ",(0,n.jsx)(i.strong,{children:"Richardson Maturity Model"}),", a framework that describes the stages of RESTful API maturity."]}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h2,{id:"the-richardson-maturity-model",children:"The Richardson Maturity Model"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.strong,{children:"Richardson Maturity Model"})," breaks down RESTful APIs into four distinct levels, each building upon the previous one. These levels highlight the increasing adherence to REST principles."]}),"\n",(0,n.jsx)(i.h3,{id:"level-0-the-swamp-of-pox",children:"Level 0: The Swamp of POX"}),"\n",(0,n.jsx)(i.p,{children:"At this level, APIs act as simple endpoints that accept requests and return responses. These APIs are typically not RESTful\u2014they often use HTTP as a transport protocol rather than leveraging its full capabilities."}),"\n",(0,n.jsx)(i.h4,{id:"characteristics",children:"Characteristics:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"No standard structure for requests or responses."}),"\n",(0,n.jsx)(i.li,{children:"Often uses XML or JSON but lacks meaningful use of HTTP methods."}),"\n",(0,n.jsx)(i.li,{children:"Example:"}),"\n"]}),"\n",(0,n.jsx)(s.A,{children:"\nPOST /api/resource HTTP/1.1\nHost: example.com\nContent-Type: text/xml\n\n<data>\n<value>Example</value>\n</data>\n"}),"\n",(0,n.jsx)(i.p,{children:"This is more like an RPC (Remote Procedure Call) using HTTP as a vehicle."}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h3,{id:"level-1-resources",children:"Level 1: Resources"}),"\n",(0,n.jsxs)(i.p,{children:["At Level 1, APIs start organizing data into distinct ",(0,n.jsx)(i.strong,{children:"resources"}),". Each resource is identified by a unique URI (Uniform Resource Identifier)."]}),"\n",(0,n.jsx)(i.h4,{id:"characteristics-1",children:"Characteristics:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Resource-based design."}),"\n",(0,n.jsx)(i.li,{children:"Unique URIs for different entities."}),"\n",(0,n.jsx)(i.li,{children:"Still lacks proper use of HTTP methods."}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"example",children:"Example:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-http",children:"GET /api/users/12345 HTTP/1.1\nHost: example.com\n"})}),"\n",(0,n.jsxs)(i.p,{children:["In this example, the URI ",(0,n.jsx)(i.code,{children:"/api/users/12345"})," identifies a specific user resource."]}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h3,{id:"level-2-http-verbs",children:"Level 2: HTTP Verbs"}),"\n",(0,n.jsxs)(i.p,{children:["At Level 2, APIs begin using ",(0,n.jsx)(i.strong,{children:"HTTP methods"})," like ",(0,n.jsx)(i.code,{children:"GET"}),", ",(0,n.jsx)(i.code,{children:"POST"}),", ",(0,n.jsx)(i.code,{children:"PUT"}),", and ",(0,n.jsx)(i.code,{children:"DELETE"})," to indicate the desired operation on resources."]}),"\n",(0,n.jsx)(i.h4,{id:"characteristics-2",children:"Characteristics:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Full utilization of HTTP methods."}),"\n",(0,n.jsx)(i.li,{children:"Improved clarity of intent."}),"\n",(0,n.jsxs)(i.li,{children:["Status codes convey the results of operations (e.g., ",(0,n.jsx)(i.code,{children:"200 OK"}),", ",(0,n.jsx)(i.code,{children:"404 Not Found"}),")."]}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"example-1",children:"Example:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-http",children:'POST /api/users HTTP/1.1\nHost: example.com\nContent-Type: application/json\n\n{\n  "name": "Jane Doe",\n  "email": "jane.doe@example.com"\n}\n'})}),"\n",(0,n.jsxs)(i.p,{children:["This example demonstrates creating a new user resource using a ",(0,n.jsx)(i.code,{children:"POST"})," request."]}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h3,{id:"level-3-hypermedia-controls-hateoas",children:"Level 3: Hypermedia Controls (HATEOAS)"}),"\n",(0,n.jsxs)(i.p,{children:["At the highest level, APIs provide ",(0,n.jsx)(i.strong,{children:"Hypermedia as the Engine of Application State (HATEOAS)"}),". This means responses include links to related actions or resources, allowing clients to navigate the API dynamically."]}),"\n",(0,n.jsx)(i.h4,{id:"characteristics-3",children:"Characteristics:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Responses include hypermedia links."}),"\n",(0,n.jsx)(i.li,{children:"Self-documenting API through navigable relationships."}),"\n",(0,n.jsx)(i.li,{children:"Closest adherence to REST principles."}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"example-2",children:"Example:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:'{\n  "id": 12345,\n  "name": "Jane Doe",\n  "links": [\n    { "rel": "self", "href": "/api/users/12345" },\n    { "rel": "update", "href": "/api/users/12345" },\n    { "rel": "delete", "href": "/api/users/12345" }\n  ]\n}\n'})}),"\n",(0,n.jsx)(i.p,{children:"This response includes links that guide clients to other actions, such as updating or deleting the user resource."}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h2,{id:"build-a-product-query-api-using-spring-data",children:"Build a product query api using Spring Data"}),"\n",(0,n.jsx)(i.p,{children:"Let's condiser the following business requirement we want to address:"}),"\n",(0,n.jsxs)(i.blockquote,{children:["\n",(0,n.jsx)(i.p,{children:"Currently, local grocery stores must either visit large distribution companies or contact them individually to inquire about pricing, stock availability, and delivery schedules when placing orders. This process is time-consuming and inefficient for grocery managers.\nTo address this challenge, we propose developing a platform that enables managers to easily check prices, view stock levels, place orders, and track deliveries in one streamlined solution."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"We aim to develop a RESTful API to provide access to product data, enabling consumers like microservices, mobile apps, and web applications to retrieve and display the information. This will allow end users, such as grocery store managers, to view, read, and stay informed about the available products on our platform."}),"\n",(0,n.jsx)(i.h3,{id:"what-is-spring-data",children:"What is Spring Data"}),"\n",(0,n.jsx)(i.p,{children:"Spring Data is a part of the broader Spring Framework ecosystem that simplifies data access in Java applications. It provides a set of powerful tools and abstractions that make it easier to interact with various data sources, such as relational databases, NoSQL databases, and more. Spring Data eliminates a lot of the boilerplate code typically involved in working with databases, enabling developers to focus on the business logic rather than the intricacies of data access."}),"\n",(0,n.jsx)(i.p,{children:'In our case we will use PostgresSQL database, so let\'s first create a docker container for postgres and create also our database "grocery-marketplace":'}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-sh",children:"docker run -d \\\n  --name postgres-db \\\n  -e POSTGRES_USER=postgres \\\n  -e POSTGRES_PASSWORD=postgres \\\n  -e POSTGRES_DB=grocery-marketplace \\\n  -p 5432:5432 \\\n  postgres:latest\n"})}),"\n",(0,n.jsx)(i.h3,{id:"the-grocery-marketplace-product-query-api-project",children:"The Grocery Marketplace Product Query API Project"}),"\n",(0,n.jsx)(i.p,{children:"Our project is a maven with the following main dependencies:"}),"\n",(0,n.jsx)(i.p,{children:"Here is the informative list of the dependencies from the provided XML:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"spring-boot-starter-data-jpa"})," (Spring Boot, JPA support)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"spring-boot-starter-data-rest"})," (Spring Boot, Data REST support)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"flyway-core"})," (Flyway, Database migrations)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"flyway-database-postgresql"})," (Flyway, PostgreSQL database support)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"kotlin-reflect"})," (Kotlin, Reflection support)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"kotlin-stdlib"})," (Kotlin, Standard library)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"postgresql"})," (PostgreSQL JDBC driver, runtime scope)"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"An operational application that covers our use case is shared through Github at the end of this post."}),"\n",(0,n.jsx)(i.admonition,{type:"tip",children:(0,n.jsxs)(i.p,{children:["To start your own Spring Boot application, use ",(0,n.jsx)(i.a,{href:"https://start.spring.io/",children:"Spring Initializr"}),", an online tool that helps you quickly bootstrap your Spring project. You can specify the programming language, build tool, and dependencies."]})}),"\n",(0,n.jsx)(i.h4,{id:"database-schema",children:"Database Schema"}),"\n",(0,n.jsx)(i.p,{children:"There are several strategies you can use to create and manage tables in a PostgreSQL database, with Flyway being one of the most popular tools for handling database migrations in a structured way.\nLet's see how to intstruments Flyway to create our tables and inserts sample data."}),"\n",(0,n.jsx)(i.p,{children:"Flyway is a versioned migration tool that allows you to manage your database schema in a controlled and repeatable way.\nIt works by applying SQL-based migration scripts to your database."}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.strong,{children:"Create SQL Migration Scripts"})}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Flyway applies migrations sequentially based on versioned SQL scripts. These scripts should follow a naming convention like V1__Initial_schema.sql, V1__create_product_table.sql, etc."}),"\n",(0,n.jsx)(i.p,{children:"Below a snippet of our V1__create_product_table.sql"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-sql",children:"-- Create tables for all related entities\nCREATE TABLE category (\n    id INT PRIMARY KEY,\n    name VARCHAR(100) NOT NULL\n);\n\n-- Sample Data Insertion for related tables\n\n-- Insert categories\nINSERT INTO category (id, name) VALUES (1, 'Electronics');\nINSERT INTO category (id, name) VALUES (2, 'Furniture');\nINSERT INTO category (id, name) VALUES (3, 'Clothing');\n"})}),"\n",(0,n.jsxs)(i.ol,{start:"2",children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.strong,{children:"Flyway Configuration"})}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"You can configure Flyway in your application.yml (for Spring Boot) to point to your PostgreSQL database."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-yaml",children:"  flyway:\n    enabled: true\n    locations: classpath:db/migration\n    baseline-on-migrate: true\n    clean-disabled: falsek\n"})}),"\n",(0,n.jsxs)(i.admonition,{type:"info",children:[(0,n.jsx)(i.mdxAdmonitionTitle,{}),(0,n.jsx)(i.p,{children:"Running Migrations: When you start your Spring Boot application, Flyway will automatically detect and run any pending migrations in the db/migration directory, creating or modifying tables in the PostgreSQL database."})]}),"\n",(0,n.jsx)(i.h4,{id:"jpa-entities",children:"JPA Entities"}),"\n",(0,n.jsx)(i.p,{children:"In JPA (Java Persistence API), an entity is a lightweight, persistent domain object that is mapped to a table in a relational database. It represents a record in the database and can be used to interact with that record through the application."}),"\n",(0,n.jsx)(i.p,{children:"Below we define our first JPA Entity Category, which defines the category of product such as Electronics, Clothing, etc ..."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-kotlin",children:"@Entity\ndata class Category(\n    @Id\n    @GeneratedValue(strategy = GenerationType.SEQUENCE)\n    val id: Int? = null,\n    val name: String\n)\n"})}),"\n",(0,n.jsx)(i.admonition,{type:"warning",children:(0,n.jsxs)(i.p,{children:["Note that we didn't use the ",(0,n.jsx)(i.code,{children:"@Table"})," annotation since the entity and table names are case-sensitive and match. If your table name differs, use ",(0,n.jsx)(i.code,{children:'@Table(name = "tablename")'}),"."]})}),"\n",(0,n.jsx)(i.h4,{id:"repositories",children:"Repositories"}),"\n",(0,n.jsx)(i.p,{children:"a Spring Data Repository is an interface that allows you to interact with a data store (e.g., a relational database like MySQL, or a NoSQL database like MongoDB) without needing to write the implementation of the basic CRUD (Create, Read, Update, Delete) operations yourself.\nIn our case we will use the Spring Data JPA Repository which is a specific type of repository provided by the Spring Data project that simplifies the implementation of the Data Access Layer (DAL) for JPA-based (Java Persistence API) applications.\nBelow a snippet of our CategoryRepository:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-kotlin",children:"@Repository\ninterface CategoryRepository : JpaRepository<Category, Int>\n"})}),"\n",(0,n.jsx)(i.p,{children:"As we may notice all we need to do is to implement an the generic interface JpaRepository that takes as first type an entity and a second type the identifier of the entity."}),"\n",(0,n.jsx)(i.h4,{id:"configurations",children:"Configurations"}),"\n",(0,n.jsx)(i.p,{children:"By default, Spring Data REST provides basic CRUD operations for the entities it exposes, including: GET, POST, PUT, and DELETE. In order to restrict operations to readonly one by implementing the following Spring interface:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-kotlin",children:'@Configuration\nclass SpringDataRestConfiguration : RepositoryRestConfigurer {\n  companion object {\n        const val BASE_PATH = "/grocery/marketplace/query/api/v1"\n    }\n  override fun configureRepositoryRestConfiguration(\n        config: RepositoryRestConfiguration,\n        cors: CorsRegistry,\n    ) {\n        val exposureConfiguration = config.setBasePath(BASE_PATH).exposureConfiguration\n        exposureConfiguration.withItemExposure { metadata: ResourceMetadata?, httpMethods: ConfigurableHttpMethods ->\n            httpMethods.disable(HttpMethod.PUT)\n                .disable(HttpMethod.PATCH).disable(HttpMethod.POST).disable(HttpMethod.DELETE)\n        }\n            .withCollectionExposure { metadata: ResourceMetadata?, httpMethods: ConfigurableHttpMethods ->\n                httpMethods.disable(HttpMethod.PUT)\n                    .disable(HttpMethod.PATCH).disable(HttpMethod.POST).disable(HttpMethod.DELETE)\n            }\n    }\n}\n'})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:'First we set the default base path of our query api to: "/grocery/marketplace/query/api/v1"'}),"\n",(0,n.jsx)(i.li,{children:"Second we restricted the allowed operations to only GET"}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"application-in-action",children:"Application in Action"}),"\n",(0,n.jsx)(i.p,{children:"When starting our Spring Boot Application, the Flyway will create the tables defined in our migration files and insert the data"}),"\n",(0,n.jsxs)(i.admonition,{type:"tip",children:[(0,n.jsx)(i.p,{children:"You may want to connect to the created postgres server and view databases, you can create a pgadmin docker container as follow"}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-sh",children:"docker run -p 5050:80 \\\n  -e PGADMIN_DEFAULT_EMAIL=admin@example.com \\\n  -e PGADMIN_DEFAULT_PASSWORD=admin \\\n  --name pgadmin \\\n  -d dpage/pgadmin4\n"})})]}),"\n",(0,n.jsx)(i.p,{children:"Now, let's access our query api and explore the result:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-http",children:"GET /grocery/marketplace/query/api/v1\nHost: http://localhost:8080\n"})}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:'{\n  "_links" : {\n    // a subset of the full response, other entities cutted to make this example shorter\n    "products" : {\n      "href" : "http://localhost:8080/grocery/marketplace/query/api/v1/products{?page,size,sort*}",\n      "templated" : true\n    },\n    "categories" : {\n      "href" : "http://localhost:8080/grocery/marketplace/query/api/v1/categories{?page,size,sort*}",\n      "templated" : true\n    },\n    "profile" : {\n      "href" : "http://localhost:8080/grocery/marketplace/query/api/v1/profile"\n    }\n  }\n}\n'})}),"\n",(0,n.jsxs)(i.p,{children:["Above we have a Spring Data REST response uses ",(0,n.jsx)(i.strong,{children:"HAL"})," format, which provides links to related resources."]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:'"products"'})," and ",(0,n.jsx)(i.strong,{children:'"categories"'}),": These are URLs for fetching product and category data, with ",(0,n.jsx)(i.strong,{children:"templated"})," parameters (",(0,n.jsx)(i.code,{children:"page"}),", ",(0,n.jsx)(i.code,{children:"size"}),", ",(0,n.jsx)(i.code,{children:"sort"}),") that allow for pagination and sorting."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:'"profile"'}),": A link to the API's profile, which provides metadata about the API."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"These links allow clients to navigate the API easily and interact with related data without hardcoding URLs."}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsxs)(i.p,{children:["Find the full source code of this project at the following Github Repository: ",(0,n.jsx)(i.a,{href:"https://github.com/algodema/microservices-labs/tree/main/grocery-marketplace-product-queryapi",children:"https://github.com/algodema/microservices-labs/tree/main/grocery-marketplace-product-queryapi"})]})}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(i.p,{children:"Understanding the levels of RESTful APIs helps developers create systems that are more robust, scalable, and easier to use. While many APIs remain at Levels 1 or 2, aiming for Level 3 ensures a fully RESTful experience that adheres to the principles of the web."}),"\n",(0,n.jsx)(i.p,{children:"Which level does your API align with? Share your thoughts in the comments below!"}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://martinfowler.com/articles/richardsonMaturityModel.html",children:"Richardson's Maturity Model"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://www.manning.com/books/spring-in-action-fifth-edition",children:"Spring in Action"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://docs.spring.io/spring-data/rest/reference/index.html",children:"Spring Data REST"})}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8340:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/building-restful-api-with-spring-data-b5f06ef2cda66250274605b3d2856784.avif"}}]);