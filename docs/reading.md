# Книги и авторы: что читать и когда

[План](../README.md) · [Практика](../exercises/README.md) · [Прогресс](../progress/README.md)

Подборка проверена по страницам авторов и издателей **29 сентября 2026 года**. Годы относятся к указанным оригинальным изданиям; доступность и соответствие русских переводов отдельно не проверялись. Покупать всё не нужно: начать можно с бесплатных материалов. Рекомендации о порядке и сложности — наш методический выбор, а не обещание автора о результатах обучения.

## Минимальный маршрут ученика

| Когда | Книга или материал | Как использовать в нашем плане |
| --- | --- | --- |
| Этапы 1–2 | Илья Кантор, [Современный учебник JavaScript](https://learn.javascript.ru/) — бесплатный онлайн-учебник на русском | Основы, функции, объекты/массивы, ошибки, затем Promise, DOM и события. Читать раздел под текущее упражнение, не пытаться сразу освоить все главы |
| Этапы 1–2, затем 4 | Marijn Haverbeke, [Eloquent JavaScript, 4-е издание, 2024](https://eloquentjavascript.net/) — свободно читается онлайн | Альтернатива основному учебнику или дополнительная практика: функции, коллекции, ошибки, модули и асинхронность. При трудностях разбирать примеры с наставником. Не проходить два учебника JS целиком параллельно |
| Этап 3 | Matt Pocock, [Total TypeScript Essentials](https://www.totaltypescript.com/books/total-typescript-essentials) — бесплатная онлайн-книга | Базовые типы, narrowing, объекты и функции; применить к `unknown` и разбору данных в 3.1. Сложные манипуляции типами оставить на потом |
| После первых задач с TS, этапы 3–5 | Dan Vanderkam, [Effective TypeScript, 2-е издание, 2024](https://effectivetypescript.com/2024/05/21/second-edition/) | Разбирать по одному совету: границы типов, вывод типов, проектирование данных, ограничения `any`. Я бы не давал её первой книгой человеку без JavaScript |
| После массивов/функций, понемногу на этапах 1–5 | Aditya Y. Bhargava, [Grokking Algorithms, 2-е издание, 2024](https://www.manning.com/books/grokking-algorithms-second-edition) | Поиск, сложность, хеш-таблицы; реализовать небольшой пример на JS. Книга использует Python: не превращать чтение в параллельный курс второго языка. Графы и более сложные темы — по интересу или целевому собеседованию |
| После нескольких собственных PR, этапы 4–7 | David Thomas и Andrew Hunt, [The Pragmatic Programmer, 20th Anniversary Edition, 2019](https://books.pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/) | Обсуждать диагностику, обратную связь, ответственность за изменения на примерах проекта. Это более старая книга о подходах, не источник актуальных API или инструкций по AI |

Для React основной материал — [официальный Learn](https://react.dev/learn): компоненты, состояние, события и управление состоянием. Ученик сразу применяет раздел в задании 3.2. Актуальную документацию выбранной версии используем для поведения API; год издания книги сам по себе не гарантирует соответствия инструментам проекта.

Для SQL сначала [PostgreSQL Tutorial](https://www.postgresql.org/docs/current/tutorial.html): таблицы, запросы, соединения, агрегаты, транзакции. Этап 5 уже даёт практические задачи; отдельная большая книга по архитектуре данных пока не обязательна.

## Обязательный стек: чтение под практику

### Подготовка механизма и малая проверка

Дополнения ниже сверены по официальным источникам 2 октября 2026 года. Исторические даты книжной подборки и прежней проверки инструментов сохраняются. Читать один нужный раздел, затем предсказать результат, сделать собственную малую пробу, запустить и объяснить изменение; готовый пример не подтверждает освоение.

| Когда | Короткое чтение | Наблюдаемый результат |
| --- | --- | --- |
| Перед 1.1 | Основы, значения, функции и коллекции в [MDN JavaScript fundamentals](https://developer.mozilla.org/en-US/curriculum/core/javascript-fundamentals/) или соответствующие главы существующего учебника JS | Параметры/результат, условие, цикл и преобразование строки объяснены на собственной пробе с изменённой границей |
| Внутри 1.3 | [MDN modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), async/await, Promise и ошибки в [JavaScript fundamentals](https://developer.mozilla.org/en-US/curriculum/core/javascript-fundamentals/) | Разделённая функция запускается, ошибка импорта найдена; прогноз порядка, успех/отказ и try/catch проверены |
| Внутри 1.3, после локальной проверки | [GitHub Actions: первый workflow и его журнал](https://docs.github.com/en/actions/get-started/quickstart) | Одна существующая JS-проверка запускается на PR; ученица находит результат шага, объясняет событие/команду и проверяет падение на временной ошибке |
| Перед 2.1 | [Семантический HTML](https://developer.mozilla.org/en-US/curriculum/core/semantic-html/), [основы CSS](https://developer.mozilla.org/en-US/curriculum/core/css-fundamentals/) и один нужный layout из [CSS layout](https://developer.mozilla.org/en-US/curriculum/core/css-layout/) | Назначение элементов, каскад/box model и переполнение объяснены в DevTools; свой малый layout проверен при 360 px и с клавиатуры |
| Внутри 3.3 | JSON и [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) | JS-значение отличается от JSON-строки; локально наблюдаются статус, разбор, сетевой отказ и некорректные данные. Внешний API не обязателен |
| Внутри 4.1, до controller | [Node.js: ожидание и блокирующая работа](https://nodejs.org/en/learn/asynchronous-work/dont-block-the-event-loop), [File system: sync/Promise API](https://nodejs.org/api/fs.html) | Конечная проба до секунды объясняет порядок callbacks; малый собственный файл прочитан, отсутствие обработано, ресурсы и временные файлы убраны. Равенство миллисекунд не требуется |
| Внутри 4.1–4.3 | [NestJS lifecycle](https://docs.nestjs.com/fundamentals/lifecycle-events) и раздел testing ниже | Свой процесс запущен/остановлен, ошибка порта объяснена; тестовое приложение закрыто после успеха и отказа, shutdown hooks по сигналу явно включены при использовании |
| Внутри 5.1 | [PostgreSQL Tutorial: SQL и схема](https://www.postgresql.org/docs/current/tutorial-sql.html) | Собственная малая таблица, SELECT/INSERT/UPDATE, ключ/ограничение и параметр проверены до переноса API |
| Внутри 5.2 | [JOIN](https://www.postgresql.org/docs/current/tutorial-join.html) и [агрегаты](https://www.postgresql.org/docs/current/tutorial-agg.html) | Строка без связи, фильтр и счёт объяснены по прогнозу и фактическому результату на другом наборе |
| Внутри 5.3 | [Транзакции](https://www.postgresql.org/docs/current/tutorial-transactions.html), [блокировки](https://www.postgresql.org/docs/current/explicit-locking.html), [изоляция](https://www.postgresql.org/docs/current/transaction-iso.html) — только под свою пробу | Два независимых соединения показывают ожидание, commit/rollback и возврат ресурсов; граница транзакции отличается от доказательства защиты бизнес-правила |

Это подготовка внутри существующих заданий, без нового обязательного курса или списка книг. Сложные справочные API не заучиваем. Перед React подтверждаем JS-пробы 1.3 и браузерную приёмку; знакомую реализацию можно делегировать по двум режимам после наблюдаемого подтверждения.

Frontend — React + TypeScript + MobX + Rspack; backend — NestJS + TypeScript. Точные версии закрепляем при создании решения, а не в плане. Ниже — официальные источники под конкретный шаг; читать только нужный раздел, затем применить его самостоятельно. Технические механизмы новых заданий сверены с официальной документацией 1 октября 2026 года; историческая проверка книжной подборки выше относится к 29 сентября.

| Шаг | Что читать | Что объяснить и проверить в задании |
| --- | --- | --- |
| 3.1: типы после JS | [TypeScript: основы](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) и [narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html) | Тип функции, unknown, проверка JSON во время выполнения и ошибка типов отдельно от теста правила |
| 3.2: сначала React | [React Learn](https://react.dev/learn), [состояние](https://react.dev/learn/managing-state), [TypeScript в React](https://react.dev/learn/typescript) | Props, события, владелец состояния, устойчивый key; граница черновика формы и общего списка |
| 3.2: Rspack | [Начало работы](https://www.rspack.dev/guide/start/quick-start), [React/TSX](https://www.rspack.dev/guide/integrations/react), [TypeScript](https://www.rspack.dev/guide/languages/typescript) | Entry/output, TSX/CSS, dev и production; преобразование TypeScript не заменяет отдельный tsc. Написать свою минимальную конфигурацию и просмотреть сборку |
| 3.2: MobX | [Общий механизм](https://mobx.js.org/the-gist-of-mobx.html), [observable и makeAutoObservable](https://mobx.js.org/observable-state.html), [computed](https://mobx.js.org/computeds.html), [React integration](https://mobx.js.org/react-integration.html) | Общий store, производный список, actions; observer подписывается на observable, прочитанные при render. Воспроизвести потерянную подписку |
| 3.3: асинхронность MobX | [Actions и async/await](https://mobx.js.org/actions.html), [реактивность](https://mobx.js.org/understanding-reactivity.html), [enforceActions](https://mobx.js.org/configuration.html#enforceactions) | Action-граница после await, последняя загрузка побеждает старую, ошибки/empty различимы; реакциям нужна очистка |
| 4.1: HTTP до фреймворка | [MDN: HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview), [Node.js: введение](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs) | Метод, URL, тело, статус; браузер и сервер — разные среды, TS-типы не валидируют сетевой запрос |
| 4.1: NestJS | [Controllers](https://docs.nestjs.com/controllers), [providers](https://docs.nestjs.com/providers), [modules](https://docs.nestjs.com/modules), [validation](https://docs.nestjs.com/techniques/validation) | Регистрация provider и DI, controller/service, DTO-класс и ValidationPipe, лишние поля и формат ошибки по контракту |
| 4.3: ошибки и тесты NestJS | [Exception filters](https://docs.nestjs.com/exception-filters), [testing](https://docs.nestjs.com/fundamentals/testing) | Поведение Promise/try-catch, HTTP-код исключения, TestingModule, подмена provider и Supertest; закрытие тестового приложения |
| 5: SQL в provider | [PostgreSQL Tutorial](https://www.postgresql.org/docs/current/tutorial.html) и подготовка 5.1–5.3 выше | Параметры SQL, JOIN, ограничения и транзакция на независимых соединениях; настоящая тестовая БД в CI, возврат соединений и закрытие пула/приложения даже после отказа |
| 6.1: серверные права | [NestJS guards](https://docs.nestjs.com/guards) и [authentication](https://docs.nestjs.com/security/authentication) | Проверенная личность на входе, доступ к конкретной записи в service, отказ прямому запросу. Это объяснение механизма; решение входа выбираем с наставником, собственную криптографию не пишем |
| 6.2: проверки и выпуск | [Vitest](https://vitest.dev/guide/), [NestJS testing](https://docs.nestjs.com/fundamentals/testing), [Playwright](https://playwright.dev/docs/intro) | Различать тест store, HTTP/БД, сборку Rspack, сборку NestJS и наблюдение браузера; проверять собственную задачу подходящим способом |

Библиотеки вводим последовательно, не одним большим стартовым шаблоном. Vitest проверяет frontend-логику отдельно от Rspack; Jest/Supertest — backend. Документация и пример автора помогают понять механизм, но не заменяют собственную малую пробу нового и независимую защиту. После подтверждения объяснением, собственным изменением и наблюдаемой проверкой знакомую часть можно ограниченно поручить агенту с ревью и проверками по [двум режимам](../.ai/skills/fullstack-mentor/SKILL.md). Синтаксис/API можно смотреть; состояние, async, runtime validation, HTTP, права, транзакции и сбои проверяем действием. Углублённое устройство runtime и профилирование — по дальнейшим задачам. Для короткого обсуждения использовать [сценарии на другом сюжете](../examples/README.md), не готовое решение задания.

## Тебе как наставнику

**Первой я бы выбрал Felienne Hermans — [The Programmer’s Brain, 2021](https://www.manning.com/books/the-programmers-brain).** Книга про чтение и понимание кода, память, обучение и введение новичка в существующий код. Для нашей ситуации это непосредственно полезнее ещё одного обзора фреймворков. Применение: уменьшать объём примера, просить прогноз результата, рисовать состояние переменных, возвращаться к знакомому механизму в новой задаче. Это не руководство по современным AI-инструментам; его идеи мы применяем к проверке понимания самостоятельно.

Авторы, за которыми стоит следить по конкретной потребности:

- **Matt Pocock** — объяснения TypeScript и практические задачи; [Total TypeScript](https://www.totaltypescript.com/).
- **Dan Vanderkam** — проектирование типов и разбор тонкостей; [Effective TypeScript](https://effectivetypescript.com/).
- **Felienne Hermans** — понимание кода и обучение; [страница книги у автора](https://www.felienne.com/book).

## Как читать, чтобы это стало навыком

1. Выбрать один раздел под текущую задачу; выделить на чтение часть занятия, не всю неделю.
2. Закрыть пример и своими словами объяснить механизм.
3. Написать маленький пример с другим условием, проверить прогноз запуска.
4. Применить идею в задании и записать одну ошибку понимания в `learning/`.
5. На следующем разборе повторить короткую задачу. Если пока трудно — уменьшить её, а не добавлять ещё одну книгу.

Не начинать маршрут с объёмных книг о распределённых системах, каталогов паттернов или полного набора «обязательной классики». Они станут полезнее, когда появятся собственные задачи и ограничения, с которыми можно сравнивать прочитанное. Инструкции по быстро меняющимся AI-инструментам проверяем по их текущей документации; устойчивый навык — поставить задачу, понять изменение и доказать результат.
