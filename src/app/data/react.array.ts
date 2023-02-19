import {Question} from "../question.interface";

export const  reactArray = [
  {
    title: `What is React?`,
    english: `- React is a JavaScript library created by Facebook, - React is a User Interface (UI) library, - React is a tool for building UI components`,
    ukrainian:`- React - це бібліотека JavaScript, створена Facebook, - React - це бібліотека інтерфейсу користувача (UI), - React - це інструмент для створення компонентів інтерфейсу користувача`,
  },
  {
    title: `What is the main features of React?`,
    english: `1. React is a single page application
              2. React has jsx, which is convenient for quickly writing code
              3. React has a ReactDom that speeds up the app
              4. A component approach is applied (the code is easy to maintain and understand)
              5. Easy to learn
              6. Easily integrates with other libraries`,
    ukrainian: `1. Реакт це single page application
                2. В реакті є jsx, а це зручно для швидкого написання коду
                3. Реакт має ReactDom, що пришвидшує роботу app
                4. Застосовується компонентний підхід ( легко підтримувати код і розбиратись в ньому )
                5. Легкий для вивчення
                6. Легко інтегрується з іншими бібліотеками`,
  },
  {
    title: `What is JSX?`,
    english: `Jsx is a syntax in the JS - React library. JavaScript syntax extension. This syntax looks like a template language, but has all the language capabilities of JavaScript. In simple words, here we combine logic (just writing the code in js) and HTML + CSS`,
    ukrainian:`Jsx це синтаксис у бібліотеці JS - React. розширення синтаксису JavaScript.  Цей синтаксис виглядає як мова шаблонів, але має всі мовні можливості JavaScript. Простими словами тут ми поєднуємо логіку(саме написання коду на js) та HTML + CSS`,
  },
  {
    title: `Why react is not framework?`,
    english: `First of all, I would like to note that the official website says that React is a library, not a framework. For a better understanding, you need to know the difference between a library and a framework. In short, a framework defines the architecture of an application and provides interaction between its components, and the library is a set of tools for solving a specific task, and the approach applies to one of the components, and not to the entire application. That is, the library does not define the structure of the application, and this is why React is more of a library than a framework. Although this is a very popular topic on the Internet, since React is often used in conjunction with other libraries that already allow building the structure of the program, which is more like a framework (`,
    ukrainian:`Найперше зверну увагу, що на офіційному сайті сказано, React це бібліотека, не фреймворк. Для кращого розуміння треба знати різницю між бібліотекою та фреймворком. Якщо коротко, фреймворк  визначає архітектуру програми та забезпечує взаємодію між її компонентами, а бібліотека - це набір інструментів для вирішення конкретного завдання і підхід поширюється на один з компонентів, а не на весь додаток. Тобто бібліотека не визначає структуру програми, і ось чому React це більше бібліотека, а не фреймворк. Хоча це дуже холеварна тема в інтернеті, оскільки часто React застосовують у зв'язці з іншими бібліотеками, які уже дозволяють будувати структуру програми, що вже більше схоже на фреймворк (`,
  },
  {
    title: `What the difference between element and component?`,
    english: `React elements are small blocks that describe what we want to see on the screen, in most cases they are not used directly, but are returned by components. And components are parts of the code that we can reuse, they return react elements in order to show them on the screen`,
    ukrainian:`Реакт елементи це маленькі блоки які описують те що ми хочему побачити на екрані, в більшості вони не використовуються на пряму, а повертаються компонентами. А компоненти - це частини кода які ми можемо використовувати повторно, вони вертають реакт-елементи для того щоб показати їх на екрані`,
  },
  {
    title: `When to use a Class Component over a Function Component?`,
    english: `If the component needs state or lifecycle methods then use class component otherwise use function component. However, from React 16.8 with the addition of Hooks, you could use state , lifecycle methods and other features that were only available in class component right in your function component`,
    ukrainian:`Якщо компоненту потрібні методи стану або життєвого циклу, використовуйте компонент класу, інакше використовуйте компонент функції. Однак, починаючи з React 16.8 із додаванням хуків, ви можете використовувати стан, методи життєвого циклу та інші функції, які були доступні лише в компоненті класу, прямо у вашому функціональному компоненті`,
  },
  {
    title: `What are Pure Components?`,
    english: `Pure Components do not depend or modify the state of variables outside their scope. These are the building blocks of Functional Programming. Its return value is only determined by its input values. Its return value is always the same for the same input values. Pure components have some performance improvements and render optimizations since React implements the shouldComponentUpdate() method for them with a shallow comparison for props and state.`,
    ukrainian:`Чисті компоненти не залежать і не змінюють стан змінних за межами своєї області. Це будівельні блоки функціонального програмування. Його значення, що повертається, визначається лише його вхідними значеннями. Його значення, що повертається, завжди однакове для однакових вхідних значень. Чисті компоненти мають деякі покращення продуктивності та оптимізацію візуалізації, оскільки React реалізує для них метод shouldComponentUpdate() із неглибоким порівнянням пропсів і стейту.`,
  },
  {
    title: `What is state in React?`,
    english: `The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.`,
    ukrainian:`Об'єкт стейту – це місце, де ви зберігаєте значення властивостей, які належать компоненту. Коли об’єкт стейту змінюється, компонент ререндериться.`,
  },
  {
    title: `What are props in React?`,
    english: `Props in React are component properties, or in other words provide configuration values for the component. With the help of props, we can pass the necessary values to our child components.`,
    ukrainian:`Props in React це властивості компонента, або іншими словами надають значення конфігурації для компонента. За допомогою props ми можемо передавати необхідні значення в наші child components.`,
  },
  {
    title: `What is the difference between state and props?`,
    english: `The difference is that state is private and can be changed from the component itself. Props are external and not controlled by the component itself. It is passed down from components, which also control the data. `,
    ukrainian:`Різниця полягає в тому, що стан є приватним і може бути змінений із самого компонента. Пропси є зовнішніми і не контролюються самим компонентом. Він передається від компонентів, які також контролюють дані.`,
  },
  {
    title: `Why should we not update the state directly?`,
    english: `Because update state directly then it won't re-render the component.Because React keeps a copy of the previous state of the page. It uses it as a reference point when it decides on what should be repainted and what shouldn't.`,
    ukrainian: `Якщо оновити стан безпосередньо, це не призведе до повторного рендерингу компонента. Оскільки React зберігає копію попереднього стану сторінки. Він використовує його як орієнтир, коли вирішує, що слід перефарбовувати, а що ні.`
  },
  {
    title: `What is the purpose of callback function as an argument of setState()?`,
    english: `The setState() method, which does not always update the component immediately, It can group or delay updates until next time. We can use componentDidUpdate() or the setState() callback (setState(updater, callback)), each of which is guaranteed to be called after an update has been applied`,
    ukrainian: `Метод setState(), який не завжди оновлює компонент негайно, він може групувати або відкладати оновлення до наступного разу. Ми можемо використовувати компонентDidUpdate() або зворотний виклик setState() (setState(updater, callback)), кожен з яких гарантовано викликається після застосування оновлення`
  },
  {
    title: `How to bind methods or event handlers in JSX callbacks?`,
    english: `There are 3 possible ways to achieve this: - Binding in Constructor, - Public class fields syntax, -  Arrow functions in callbacks `,
    ukrainian: `Є 3 можливі способи досягти цього: - байндінг в Конструкторі, - Public class fields syntax, - Функції стрілок у зворотних викликах`
  },
  {
    title: `What are inline conditional expressions?`,
    english: `First inline conditional expression is used as a short if-else statement - condition ? (condition is true) : (condition is false); Second inline conditional expression is boolean operator (Logical && operator) - (condition) && (If condition true that should be rendered)`,
    ukrainian: `Перший вбудований умовний вираз використовується як короткий оператор if-else - умова ? (умова істинна) : (умова хибна); Другим вбудованим умовним виразом є логічний оператор (логічний оператор &&) - (умова) && (якщо умова істинна, її слід відобразити)`
  },
  {
    title: `What is "key" prop and what is the benefit of using it in arrays of elements?`,
    english: ` A key is a special string attribute you should include when creating arrays of elements. Key prop helps React identify which items have changed, are added, or are removed.`,
    ukrainian: `атрибут key — це спеціальний атрибут, який має бути включений під час створення масивів елементів. Key prop допомагає React визначити, які елементи змінено, додано чи видалено.`
  },
  {
    title: ` What is the use of refs?`,
    english: `Refs returns a reference to the element.We can use it to: 1 Element focus, text selection. 2 Animations. 3 Integration with DOM libraries`,
    ukrainian: `Refs повертає посилання на елемент. Ми можемо використовувати його для Фокусу елемента, виділення тексту. 2 Анімації. 3 Інтеграції з бібліотеками DOM`
  },
  {
    title: `How to create refs?`,
    english: `Refs are created with React.createRef() and attached to React elements via the ref attribute.  Typically, refs are assigned to a class instance property in the constructor so that they can be referenced from any part of the component.`,
    ukrainian: `Рефи створюються за допомогою React.createRef() і приєднуються до елементів React через атрибут ref. Як правило, посилання призначаються властивості екземпляра класу в конструкторі, щоб на них можна було посилатися з будь-якої частини компонента.`
  },
  {
    title: `What is Virtual DOM?`,
    english: `The Virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the "real" DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation.`,
    ukrainian: `Віртуальний DOM (VDOM) — це представлення реального DOM у пам’яті. Представлення інтерфейсу користувача зберігається в пам’яті та синхронізується з «реальним» DOM. Це крок, який відбувається між викликом функції рендерингу та відображенням елементів на екрані. Весь цей процес називається reconciliation.`
  },
  {
    title: `How Virtual DOM works?`,
    english: `Virtual DOM stored in memory and synchronized with the "real" DOM using a library such as ReactDOM.`,
    ukrainian: `Віртуальний DOM зберігається в пам’яті та синхронізується з «реальним» DOM за допомогою бібліотеки, такої як ReactDOM.`
  },
  {
    title: `What are forward refs?`,
    english: `forward refs  are the feature that lets some components take a ref they receive, and pass it further down to a child.`,
    ukrainian: `forward refs - це особливість, яка дозволяє деяким компонентам отримувати отримане посилання та передавати його дочірньому компонету.`
  },
  {
    title: `What is the difference between Shadow DOM and Virtual DOM?`,
    english: `The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The Virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.`,
    ukrainian: `Shadow DOM — це технологія браузера, розроблена в основному для визначення змінних і CSS у веб-компонентах. Віртуальний DOM – це концепція, реалізована бібліотеками в JavaScript поверх API браузера.`
  },
  {
    title: `What is React Fiber?`,
    english: `React Fiber is an internal engine change that allows React to break the limits of the call stack`,
    ukrainian: `React Fiber — це внутрішня зміна в реакті, яка дозволяє React порушувати обмеження кол стеку`
  },
  {
    title: `What are the lifecycle methods of React?`,
    english: `Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.
              The three phases are: Mounting, Updating, and Unmounting.
              Mounting lifecycle methods:
              1. constructor()
              2. static getDerivedStateFromProps()
              3. render()
              4. componentDidMount()
              Updating lifecycle methods:
              1. static getDerivedStateFromProps()
              2. shouldComponentUpdate()
              3. render()
              4. getSnapshotBeforeUpdate()
              5. componentDidUpdate()
              Unmounting lifecycle method:
              componentWillUnmount`,
    ukrainian: `Кожен компонент у React має життєвий цикл, який можна контролювати та маніпулювати ним протягом трьох основних фаз.`
  },
  {
    title: `What are Higher-Order components?`,
    english: `A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React's compositional nature. Concretely, a higher-order component is a function that takes a component and returns a new component.`,
    ukrainian: `Компонент вищого порядку (HOC) — це вдосконалена техніка в React для повторного використання логіки компонента. HOC як такі не є частиною React API. Вони є шаблоном, який випливає з композиційної природи React. Конкретно, компонент вищого порядку — це функція, яка приймає компонент і повертає новий компонент.`
  },
  {
    title: `What is context?`,
    english: `A context provides a way to pass data through the component tree without having to manually pass props at each level.`,
    ukrainian: `Контекст забезпечує спосіб передавати дані через дерево компонентів без необхідності передавати пропси вручну на кожному рівні.`
  },
  {
    title: `What is children prop?`,
    english: `Children prop is used to render the content which we passed to the component when it was invoked.`,
    ukrainian: `Children prop використовується для відтворення вмісту, який ми передали компоненту під час його виклику.`
  },
  {
    title: `Why fragments are better than container divs?`,
    english: `Fragments are a bit faster and use less memory by not creating an extra DOM node. This only has a real benefit on very large and deep trees. Some CSS mechanisms like Flexbox and CSS Grid have a special parent-child relationships, and adding divs in the middle makes it hard to keep the desired layout.`,
    ukrainian: `Фрагменти працюють трохи швидше та використовують менше пам’яті, оскільки не створюють додаткового вузла DOM. Це має реальну користь лише на дуже великих і глибоких деревах. Деякі механізми CSS, як-от Flexbox і CSS Grid, мають спеціальні батьківсько-начірні зв’язки, і додавання елементів div у середині ускладнює збереження потрібного макета.`
  },
  {
    title: `What are portals in React?`,
    english: `Portal is a recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. ReactDOM.createPortal(child, container); The first argument is any render-able React child, such as an element, string, or fragment. The second argument is a DOM element.`,
    ukrainian: `Портал — це рекомендований спосіб відтворення дочірніх елементів у вузлі DOM, який існує поза ієрархією DOM батьківського компонента. ReactDOM.createPortal(нащадок, контейнер); Перший аргумент — це будь-який дочірній елемент React, який можна візуалізувати, наприклад елемент, рядок або фрагмент. Другим аргументом є елемент DOM.`
  },
  {
    title: `What are stateless components?`,
    english: `Stateless components are those components which don't have any state at all, which means you can't use this. setState inside these components. It is like a normal function with no render method. It has no lifecycle, so it is not possible to use lifecycle methods such as componentDidMount and other hooks.`,
    ukrainian: `стейтлесс компоненти — це ті компоненти, які взагалі не мають жодного стейту, що означає, що не можна використовувати setState всередині цих компонентів. Це як звичайна функція без методу ререндерингу. Він не має життєвого циклу, тому неможливо використовувати такі методи життєвого циклу, як componentDidMount та інші хуки.`
  },
  {
    title: `What are fragments?`,
    english: `React Fragments allow you to wrap or group multiple elements without adding an extra node to the DOM.`,
    ukrainian: `Фрагменти React дозволяють обернути або згрупувати кілька елементів без додавання додаткового вузла до DOM.`
  },
  {
    title: `What are stateful components?`,
    english: `A stateful component is a component that holds some state`,
    ukrainian: ` стейтфул Компонент — це компонент, який зберігає певний стейт`
  },
  {
    title: `What is reconciliation?`,
    english: `Reconciliation is the process through which React updates the DOM. When a component’s state changes, React has to calculate if it is necessary to update the DOM. It does this by creating a virtual DOM and comparing it with the current DOM. In this context, the virtual DOM will contain the new state of the component.`,
    ukrainian: `Reconciliation - це процес, за допомогою якого React оновлює DOM. Коли стан компонента змінюється, React має розрахувати, чи потрібно оновлювати DOM. Це робиться шляхом створення віртуальної DOM і порівняння її з поточною DOM. У цьому контексті віртуальний DOM міститиме новий стан компонента.`
  },
  {
    title: `How to set state with a dynamic key name?`,
    english: `You can do this using a computed property name. For example: onClick={() => {
             this.setState({
               [this.state.name]: this.state.value,
             });`,
    ukrainian: `Це можна зробити за допомогою обчисленої назви властивості(приклад зверху)`
  },
  {
    title: `Why React uses className over class attribute?`,
    english: `class is a keyword in JavaScript, and JSX is an extension of JavaScript. That's the principal reason why React uses className instead of class.`,
    ukrainian: `class — це ключове слово в JavaScript, а JSX — це розширення JavaScript. Це головна причина, чому React використовує className замість class.`
  },
  {
    title: `How to apply validation on props in React?`,
    english: `React JS has an inbuilt feature for validating props data type to make sure that values passed through props are valid. React components have a property called propTypes which is used to setup data type validation.`,
    ukrainian: `React JS має вбудовану функцію для перевірки типу даних props, щоб переконатися, що значення, передані через props, є дійсними. Компоненти React мають властивість під назвою propTypes, яка використовується для налаштування перевірки типу даних.`
  },
  {
    title: `What are the advantages of React?`,
    english: `Virtual Document Object Model, the real DOM is updated only after interacting with the virtual DOM.
              High performance;
              Reapplying Components;
              When working with ReactJS, you create reusable components: most often, a UI component can be used in other parts of the code or even in different projects with little to no changes.
              Downstream data;
              One-way data flow in React is another very useful feature. This flow of data is also called top-down or parent-to-child;
              React Browser Tools;
              React Developer Tools is a free extension for Chrome and Firefox that provides a whole set of validation widgets;`,
    ukrainian: `Virtual Document Object Model, реальний DOM оновлюється лише після взаємодії з віртуальним DOM.
                Висока працездатність;
                Повторне застосування компонентів;
                Працюючи з ReactJS, створюються багаторазові компоненти: найчастіше компонент інтерфейсу користувача можна використовувати в інших частинах коду або навіть у різних проектах практично без змін.
                Односторонній потік даних у React є ще однією дуже корисною функцією. Цей потік даних також називається «зверху вниз» або «від батьків до дитини».
                Інструменти браузера React такі як:
                React Developer Tools це безкоштовне розширення для Chrome і Firefox, яке надає цілий набір віджетів перевірки;`
  },
  {
    title: `What are the limitations of React?`,
    english: `1. The high pace of development - The high pace of development has an advantage and disadvantage both. In case of disadvantage, since the environment continually changes so fast, some of the developers not feeling comfortable to relearn the new ways of doing things regularly. It may be hard for them to adopt all these changes with all the continuous updates. They need to be always updated with their skills and learn new ways of doing things.
              2. Poor Documentation - It is another cons which are common for constantly updating technologies. React technologies updating and accelerating so fast that there is no time to make proper documentation. To overcome this, developers write instructions on their own with the evolving of new releases and tools in their current projects.
              3. View Part - ReactJS Covers only the UI Layers of the app and nothing else. So you still need to choose some other technologies to get a complete tooling set for development in the project.
              4. JSX as a barrier - ReactJS uses JSX. It's a syntax extension that allows HTML with JavaScript mixed together. This approach has its own benefits, but some members of the development community consider JSX as a barrier, especially for new developers. Developers complain about its complexity in the learning curve.`,
    ukrainian: `1. Високі темпи розвитку - Високі темпи розвитку мають як переваги, так і недоліки. У разі недоліку, оскільки середовище постійно змінюється так швидко, деякі з розробників не відчувають себе комфортно регулярно вивчати нові способи роботи. Їм може бути важко прийняти всі ці зміни з усіма постійними оновленнями. Їм потрібно постійно оновлювати свої навички та вивчати нові способи роботи.
                2. Погана документація - Це ще один недолік, який характерний для постійно оновлюваних технологій. Технології React оновлюються та прискорюються настільки швидко, що немає часу робити належну документацію. Щоб подолати це, розробники самостійно пишуть інструкції з розвитком нових випусків та інструментів у своїх поточних проектах.
                3. Переглянути частину - ReactJS охоплює лише рівні інтерфейсу користувача програми і нічого більше. Тому вам все одно потрібно вибрати деякі інші технології, щоб отримати повний набір інструментів для розробки в проекті.
                4. JSX як бар'єр - ReactJS використовує JSX. Це синтаксичне розширення, яке дозволяє змішувати HTML із JavaScript. Цей підхід має свої переваги, але деякі члени спільноти розробників вважають JSX перешкодою, особливо для нових розробників. Розробники скаржаться на його складність у кривій навчання.`
  },
  {
    title: `How to use InnerHtml in React?`,
    english: `The dangerouslySetInnerHTML attribute is React's replacement for using innerHTML in the browser DOM. Just like innerHTML, it is risky to use this attribute considering cross-site scripting (XSS) attacks. You just need to pass a __html object as key and HTML text as value.`,
    ukrainian: `Атрибут dangerouslySetInnerHTML є заміною React для використання innerHTML у DOM браузера. Так само, як і innerHTML, використовувати цей атрибут ризиковано через атаки міжсайтового сценарію (XSS). Вам просто потрібно передати об’єкт __html як ключ і текст HTML як значення.`
  },
  {
    title: `How are error boundaries handled in React v15?`,
    english: `React v15 provided very basic support for error boundaries using unstable_handleError method. It has been renamed to componentDidCatch in React v16.`,
    ukrainian: `React v15 забезпечив базову підтримку меж помилок за допомогою методу unstable_handleError. Його було перейменовано на componentDidCatch у React v16.`
  },
  {
    title: `What will happen if you use props in initial state?`,
    english: `If the props on the component are changed without the component being refreshed, the new prop value will never be displayed because the constructor function will never update the current state of the component. The initialization of state from props only runs when the component is first created.`,
    ukrainian: `Якщо властивості компонента змінено без оновлення компонента, нове значення властивості ніколи не відображатиметься, оскільки функція конструктора ніколи не оновлюватиме поточний стан компонента. Ініціалізація стану з пропсів виконується лише під час першого створення компонента.`
  },
  {
    title: `What is the impact of indexes as keys?`,
    english: `React recommends that you do not use indexes as keys, since it could impact performance negatively and could lead to some unstable component behaviour. Using index might result in performance issues and data binding issues in case reordering in the form of sorting, filtering might happen.`,
    ukrainian: `React рекомендує не використовувати індекси як ключі, оскільки це може негативно вплинути на продуктивність і призвести до нестабільної поведінки компонентів. Використання індексу може призвести до проблем із продуктивністю та зв’язуванням даних у разі зміни порядку у формі сортування, фільтрації.`
  },
  {
    title: `What is the purpose of getDerivedStateFromProps() lifecycle method?`,
    english: `The new static getDerivedStateFromProps() lifecycle method is invoked after a component is instantiated as well as before it is re-rendered. It can return an object to update state, or null to indicate that the new props do not require any state updates.`,
    ukrainian: `Новий статичний метод життєвого циклу getDerivedStateFromProps() викликається після створення екземпляра компонента, а також перед його повторним відтворенням. Він може повернути об’єкт до стану оновлення або null, щоб вказати, що нові властивості не потребують оновлення стану.`
  },
  {
    title: `How do you memoize a component?`,
    english: `1.Since components are just functions though, they can be memoized using React. memo() . This prevents the component from re-rendering unless the dependencies (props) have changed.
              2.In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling is written inside two sets of curly braces {{}}. style={{backgroundColor: "red"}}
              3. The reason behind for this is that setState() is an asynchronous operation. React batches state changes for performance reasons, so the state may not change immediately after setState() is called.`,
    ukrainian: `1. Оскільки компоненти — це лише функції, їх можна запам’ятати за допомогою React. memo() . Це запобігає повторному рендерингу компонента, якщо не змінилися залежності (реквізити).
                2. У JSX вирази JavaScript записуються у фігурних дужках, а оскільки об’єкти JavaScript також використовують фігурні дужки, стиль записується у двох наборах фігурних дужок {{}}. style={{backgroundColor: "red"}}
                3. Причиною цього є те, що setState() є асинхронною операцією. React пакетно змінює стан з міркувань продуктивності, тому стан може не змінитися одразу після виклику setState().`
  },
  {
    title: `What is the purpose of getSnapshotBeforeUpdate() lifecycle method?`,
    english: `getSnapshotBeforeUpdate() It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed. Any value returned by this lifecycle method will be passed as a parameter to componentDidUpdate() .`,
    ukrainian: `getSnapshotBeforeUpdate() Він дозволяє компоненту отримувати деяку інформацію з DOM (наприклад, положення прокручування), перш ніж її потенційно змінити. Будь-яке значення, яке повертає цей метод життєвого циклу, буде передано як параметр componentDidUpdate().`
  },
  {
    title: `What are error boundaries in React v16`,
    english: `Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.`,
    ukrainian: `Error boundaries — це компоненти React, які виловлюють помилки JavaScript будь-де у своєму дереві дочірніх компонентів, реєструють ці помилки та відображають резервний інтерфейс користувача замість дерева компонентів, яке вийшло з ладу. Error boundaries виявляють помилки під час візуалізації, у методах життєвого циклу та в конструкторах усього дерева під ними.`
  },
  {
    title: `What will happen if you use setState in constructor?`,
    english: `If we do this, React will also re-render the component and all its children. Therefore, in this case, you need to use this.setState`,
    ukrainian: `Якщо ми це зробимо, React також повторно відрендерить компонент і всі його дочірні елементи. Тому в цьому випадку вам потрібно використовувати this.setState`
  },
  {
    title: `What is the lifecycle methods order in mounting?`,
    english: `Every component in React has to go through three phases that are Mounting, Updating, and Unmounting. These are called lifecycle methods in react.js. Out of the three, mounting is the first phase in the life cycle. There are four methods that fall under this phase those methods are: constructor() getDerivedStateFromProps() render() componentDidMount()`,
    ukrainian: `Кожен компонент у React має пройти через три фази: монтування, оновлення та демонтування. Вони називаються методами життєвого циклу в react.js. З усіх трьох, монтаж є першим етапом життєвого циклу. Існує чотири методи, які підпадають під цю фазу: constructor() getDerivedStateFromProps() render() componentDidMount()`
  },
  {
    title: `Why should component names start with capital letter?`,
    english: `When an element type starts with a lowercase letter, it refers to a built-in component like <div> or <span> and results in a string <div> or <span> passed to React.createElement. Types that start with a capital letter like <Foo /> compile to React.createElement(Foo) and correspond to a component defined or imported in your JavaScript file.`,
    ukrainian: `Коли тип елемента починається з малої літери, він посилається на вбудований компонент, наприклад <div> або <span>, і призводить до рядка <div> або <span>, який передається в React.createElement. Типи, які починаються з великої літери, наприклад <Foo />, компілюються до React.createElement(Foo) і відповідають компоненту, визначеному або імпортованому у вашому файлі JavaScript.`
  },
  {
    title: `How to use React label element?`,
    english: `If you try to render a <label> element bound to a text input using the standard for attribute, then it produces HTML missing that attribute and prints a warning to the console. Since for is a reserved keyword in JavaScript, use htmlFor instead`,
    ukrainian: `Якщо ви спробуєте відобразити елемент <label>, прив’язаний до текстового введення за допомогою стандартного атрибута for, він створить HTML без цього атрибута та виведе попередження на консоль. Оскільки for є зарезервованим ключовим словом у JavaScript, замість нього використовуйте htmlFor.`
  },
  {
    title: `What is the difference between setState and replaceState methods?`,
    english: `With setState the current and previous states are merged. With replaceState, it throws out the current state, and replaces it with only what you provide.`,
    ukrainian: `За допомогою setState поточний і попередній стани об’єднуються. За допомогою replaceState він викидає поточний стан і замінює його лише тим, що ти надаєш.`
  },
  {
    title: `what is the difference between class and functional component?`,
    english: `A FUNCTIONAL COMPONENT is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX). There is no render method used in functional components. React lifecycle methods (for example, componentDidMount) cannot be used in functional components. Hooks can be easily used in functional components to make them Stateful. A CLASS COMPONENT requires you to extend from React. Component and create a render function which returns a React element. It must have the render() method returning JSX (which is syntactically similar to HTML). React lifecycle methods can be used inside class components (for example, componentDidMount). It requires different syntax inside a class component to implement hooks.`,
    ukrainian: `ФУНКЦІОНАЛЬНИЙ КОМПОНЕНТ — це звичайна чиста функція JavaScript, яка приймає властивості як аргумент і повертає елемент React (JSX). У функціональних компонентах не використовується метод рендер. Методи життєвого циклу React (наприклад, componentDidMount) не можна використовувати у функціональних компонентах. Хуки можна легко використовувати у функціональних компонентах, щоб зробити їх Stateful. КОМПОНЕНТ КЛАСУ вимагає розширення з React. класовий компонент повинен мати метод render(), який повертає JSX (який синтаксично схожий на HTML). Методи життєвого циклу React можна використовувати всередині компонентів класу (наприклад, componentDidMount). Це вимагає іншого синтаксису всередині компонента класу для реалізації хуків.`
  },
  {
    title:`what hooks you know in react app?`,
    english:`react hooks - 1.useState, 2.useEffect, 3.useRef, 4.useCallback, 5.useMemo, 6.useContext, 7.useReducer, 8.useTransition, 9.useDebugValue, 10.useDebugValue, 11.useId; React-router hooks - 1.useHistory, 2.useParams, 3.useLocation, 4.useRouteMatch`,
    ukrainian: `...`,
  },
  {
    title: `what are the benefits of react hooks?`,
    english: `By the hooks we got Improving Readability of Component Tree. The "useContext" hook has been a blessing for greatly improving the readability of JSX as it allows context values to be read outside of JSX. This was also previously possible in class components by using the static "contextType" property but is even cleaner with "useContext". Aside from the code being easier to read it is also much easier to read the component tree in the React dev tools when debugging. The value of this really adds up for components that previously used multiple nested contexts. Encapsulating Side Effects - "useEffect" solves this problem by handling both the setup and teardown of side effects. It does so by allowing the effect function to return a function to teardown the effect. Custom hooks are considerably a great mechanism for sharing logic across various components. A custom hook is simply a function that uses one or more React hooks and it can be called within a functional component, just like a standard hook.`,
    ukrainian: `За допомогою хуків ми отримали покращення читабельності дерева компонентів. Хук «useContext» був благословенням для значного покращення читабельності JSX, оскільки він дозволяє зчитувати контекстні значення за межами JSX. Раніше це також було можливо в компонентах класу за допомогою статичної властивості "contextType", але ще чистіше з "useContext". Окрім легшого читання коду, також набагато легше читати дерево компонентів в інструментах розробника React під час налагодження. Цінність цього дійсно збільшується для компонентів, які раніше використовували кілька вкладених контекстів. - Інкапсуляція побічних ефектів - "useEffect" вирішує цю проблему, обробляючи як налаштування, так і демонтаж побічних ефектів. Це робиться, дозволяючи функції ефекту повертати функцію для зняття ефекту. - Користувальницькі хуки є чудовим механізмом для обміну логікою між різними компонентами. Спеціальний хук — це просто функція, яка використовує один або кілька хуків React, і її можна викликати у функціональному компоненті, як і стандартний хук.`
  },
  {
    title: `what is conditional rendering? how to execute them?`,
    english: `Conditional rendering is the ability to render markup elements or components based on an input condition. In other words, this is a kind of if else condition that helps to draw different options of the interface. Conditional rendering is specified inside the render method, And due to the fact that jsx does not support the conditional construction if else, it can be executed in two ways 1) double ampersand; 2) Ternary operator`,
    ukrainian: `Умовний рендеринг - це можливість відмальовування елементів розмітки чи компонент на основі вхідної умови. Іншими словами це своєрідна if else умова, яка допомагає відмалювати різні варіанти інтерфейсу. Вказується умовний рендеринг всередині метода render, І через те що jsx не підтримує умовну конструкцію if else, Виконати можна двома варіантами 1)подвійний амперсант 2)Тернарний оператор`
  },
  {
    title: `What is a switch component?`,
    english: `This is a component that renders one of several components. This is a kind of react pattern that allows you to implement a convenient mechanism for drawing several components based on some condition. The main idea is a structure in the form of an object that contains keys and their corresponding components, receiving the props of the component, the switch gets the value of the key, after which, based on this value, it returns the desired component, to which all props are transferred thanks to the spread operator`,
    ukrainian: `Це компонент який рендерить один з декількох компонентів. Це своєрідний react pattern, який дозволяє реалізувати зручний механізм відмалювання декількох компонент на основі якоїсь умови. Основна ідея це структура у вигляді обєкту, який містить ключі і відповідні їм компоненти, отримуючи пропси компонент перемикач дістає значення ключа, після чого по цьому значенню повертає потрібний компонент, якому завдяки спред оператора передаються всі пропси`
  },
  {
    title: `the difference beetween react and reactDOM`,
    english: `The react library contains functions that are related to elements and components, in fact, these are universal elements designed specifically for creating components. React dom is a library that provides browser-specific methods that can be used at the top level of the application to effectively manage the dom elements that are present on the page. It has such methods as render, find dom node, gidrate, create portal, and so on. From the very beginning, these two libraries were together, but to ensure rendering in different environments, the react team split the main react package from version 0.14 into two independent parts, react and react dom. Now it makes it possible to use and create components that can be used both in react and in react native`,
    ukrainian: `Бібліотека react містить функції які повязані з елементами та компонентами, по суті це універсальні елементи призначені іменно для створення компонент. Reaсt dom - це бібліотека яка надає спеціальні для браузера методи які можуть бути використані на верхньому рівні додатку для ефективного керування дом елементами, які присутні на сторінці. У ньому є такі методи як render, find dom node, gidrate, create portal, і так далі. З самого початку дві цих бібліотеки були разом, проте задля забезпечення рендерингу в різних середовищах команда react розділила основний пакет react з версії 0.14, на дві незалежні частини react and react dom. Тепер це дає можливість використовувати та створювати компоненти які можуть використовуватись як в react так і в react native`
  },
  {
    title: `How does react handle or restrict the use of props of a certain type?`,
    english: `We are talking about prop types - this is one of the options for catching errors related to incorrect types of props, thanks to the keyword isRequared. It allows you to mark props as mandatory, and the component, thanks to default props, defines their default values. Prop types defines the type of props, every time a certain value is passed through props, it is checked for the correct type, if an incorrect type is found, an error message will be thrown in the console. This ensures that the props will receive data with the correct types. Typescript or flow can also be analogues of the check`,
    ukrainian: `Мова йде за prop types  - це один з варіантів відловлення помилок повязаних з неправильними типами пропсів, завдяки ключовому слові isRequared. Він дозволяє помічати пропси як обовязкові, а компонент завдяки default props, визначаэ їх значення за замовчуванням. Prop types визначаэ тип пропсів, кожного разу коли через props передається певне значення, він перевіряється на правильний тип, якщо буде знайдено неправильний тип в консолі буде викинуто повідомлення про помилку. Це гарантує що пропси будуть отримувати дані з вірними типами. Також аналогами перевірки може бути typescript or flow`
  },
  {
    title: `What is strict mode in react? its advantages?`,
    english: `Strict mode is a tool for identifying potential problems with the application, just like the strict mode fragment does not render anything, it defines additional checks and checks for child components, these checks only happen in developer mode or in development mode, they also do not affect the production build. Advantages of a strict regime: - Warning about using the deprecated stringRef string api; - Warning about using the outdated findDomNode method; - Identification of components with dangerous life cycle methods; - determination of unexpected side effects; - Determination of the use of the outdated api context;`,
    ukrainian: `Strict mode - це інструмент для визначення потенційних проблем додатку, як і фрагмент strict mode нічого не рендерить, він визначає додаткові перевірки та перевірки для дочірних компонентів, ці перевірки відбуваються тільки в developer mode або в режимі розробки, також вони не впливають на production збірку. Переваги строгого режиму: - Попередження про використання застарілого api стрічкових силок stringRef; - Попередження про використання застарілого метода findDomNode; - визначення компонент з небезпечними методами життєвого циклу; - визначення неочікуваних побічних ефектів; - Визначення використання застарілого api context;`
  },
  {
    title: `What is props drilling, how to avoid it?`,
    english: `In react props are passed in one direction from top to bottom, from parent to child, If there is a small number of props or descendants - this is not a problem, but when developing an application in order to transfer props from the upper level, which are, for example, at the third level of nesting, it is necessary to transfer the same props to each component tree, the situation can also become complicated due to the fact that you need to throw several properties at once, and thus the number of props to the top-level component can be huge. this mechanism, or even an anti-pattern, is called prop-drilling. In order to avoid it, there are two approaches: -  Using redux store or any other state manager; -  Use the context and the useContext hook;`,
    ukrainian: `В react props передаються в одному напрямку зверху в низ, від батьківського до дочірнього. При наявності незначної кількості пропсів або потомків - це не є проблемою, проте при розвитку додатку для того щоб передати пропси з верхнього рівня, які до прикладу знаходятся на третьому рівні вкладеності приходиться передавати одні і ті самі пропси в кожне дерево компонента, також ситуація може ускладнитись тим що прокидувати потрібно зразу декілька властивостей, і таким чином кількість пропсів у компонент верхнього рівня може бути величезною. даний механізм, чи навіть антипатерн називається prop-drilling. Для того щоб його уникнути є два підходи - Використання redux store, або будь-якого іншого state менеджера; - Використати контекст та хуком useContext;`
  },
  {
    title: `what is polling? how to implement it in react?`,
    english: `The polling mechanism is a common approach for regular asynchronous requests. For example, we have a component and a server in which we send a request to receive data, so as not to block the client's work with the server or the application, asynchronous requests can be delayed or in the background. In this way, you can configure service requests after a certain time interval. In React, such a mechanism is implemented thanks to setInterval and the useEffect hook. When the component is rendered for the first time, a timer is started, which makes a request to the server every second. To stop this timer when dismounting the component, useEffect returns the clearInterval method. In addition, you can add a condition for receiving data to such a method, which will help stop the request timer even before disassembling the component`,
    ukrainian: `Механізм polling - це поширений підхід для регулярних асинхронних запитів. Наприклад у нас є компонент та сервер у якому надсилаємо запит на отримання даних, щоб не блокувати роботу клієнта з сервером чи додатком, асинхронні запити можуть відбуватись або відкладено, або в фоновому режимі. Таким чином можна налагодити запити сервісів через певний інтервал часу. В реакт такий механізм реалізовується завдяки setInterval та хука useEffect. При першому рендері компонента запускається таймер, який кожну секунду робить запит на сервер. Щоб зупинити цей таймер при розмонтовуванні компонента в useEffect повертається метод clearInterval. Додатково в такий метод можна і додати умову отримання даних, що допоможе зупинити таймер запитів ще до розмонтування компонента`
  },
  {
    title: `what is react dom server?`,
    english: `The react dom server object allows you to render components in the form of static markup, usually these types of markup are used on node servers. Ssr is a technique that allows you to draw client one-page applications on the server and send them to the client in the form of ready-made markup - it makes dynamic components static. the advantages are that: - it increases the page rendering speed, which increases the UX; - it improves search engine optimization or SEO by simplifying the indexing of pages by search engines; - it increases the availability of metadata, header images, which allows users to easily share the content of the application;`,
    ukrainian: `Об'єкт react dom server дозволяє рендерити компоненти у вигляді статичної розмітки, зазвичай такі типи розмітки використовуються на нод серверах. Ssr - це техніка яка дозволяє відмальовувати клієнтські односторінкові додатки на сервері  та відправляти їх клієнту у вигляді готової розмітки - це робить динамічні компоненти статичними. плюсами є те що: -  це збільшує швидкість рендеру сторінок, що збільшує UX;  -  це покращує пошукову оптимізацію або SEO, спрощуючи індексацію сторінок пошуковими роботами; - це збільшує доступність метаданих, зображень заголовків, що дозволяє користувачам легко ділитись контентом додатку;`
  },
  {
    title: `what is lazy function in react?`,
    english: `It is worth noting that this is a method from the react suspense api. React lazy or lazy function is a function that allows you to create components that are loaded thanks to dynamic import and that are rendered as normal components. This allows you to reduce the size of the bundle, since then only those components that are actually drawn on the ui at the moment are loaded. React lazy accepts a function as an argument, this function returns a promise as a result of calling import to load the component`,
    ukrainian: `Варто відмітити що це метод з api react suspense. React lazy або лінива функція - це функція яка дозволяє створювати компоненти, які завантажуються завдяки динамічному імпорту та які рендеряться як звичайні компоненти. Це дозволяє зменшити розмір bundle, так як тоді завантажуються лише ті компоненти які реально відмальовуються на ui в наявний момент. React lazy в якості аргументу приймає функцію, ця функція повертає проміс, в результаті виклику імпорту для завантаження компонента `
  },
  {
    title: `what is the difference between mounting and rendering`,
    english: `Rendering is a function, or render method, that is called by a component and returns instructions for creating a dom. the render method is called every time the component is rendered. A component is updated when its state or props change. Montage is the first rendering of the component and construction of the initial model of the document. Mounting a component means embedding the elements it creates in the browser home. The second and subsequent renderings are repeated calls to the function to obtain information about the already mounted component.`,
    ukrainian: `Рендерінг -  це функція, або метод render, який  викликається компонентом і повертаює інструкції для створення дом. метод рендер викликається при кожному рендері компонента. Оновлення компонента  відбувається при зміні його стану, або пропсів. Монтування - це перший рендер компонента та побудови початкової моделі документа. Монтування компонента означає вбудовування створюваних ним елементів в браузерний дом. Другий і подальші рендеринги - це повторний виклик функції для отримання інформації про вже змонтований компонент. `
  },
  {
    title: `what is pointer events?`,
    english: `pointer events are an important part of user interaction on the Internet. In React, the PointerEvent interface provides a way to handle mouse or touchscreen events. The PointerEvent interface contains several properties and methods for handling pointer events. Some of the most commonly used pointer events in React include onPointerDown, onPointerMove, and onPointerUp. These events are fired when the user begins to click and hold the mouse or sensor, move it, or release it, respectively. React also supports a number of other events to handle advanced interactions with the mouse or sensor`,
    ukrainian: `pointer events є важливою частиною взаємодії користувача в Інтернеті. У React інтерфейс PointerEvent забезпечує спосіб обробки подій,для миші або сенсорного екрану. Інтерфейс PointerEvent містить кілька властивостей і методів для обробки pointer events. Деякі з найбільш часто використовуваних pointer events в React включають onPointerDown, onPointerMove і onPointerUp. Ці події запускаються, коли користувач починає натискати й утримувати мишу або сенсор, переміщує їх або відпускає відповідно.React також підтримує низку інших подій для обробки розширених взаємодій з мишею або сенсором`
  },
  {
    title: `what is inheritance inversion?`,
    english: `An inheritance inversion is a hoc (higher-order component) that returns a class that extends the wrapped component`,
    ukrainian: `Інверсія наслідування - це hoc (компонент вищого порядку) в ньому повертається клас який розширює обгорнутий компонент`
  },
  {
    title: `How to implement two-way data binding in React?`,
    english: `you can perform such a connection thanks to setState in the class component and useState in the functional one, as well as the handler that is added to the input element, so the data entered on the ui gets into the state and updates it, and updating the state in turn causes updates on the ui`,
    ukrainian: `виконати таку звязку можна завдяки setState в класовому компоненті та useState в функціональному, і також обробника який добавляється на input елемент, таким чином дані які вводяться на ui попадають в state і оновлюють його, а оновлення стейту в свою чергу викликають оновлення на ui`
  },
  {
    title: `difference between useEffect and componentDidMount()?`,
    english: `componentDidMount та useEffect - запускаються одразу після монтування компоненти, тим не менш useEffect викликається після відоображення на екрані результатів рендерингу, а це означає що ми можемо отримати мигання, або так званий flicker  у випадку коли необхідно прочитати дом і синхронно оновити стан для отримання нового ui. Інший хук який називається useLayoutEffect , був спроектований спеціально для таких випадків. Він відоображається на екрані перед відоображення результатів рендеренгу, тому useLayoutEffect ближче до componentDidUpdate по часі виконання ніж useEffect `,
    ukrainian: `componentDidMount and useEffect - run immediately after mounting the component, however, useEffect is called after the rendering results are displayed on the screen, which means that we can get a flicker, or the so-called flicker in the case when it is necessary to read the home and synchronously update the state to get a new ui. Another hook called useLayoutEffect was designed specifically for such cases. It is displayed on the screen before rendering results, so useLayoutEffect is closer to componentDidUpdate in runtime than useEffect`
  },
  {
    title: `what the Rules (restrictions) for the use of hooks?`,
    english: `You should use hooks at the very top of the function hierarchy, that is, it means that you cannot call hooks in conditions or loops, since React cannot guarantee the order of their execution. You can call hooks only in functions or in function components or in custom hooks. The use of hooks in class components is not allowed`,
    ukrainian: `Використовувати хуки варто в самому верху ієрархії функції, тобто це означає, що неможна викликати хуки в умовах чи циклах, так як реакт не може гарантувати порядок їх виконання. Викликати хуки можна лише в функціях або в функціональних компонентах, або в користувацьких хуках. Використання хуків в класових компонентах не допускається `
  },
  {
    title: `what is lifting state up?`,
    english:`Lifting state up is a pattern thanks to which one state can be used for several components at once. Usually, some components must react to the same events or state changes, so it is necessary to somehow notify all components when something has changed, the recommended option to do this is to raise the state to the top, this means that the common state must be raised to the common ancestor`,
    ukrainian:`Lifting state up - це паттерн завдяки якому один стан може бути використаний зразу для декількох компонент. Зазвичай деякі компоненти мають реагувати на одні і ті самі події, або зміну стану, тому необхідно якимось чином повідомляти всі компоненти коли щось змінилось, рекомендуючий варіант це зробити - це підняти стан в верх, це означає що спільний стан має бути піднятий до спільного предка `,
  },
  {
    title: `what shouldComponentUpdate do?`,
    english:`In the life cycle of class components, there is a shouldComponentUpdate method, which allows you to refuse to participate in the process of comparing some components and their child elements, the purpose of the comparison is to update the interface based on the new state in the most efficient way. Therefore, if we know that part of the interface will not change, then it makes no sense to force React to run the update check on its own. It is for such cases that shouldComponentUpdate is used, which returns a boolean value. If false is returned from this method, react will understand that the existing component and all its child components will remain the same as they were, and the reconciliation mechanism will not be triggered, which in some cases will speed up performance. An analogue of shouldComponentUpdate is the useEffect hook, which accepts as dependencies the arguments on which component re-rendering depends`,
    ukrainian:`В життєвому циклі класових компонентів є метод shouldComponentUpdate, який дає можливість відмовитись від участі в процесі порівняння деяких компонентів та їх дочірних елементів, ціль порівняння полягає в тому щоб найефективнішим шляхом оновити інтерфейс на основі нового стану. Тому якщо ми знаємо, що частина інтерфейсу не зміниться то немає сенсу заставляти реакт проганяти перевірку оновлення самостійно. Саме для таких випадків використовується shouldComponentUpdate, який повертає булеве значення. При поверненні false з цього методу, react буде розуміти що наявний компонент і всі його дочірні компоненти залишаться таким самими як і були, при цьому мезанізм узгодження не буде запущений, що в деяких випадках пришвидшить продуктивність. Аналогом shouldComponentUpdate є хук useEffect, який приймає в якості залежностей аргументи від якого залежить ререндеринг компонента`,
  },
  {
    title: `difference between createElement and CloneElement?`,
    english:`The cloneElement function, as the name implies, returns a copy of the specified element. additional props or child elements can be passed to this function. cloneElement can be used when a child element wants to add or change a property of its child elements. As for createElement, this function is used to create and return a new react element of the specified type. The type argument can be a tag name string, such as 'div' or 'span', or a react component, class or function type, or a react fragment type. The jsx code will be converted for use in react.`,
    ukrainian:`Функція cloneElement, як зрозуміло з назви повертає копію вказаного елементу. в цю функцію можна передати додаткові пропси, або дочірні елементи. cloneElement можна використовувати коли дочірний елемент хоче додати або змінити властивість своїх дочірніх елементів. Що стосується createElement то дана функція використовується для створення та повернення нового react елемента заданого типу. Аргумент типу може бути стрінгою імені тега, наприклад ‘div’ or ‘span’, а також типом react component, class or function або типом react fragment. Код jsx буде перетворений для використання в react.`,
  },
  {
    title: `what is useReducer hook?`,
    english:`useReducer is a hook that takes a reducer function and the initial state of the application as arguments. Returns the current state and dispatcher for dispatching operations. Although useState is a basic hook and useReducer is an advanced one. useState is implemented thanks to useReducer, which means that useReducer is a primitive that can be used in all cases of using useState. The mechanism of operation is as follows. First, the initial state and reducer are determined. They are passed to the useReducer hook. This hook returns the current state value and the dispatcher used to update the state. When the user clicks on the button, a certain operation is sent to the reducer, which updates the counter based on the operation. In this way, you can define as many operations as the application needs.`,
    ukrainian:`useReducer - це хук, який приймає функію reducer, та початковий стейт додатку в якості аргументів. Повертає наявний стан та діспатчер для відправки операцій.Незважаючи на те, що useState - базовий хук, а useReducer - просунутий. useState реалізований завдяки useReducer, а це означає що useReducer  - це примітив який може використовуватись у всіх випадках використання useState.Механізм роботи наступний: Спочатку визначається інішіал стейт та reducer. Вони передаються в хук useReducer. Цей хук повертає наявне значення стану та діспатчер, який використовується для оновлення стейту. Коли користувач натискає на кнопку то відбувається відправка певної операції в редюсер, який оновлює лічильник на основі операції. Таким чином можна визначати стільки операцій скільки потрібно додатку.`,
  },
  {
    title: `what is useCallback hook?`,
    english:`Хук React useCallback повертає мемоїзовану функцію зворотного виклику. Запам'ятовування робить кешування значенням, щоб його не потрібно було перевизначати. Це дозволяє нам ізолювати ресурсомісткі функції, щоб вони не запускалися автоматично при кожному рендері. Хук useCallback запускається лише тоді, коли оновлюється одна з його залежностей. Це покращує продуктивність.`,
    ukrainian:`The React useCallback hook returns a memoized callback function. Remembering makes caching a value so that it doesn't need to be overridden. This allows us to isolate resource-intensive functions so they don't run automatically on every render. The useCallback hook only fires when one of its dependencies is updated. This improves performance.`,
  },
  {
    title: `what is useMemo hook?`,
    english:`useMemo() hook - can be used to optimize calculations that happen in functional components, useMemo is similar to useCallback except that it takes any value, not just functions, basically it takes a function that returns a value and an array of dependencies, the value returned by the function. It is redefined only when dependencies change`,
    ukrainian:`Хук useMemo() - може використовуватись для оптимізації вичислень, які відбуваються в функціональних компонентах, useMemo схожий на useCallback за винятком того що він приймає будь-яке значення, а не лише функції, в основному він приймає функцію яка повертає значення, та масив залежностей, значення яке повертається функцією. Визначається повторно тільки при зміні залежностей `,
  },
  {
    title: `what is useImperativeHandle hook?`,
    english:`The useImperativeHandle hook - allows you to customize the value that is passed to the parent component thanks to the ref. useImperativeHandle should be used in compatibility with forwardRef`,
    ukrainian:`Хук useImperativeHandle - дозволяє кастомізувати значення, яке передається батьківському компоненту завдяки ref. useImperativeHandle  має використовуватись в сумісності з forwardRef`,
  },
  {
    title: `what is useLayoutEffect hook?`,
    english:`useLayoutEffect is a hook that runs after all dom manipulations are done, but before the browser renders it. This may be useful for obtaining additional information from the dom. For example, to get the amount of scrolling, or element styles and use this information to adjust the dom. Also to trigger a re-render by changing its state. This hook is designed to perform those tasks performed by such methods as componentDidMount and componentDidUpdate.`,
    ukrainian:`useLayoutEffect - це хук, що запускається після виконання всіх маніпуляцій з dom, проте до його відмалювання браузером. Це може бути корисним для отримання додаткової інформації з дом. Наприклад для отримання величини прокрутки, або стилів елемента та використання цієї інформації для корегування дом. Також для запуску повторного рендеру шляхом зміни його стану. Даний хук призначений для виконання тих задач які виконують такі методи як componentDidMount and componentDidUpdate.`,
  },
  {
    title: `How to draw html code in react component?`,
    english:`For this, react has a special attribute dangerouslySetInnerHTML, it is essentially an alternative to innerHTML. It represents a cross-site scripting or xss threat. Hence the prefix dangerously at the beginning. As an argument, it accepts an object with the __html key and html as a value, after which this markup will be drawn on the page.`,
    ukrainian:`Для цього в react є спеціальний атрибут dangerouslySetInnerHTML, він по суті є альтернативою innerHTML. Він являє собою небезпеку міжсайтового скриптингу або xss. Звідси і приставка dangerously на початку. В якості аргументу він приймає об\`єкт з ключом __html та html в якості значення, після чого ця розмітка буде відмальована на сторінці.`,
  },
  {
    title: `Why do you need to pass a function to setState()?`,
    english:`The fact is that setState is an asynchronous operation, react postpones updating the state for performance reasons. Therefore, the state may not be updated immediately after calling setState, which means that there is no need to rely on the existing state when calling setState. since one cannot be sure of what it is. The solution to this problem is to pass the callback function with the previous state as an argument. This makes it possible to avoid problems related to getting the old state due to the asynchronous nature of setState()`,
    ukrainian:`Справа в тому, що setState - це асинхронна операція, react відкладає оновлення стану з причин продуктивності. Тому стан може оновитись не зразу після виклику setState, а це означає що не потрібно покладатись на наявний стейт при виклику setState. так як не можна бути впевненим в тому яким  він є.  Рішенням цієї проблеми є передача колбек функції з попереднім стейтом в якості аргументу. Це дає можливість уникнути проблем повязаних з отриманням старого стейту через асинхронну природу setState()`,
  },
  {
    title: `What is the registerServiceWorker() method in react for?`,
    english:`This method is integrated into create-react-app by default. React creates a worker service with no configuration by default. The worker service is a web API that allows you to write application files to the cache and return it when there is no network connection or a slow connection, which in turn greatly improves the user experience`,
    ukrainian:`Цей метод за замовчуванням інтегрований в create-react-app. React створює сервіс воркер без налаштування по замовчуванням. Сервіс воркер це web API, яке дозволяє записувати файли додатків в кеш і повертати його при відсутності підключення до мережі чи повільному з' єднанні, що в свою чергу чудово покращує користувацький досвід.`,
  },
  {
    title: `How does reactRouter differ from regular routing?`,
    english:`There is only one html file in React - it is index.html. When the user moves to a new address, instead of receiving data from the server, the router returns one or another component. The user gets the impression that he is moving between different pages. In fact, application components are simply different visualizations of the same page. Under the hood, the router looks in the history of each component and, if there are changes in the history, the component is re-rendered. Before react router v4, the history value had to be set manually, but starting with react v4, most of the work related to routing is done automatically on the client side thanks to the browserRouter component`,
    ukrainian:`В реакт існує лише один html файл - це index.html. Коли користувач переходить за новою адресою, замість отримання даних від сервера роутер повертає той або інший компонент. В користувача створюється враження, що він переміщується між різними сторінками. Та насправді компоненти додатку є просто різними візуалізаціями однієї сторінки. Під капотом router підглядує в history кожного компонента та при наявності змін в історії компонент ререндериться.  До react router v4 значення history треба було встановлювати вручну, проте починаючи з react v4 більша частина роботи повязаної з маршрутизацією автоматично виконується на стороні клієнту завдяки компоненту browserRouter `,
  },
  {
    title: `What hooks were added to react router v5?`,
    english:`Starting with version 5 of react router, following the library, react began to support hooks. As a result of its implementation, such hooks as useHistory, useLocation, UseParams, useRouteMatch appeared.`,
    ukrainian:`Починаючи з 5 версії react router слідом за бібліотекою реакт став підтримувати хуки. В результаті його реалізації з'явились такі хуки як useHistory, useLocation, UseParams,  useRouteMatch.`,
  },
  {
    title: `what is useHistory hook?`,
    english:` Its a hook from react router. useHistory gives access to the history prop in react router, refers to the history dependency used by the router. The main value is in software routing thanks to such methods as push, replace and so on.`,
    ukrainian:`це хук з react router. useHistory дає доступ до пропсу history в react router, посилається на залежність history, яка використовується роутером. Основне значення полягає в програмному роутингу завдяки таким методам як push, replace і так далі.`,
  },
  {
    title: `what is useLocation hook?`,
    english:`This is a hook from react router. useLocation - provides access to the location props. Similar to window location, but available anywhere, as it is a representation of the state and location of the router.`,
    ukrainian:`Це хук з react router. useLocation - надає доступ до пропсу location. Схожий на window location, проте доступний в любому місці, оскільки є представленням стейту та локації роутера.`,
  },
  {
    title: `what is useParams hook?`,
    english:`This is a react router hook that provides access to the search bar options in the url.`,
    ukrainian:`Це хук з react router, що надає доступ до параметрів пошукової стрічки в url.`,
  },
  {
    title: `what is useRouteMatch hook?`,
    english:`This is a react router hook that provides access to the match object, the purpose of which is to build nested routes.`,
    ukrainian:`Це хук з react router, що надає доступ до об' єкту match, метою якого є побудова вкладених маршрутів.`,
  },
  {
    title: `How to transfer props in react router?`,
    english:`The route component with props in render accepts a function that returns a react element. After that, it is called instead of implementing its own rendering logic. This technique is used to allocate code between components, thanks to props, whose value is a function. In React, such a pattern is called render props`,
    ukrainian:`Компонент route з пропсам в render приймає функцію, яка повертає react елемент. Після чого викликає її замість реалізації власної логіки рендеру. Дана техніка використовується для розприділення коду між компонентами, завдяки пропс, значення якого є функція. В реакт такий паттерн називається render props.`,
  },
  {
    title: `What is reselect? How does it work?`,
    english:`Reselect is a simple library for creating selectors with memoized combination functions. Selectors are used to efficiently compute arbitrary data from the redux repository. Selectors make it possible to store the minimum possible state. Also, the selector is recalculated when its arguments are changed. The selector is not recalculated when unrelated parts of the component tree are changed by the selector. In this way, the redux store can extract data from different places and combine them specifically for the component. these combined data are memorized, and if nothing has changed, no unnecessary re-rendering of the component is caused.`,
    ukrainian:`Reselect - це проста бібліотека для створення селекторів з мемоїзованими комбінованих функцій.  Селектори використовуються для ефективного вичислення довільних даних з redux сховища. Селектори дають можливісь зберігати мінімально можливий стейт. Також селектор вичисляється повторно при зміні його аргументів.Повторне вичислення селектора не відбувається при зміні непов' язаних частин дерева компонента селектором. Таким чином з redux store можна витягувати дані з різних місць і комбінувати їх спеціально для компонента. ці комбіновані дані мемоїзуються і якщо нічого не помінялось то не викликається зайвий перерендеринг компонента.`,
  },
  {
    title: `What is the purpose of componentDidMount() lifecycle method?`,
    english:`componentDidMount() is called immediately after the component (inserted into the tree) is mounted. Initialization that needs DOM nodes should be here. This is the place to make a request to the api. You can immediately call setState() in the componentDidMount(). This ensures that even if render() is called twice in this case, the user will not see the intermediate state.`,
    ukrainian:`componentDidMount() викликається відразу після монтування компонента (вставленого в дерево). Ініціалізація, яка потребує вузлів DOM, має бути тут. Це  місце для створення запиту до апі.Можна негайно викликати setState() у componentDidMount(). Це гарантує, що навіть якщо render() буде викликано двічі в цьому випадку, користувач не побачить проміжний стан.`,
  },
  {
    title: `What is the purpose of componentDidUpdate() lifecycle method`,
    english:`This method is not called for initial rendering. This is the lifecycle method for DOM updates and setState. This is also the place to create api queries if you are comparing current properties with previous properties.`,
    ukrainian:`Цей метод не викликається для початкового рендерингу. Це метод  життєвого циклу для оновлень DOM і setState. Це також місце для створення запитів на апі, якщо ви порівнюєте поточні властивості з попередніми.`,
  },
  {
    title: `What is the purpose of componentWillUnmount() lifecycle method`,
    english:`componentWillUnmount() is called just before the component is unmounted and destroyed. Any necessary cleanup in , such as canceling timers, canceling requests to the api, or cleaning up any subscriptions created in componentDidMount(), is performed here. There is no need to call setState() in componentWillUnmount() because the component will never be remounted. Once a component is unmounted, it will never be mounted again.`,
    ukrainian:`componentWillUnmount() викликається безпосередньо перед тим, як компонент демонтується та знищується. Тут Виконується будь-яке необхідне очищення в , як анулювання таймерів, скасування запитів до апі або очищення будь-яких підписок, створених у componentDidMount(). Не треба викликати setState() у componentWillUnmount(), оскільки компонент ніколи не буде повторно відтворено. Після того як компонент буде демонтовано, він більше ніколи не буде змонтований.`,
  },
  {
    title: `what lifecycle hooks is not exist on functional hooks?`,
    english:`constructor - Functional components do not need a constructor. You can initialize the state in the useState call. If the calculation of the initial state is expensive, then you can pass the function useState.getSnapshotBeforeUpdate, componentDidCatch and getDerivedStateFromError - There are no equivalents in hooks for these methods yet, but I think they will be added soon.`,
    ukrainian:`конструктор - Функціональним компонентам не потрібен конструктор. Ви можете ініціалізувати стейт у виклику useState. Якщо обчислення початкового стану дорого обходиться, то можна передати функцію useState.getSnapshotBeforeUpdate, componentDidCatch і getDerivedStateFromError - Для цих методів ще немає еквівалентів в хуках, але думаю незабаром вони будуть додані.`,
  },
  {
    title: `what lifecycle methods are implemented by useEffect?`,
    english:`componentDidMount, componentDidUpdate, componentWillUnmount`,
    ukrainian:`componentDidMount, componentDidUpdate, componentWillUnmount`,
  },
  {
    title: `how the re-rendering works in react?`,
    english: `Re-rendering is triggered when a state is updated or a property in a component is changed. The component that initiated the state change is marked and re-rendered, and all child components are also re-rendered. This process looks as follows: - The component that initiated the state change is marked; - This component and its child components are parsed and then JSX converted to React elements using React.createElement and stored in memory; - A new virtual DOM is created using React elements and then compared to the previous virtual DOM using a difference algorithm. Changes are sent to the commit stage. React uses the Object.is comparison algorithm, so state changes should be immutable.`,
    ukrainian: `Ререндеринг запускається, коли оновлюється стейт або змінюється властивість у компоненті. Компонент, який ініціював зміну стейту, позначається та повторно відображається, і всі дочірні компоненти також повторно відображаються. Цей процес виглядає виглядаэ наступним чином: - Позначаэться компонент, який ініціював зміну стейту; - Цей компонент і його дочірні компоненти аналізуються, а потім JSX перетворюється на елементи React за допомогою React.createElement і зберігається в пам’яті; - Новий віртуальний DOM створюється за допомогою елементів React, а потім порівнюється з попереднім віртуальним DOM за допомогою алгоритму відмінності. Зміни надсилаються на етап фіксації. React використовує алгоритм порівняння Object.is, тому зміни стейту повинні бути незмінними.`,
  },
  {
    title: `useMemo hook vs useCallback hook`,
    english: `The main difference between useMemo and useCallback hook is, useMemo returns memoized value and useCallback returns memoised function.`,
    ukrainian: `Основна відмінність між useMemo і useCallback хуком полягає в тому, що useMemo повертає мемоізоване значення, а useCallback повертає мемоізовану функцію.`,
  },
  {
    title: `What is useContext hook?`,
    english: `A context is a method of passing data or information through a tree of components without manually sending attributes through each nested component. It is specifically designed to share data that can be considered generic data for a tree composed of React components, such as the current user authentication status or a theme (eg color, padding, margins, font size). Basically, to get the data from the lowest child component, we need to use the properties in each component. To avoid this pain, we use the useContext hook.`,
    ukrainian: `Контекст — це метод передачі даних або інформації через дерево компонентів без надсилання атрибутів вручну через кожен вкладений компонент. Він спеціально розроблений для обміну даними, які можна вважати загальними даними для дерева, що складається з компонентів React, як-от поточний статус автентифікації користувача або тема (наприклад, колір, відступи, поля, розмір шрифту). В основному, щоб отримати дані з найнижчого дочірнього компонента, нам потрібно використовувати властивості в кожному компоненті. Щоб уникнути цього болю, ми використовуємо хук useContext.`,
  },
  {
    title:`what is useTransition hook?`,
    english:`useTransition is a React Hook that lets you update the state without blocking the UI.`,
    ukrainian:`цей хук дозволяє заапдейтити стейт без блокування ui`,
  },
  {
    title:`what is useId hook?`,
    english:`The useId is a new hook introduced in React 18. The useId hook helps generate a unique Id on both the client-side and server-side.`,
    ukrainian:`UseId — це новий хук, представлений у React 18. Хук useId допомагає генерувати унікальний ідентифікатор як на стороні клієнта, так і на стороні сервера.`,
  },
  {
    title:`what is useDeferredValue hook?`,
    english:`The useDeferredValue hook allows us to fix this slow render problem by implementing a delay before some information is calculated. This works in a very similar way to debouncing and throttling since our deferred value will only be calculated after the important state updates have finished running. `,
    ukrainian:`Хук useDeferredValue дозволяє виправити проблему повільного рендерингу шляхом реалізації затримки перед обчисленням певної інформації. Це працює дуже подібно до debouncing and throttling, оскільки відкладене значення буде обчислено лише після завершення виконання важливих оновлень стейту.`,
  },
  {
    title:`what is useDebugValue hook?`,
    english:`useDebugValue is a simple inbuilt Hook that provides more information about the internal logic of a custom Hook within the React DevTools. It allows you to display additional, helpful information next to your custom Hooks, with optional formatting.`,
    ukrainian:`useDebugValue — це простий вбудований хук, який надає більше інформації про внутрішню логіку власного хука в React DevTools. Це дозволяє відображати додаткову корисну інформацію в межах власних спеціальних хуків з додатковим форматуванням.`,
  },
  {
    title: `How to save previous state of the component?`,
    english: `by using useRef hook I can save the previous state. I can access the previous state through setState the asynchronous function`,
    ukrainian: `за допомогою хука useRef я можу зберегти попередній стан. Я можу отримати доступ до попереднього стану через асинхронну функцію setState`,
  },
  {
    title: `How to pass data from child to parent`,
    english: `You need to create a callback in the parent component. This callback will receive data from the child component. You need to pass the callback in the parent component as a prop to the child component. And the child component calls the callback using props`,
    ukrainian: `Треба створити колбек в батьківському компоненті. Цей колбек отримає дані від дочірнього компонента. Потрібно передати колбек в батьківському компоненті як проп до дочірнього компонента. І дочірній компонент викликає колбек за допомогою props`,
  },
  {
    title: `how to pass ref between the components?`,
    english: `In general, the "ref" function is an anti-pattern in React. It exists to enable side-effect-driven development. To get the most out of React, you should try to avoid "refs" if possible. Basically a chicken vs egg scenario. The ref callback is fired when the child element is mounted, not when it is rendered, . One thing you could try is to cast the ref to a state and then read from the state to another child element.`,
    ukrainian: `Загалом функція «ref» є антипаттерном у React. Вона є для того, щоб уможливити розробку, керовану побічними ефектами. Щоб отримати максимальну вигоду від React, треба намагатися уникати «рефів», якщо це можливо. Загалом є сценарієм «курка проти яйця». Зворотний виклик ref запускається під час монтування дочірнього елемента, а не під час рендерингу, . Одна річ, яку ви можете спробувати, це перевести ref у стан, а потім прочитати зі стейту в інший дочірній елемент.`,
  },
  {
    title: `What is Redux and why it is used?`,
    english: `Redux is a predictable state container. It is mostly used as a state management tool with React. although you can use it with any other JavaScript framework or library.`,
    ukrainian: `Redux — це контейнер передбачуваного стейту.він здебільшого використовується як інструмент керування станом із React. хоча його можна використовувати його з будь-яким іншим фреймворком чи бібліотекою JavaScript.`,
  },
  {
    title: `What are 3 main concepts of Redux?`,
    english: ` - Single source of truth: The global state of your application is stored in an object tree within a single store. ... - State is read-only: The only way to change the state is to emit an action, an object describing what happened. ... - Changes are made with pure function`,
    ukrainian: `- Єдине джерело істини: Глобальний стан вашої програми зберігається в дереві об’єктів в одному сховищі. ... - Стан доступний лише для читання: Єдиний спосіб змінити стан - створити дію, об'єкт, який описує те, що сталося. ... - Зміни вносяться за допомогою чистих функцій`,
  },
  {
    title: `What is difference between React and Redux?`,
    english: `Redux manages state and state transformations and is often used with React, but React has its own concept of state.`,
    ukrainian: `Redux керує станом і перетвореннями стану та часто використовується з React, але React має власну концепцію стану.`,
  },
  {
    title: `Why use Redux instead of context API?`,
    english: `Redux is a complete state manager capable of allowing an app to undo/redo actions and provides advanced developer tooling for debugging. Context API is designed as a dependency injection mechanism that allows making data available through the component tree without being manually passed`,
    ukrainian: `Redux — це повний менеджер стану, який дозволяє програмі скасовувати/повторювати дії та надає розширені інструменти розробника для налагодження. Context API розроблено як механізм ін’єкції залежностей, який дозволяє робити дані доступними через дерево компонентів без передачі вручну`,
  },
  {
    title: `what does the redux consist of?`,
    english: `Redux has three main components that make the Redux system work. The components are Store, Actions and Reducer. Store is an object that contains the current state of the machine. Every piece of information we need on the car will be stored inside the store. In addition, the store is also responsible for handling all components that want to know the current state or change the current state. Action is an object that defines what action we can perform inside the system and change its state. But remember that an action doesn't specify how it should change the state, it just acts as a verbal definition or list. And finally, the reducer acts as a definition of a specific action. Thus, there will be one reducer for each action we define inside the system`,
    ukrainian: `У Redux є три основні компоненти, завдяки яким система Redux працює. Компонентами є Store, Actions і Reducer. Store - це об'єкт, який містить поточний стейт. Кожна інформація, яка нам потрібна зі стейту, зберігатиметься всередині стору. Окрім цього, стор також відповідає за обробку всіх компонентів, які хочуть знати поточний стан або змінити поточний стан. Action – це об’єкт, який визначає, яку дію ми можемо виконувати всередині системи та змінювати її стан. Але пам’ятайте, що дія не визначає, як вона має змінити стан, вона просто діє як словесне визначення або перелік. І останнє, редюсер виступає як визначення конкретної дії. Таким чином, для кожної дії, яку ми визначаємо всередині системи, буде один редюсер`,
  },
  {
    title: `What is mapStateToProps used for?`,
    english: `As the first argument passed to the connection, mapStateToProps is used to select a piece of data from storage that the connected component needs. It is often called simply mapState for brevity. It is called every time the redax of the store is changed.`,
    ukrainian: `Як перший аргумент, переданий для підключення, mapStateToProps використовується для вибору частини даних зі сховища, яка потрібна підключеному компоненту. Його часто називають просто mapState для стислості. Він викликається кожного разу, коли змінюється стан сховища .`,
  },
  {
    title: `When mapDispatchToProps is called?`,
    english: `If your mapDispatchToProps function is declared as taking two parameters, it will be called with dispatch as the first parameter and the props passed to the connected component as the second parameter, and will be re-invoked whenever the connected component receives new props`,
    ukrainian: `Якщо ваша функція mapDispatchToProps оголошена як така, що приймає два параметри, її буде викликано з dispatch як першим параметром, а властивості, передані підключеному компоненту як другий параметр, і будуть повторно викликані щоразу, коли підключений компонент отримає нові властивості`,
  },
  {
    title: `What is the difference between mapStateToProps() and mapDispatchToProps() in React?`,
    english: `mapStateToProps() is a utility that helps your component get updated state (which is updated by some other components), mapDispatchToProps() is a utility that helps the component launch exkins (a dispatcher action that can cause a state change)`,
    ukrainian: `mapStateToProps() — це утиліта, яка допомагає вашому компоненту отримувати оновлений стейт (який оновлюється деякими іншими компонентами), mapDispatchToProps() — це утиліта, яка допомогає компоненту запустити екшини(дія диспетчера, яка може спричинити зміну стейту)`,
  },
  {
    title: `What does redux-thunk do?`,
    english: `The word "thunk" in programming means "a piece of code that performs some delayed work." For Redux, thunks are a template for writing functions with internal logic that can interact with the dispatch and getState methods of the Redux store.`,
    ukrainian: `Слово "thunk" - в програмуванні означає "фрагмент коду, який виконує деяку відкладену роботу". Для Redux «thunks» — це темплейт написання функцій із внутрішньою логікою, які можуть взаємодіяти з методами dispatch і getState ма Redux сховища.`,
  },
  {
    title: `What is the purpose of redux-thunk?`,
    english: `Thunk allows us to send actions manually, which allows us to include some logic or run some asynchronous code before sending the action.`,
    ukrainian: `Thunk дозволяє нам відправляти екшени вручну, що дає можливість включити деяку логіку або запустити деякий асинхронний код перед відправленням екшена.`,
  },

] as Question[]

// redux toolkit, saga, react query, usequery



