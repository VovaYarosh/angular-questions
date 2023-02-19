import {Question} from "../question.interface";

export const angularArray = [
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
`, ukrainian: `різноманітність різних структур ускладнює навчання порівняно з реактом;
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
  {
    title: `Why do we use asterisks with structural directives?`,
    english: `Directive without asterisk can only be applied to a (<template>) element.
Directive with asterisk can be applied to any element. When used the (<template>) element is created behind the scene`,
    ukrainian: `Директиву без зірочки можна застосувати лише до елемента (<template>).
Директива із зірочкою може бути застосована до будь-якого елемента. У разі використання елемент <template> створюється за кадром.
`
  },
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
  {
   title: `How do you perform Error handling?`,
   english: `I use ErrorHandler to handle errors in Angular. This is a flexible way of catching and handling errors in an Angular application. However, the most reliable way to handle server and connection errors is to use HttpErrorResponse in HttpInterceptor. Angular also has the ability to track errors in real-time using the Rollbar. This approach significantly improves the processes of monitoring, diagnosis and analysis. The SDK for Angular from Rollbar allows you to conveniently integrate its functions into a global interface for convenient work with error handling.`,
   ukrainian:`Для обробки помилок в Angular я використовую ErrorHandler. Це гнучкий спосіб відловлювання і обробки помилок в Angular додатку. Проте найбільш надійним способом обробки серверних помилок та помилок пов'язаних з підключенням є використання HttpErrorResponse в HttpInterceptor. Також в Angular є можливість відстежувати помилки в режимі реального часу за допомогою Rollbar. Такий підхід значно покращує процеси моніторингу, діагностики та аналізу. Пакет SDK для Angular від Rollbar дозволяє зручно інтегрувати його функції в глобальний інтрецептор, для зручної роботи з обробкою помилок.`,
  },
  {
    title: `What is HttpClient and its benefits?`,
    english: `The http client is a service used to send http requests, which are handled by the HttpClientModule. All methods of this service return a response with type Observable, which makes it possible to use rxjs methods to work with data.`,
    ukrainian: `http client - це сервіс, який використовується для надсилання http запитів, за відпрацювання яких відповідає HttpClientModule. Усі методи цього сервісу повертають відповідь з типом Observable, що дає можливість використовувати методи rxjs для роботи з даними.`,
  },
  {
    title: `What will happen if you do not supply error handlers for observer?`,
    english: `If you do not handle the error in the observables, then they fall into the global error handler of Angular.`,
    ukrainian: `Якщо не обробити помилку в observables, то вони потрапляють в глобальний обробник помилок ангуляру. `,
  },
  {
    title: `Error handling in rxjs`,
    english: `The operators like catchError,retryWhen, retry provide effective ways to gracefully handle errors and retry logic, should they occur`,
    ukrainian: `Такі оператори, як catchError, retryWhen, retry, надають ефективні способи елегантної обробки помилок і логіки повторних спроб, якщо вони трапляються`,
  },
  {
    title: `difference between retry and retryWhen rxjs?`,
    english: `These operators help us to retry a failed observable in Angular. They both resubscribe to the source observable when they receive onError() notification. The ReTry Angule RxJs operator retries a failed source observable count number of times. If the count is not provided then it tries indefinitely. The RetryWhen operator retries the failed Observable every time a Notification Observable emits the next value. RetyWhen is now deprecated and we should use Retry instead it`,
    ukrainian: `Ці оператори допомагають нам повторити спробу невдалого Обсерваблу. Вони обоє повторно підписуються на спостережуване джерело, коли отримують сповіщення onError(). Оператор ReTry  повторює невдалу кількість спостережуваних джерел енну кількість разів. Якщо підрахунок не надано, спроба виконується нескінченно. Оператор RetryWhen повторює помилку Observable кожного разу, коли Notification Observable видає наступне значення. RetyWhen тепер застаріло, і ми повинні використовувати Retry замість нього`,
  },
  {
    title: `what is the observer?`,
    english: `An Observer is a consumer of the values provided by the Observable. Observers are simply a collection of callbacks, one for each type of message delivered by the Observable: next , error , and complete`,
    ukrainian: `Observer - це споживач значень, що надаються Observable. Спостерігачі - це просто набір зворотних дзвінків, по одному для кожного типу повідомлення, доставленого Observable: next , error і complete`,
  },
  {
    title: `difference between observer and observables?`,
    english: `Observer : Any object that wishes to be notified when the state of another object changes. Observable : Any object whose state may be of interest, and in whom another object may register an interest.`,
    ukrainian: `Observer: будь-який об’єкт, який бажає отримувати повідомлення про зміну стану іншого об’єкта. Observable: Будь-який об’єкт, стан якого може становити інтерес, і до якого інший об’єкт може зареєструвати інтерес.`,
  },
  {
    title: `what is the cold Observables?`,
    english: `A cold observable starts producing data when some code invokes a subscribe() function on it. For example, your app may declare an observable providing a URL on the server to get certain products. The request will be made only when you subscribe to it. If another script makes the same request to the server, it will get the same set of data.`,
    ukrainian: `Cold observable починає створювати дані, коли якийсь код викликає subscribe() на них. Наприклад, ваша програма може оголосити Observable, що надає URL-адресу на сервері для отримання певних продуктів. все буде зроблено тільки тоді, коли ви на неї підпишетеся. Якщо надсилається такий самий запит серверу, він отримає такий самий набір даних.`,
  },
  {
    title: `what is the hot observables?`,
    english: `Hot observables are ones that are pushing event when you are not subscribed to the observable. Like mouse moves, or Timer ticks or anything like that. Cold observables are ones that start pushing only when you subscribe, and they start over if you subscribe again.`,
    ukrainian: `Hot observables надають дані про подію, навіть коли нема підписки на обсервабл. Наприклад, рухи миші чи щось подібне`,
  },
  {
    title: `difference between hot and cold observables?`,
    english: `Anyone who decides to watch Mission: Impossible on Netflix will get the entire movie, regardless of when they hit the play button. Netflix creates a new producer to stream a movie just for you. This is a cold observable. If you go to a movie theater and the showtime is 4 p.m., the producer is created at 4 p.m., and the streaming begins. If some people (subscribers) are late to the show, they miss the beginning of the movie and can only watch it starting from the moment of arrival. This is a hot observable.`,
    ukrainian: `Кожен, хто вирішить подивитися «Місія нездійсненна» на Netflix, отримає повний фільм, незалежно від того, коли він натиснув кнопку відтворення. Netflix створює новий стрім для трансляції фільму спеціально для вас. Це cold observable. Якщо ви йдете в кінотеатр, а сеанс починається о 16:00, стрім створюється о 16:00 і починається трансляція. Якщо деякі люди (subscribers) запізнюються на сеанс, вони пропускають початок фільму і можуть дивитися його тільки з моменту приходу. Це hot observable.`,
  },
  {
    title: `How do you define typings for custom elements?`,
    english: `for this you need to use the NgElement and WithProperties types, which are exported from @angular/elements`,
    ukrainian: `для цього потрібно використати типи NgElement і WithProperties, які експортуються з @angular/elements`,
  },
  {
    title: `What are router events?`,
    english: `Router events are events that work at different phases of the router. We can subscribe to these events (router.events.subscribe). There are such router events as NavigationStart, RouteConfigLoadStart, RouteConfigLoadEnd, RoutesRecognized, GuardsCheckStart, ChildActivationStart, ActivationStart, GuardsCheckEnd, ResolveStart, ResolveEnd, ActivationEnd, ChildActivationEnd, NavigationEnd, Scroll, NavigationCancel, NavigationError.`,
    ukrainian: `Router events - це події, які відпрацьовують на різних фазах роботи роуту. Ми можемо засабскрайбитись на ці події(router.events.subscribe). Є такі Івенти роутераЖ NavigationStart, RouteConfigLoadStart, RouteConfigLoadEnd, RoutesRecognized, GuardsCheckStart, ChildActivationStart, ActivationStart, GuardsCheckEnd, ResolveStart, ResolveEnd, ActivationEnd, ChildActivationEnd, NavigationEnd, Scroll, NavigationCancel, NavigationError`,
  },
  {
    title: `What is activated route?`,
    english: `ActivatedRoute is a service that is provided to each component in the route, it contains information about the route, such as route parameters, static data and so on`,
    ukrainian: `ActivatedRoute це служба яка надається кожному компоненту в маршруті, вона містить інформацію про маршрут, такі як параметри маршруту,статичні дані і так далі`,
  },
  {
    title: `What is router outlet?`,
    english: `router outlet is a directive with the help of which we explicitly indicate where exactly the component will be displayed at a certain route. Several router outlets can be used on the project to build convenient application routing`,
    ukrainian: `router outlet - це директива, за допомогою якої ми явно вказуємо де саме буде відображатись компонент при певному роуті. На проекті можна використовувати кілька router outlet для побудови зручної маршрутизації додатку`,
  },
  {
    title: `How do you specify angular template compiler options?`,
    english: ``,
    ukrainian: `Ми можемо налаштовувати опції конфігурації в файлі tsconfig.json, tsconfig.app.json`,
  },{
    title: `angular template compiler options`,
    english: `disableExpressionLowering, flatModuleId, fullTemplateTypeCheck, generateCodeForLibraries, trace etc`,
    ukrainian: `disableExpressionLowering, flatModuleId, fullTemplateTypeCheck, generateCodeForLibraries, trace ітдщ`,
  },{
    title: `What is Non null type assertion operator?`,
    english: `Non null type assertion operator is an operator with the help of which it is explicitly indicated that the value of the operand is not null and not undefined. !`,
    ukrainian: `Non null type assertion operator - це оператор за допомогою якого явно вказують, що значення операнду не null і не undefined. !`,
  },{
    title: `What are the steps to use animation module?`,
    english: `1)import BrowserAnimationsModule to add animation capabilities to the root module of your Angular application (eg src/app/app.module.ts).2)import the necessary animation functions from @angular/animations into component files (eg src/app/app.component.ts).3) add a metadata property called animations: to the @Component() decorator in component files (eg src/app/app.component.ts)`,
    ukrainian: `1)імпортувати BrowserAnimationsModule, щоб додати можливості анімації у кореневий модуль програми Angular (наприклад, src/app/app.module.ts).2)імпортувати необхідні функції анімації з @angular/animations у файли компонентів (наприклад, src/app/app.component.ts).3)додати властивість метаданих під назвою animations: у декоратор @Component() у файлах компонентів (наприклад, src/app/app.component.ts)`,
  },
  {
    title: `What is zone?`,
    english:`In the context of js, there is a zonejs library that is designed to catch asynchronous operations and, if necessary, notify about them. In the context of Angular, the core of the framework is ngZone, which is based on zonejs. Angular mostly uses ngZone to notify the application core about state changes. In Angular, the Change detection mechanism is triggered and rerenders the html tree.`,
    ukrainian: `Zone в перекладі з англійської, це тюрма. В контексті js, є бібліотека zonejs яка створена для того, щоб відловлюати асинхронні операції і при необхідності сповіщати про них. В контексті Angular в ядрі фреймворку є ngZone в основі якого лежить zonejs. Здебільшого Angular використовує ngZone для сповіщення ядра програми про зміни стану. В Angular спрацьовує механізм Change detection і перерендрює html дерево.`,
  },
  {
    title: `What is State function?`,
    english:`state function define different states to call at the end of each transition in animation. This function takes two arguments: A unique name like open or closed and a style() function.`,
    ukrainian: `state function визначає різні стани для виклику в кінці кожного переходу в анімації. Ця функція приймає два аргументи: унікальне ім’я, наприклад відкритий або закритий, і функцію style().`,
  },
  {
    title: `What are macros in angular?`,
    english:`Macros that are microtasks of angular aot compiler in the form of functions or static methods that return an expression. For example The Angular RouterModule exports two macro static methods, forRoot and forChild, to help declare root and child routes.`,
    ukrainian: `Макрос це мікрозавдання компілятора angular aot у формі функцій або статичних методів, які повертають вираз. Наприклад, Angular RouterModule експортує два макро-статичні методи, forRoot і forChild, щоб допомогти оголосити кореневий і дочірній маршрути`,
  },
  {
    title: `How do you describe various dependencies in angular application?`,
    english:`Dependency injection, or DI, is one of the fundamental concepts in Angular. DI is wired into the Angular framework and allows classes with Angular decorators, such as Components, Directives, Pipes, and Injectables, to configure dependencies that they need.`,
    ukrainian: `Впровадження залежностей, або DI, є однією з фундаментальних концепцій Angular. DI підключено до фреймворку Angular і дозволяє класам із декораторами Angular, такими як Components, Directives, Pipes і Injectables, налаштовувати потрібні їм залежності.`,
  },
  {
    title: `What is provider in module?`,
    english:`A provider is an instruction to the Dependency Injection system on how to obtain a value for a dependency. Most of the time, these dependencies are services that you create and provide`,
    ukrainian: `provider — це інструкція для системи Dependency Injection щодо того, як отримати значення для залежності. У більшості випадків ці залежності — це служби, які ви створюєте та надаєте`,
  },
  {
    title: `What is rxjs?`,
    english:`RxJS is a Javascript library for transforming, composing, and extracting asynchronous data streams. It can be used both in the browser and on the server side`,
    ukrainian: `RxJS – це Javascript бібліотека для трансформації, складання та вилучення асинхронних потоків даних. Вона може бути використана як у браузері, так і на стороні сервера`,
  },
  {
    title: `What is Angular CLI Builder?`,
    english:`Angular CLI Builder is a tool for customizing how Angular CLI works. With its help, you can create new scenarios or change existing ones`,
    ukrainian: `Angular CLI Builder - це інструмент для кастомізації роботи Angular CLI. За допомогою нього можна створювати нові сценарії, або змінювати інсуючі`,
  },
  {
    title: `What are the limitations with web workers?`,
    english:`the web worker cannot directly manipulate the DOM and has limited access to the window object's methods and properties`,
    ukrainian: `web worker не може безпосередньо маніпулювати DOM і має обмежений доступ до методів і властивостей віконного об’єкта`,
  },
  {
    title: `Difference between concatMap i mergeMap`,
    english:`concatMap: behaves like a queue: stores all calls and sends them one by one. If one is completed, the next one is processed. mergeMap : Also sends all requests like concatMap, but does not wait for a response. It sends them as they come`,
    ukrainian: `concatMap: поводиться як черга: зберігає всі виклики та надсилає один за одним. Якщо один завершений, наступний обробляється. mergeMap : також надсилає всі запити, як concatMap, але не чекає, доки прийде відповідь. Він посилає їх, як вони приходять`,
  },
  {
    title: `What are the three phases of AOT?`,
    english:`the compiler works in 3 phases 1. Code Analysis. The TypeScript compiler analyzes the code and checks the code for syntax errors 2. Code generation. The StaticReflector compiler parses the data that was analyzed in the first phase of compilation, additionally checks for errors and generates the final code.3. Template type checking. This is an additional compilation stage that uses the TypeScript compiler to check relationships, expressions in patterns`,
    ukrainian: `компілятор працює в 3 фази 1. Code Analysis. Компілятор TypeScript  аналізує код, та перевіряє код на синтаксичні помилки 2. Code generation. Компілятор StaticReflector розбирає дані, які були проаналізовані на першій фазі компіляції, додатково перевіряє на помилки та генерує фінальний код. 3. Template type checking. Це додатковий етап компіляції, який використовує компілятор TypeScript для перевірки зв'язків, виразів у шаблонах`,
  },
  {
    title: `What are webworkers in angular?`,
    english:`Web workers in Angular is a technology that allows you to perform complex calculations in the background thread of the central processor, freeing the main thread to update the user interface`,
    ukrainian: `Web workers в Angular це технологія яка дозволяє виконувати складні обчислення у фоновому потоці центрального процесора, звільняючи основний потік для оновлення інтерфейсу користувача`,
  },
  {
    title: `What is a DI token?`,
    english:`The Dependency Injection system in Angular uses tokens to uniquely identify a Provider. There are three types of tokens that you can create in Angular. They are Type Token, String Token, and Injection Token`,
    ukrainian: `Система Dependency Injection в Angular використовує токени для унікальної ідентифікації постачальника. Є три типи токенів, які ви можете створити в Angular. Це маркер типу, маркер рядка та маркер ін’єкції`,
  },
  {
    title: `What are the ways to trigger change detection?`,
    english:`ApplicationRef.tick() - Used to explicitly handle change detection, the method checks the entire component tree. NgZone.run(callback) - accepts a callback function ChangeDetectorRef.detectChanges() - detects only components and their children.`,
    ukrainian: `ApplicationRef.tick()  - використовується для того, щоб явно обробити виявлення змін, метод перевіряє повне дерево компонентів. NgZone.run(callback) - приймає калбек функцію ChangeDetectorRef.detectChanges() - детектить лише компоненти та їх дочірні елементи.`,
  },
  {
    title: `What are the best practices for security in angular?`,
    english:`Prevent cross-site scripting; Block HTTP-related vulnerabilities; Avoid untested APIs; Do not configure Angular files; Always try to use the latest versions of libraries for Angular;`,
    ukrainian: `Запобігти cross-site scripting; Блокуйте вразливості, пов’язані з HTTP; Уникати неперевірених APIs; Не налаштовуйте файли Angular; Завжди старатися використовувати найновіші версії бібліотек для Angular;`,
  },
  {
    title: `What is DOM sanitizer?`,
    english: `DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing values to be safe to use in the different DOM contexts.These situations should be very rare, and extraordinary care must be taken to avoid creating a Cross Site Scripting (XSS) security bug!`,
    ukrainian: `DomSanitizer допомагає запобігти помилкам безпеки міжсайтових сценаріїв (XSS). Він очищує значення, щоб вони були безпечними для використання в різних контекстах DOM. Такі ситуації мають бути дуже рідкісними, і потрібно бути надзвичайно обережним, щоб уникнути виникнення помилки безпеки міжсайтового сценарію (XSS)!`,
  },
  {
    title: `What are Http Interceptors?`,
    english:`HTTP Interceptors are a special type of angular service that we can implement. It is used to apply custom logic to a central point between an outgoing/incoming HTTP request and a client-side and server-side response.`,
    ukrainian: `HTTP Interceptors — це особливий тип angular-сервісу, який ми можемо реалізувати. Він використовується для застосування спеціальної логіки до центральної точки між вихідним/вхідним HTTP-запитом і відповіддю на стороні клієнта та на стороні сервера.`,
  },
  {
    title: `What is the purpose of i18n attribute?`,
    english:`i18n is used to mark the text to be translated`,
    ukrainian: `i18n використовується для маркування тексту що має бути перекладений`,
  },
  {
    title: `What is select ICU expression?`,
    english:`Mark choices for alternate text based on your defined string values`,
    ukrainian: `Позначає варіанти для альтернативного тексту на основі визначених вами рядкових значень`,
  },
  {
    title: `How do you provide build configuration for multiple locales?`,
    english:`I Configure a server for preferred language defined in the browser using the Accept-Language HTTP header, we can implement that by nginx`,
    ukrainian: `Я налаштовую сервер для бажаної мови, визначеної у браузері, використовуючи HTTP-заголовок Accept-Language, ми можемо реалізувати це за допомогою nginx`,
  },
  {
    title:`What is router state?`,
    english:`Angular RouterState is the state of the router in the form of a tree of activated routes. It specifies how the various components of the application are arranged on the screen to determine what should be displayed on it. RouterState represents the state of the router as it constantly changes over time as users move from page to page.`,
    ukrainian:`Angular RouterState — це стан маршрутизатора у вигляді дерева активованих маршрутів.  Він вказує, як різні компоненти програми розташовані на екрані, щоб визначити, що на ньому має відображатися.  RouterState представляє стан маршрутизатора, оскільки він постійно змінюється з часом, коли користувачі переходять від сторінки до сторінки.`
  },
  {
    title:`What is slice pipe?`,
    english:`A pipe used to cut string. The first parameter indicates the index from which cut begins, the second indicates the index where it ends.`,
    ukrainian:`Пайп, що використовується для обрізання стрінги. Першим параметром вказується індекс з якого починається обрізання, другим вказується індекс де завершується.`
  },
  {
    title:` Is it all components generated in production build?`,
    english:`No, only the entry components and template components appears in production builds. If a component isn't an entry component and isn't found in a template, the tree shaker will throw it away.`,
    ukrainian:`Ні, лише ентрі компоненти та компоненти шаблонів відображаються у робочих збірках. Якщо компонент не є ентрі компонентом і не знайдений у шаблоні, шейкер дерева викине його.`
  },
  {
    title:`How can I use interceptor for an entire application?`,
    english:`You can use same instance of HttpInterceptors for the entire app by importing the HttpClientModule only in your AppModule, and add the interceptors to the root application module provider. `,
    ukrainian:`Ви можете використовувати той самий екземпляр HttpInterceptors для всієї програми, імпортувавши HttpClientModule лише у свій AppModule і додавши перехоплювачі до providers`
  },
  {
    title:`What is Sanitization? Is angular supports it?`,
    english:`Sanitization is the inspection of an untrusted value, turning it into a value that's safe to insert into the DOM. In many cases, sanitization doesn't change a value at all. Sanitization depends on context: A value that's harmless in CSS is potentially dangerous in a URL.`,
    ukrainian:`Sanitization — це перевірка ненадійного значення, перетворення його на значення, яке можна безпечно вставити в DOM. У багатьох випадках санітарна обробка взагалі не змінює значення. Sanitization залежить від контексту: нешкідливе значення в CSS потенційно небезпечне в URL-адресі.`
  },
  {
    title:`What is a shared module?`,
    english:`The shared module allows us to organize and optimize our code. We can create directives and components in one module and then import only that module anywhere else`,
    ukrainian:`Shared module дозволяє нам упорядкувати та оптимізувати свій код. Ми можемо помістити  директиви та компоненти в один модуль, а потім імпортувати лише цей модуль у будь-яке інше місце`
  },
  {
    title:`What is RouterStateSnapshot?`,
    english:`is a tree of active routes. With its help, we have access to any parameters or segments of the current url`,
    ukrainian:`What is RouterStateSnapshot? - це дерево активних роутів. За допомогою нього ми маємо доступ до будь-яких параметрів чи сегментів поточної юрли`
  },
  {
    title:`What is ngcc? `,
    english:`(Angular Compatibility Compiler) is a tool that updates node modules compiled with non-ivy ngc to an ivy-compatible format.`,
    ukrainian:`What is ngcc? (Компілятор сумісності Angular) - це інструмент, який оновлює нод модулі, скомпільованих не за допомогою ivy ngc, у формат, сумісний з ivy.`
  },
  {
    title:`What is NgZone?`,
    english:`NgZone enables us to explicitly run certain code outside Angular's Zone, preventing Angular to run any change detection. So basically, handlers will still be executed, but since they won't run inside Angular's Zone, Angular won't get notified that a task is done and therefore no change detection will be performed`,
    ukrainian:`NgZone дає нам змогу явно запускати певний код поза зоною Angular, не дозволяючи Angular запускати будь-яке виявлення змін. Таким чином, в основному, обробники все одно виконуватимуться, але оскільки вони не запускатимуться всередині зони Angular, Angular не отримуватиме сповіщень про виконання завдання, і тому виявлення змін не здійснюватиметься`
  },
  {
    title:`What are the methods of NgZone used to control change detection?`,
    english:`The run() method is used to execute API requests that are not handled by ngZone and automatically trigger change detection at the correct time. The runOutsideAngular() method also executes API requests, but does not trigger change detection`,
    ukrainian:`Метод run() використовується для виконання API запитів, які не обробляються ngZone, і автоматично запускає виявлення змін у правильний час. Метод runOutsideAngular() теж для виконання API запитів,, але не запускає виявлення змін`
  },
  {
    title:`Is it mandatory to use injectable on every service class?`,
    english:`No. The @Injectable() decorator is not strictly required if the class has other Angular decorators on it or does not have any dependencies. But the important thing here is any class that is going to be injected with Angular is decorated.`,
    ukrainian:`Ні, ми просто вказуєм, що сервіс може мати депенденсіс або не може`
  },
  {
    title:`difference between private, public and protected,`,
    english:`Private methods/members are accessible only from inside the class. Protected methods/members are accessible from inside the class and extending class as well.`,
    ukrainian:`Приватні методи/змінні доступні лише зсередини класу. Захищені методи/змінні доступні зсередини класу та класу розширення.`
  },
  {
    title:`how change detection works?`,
    english:`Change detection works by detecting common browser events like mouse clicks, HTTP requests, and other types of events, and deciding if the view of each component needs to be updated or not.`,
    ukrainian:`Виявлення змін працює, виявляючи типові події браузера, як-от клацання мишею, HTTP-запити та інші типи подій, і вирішуючи, чи потрібно оновлювати перегляд кожного компонента чи ні.`
  },
  {
    title:`What are the types of change detection:`,
    english:`default change detection: Angular decides if the view needs to be updated by comparing all the template expression values before and after the occurrence of an event, for all components of the component tree. OnPush change detection: this works by detecting if some new data has been explicitly pushed into the component, either via a component input or an Observable subscribed to using the async pipe`,
    ukrainian:`виявлення змін за замовчуванням: Angular вирішує, чи потрібно оновлювати представлення, порівнюючи всі значення виразу шаблону до та після виникнення події для всіх компонентів дерева компонентів. Виявлення змін OnPush: це працює, виявляючи, чи деякі нові дані були явно вставлені в компонент, або через введення компонента, або через Observable, підписаний на асинхронний канал.`
  },
  {
    title:`What is service worker?`,
    english:`Adding a service worker to an Angular application is one of the steps for turning an application into a Progressive Web App (also known as a PWA). At its simplest, a service worker is a script that runs in the web browser and manages caching for an application. Service workers function as a network proxy.`,
    ukrainian:`Додавання сервіс-воркера до програми Angular є одним із кроків для перетворення програми на прогресивний веб-додаток (також відомий як PWA). У найпростішому вигляді сервіс-воркер — це сценарій, який виконується у веб-браузері та керує кешуванням програми. Сервісні працівники функціонують як мережевий проксі.`
  },
  {
    title:`What is angular ivy?`,
    english:`ivy is an Angular compiler and rendering pipeline. Since version 9, Angular has replaced the View Engine compiler`,
    ukrainian:`ivy - це компілятор і пайплайна візуалізації ангуляр. З 9 версії ангуляр замінив компілятор View Engine`
  },
  {
    title: `What the difference between element and component?`,
    english: `Angular elements are small blocks that describe what we want to see on the screen, in most cases they are not used directly, but are returned by components. And components are parts of the code that we can reuse, they return angular elements in order to show them on the screen`,
    ukrainian:`ангуляр елементи це маленькі блоки які описують те що ми хочему побачити на екрані, в більшості вони не використовуються на пряму, а повертаються компонентами. А компоненти - це частини кода які ми можемо використовувати повторно, вони вертають ангуляр-елементи для того щоб показати їх на екрані`,
  },
  {
    title: `What is Angular Reactive Form?`,
    english: `Angular Reactive Form is a form building library for Angular that makes it easy to create reactive forms. A reactive form is one that automatically updates the form data when the underlying data changes. This can be useful for things like keeping a form synchronized with a database.`,
    ukrainian: `Angular Reactive Form — це бібліотека створення форм для Angular, яка полегшує створення реактивних форм. Реактивна форма — це форма, яка автоматично оновлює дані форми, коли змінюються основні дані. Це може бути корисно для таких речей, як синхронізація форми з базою даних.`
  },
  {
    title: `Can you explain the main difference between Template-Driven and Reactive Forms in Angular?`,
    english: `The main difference between the two types of forms is that template-driven forms are more concerned with the structure of the form, while reactive forms are more concerned with the behavior of the form. With template-driven forms, you are responsible for creating the entire form in the template, including all of the input fields, validation, and submit handling. With reactive forms, on the other hand, you create the form in the component class, and then bind it to the template. This gives you more control over the form, but it can also be more difficult to set up.`,
    ukrainian: `Основна відмінність між двома типами форм полягає в тому, що template-driven форми більше стурбовані структурою форми, тоді як реактивні форми більше стурбовані поведінкою форми. З template-driven формами ви відповідаєте за створення всієї форми в шаблоні, включаючи всі поля введення, перевірку та обробку надсилання. З іншого боку, з реактивними формами ви створюєте форму в класі компонентів, а потім прив’язуєте її до шаблону. Це дає вам більше контролю над формою, але її також може бути складніше налаштувати.`
  },
  {
    title: `What are some advantages of using Reactive forms over template-driven forms?`,
    english: `Reactive forms offer more flexibility and control over form validation. With template-driven forms, validation is typically done through directives, which can be difficult to control. Reactive forms also allow for more complex validation, such as cross-field validation.`,
    ukrainian: `Реактивні форми пропонують більше гнучкості та контролю над перевіркою форми. У template-driven формах, перевірка зазвичай виконується за допомогою директив, якими може бути важко керувати. Реактивні форми також дозволяють виконувати більш складну перевірку, наприклад крос-філд перевірку.`
  },
  {
    title: `What’s the best way to work with complex nested forms?`,
    english: `There is no one-size-fits-all answer to this question, as the best way to work with complex nested forms will vary depending on the specific details of the form in question. However, some tips that may be helpful include breaking the form down into smaller manageable pieces, using formArray to manage groups of form controls, and using formGroupName to bind a form control to a specific form group.`,
    ukrainian: `На це запитання немає однозначної відповіді, оскільки найкращий спосіб роботи зі складними вкладеними формами буде різним залежно від конкретних деталей відповідної форми. Однак деякі поради, які можуть бути корисними, включають розбиття форми на менші керовані частини, використання formArray для керування групами елементів керування форми та використання formGroupName для прив’язки елемента керування форми до певної групи форм.`
  },
  {
    title: `Why would you use valueChanges() instead of statusChanges() for a reactive form control?`,
    english: `ValueChanges will give you the current value of the control, while statusChanges will give you the validation status of the control.`,
    ukrainian: `ValueChanges дасть вам поточне значення елемента керування, тоді як statusChanges дасть вам статус перевірки елемента керування.`
  },
  {
    title: `What is the usage of the setValidators() method when used on a form control object in Angular?`,
    english: `The setValidators() method is used to set the validators that will be used to validate the form control object. This is typically used when you want to add new validators to a form control object or when you want to change the existing validators that are being used.`,
    ukrainian: `Метод setValidators() використовується для встановлення валідаторів, які використовуватимуться для перевірки об’єкта керування формою. Це зазвичай використовується, коли  треба додати нові валідатори до об’єкта керування формою або коли треба змінити існуючі валідатори, які вже використовуються.`
  },
  {
    title: `What’s the role of the FormBuilder class in Angular?`,
    english: `The FormBuilder class is responsible for creating and managing Angular forms. It provides a convenient way to create and manipulate form controls, as well as track and validate form values.`,
    ukrainian: `Клас FormBuilder відповідає за створення та керування формами Angular. Він надає зручний спосіб створювати та маніпулювати елементами керування форми, а також відстежувати та перевіряти значення форми.`
  },
  {
    title: `What is the purpose of the compose() method in Angular?`,
    english: `The compose() method is used to create a higher-order observable, which is an observable that is composed of multiple other observables. This is often used when working with multiple streams of data that need to be processed together in some way.`,
    ukrainian: `Метод compose() використовується для створення observable вищого порядку, який є  observable, що складається з кількох інших  observables. Це часто використовується під час роботи з кількома потоками даних, які певним чином потрібно обробляти разом.`
  },
  {
    title: `What is angular form validators?`,
    english: `A form field validator is a function that the form can call in order to decide if a given form field is valid or not. A validator function returns true if the form field is valid according to the validator rules, or false otherwise.`,
    ukrainian: `Валідатор поля форми — це функція, яку може викликати форма, щоб вирішити, чи дане поле форми дійсне чи ні. Функція валідатора повертає значення true, якщо поле форми є дійсним відповідно до правил перевірки, або false в іншому випадку.`
  },
  {
    title: `What is the methods of angular form validators?`,
    english: `min(), max(), required(), email(), maxLength()...`,
    ukrainian: `...`
  },
  {
    title: `what is the Asynchronous Validators?`,
    english: `The main difference from simple validators that the type returned AsyncValidatorFn. This means that the validation function itself needs to return either a promise or an Observable that emits a value of type ValidationErrors. For example, we have used Observables, by calling the HTTP based UserService that called our backend and checked if the user exists on the database.`,
    ukrainian: `Основна відмінність від простих валідаторів полягає в тому, що тип повертає AsyncValidatorFn. Це означає, що сама функція перевірки повинна повертати або проміс, або Observable, які видають значення типу ValidationErrors. Наприклад, ми використали Observables, викликавши службу UserService на основі HTTP, яка викликала наш сервер і перевірила, чи існує користувач у базі даних.`
  },
  {
    title: `what is updateOn property in forms?`,
    english: `The updateOn property is useful to define when the form value should be updated with the latest form field value. This is important because by default the value is communicated as quickly as possible. For example, in the case of an input text field, this will by default be communicated with each key pressed by the user, which might be too fast for certain scenarios such as asynchronous validators.`,
    ukrainian: `Властивість updateOn корисна, щоб визначити, коли значення форми слід оновити останнім значенням поля форми. Це важливо, оскільки за замовчуванням значення передається якомога швидше. Наприклад, у разі  введення у інпуті, за замовчуванням повідомлятиметься про кожну натиснуту користувачем клавішу, що може бути надто швидким для певних сценаріїв наприклад для асинхроних валідаторів.`
  },
  {
    title: `What are the different values that updateOn can take?`,
    english: `- change: This is the default value. This means that the form will update with each new field value (causing all field validators to run). For a select box or check box, this will happen when the user selects a new value, but for a text box, it will happen after each key press. - blur: This means that the form will be updated with the new field value only when the field is blurred, ie the user has either tabbed or clicked elsewhere on the page. - submit: rarely used, but available if needed. This means that the form will only be updated immediately after the form is submitted.`,
    ukrainian: ` - change: це значення за замовчуванням. Це означає, що форма буде оновлюватися з кожним новим значенням поля (що призведе до запуску всіх валідаторів полів). Для поля вибору або прапорця це станеться, коли користувач вибере нове значення, але для текстового поля це станеться після кожного натискання клавіші. - blur: це означає, що форма буде оновлено новим значенням поля лише тоді, коли поле розмито, тобто користувач або перейшов із вкладкою, або клацнув деінде на сторінці. - submit: використовується рідко, але доступне, якщо потрібно. Це означає, що форму буде оновлено лише одразу після надсилання форми.`
  },
  {
    title: `what are lifecycle hooks you know?`,
    english: `- ngOnChanges: When an input/output binding value changes. - ngOnInit: After the first ngOnChanges. - ngDoCheck: Developer's custom change detection. - ngAfterContentInit: After component content initialized. - ngAfterContentChecked: After every check of component content. - ngAfterViewInit: After a component's views are initialized. - ngAfterViewChecked: After every check of a component's views. - ngOnDestroy: Just before the component/directive is destroyed`,
    ukrainian: `- ngOnChanges: коли змінюється значення прив’язки введення/виведення. - ngOnInit: після перших ngOnChanges. - ngDoCheck: виявлення власних змін розробником. - ngAfterContentInit: після ініціалізації вмісту компонента. - ngAfterContentChecked: після кожної перевірки вмісту компонента. - ngAfterViewInit: після ініціалізації представлень компонента. - ngAfterViewChecked: після кожної перевірки представлень компонента. - ngOnDestroy: безпосередньо перед знищенням компонента/директиви`
  },
  {
    title: `what is ngOnChanges hook?`,
    english: `This method is called once on a component's creation and then every time changes are detected in one of the component’s input properties. It receives a SimpleChanges object as a parameter, which contains information regarding which of the input properties has changed - in case we have more than one - and its current and previous values.This is one of the lifecycle hooks which can come in handy in multiple use cases. It is very useful if you need to handle any specific logic in the component based on the received input property.`,
    ukrainian: `Цей метод викликається один раз під час створення компонента, а потім кожного разу, коли виявляються зміни в одній із вхідних властивостей компонента. Він отримує об’єкт SimpleChanges як параметр, який містить інформацію про те, яка вхідна властивість змінилася (якщо у нас більше однієї), а також її поточні та попередні значення. Це один із перехоплювачів життєвого циклу, який може стати в нагоді в кількох випадках використання. Це дуже корисно, якщопотрібно обробити будь-яку конкретну логіку в компоненті на основі отриманої вхідної властивості.`
  },
  {
    title:`what is ngOnInit hook?`,
    english:`This method is called only once during the component lifecycle, after the first ngOnChanges call. ngOnInit() is still called even when ngOnChanges() is not, which is the case when there are no template-bound inputs. This is one of the most used lifecycle hooks in Angular. Here is where you might set requests to the server to load content, maybe create a FormGroup for a form to be handled by that component, set subscriptions, and much more. It is where you can perform any initializations shortly after the component’s construction.`,
    ukrainian:`Цей метод викликається лише один раз протягом життєвого циклу компонента, після першого виклику ngOnChanges. ngOnInit() всерівно викликається, навіть якщо ngOnChanges() не викликається, у випадку відсутності прив’язаних до шаблону вхідних даних. Це один із найбільш використовуваних хуків життєвого циклу в Angular. Тут можна  встановити запити до сервера для завантаження вмісту, можливо, створити FormGroup для форми, яку буде обробляти цей компонент, встановити підписки та багато іншого. Тут можна виконувати будь-які ініціалізації після створення компонента.`
  },
  {
    title:`what is ngDoCheck hook?`,
    english:`This hook can be interpreted as an “extension” of ngOnChanges. You can use this method to detect changes that Angular can’t or won’t detect. It is called in every change detection, immediately after the ngOnChanges and ngOnInit hooks. This hook is costly since it is called with enormous frequency; after every change detection cycle no matter where the change occurred. Therefore, its usage should be careful to not affect the user experience.`,
    ukrainian:`Цей хук можна інтерпретувати як «розширення» ngOnChanges. Можна використовувати цей метод для виявлення змін, які Angular не може або не хоче виявити. Він викликається під час кожного виявлення змін одразу після хуків ngOnChanges і ngOnInit. Цей хук дорогий, тому що викликається з величезною частотою; після кожного циклу виявлення змін незалежно від того, де відбулася зміна. Тому його використання має бути обережним, щоб не вплинути на досвід користувача.`
  },
  {
    title:`what is ngAfterViewInit hook?`,
    english:`This method is called only once during the component’s lifecycle, after the first ngDoCheck. Within this hook, we have access for the first time to the ElementRef of the ContentChild after the component’s creation; after Angular has already projected the external content into the component’s view.`,
    ukrainian:`Цей метод викликається лише один раз протягом життєвого циклу компонента, після першого ngDoCheck. У цьому хуку надається доступ до ElementRef ContentChild після створення компонента; після того, як Angular вже спроектував контент у поданні компонента.`
  },
  {
    title:`what is ngAfterContentChecked hook?`,
    english:`This method is called once during the component’s lifecycle after ngAfterContentInit and then after every subsequent ngDoCheck. It is called after Angular has already checked the content projected into the component`,
    ukrainian:`Цей метод викликається один раз протягом життєвого циклу компонента після ngAfterContentInit, а потім після кожного наступного ngDoCheck. Він викликається після того, як Angular вже перевірив вміст, спроектований у компонент`
  },
  {
    title:`what is ngOnDestroy hook?`,
    english:`this method is called only once during the component’s lifecycle, right before Angular destroys it. Here is where you should inform the rest of your application that the component is being destroyed, in case there are any actions to be done regarding that information.Also, it is where you should put all your cleanup logic for that component. For instance, it is where you can remove any local storage information and most importantly unsubscribe observables/detach event handlers/stop timers, etc. to avoid memory leaks.`,
    ukrainian:`цей метод викликається лише один раз протягом життєвого циклу компонента, безпосередньо перед тим, як Angular знищить його. Тут потрібно повідомити решту апки про те, що компонент знищується, на випадок, якщо потрібно виконати будь-які дії щодо цієї інформації. Крім того, тут потрібно розмістити всю логіку очищення для цього компонента. Наприклад, тут можна видалити будь-яку інформацію про локальне зберігання і, що найважливіше, скасувати підписку,  від’єднати обробники подій,зупинити таймери ітд, щоб уникнути витоку пам’яті.`
  },
  // {
  //   title:``,
  //   english:``,
  //   ukrainian:``
  // },
  // {
  //   title:``,
  //   english:``,
  //   ukrainian:``
  // },
  // {
  //   title:``,
  //   english:``,
  //   ukrainian:``
  // },
  // {
  //   title:``,
  //   english:``,
  //   ukrainian:``
  // },
  // {
  //   title:``,
  //   english:``,
  //   ukrainian:``
  // },
  // {
  //   title:``,
  //   english:``,
  //   ukrainian:``
  // },
  // {
  //   title:``,
  //   english:``,
  //   ukrainian:``
  // },
] as Question[];
//lifecyclemethods, rxjs - methods, subjects
