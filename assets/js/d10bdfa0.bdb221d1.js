"use strict";(self.webpackChunkalgodema=self.webpackChunkalgodema||[]).push([[1493],{6380:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(4848),o=t(8453);const i={slug:"clean-write-the-code-you-want-to-read-part2",title:"Clean code: Write The Code You Want To Read (Part 2)",date:"2022-09-19 10:06:46 +0100",authors:["reda"],tags:["software","clean code","craftmanship","developer"]},l=void 0,s={permalink:"/blog/clean-write-the-code-you-want-to-read-part2",source:"@site/blog/2022-09-19-clean-write-the-code-you-want-to-read-part-2.mdx",title:"Clean code: Write The Code You Want To Read (Part 2)",description:"author",date:"2022-09-19T10:06:46.000Z",tags:[{inline:!0,label:"software",permalink:"/blog/tags/software"},{inline:!0,label:"clean code",permalink:"/blog/tags/clean-code"},{inline:!0,label:"craftmanship",permalink:"/blog/tags/craftmanship"},{inline:!0,label:"developer",permalink:"/blog/tags/developer"}],readingTime:4.81,hasTruncateMarker:!1,authors:[{name:"Reda Jaifar",title:"Lead Developer",url:"https://github.com/reda-jaifar",imageURL:"https://avatars.githubusercontent.com/u/10919693?s=400&u=b30e8e86baebe277b11a4117560d601fd34bd245&v=4",key:"reda",page:null}],frontMatter:{slug:"clean-write-the-code-you-want-to-read-part2",title:"Clean code: Write The Code You Want To Read (Part 2)",date:"2022-09-19 10:06:46 +0100",authors:["reda"],tags:["software","clean code","craftmanship","developer"]},unlisted:!1,nextItem:{title:"Clean code: Write The Code You Want To Read (Part 1)",permalink:"/blog/clean-write-the-code-you-want-to-read-part1"}},r={authorsImageUrls:[void 0]},c=[{value:"Functions",id:"functions",level:2},{value:"Small",id:"small",level:3},{value:"Single abstraction level",id:"single-abstraction-level",level:3},{value:"The Step-down rule",id:"the-step-down-rule",level:3},{value:"Switch statements",id:"switch-statements",level:3},{value:"Functions common patterns",id:"functions-common-patterns",level:3},{value:"Argument Objects",id:"argument-objects",level:4},{value:"Command Query Separation",id:"command-query-separation",level:4},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.img,{alt:"author",src:t(3409).A+"",width:"643",height:"360"}),"\n",(0,a.jsx)(n.a,{href:"https://stock.adobe.com/fr/search?k=dactylo&asset_id=809833487",children:"photo source"})]}),"\n",(0,a.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,a.jsx)(n.p,{children:"Functions constitute a centric component in the recent software programs, the reason why we should care a lot about all\nof\ntheir aspects from naming, length, composition, arguments and error handling."}),"\n",(0,a.jsx)(n.h3,{id:"small",children:"Small"}),"\n",(0,a.jsx)(n.p,{children:'Yes "small" is the main rule a function should comply with, so it tell us what it does exactly because a function should\ndo one thing, do it well and only.'}),"\n",(0,a.jsx)(n.p,{children:"To keep the function also short, [if, else, while, etc ...] statements should be only one line, and probably this line\nis function call:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"fun bookTrain(bookingRequest: BookingRequest): Booking {\n    validBookingRequest(bookingRequest)\n    val booking = Booking.from(bookingRequest)\n    booking.status(BookingStatus.PENDING)\n    return booking\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"single-abstraction-level",children:"Single abstraction level"}),"\n",(0,a.jsx)(n.p,{children:'Or the principle of "Doing one thing", the idea is not about writing function with single line of code, or one step but\nwriting it with the restriction to cover only one computation, see example below:'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'   fun validBookingRequest(bookingRequest: BookingRequest) {\n    if (bookingRequest.from == bookingRequest.to) {\n        throw InvalidBookingRequestException("departure and arrival stations are the same")\n    } else if (bookignRequest.stops > 5) {\n        throw InvalidBookingRequestException("more than 5 stops is not allowed")\n    }\n\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"the-step-down-rule",children:"The Step-down rule"}),"\n",(0,a.jsx)(n.p,{children:"We write code to be read, so writing functions in an order like a narrative text, if we have to put the functions of the\nabove\ntwo examples, they should appear in the following order:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"   fun bookTrain(bookingRequest: BookingRequest): Booking {\n    validBookingRequest(bookingRequest)\n    ...\n\n    fun validBookingRequest(bookingRequest: BookingRequest) {\n        ...\n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["we can see clearly that ",(0,a.jsx)(n.strong,{children:"the caller function is above the called one"})]}),"\n",(0,a.jsx)(n.h3,{id:"switch-statements",children:"Switch statements"}),"\n",(0,a.jsx)(n.p,{children:"While switch statement can easily impact badly you clean code, The key issue with switch statements is that they often\nlead to violations of the Single Responsibility Principle (SRP) and can make code harder to extend and maintain."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"   fun calculateWashCost(vehicle: Vehicle): Money {\n    when (vehicle.type) {\n        CAR -> calculateCarWashCost(vehicle)\n        BUS -> calculateBusWashCost(vehicle)\n        MOTOCYCLE -> calculateMotoCycleWashCost(vehicle)\n        else -> {\n            throw InvalidVehiculeType(vehicle.type)\n        }\n    }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"There many issues with this function above, first the function is large and each time new vehicle type will be added, it\nwill grow even more.\nSecond it violates the Single Responsibility Principle (SRP) because there is more one reason for it to change, but the\nworst probem is there will be more functions\nthat will have the same structure:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"CalculateParkingCost(vehicle: Vehicle): Money"}),"\n",(0,a.jsx)(n.li,{children:"CalculateCarbonTax(vehicle: Vehicle): Money"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:'A solution proposed by Robert C.Martin is his book "Clean Code" is to hide the switch statement in an abstract factory,\nand the factory will use the switch statement\nto create the appropriate instances of the derivatives of Vehicle. And the various functions such as\nCalculateParkingCost, CalculateCarbonTax will be dispatched polymorphic through the Vehicle interface.'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"\nabstract class Vehicle {\n    abstract fun calculateWashCost(): Money\n    abstract fun calculateParkingCost(): Money\n    abstract fun calculateCarbonTax(): Money\n}\n\nabstract interface VehicleFactory {\n    abstract fun createVehicle(vehicle: Vehicle): Vehicle\n}\n\nclass VehicleFactoryImpl() {\n    fun createVehicle(vehicle: Vehicle): Vehicle {\n        return when (vehicle.type) {\n            CAR -> Car(vehicle)\n            BUS -> Bus(vehicle)\n            MOTOCYCLE -> MotoCycle(vehicle)\n            else -> {\n                throw InvalidVehiculeType(vehicle.type)\n            }\n        }\n    }\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"functions-common-patterns",children:"Functions common patterns"}),"\n",(0,a.jsx)(n.p,{children:"Don't hesitate to make your function's name long if necessary in order to ensure a significant name.\nWhen it comes to function argument the ideal number is 3, then comes one (monadic), followed closely by two (dyadic).\nThree arguments (triadic) should be avoided where possible. The challenge with arguments resides in testing you can\nimagine the difficulty of writing all\nthe test cases to ensure that all the various combinations of arguments work correctly.\nHave you ever heard about \"Flag Argument\"? Flag argument is an argument of type boolean where the function do a thing\nwhen it's true and another thing if it's false,\nthese arguments violates the Single Responsibility Principle (SRP)."}),"\n",(0,a.jsx)(n.h4,{id:"argument-objects",children:"Argument Objects"}),"\n",(0,a.jsx)(n.p,{children:"If a function needs more than two or three arguments, there is probably a way to wrap some of them into an object, see\nthe following example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"  fun deployApplication(applicationId: Int, cpu: Int, memory: Int, storage: Int, tag: String) {\n    //  do something ...\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"We can reduce the number of argument by passing an object representing the infrastructure requirements, see example\nbelow"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"  fun deployApplication(applicationId: Int, infrastructureRequirements: InfrastructureRequirements, tag: String) {\n    // do something ...\n}\n"})}),"\n",(0,a.jsx)(n.h4,{id:"command-query-separation",children:"Command Query Separation"}),"\n",(0,a.jsx)(n.p,{children:"The Command-Query Separation (CQS) principle states that a function should either perform an action (a command) or\nreturn\ndata (a query), but not both. This makes the code more predictable, easier to test, and cleaner."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'  // Query function: returns whether the withdrawal can happen (no state modification)\nfun canWithdraw(balance: Int, amount: Int): Boolean {\n    return amount <= balance\n}\n\n// Command function: performs withdrawal by returning the new balance (state modification, no return of query data)\nfun withdraw(balance: Int, amount: Int): Int {\n    return if (canWithdraw(balance, amount)) {\n        balance - amount  // Returns the updated balance\n    } else {\n        balance  // No changes if insufficient funds\n    }\n}\n\nfun main() {\n    var balance = 100\n\n    // Query if withdrawal is possible\n    if (canWithdraw(balance, 50)) {\n        // Command: Update the balance by performing withdrawal\n        balance = withdraw(balance, 50)\n        println("Withdrawal successful. New balance: $balance")\n    } else {\n        println("Insufficient funds")\n    }\n}\n\n'})}),"\n",(0,a.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(n.p,{children:"Let's admit that functions are fundamental components of our code, so it's crucial to invest time and effort into defining them properly, including their names, arguments, and statements.\nWriting software is similar to any other form of writing\u2014you begin by drafting your ideas, then refine them until they flow smoothly. Remember, we write code not just for execution, but also to be easily understood by others."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://blog.cleancoder.com/",children:"The Clean Code Blog"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://www.oreilly.com/library/view/clean-code-a/9780136083238/",children:"Clean Code: A Handbook of Agile Software Craftsmanship by Robert C. Martin"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://www.oreilly.com/library/view/functional-design-principles/9780138176518/",children:"Functional Design: Principles, Patterns, and Practices by Robert C. Martin"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://www.pluralsight.com/blog/software-development/10-steps-to-clean-code",children:"10 steps to clean code"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://kotlinlang.org/docs/coding-conventions.html",children:"Kotlin coding conventions"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},3409:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/clean-code-write-the-code-you-want-to-read-part-2-15d8f333f8c57fcd7236e9829280c47a.jpg"},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var a=t(6540);const o={},i=a.createContext(o);function l(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);