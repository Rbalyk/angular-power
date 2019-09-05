import {Article} from './article';

export const ARTICLES: Article[] = [
  {
    id: '0',
    title: 'Чому Angular?',
    imageUrl: '/assets/images/category/images/angular.png',
    categoryName: 'Angular',
    categoryId: '1',
    categoryImageUrl: '/assets/images/category/icons/angular.svg',
    date: '2012-10-16T17:57:28.556094Z',
    authorName: 'Roman Balyk',
    authorPosition: 'Front-end Developer',
    authorAvatar: '/assets/images/romanbalyk.jpeg',
    // tslint:disable-next-line:max-line-length
    postText: 'Angular (зазвичай так називають фреймворк Angular 2 або Angular 2+, тобто вищі версії) — написаний на TypeScript front-end фреймворк з відкритим кодом, який розробляється під керівництвом Angular Team у компанії Google, а також спільнотою приватних розробників та корпорацій. Angular — це AngularJS, який переосмислили та який був повністю переписаний тією ж командою розробників.',
    // tslint:disable-next-line:max-line-length
    text: 'Angular (зазвичай так називають фреймворк Angular 2 або Angular 2+, тобто вищі версії) — написаний на TypeScript front-end фреймворк з відкритим кодом, який розробляється під керівництвом Angular Team у компанії Google, а також спільнотою приватних розробників та корпорацій. Angular — це AngularJS, який переосмислили та який був повністю переписаний тією ж командою розробників.Реліз версії Angular 8 запланований на березень-квітень 2019 року, а версії Angular 9 орієнтовно на вересень-жовтень 2019 року. Очікується, що кожна наступна версія буде зворотно сумісною з попередньою. Google також обіцяє публікувати оновлення двічі на рік.',
    featured: true,
    comments: [
      {
        rating: 5,
        comment: 'Angular its a power.Cool Article!',
        author: 'Arnold Bern',
        date: '2012-10-16T17:57:28.556094Z'
      }, {
        rating: 5,
        comment: 'Cool Article!',
        author: 'John Lemon',
        date: '2012-10-16T17:57:28.556094Z'
      },
      {
        rating: 5,
        comment: 'The best article that I have ever read!!',
        author: 'Paul McVites',
        date: '2014-09-05T17:57:28.556094Z'
      }
    ]
  }, {
    id: '1',
    title: 'Чому React.js?',
    imageUrl: '/assets/images/category/images/react.jpg',
    categoryName: 'React.js',
    categoryId: '2',
    categoryImageUrl: '/assets/images/category/icons/react.svg',
    date: '2012-10-16T17:57:28.556094Z',
    authorName: 'Roman Balyk',
    authorPosition: 'Front-end Developer',
    authorAvatar: '/assets/images/romanbalyk.jpeg',
    // tslint:disable-next-line:max-line-length
    postText: 'React (старі назви: React.js, ReactJS) — відкрита JavaScript бібліотека для створення інтерфейсів користувача, яка покликана вирішувати проблеми часткового оновлення вмісту веб-сторінки, з якими стикаються в розробці односторінкових застосунків. Розробляється Facebook, Instagram і спільнотою індивідуальних розробників.',
    // tslint:disable-next-line:max-line-length
    text: 'React (старі назви: React.js, ReactJS) — відкрита JavaScript бібліотека для створення інтерфейсів користувача, яка покликана вирішувати проблеми часткового оновлення вмісту веб-сторінки, з якими стикаються в розробці односторінкових застосунків. Розробляється Facebook, Instagram і спільнотою індивідуальних розробників. React дозволяє розробникам створювати великі веб-застосунки, які використовують дані, котрі змінюються з часом, без перезавантаження сторінки. Його мета полягає в тому, щоб бути швидким, простим, масштабованим. React обробляє тільки користувацький інтерфейс у застосунках. Це відповідає видові у шаблоні модель-вид-контролер (MVC), і може бути використане у поєднанні з іншими JavaScript бібліотеками або в великих фреймворках MVC, таких як AngularJS[6]. Він також може бути використаний з React на основі надбудов, щоб піклуватися про частини без користувацького інтерфейсу побудови веб-застосунків. Як бібліотеку інтерфейсу користувача React найчастіше використовують разом з іншими бібліотеками, такими як Redux. В даний час React використовують Khan Academy, Netflix, Yahoo, Airbnb,Sony,Atlassian та інші.',
     featured: false,
    comments: [
      {
        rating: 5,
        comment: 'React its a power.Cool Article!',
        author: 'Arnold Bern',
        date: '2012-10-16T17:57:28.556094Z'
      }, {
        rating: 5,
        comment: 'Cool Article!',
        author: 'John Lemon',
        date: '2012-10-16T17:57:28.556094Z'
      },
      {
        rating: 5,
        comment: 'The best article that I have ever read!!',
        author: 'Paul McVites',
        date: '2014-09-05T17:57:28.556094Z'
      }
    ]
  }, {
    id: '3',
    title: 'Чому Vue.js?',
    imageUrl: '/assets/images/category/images/vue.jpeg',
    categoryName: 'Vue.js',
    categoryId: '3',
    categoryImageUrl: '/assets/images/category/icons/vue.svg',
    date: '2012-10-16T17:57:28.556094Z',
    authorName: 'Roman Balyk',
    authorPosition: 'Front-end Developer',
    authorAvatar: '/assets/images/romanbalyk.jpeg',
    // tslint:disable-next-line:max-line-length
    postText: 'Vue.js (читається як "в\'ю", з англ. view) — JavaScript-фреймворк що використовує шаблон MVVM для створення інтерфейсів користувача на основі моделей даних, через реактивне зв\'язування даних.',
    // tslint:disable-next-line:max-line-length
    text: 'Vue.js (читається як "в\'ю", з англ. view) — JavaScript-фреймворк що використовує шаблон MVVM для створення інтерфейсів користувача на основі моделей даних, через реактивне зв\'язування даних. Одна із найвиразніших особливостей Vue — це ненав\'язлива реактивна система. Моделі це просто плоскі JavaScript об\'єкти. Це робить керування станами дуже простим та інтуїтивним. Vue надає оптимізований ре-рендеринг з коробки без потреби робити що-небудь додатково. Кожен компонент слідкує за своїми реактивними залежностями під час рендерингу, тому система знає точно коли має відбуватись ре-рендеринг і які компоненти потрібно ре-рендерити. Vue сам по собі не включає роутингу, та є vue-router пакет, який вирішує це питання. Він підтримує зв\'язування вкладенних шляхів з вкладеними компонентами і пропонує деталізований контроль над переходами. Vue дозволяє створення додатків за допомогою компонетів. Якщо додати vue-router до цього, все що потрібно зробити це зв\'язати ваші компоненти з роутами і дозвольте vue-router вирішувати де їх рендерити.',
    featured: false,
    comments: [
      {
        rating: 5,
        comment: 'Vue its a power.Cool Article!',
        author: 'Arnold Bern',
        date: '2012-10-16T17:57:28.556094Z'
      }, {
        rating: 5,
        comment: 'Cool Article!',
        author: 'John Lemon',
        date: '2012-10-16T17:57:28.556094Z'
      },
      {
        rating: 5,
        comment: 'The best article that I have ever read!!',
        author: 'Paul McVites',
        date: '2014-09-05T17:57:28.556094Z'
      }
    ]
  }, {
    id: '4',
    title: 'Чому Node.js?',
    imageUrl: '/assets/images/category/images/nodejs.jpeg',
    categoryName: 'Node.js',
    categoryId: '4',
    categoryImageUrl: '/assets/images/category/icons/nodejs.svg',
    date: '2012-10-16T17:57:28.556094Z',
    authorName: 'Roman Balyk',
    authorPosition: 'Front-end Developer',
    authorAvatar: '/assets/images/romanbalyk.jpeg',
    // tslint:disable-next-line:max-line-length
    postText: 'Node.js — платформа з відкритим кодом для виконання високопродуктивних мережевих застосунків, написаних мовою JavaScript. Засновником платформи є Раян Дал (Ryan Dahl). Якщо раніше Javascript застосовувався для обробки даних в браузері користувача, то node.js надав можливість виконувати JavaScript-скрипти на сервері та відправляти користувачеві результат їх виконання. Платформа Node.js перетворила JavaScript на мову загального використання з великою спільнотою розробників.',
    // tslint:disable-next-line:max-line-length
    text: 'Node.js — платформа з відкритим кодом для виконання високопродуктивних мережевих застосунків, написаних мовою JavaScript. Засновником платформи є Раян Дал (Ryan Dahl). Якщо раніше Javascript застосовувався для обробки даних в браузері користувача, то node.js надав можливість виконувати JavaScript-скрипти на сервері та відправляти користувачеві результат їх виконання. Платформа Node.js перетворила JavaScript на мову загального використання з великою спільнотою розробників.Платформа Node.js призначена для виконання високопродуктивних мережевих застосунків, написаних мовою програмування JavaScript. Платформа окрім роботи із серверними скриптами для веб-запитів, також використовується для створення клієнтських та серверних програм. В платформі використовується розроблений компанією Google рушій V8. Для забезпечення обробки великої кількості паралельних запитів у Node.js використовується асинхронна модель запуску коду, заснована на обробці подій в неблокуючому режимі та визначенні обробників зворотніх викликів (callback). Як способи мультиплексування з\'єднань підтримується epoll, kqueue, /dev/poll і select. Для мультиплексування з\'єднань використовується бібліотека libuv, для створення пулу потоків (thread pool) задіяна бібліотека libeio, для виконання DNS-запитів у неблокуючому режимі інтегрований c-ares. Всі системні виклики, що спричиняють блокування, виконуються всередині пулу потоків і потім, як і обробники сигналів, передають результат своєї роботи назад через неіменовані канали (pipe). За своєю суттю Node.js схожий на фреймворки Perl AnyEvent, Ruby Event Machine і Python Twisted, але цикл обробки подій (event loop) у Node.js прихований від розробника і нагадує обробку подій у веб-застосунку, що працює в браузері. При написанні програм для Node.js необхідно враховувати специфіку подієво-орієнтованого програмування, наприклад, замість виконання',
    featured: false,
    comments: [
      {
        rating: 5,
        comment: 'Node.js its a power.Cool Article!',
        author: 'Arnold Bern',
        date: '2012-10-16T17:57:28.556094Z'
      }, {
        rating: 5,
        comment: 'Cool Article!',
        author: 'John Lemon',
        date: '2012-10-16T17:57:28.556094Z'
      },
      {
        rating: 5,
        comment: 'The best article that I have ever read!!',
        author: 'Paul McVites',
        date: '2014-09-05T17:57:28.556094Z'
      }
    ]
  }
];
