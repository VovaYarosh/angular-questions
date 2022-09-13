import {Question} from "./app/question.interface";

export const questionsArray = [
    {
        title: `Advantages of Angular?`,
        english: `- Angular has exceptional support for typescript;
- Detailed documentation;
- Two-way data binding, which ensures exceptional behavior of the program, which minimizes the risk of possible errors;
- MVVM (Model-View-ViewModel), which allows developers to work separately on the same section of the application, using the same data set;
- Module system - Use of component dependencies related to modules and modularity in general;
- The structure and architecture are specially designed for high scalability of the project`,
        ukrainian: `- Angular має виняткову підтримку тайпскріпт;
- Детальна документація;
- Двостороння прив'язка даних, що забезпечує виняткову поведінку програми, що мінімізує ризик можливих помилок;
- MVVM (Model-View-ViewModel), що дозволяє розробникам працювати окремо над одним секцією апки, використовуючи той самий набір даних;
- Модульна система - використання залежностей компонентів, пов'язаних з модулями та модульністю в цілому;
- Структура та архітектура спеціально розроблені для високої масштабованості проекту;
`
    },
    {
        title: `What is it SPA?`,
        english: `SPA is a single-page web application, which modules are loaded only once.The main advantages of such interface are the fast operation of the application and the absence of reloading the website when switching to other pages.`,
        ukrainian: `SPA - односторінковий веб-додаток, модулі якого завантажуються лиш один раз, основними перевагами такого інтерфейсу є швидка робота додатку та відсутність перезавантаження веб-сайту при переходах на інші сторінки.`
    },
    {
        title: `Disadvantages of Angular`,
        english: `variety of different structures make it difficult to learn compared to react;
Relatively slow performance in view of various indicators. On the other hand, this can be easily solved by using the so-called ChangeDetectionStrategy, which helps to manually control the rendering process of components.;
`
    },
    {
        title: `Disadvantages of Angular`,
        english: `variety of different structures make it difficult to learn compared to react;
Relatively slow performance in view of various indicators. On the other hand, this can be easily solved by using the so-called ChangeDetectionStrategy, which helps to manually control the rendering process of components.;
`,       ukrainian: `різноманітність різних структур ускладнює навчання порівняно з реактом;
Відносно низька продуктивність за різними показниками. З іншого боку, це можна легко вирішити за допомогою так званої ChangeDetectionStrategy, яка допомагає вручну контролювати процес відтворення компонентів;
`
    },
    {
        title: `What is it MVC?`,
        english: `MVC is a structure that effectively separates the Business Logic from the user interface of the application;
- Model contains data about an application. This lists all the information that should be relevant to the display. information access requirements and other checks;
- View displays the data from the Model component. Any response from the user is also recognized and sent to the Controller component;
- Controller is responsible for providing the data present in the Model to the View component and interpreting the user responses recognized by the View component;`,
       ukrainian: `MVC — це структура, яка фактично відокремлює бізнес-логіку від інтерфейсу користувача програми;
- Model містить дані про програму. Тут перераховано всю інформацію, яка має бути актуальною для відображення та вимоги доступу до інформації з інші перевірками;
- View відображає дані з компонента Model. Будь-яка відповідь користувача також розпізнається та надсилається до компонента контролера;
- Controller несе відповідальність за надання даних, наявних у моделі, компоненту View та інтерпретацію відповідей користувача, розпізнаних компонентом View;
`
    },
    {
        title: `What are the technologies used in Angular?`,
        english: `Angular is a modern frontend JavaScript framework developed by Google.
Angular uses TypeScript, which is a superscript of JavaScript.  TypeScript allows us to write JavaScript as a strongly typed language.  It also uses RxJS, which allows developers to better deal with asynchronous operations.`,
        ukrainian: `Angular — це сучасний JavaScript frontend framework, розроблений Google.
Angular використовує TypeScript, який є надбудовою JavaScript. TypeScript дозволяє нам писати JavaScript як строго типізовану мову. Ангуляр також використовує RxJS, що дозволяє розробникам краще працювати з асинхронними операціями.
`
    },
    {
        title: `How does an Angular application work?`,
        english: `The working of Angular is based on its components. So the working of the Angular application starts with the configuration file ANGULAR.JSON.The builder refers to this file to find the paths, configurations and the main file.  Next comes the MAIN.TS file that acts as the entry point for the configuration file. Next, the bootstrapping of the Angular application is done through the APP.MODULE.TS. In the App module, at @NgModule decorator array, we have a bootstrap Array. Here the bootstrap component is provided or added, so at this point, Angular loads AppComponent.`,
        ukrainian: `Робота Angular базується на його компонентах. Таким чином, робота програми Angular починається з файлу конфігурації ANGULAR.JSON. Билдер посилається на цей файл, щоб знайти шляхи, конфігурації та основний файл(main.ts). Далі йде файл MAIN.TS, який діє як точка входу для файлу конфігурації. Далі завантаження програми Angular виконується через APP.MODULE.TS. У модулі програми в масиві декораторів @NgModule ми маємо  bootstrap масив. Тут надається або додається компонент початкового завантаження, тому на цьому етапі Angular завантажує AppComponent.`
    },
    {
        title: `What are the directives? What is the difference between a structure directive and an attribute directive?`,
        english: `Directives in Angular are used to manipulate the DOM tree. We use structural directives to work with the structure of the DOM tree (deletion, iteration, etc.). Attribute directives do not affect the HTML structure, only the styling of the HTML element.`,
        ukrainian: `Директиви в Angular використовуються для маніпуляцій з DOM деревом. Структурні директиви ми використовуємо для  роботи зі структурою DOM дерева(видалення, ітерування і.т.д.). Атрибутні директиви не впливають на HTML структуру а тільки на стилізацію HTML елементу.`
    },
    {
        title: `What is the ng-template, ng-container, ng-content?`,
        english: `ng-template is a template element that Angular uses with structural directives (*ngIf, *ngFor, [ngSwitch] and custom directives)
ng-container - allows us to use structural directives without any extra element, making sure that the only DOM changes being applied are those dictated by the directives themselves.
ng-content allows parent components to inject HTML code into child components.
`,
        ukrainian: `ng-template — це елемент шаблону, який Angular використовує зі структурними директивами (*ngIf, *ngFor, [ngSwitch] і спеціальними директивами)
ng-container — дозволяє нам використовувати структурні директиви без будь-яких додаткових елементів, гарантуючи, що єдині зміни DOM, які застосовуються, є тими, що продиктовані самими директивами.
ng-content дозволяє батьківським компонентам вставляти HTML-код у дочірні компоненти.`
    },
//     {
//         title: `Why do we use asterisks with structural directives?`,
//         english: `Directive without asterisk can only be applied to a (<template>) element.
// Directive with asterisk can be applied to any element. When used the (<template>) element is created behind the scene`,
//         ukrainian: `Директиву без зірочки можна застосувати лише до елемента (<template>).
// Директива із зірочкою може бути застосована до будь-якого елемента. У разі використання елемент <template> створюється за кадром.
// `
//     },
    {
        title: `What is interpolation in angular?`,
        english: `Interpolation in Angular is a special "{{}}"(with double closed curly brackets) syntax used to dynamically pass data in a template.`,
        ukrainian: `Інтерполяція в Angular — це спеціальний синтаксис "{{}}" (з подвійними закритими фігурними дужками), який використовується для динамічної передачі даних у шаблоні.`
    },
    {
        title: `What is  scope in angular?`,
        english: `$scope - it's an automatic bridge between JavaScript and the DOM that holds synchronized data. This makes templating easier.
$RootScope is the top-level $scope object from which all other scope objects are created. After Angular starts rendering the app, the framework creates a $rootScope object, and all subsequent bindings and logic in your app add new $scope objects that are children of $rootScope.
`,
        ukrainian: `$scope - це автоматичний міст між JavaScript і DOM, який тримає в собі синхронізовані дані. Це робить шаблонізацію більш простою.
$RootScope - це самий верхній рівень $scope-об'єкта, від якого якого створюються всі інші об'єкти області видимості. Після того, як Angular починає рендер додатка, фреймворк створює $rootScope-об'єкт, і всі подальші прив'язки і логіка вашого додатка додають нові $scope-об'єкти, які є дітьми $rootScope.
`
    },
    {
        title: `What are the services in angular?`,
        english: `Angular services are objects that are created only once during the lifetime of the application. They contain methods that maintain data throughout the life of the application, meaning that the data is always available.
The main objective of a service is to organize and share business logic, models, or data and functions with different components of an Angular application. They are usually implemented through dependency injection.
`,
        ukrainian: `Сервіси Angular — це об’єкти, які створюються лише один раз протягом життя програми. Вони містять методи, які зберігають дані протягом усього життя програми, тобто дані завжди доступні.
Основна мета сервісу полягає в організації та обміні бізнес-логікою, моделями або даними та функціями з різними компонентами програми Angular. Зазвичай вони впроваджуються через паттерн dependency injection.
`
    },
    {
        title: `What are the modules in angular?`,
        english: `The module is a separate independent part of a web application. In the module, we register components, services, additional libraries related to it. It is a good practice to divide the application into modules, then it will work quickly regardless of its scale.`,
        ukrainian: `Модуль - це окрема незалежна частина веб-додатку. В модулі реєструються компоненти, сервіси, додаткові бібліотеки, які відносяться до нього. Хорошою практикою вважається розділення додатку на модулі, тоді він працюватиме швидко в не залежності від його масштабу.`
    },
    {
        title: `What are the components in angular?`,
        english: `Component is the minimal unit for building user interfaces of web applications in Angular. It is a separate entity that includes the logical part in the .ts file, the markup in the .html file, and the styling file or files. A component must be part of a module and can be exported, allowing it to be reused in other modules.`,
        ukrainian: `component - це мінімальна одиниця побудови користувацьких інтерфейсів веб додатків в Angular. Це окрема сутність, що включає логічну частину  в .ts файлі, розмітку в .html  файлі і файл або файли стилізації. Компонента повинна бути частиною модуля і може бути експортованою, що дозволить її перевикористовувати в інших модулях.`
    },
    {
        title: `What are the lazy loading in angular?`,
        english: `Lazy loading is an approach to load the modules that the user currently needs.
By default, Angular uses eager loading to load modules. This means that all the modules must be loaded before the application can be run.
`,
        ukrainian: `lazy loading — це підхід до завантаження модулів, які потрібні користувачеві в поточний момент.
За замовчуванням Angular використовує швидке завантаження для завантаження модулів. Це означає, що перед запуском програми необхідно завантажити всі модулі.
`
    },
    {
        title: `What is Angular Data Binding?`,
        english: `Data binding is a technique, where the data stays in synchronization between the component and the view. Angular uses two-way data binding
( Whenever the user updates the data in the view, Angular updates the component. When the component gets new data, the Angular updates the view.). There is following types of data binding in angular: interpolation, property binding [], event binding ().
`,
       ukrainian: `Data binding — це техніка, за якої дані залишаються синхронізованими між компонентом і ui інтерфейсом. Angular використовує двосторонню прив’язку даних
(Щоразу, коли користувач оновлює дані в ui інтерфейсі, Angular оновлює компонент. Коли компонент отримує нові дані, Angular оновлює ui інтерфейс). В Angular існують наступні типи зв’язування даних: інтерполяція, зв’язування властивостей [], зв’язування події ().
`
},
{
    title: `What are the decorators in angular?`,
    english: `decorator is a function that allows you to dynamically connect certain behavior to a class. There are 4 types of decorators in Angular: Class decorators, Property Decorators Method decorators, Parameter decorators. The use of decorators makes it possible to clearly divide the code into logical parts for future reusing.`,
    ukrainian: `декоратор - це функція яка дає можливість динамічно підключати певну поведінку для класу. В ангулярі існує 4 типи декораторів: Class decorators, Property Decorators Method decorators, Parameter decorators. Використання декораторів дає можливість чітко розподілити код на логічні частини, для подальшого перевикористання.`
},
{
    title: `What are the @output and @input in angular?`,
    english: `@Input() and @Output() allow Angular to exchange data between a parent context and child directives or components. The @Input() property is writable and the @Output() property is observable.
@Input() allows a parent component to update data in a child component. Conversely, @Output() allows the child component to send data to the parent component. @Output binds the property using the angular EventEmitter class type.
`,
    ukrainian: `@Input() і @Output() дозволяють Angular обмінюватися даними між батьківським контекстом і дочірніми директивами або компонентами. Властивість @Input() доступна для запису, а властивість @Output() це observable.
@Input() дозволяє батьківському компоненту оновлювати дані в дочірньому компоненті. І навпаки, @Output() дозволяє дочірньому компоненту надсилати дані до батьківського компонента. @Output прив’язує властивість за допомогою типу класу angular EventEmitter.
`
},
{
    title: `What is the event emitter in angular?`,
    english: `The EventEmmiter class in Angular is an extension of the Subject class and has methods .emit() - for writing data and .subscribe(), which listens for changes in EventEmmiter.It works with the @Output() decorator, which in turn is an event handler`,
    ukrainian: `Клас EventEmmiter в Angular є розширенням класу Subject і має методи .emit() для запису даних і .subscribe(), який відстежує зміни в EventEmmiter. Він працює з декоратором @Output(), який, у свою чергу, обробник подій.`
},
{
    title: `What the differences between promises and observables`,
    english: `Promise handles a single event when an async operation completes or fails.
An Observable is like a Stream (in many languages) and allows to pass zero or more events where the callback is called for each event.
Promise starts immediately, an Observable only starts if you subscribe to it.
`,
   ukrainian: `Promise обробляє одну подію, коли асинхронна операція завершується або завершується помилкою.
Observable схожий на Stream (в багатьох мовах) і дозволяє передавати нуль або більше подій, де для кожної події викликається зворотний виклик.
Promise запускається негайно, Observable запускається, лише якщо ви підписалися на нього.
`
},
{
    title: `What is the dependency injection and where it uses?`,
    english: `dependency injection is a pattern that allows one object to be used by many other objects without creating a new instance each time.
For this, Angular uses the @Injectable() decorator. The most common example of using dependency injection in Angular is services
`,
    ukrainian: `dependency injection - це патерн, який дозволяє використовувати один об'єкт, багатьма іншими об'єктами при цьому не створювати кожного разу новий екземпляр.
Для цього в ангулярі використовується декоратор @Injectable(). Набільш поширеним прикладом використання dependency injection в ангулярі - це сервіси
`
},
{
    title: `What is the purpose of async pipe?`,
    english: `Async pipe - designed for asynchronous data processing. Used in html file. In the case of working with RxJs, it subscribes to the stream and unsubscribes when the component is destroyed.`,
    ukrainian: `Async pipe - призначена для обробки асинхронних даних. Використовується в html файлі. У випадку роботи із RxJs, підписується на стрім і коли компонента дестроїться, відписується.`
},
{
    title: `What is the MVVM?`,
    english: `MVVM(Model => View => ViewModel) - application architecture design template. It is used to separate the model and its representation. It is convenient to use in cases where the data binding in the development framework.
The model is the logic of working with the data and the description of the data
View is a graphical interface
ViewModel - on the one hand, it is a View, and on the other, it is a data wrapper from the Model
`,
   ukrainian: `MVVM(Model => View => ViewModel) - шаблон проектування архітектури додатку. Він використовується для для розділення моделі і ui інтерфейсу. Його зручно використовувати в тих випадках, коли в фреймворку де ведеться розробка є зв'язування даних.
Модель - це логіка роботи з даними і опис даних
View - це графічний інтерфейс
ViewModel -  з одної сторони це View, а з другої це обгортка даних з Моделі.
`
},
{
    title: ` What is the AOT compilation?`,
    english: `AOT or Ahead-of-Time is a variant of application compilation (alternative to JIT or Just-in-time), which is performed once when the application is assembled. The JIT is executed every time the application is launched in the browser.
Thanks to this version of the compilation, the application starts up faster. The compiled file is smaller. Templates are compiled prematurely before assembly
`,
   ukrainian: `AOT або Ahead-of-Time – це варіант компиляции додатку(альтернатива JIT або Just-in-time), яка виконується один раз при збірці додатку. JIT виконується кожен раз при запуску додатку в браузері.
Завдяки цьому варіанту компіляції відбувається більш швидкий запуску додатку. Скомпільований файл виходить меншим.Шаблони компілюються передчасно до збірки
`
},
{
    title: `How routing system works in angular?`,
    english: `Routing in Angular is organized using the Router module. To go to another page, it is enough for us to specify the path and the component that will be displayed when going to it. For the speed of the web application, its pages are divided into modules, in this case, when switching to a certain route, we load the corresponding module, inside which we specify which components need to be displayed.`,
    ukrainian: `Організація роутингу в ангулярі відбувається за допомогою Router module. Для переходу на іншу сторінку нам достатньо вказати шлях і компонент, який відображатиметься при переході на нього. Для швидкодії веб-додатку його сторінки поділяють на модулі, у такому випадку при переході на певний роут ми підвантажуємо відповідний модуль, всередині якого вказуємо які компоненти потрібно відобразити.`
},
{
    title: `difference between subjects and observables?`,
    english: `Subject is an Observable type that allows not only to send something from its stream (as an Observable), but also to receive it, and Subject can also subscribe to other Observables`,
    ukrainian: `Subject це тип Observable, який дозволяє не тільки відправляти щось зі свого потоку(як Observable), але і приймати до себе, також Subject може підписуватися на інші Observable
`
},
{
    title: `difference between Subject, ReplaySubject and BehaviorSubject?`,
    english: `The difference between Subject and BehaviorSubject is that BehaviorSubject must have an initial value. ReplaySubject can store old subscription values, for this you need to specify the number of subscriptions it will store when creating ReplaySubject`,
    ukrainian: `Різниця між Subject і BehaviorSubject полягає в тому, що BehaviorSubject обов'язково повинен мати початкове значення. ReplaySubject може зберігати старі значення підписок, для цього при створенні ReplaySubject потрібно вказати кількість підписок, які він буде зберігати`
},
{
    title: `What is Data Binding? In how many ways can it be executed?`,
    english: `Data binding is a core concept in Angular and allows to define communication between a component and the DOM, making it very easy to define interactive applications without worrying about pushing and pulling data. There are four forms of data binding and they differ in the way the data is flowing.
 - Interpolation: {{ value }}
-  Property binding: [property]=“value”
- Event binding: (event)=“function”
- Two-way data binding: [(ngModel)]=“value”
`,
    ukrainian: `Data binding є основною концепцією в Angular і дозволяє визначати зв’язок між компонентом і DOM, завдяки чому дуже легко визначати інтерактивність, не турбуючись про надсилання та отримання даних. Існує чотири форми зв’язування даних, які відрізняються способом передачі даних.
 - Interpolation: {{ value }}
-  Property binding: [property]=“value”
- Event binding: (event)=“function”
- Two-way data binding: [(ngModel)]=“value”
`
},
{
    title: `What are the pipes?`,
    english: `Pipes are simple functions to use in template expressions to accept an input value and return a transformed value. Pipes are useful because you can use them throughout your application, while only declaring each pipe once.`,
    ukrainian: `Пайпи — це прості функції, які використовуються у виразах шаблонів для прийняття вхідного значення та повернення перетвореного значення. Пайпи корисні, оскільки можна використовувати їх у своєму додатку, оголошуючи кожен пайп лише один раз.`

},
{
    title: `What is the difference between pure and impure pipe?`,
    english: `The difference between pure and impure is that a pure pipe will always return the same value given the same input. A clean pipe does not have its own status and does not depend on external factors. A dirty or impure pipe can have its own state, which will affect the result. Also, a dirty pipe will create a separate instance of the class to handle the data.`,
    ukrainian: `Різниця між pure і impure полягає в тому, що чиста пайпа завжди поверне однакове значення при однакових вхідних даних. Чиста пайпа немає свого стейту і не залежить від зовнішніх чинників. Брудна або impure пайпа може мати свій стейт, який буде впливати на результат. Також брудна пайпа буде створювати окремий екземпляр класу для обробки даних.`
},
{
    title: `What are observables?`,
    english: `Observable is the name of the mechanism that works with an asynchronous flow, in Angular Observable is most often found in http requests and in triggers in the code`,
    ukrainian: `Observable це назва механізму який працює з асинхронним потоком,в Angular найчастіше зустрічається Observable в http запитах і в тригерах в коді`
},
{
    title: `What is a bootstrapping module?`,
    english: `bootstrapping module specifies the initial module of the web application. Inside the initial module in the @NgModule decorator, we write the bootstrap parameter in which we specify the initial component.`,
    ukrainian: `за допомогою bootstrapping module вказується початковий модуль веб-додатку. Всередині початкового модулю у декораторі @NgModule ми пишемо параметр bootstrap у якому вказуємо початковий компонент.`
},
{
    title: `How is Dependency Hierarchy formed?`,
    english: `A hierarchical dependency allows us to define different boundaries or scopes for our dependencies to run in and follows the component tree structure. By default, services registered to Angular are application wide but we can also create services that are isolated to a subset of components.`,
    ukrainian: `Ієрархічна система залежностей дозволяє нам визначати різні межі або області для виконання наших залежностей і слідує структурі дерева компонентів. За замовчуванням сервіси, зареєстровані в Angular, є загальнодоступними, але ми також можемо створювати сервіси, що ізольовані від інших компонентів.`
},

] as Question[]
