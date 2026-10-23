'use strict';

// English HTML is the no-JS fallback. Preserve DOM markup and original
// text nodes while swapping all localized UI, metadata and accessible names.
(() => {
  const STORAGE_KEY = 'triple-jump-games-language';
  const RU = {
  "Triple Jump Games — Indie Game Development": "Triple Jump Games — Разработка инди-игр",
  "Triple Jump Games creates playful Unity experiences for web and mobile, from curious prototypes to satisfying game mechanics.": "Triple Jump Games создаёт игры на Unity для браузеров и мобильных устройств: от первых прототипов до продуманных игровых механик.",
  "Building worlds worth exploring. Games, concepts and interactive experiments by Triple Jump Games.": "Создаём миры, полные открытий. Игры, концепты и интерактивные эксперименты от Triple Jump Games.",
  "Skip to content": "Перейти к содержимому",
  "Work": "Проекты",
  "Expertise": "Компетенции",
  "About": "О нас",
  "Contact": "Контакты",
  "INDIE GAME DEVELOPMENT": "РАЗРАБОТКА ИНДИ-ИГР",
  "Building worlds": "Создаём миры",
  "worth exploring": "для новых открытий",
  "turns playful ideas into interactive experiences — with Unity, curiosity, and an obsession for the little details.": "превращает интересные идеи в интерактивные игры на Unity. Любопытство и внимание к деталям — наш подход.",
  "Explore our work": "Смотреть проекты",
  "About the studio": "О студии",
  "CREATIVE PLAYGROUND / UNITY": "ТВОРЧЕСКАЯ МАСТЕРСКАЯ / UNITY",
  "INTERACTIVE WORLDS": "ИНТЕРАКТИВНЫЕ МИРЫ",
  "CONCEPT ART / 001": "КОНЦЕПТ-АРТ / 001",
  "MADE WITH": "СОЗДАНО НА",
  "01 / FEATURED CONCEPT": "01 / ГЛАВНЫЙ КОНЦЕПТ",
  "Small idea. Big playground.": "Маленькая идея. Большая игра.",
  "Ideas → Play": "Идеи → Игра",
  "Always iterating": "Всегда улучшаем",
  "SCROLL TO EXPLORE": "ЛИСТАЙТЕ НИЖЕ",
  "UNITY ENGINE": "ДВИЖОК UNITY",
  "C# DEVELOPMENT": "РАЗРАБОТКА НА C#",
  "GAMEPLAY SYSTEMS": "ИГРОВЫЕ СИСТЕМЫ",
  "MOBILE GAMES": "МОБИЛЬНЫЕ ИГРЫ",
  "01 / WORK": "01 / ПРОЕКТЫ",
  "IDEAS IN MOTION": "ИДЕИ В ДЕЙСТВИИ",
  "A LITTLE BIT OF EVERYTHING": "ПРОБУЕМ РАЗНОЕ",
  "Projects in": "Проекты",
  "the making.": "в разработке.",
  "Games, concepts and engineering explorations. A look at the experiences taking shape at Triple Jump Games.": "Игры, концепты и технические эксперименты. Показываем, что сейчас рождается в Triple Jump Games.",
  "All work": "Все проекты",
  "Games": "Игры",
  "Systems": "Системы",
  "SHOWING 03 / 03": "ПОКАЗАНО 03 / 03",
  "01 / GAME CONCEPT": "01 / ИГРОВОЙ КОНЦЕПТ",
  "CONCEPT STUDY": "ИГРОВОЙ КОНЦЕПТ",
  "A bizarre little supermarket where every item is a toaster.": "Необычный супермаркет, где каждый товар — тостер.",
  "02 / VISUAL EXPLORATION": "02 / ВИЗУАЛЬНЫЙ ЭКСПЕРИМЕНТ",
  "PLACEHOLDER ART": "ВРЕМЕННАЯ ИЛЛЮСТРАЦИЯ",
  "GAME DESIGN": "ГЕЙМДИЗАЙН",
  "A visual placeholder for a future playable project.": "Временная визуализация будущего игрового проекта.",
  "03 / ENGINEERING FOCUS": "03 / ТЕХНИЧЕСКИЙ ПОДХОД",
  "ENGINEERING": "РАЗРАБОТКА",
  "ONGOING": "В РАБОТЕ",
  "Gameplay Systems": "Игровые системы",
  "Robust foundations for expressive game mechanics.": "Надёжная основа для выразительных игровых механик.",
  "Studio preview — concept illustrations, not published game screenshots. Real project material will replace these visuals.": "Предварительные материалы студии: это концепт-иллюстрации, а не скриншоты выпущенных игр. Позже здесь появятся реальные материалы проектов.",
  "02 / EXPERTISE": "02 / КОМПЕТЕНЦИИ",
  "WHAT MAKES IT TICK": "ЧТО СТОИТ ЗА ИГРОЙ",
  "CREATIVE THINKING, ENGINEERED": "ИДЕИ И ТЕХНОЛОГИИ",
  "It's more than": "Не просто",
  "just code.": "код.",
  "Great games need a little magic and a lot of thoughtful engineering. Triple Jump Games focuses on mechanics, feel, and performance.": "Хорошей игре нужны интересные идеи и продуманная реализация. Triple Jump Games уделяет внимание механикам, игровым ощущениям и производительности.",
  "Gameplay development": "Разработка геймплея",
  "Mechanics, feedback loops, systems that feel good.": "Механики, обратная связь и отзывчивое управление.",
  "Web & mobile": "Веб и мобильные игры",
  "Creating with real-world platform constraints in mind.": "Разработка с учётом возможностей и ограничений платформ.",
  "Tools & workflows": "Инструменты и процессы",
  "Less busywork, more room to make something great.": "Меньше рутины — больше времени на создание игр.",
  "// The magic is in the details": "// Всё решают детали",
  "COMPILATION SUCCEEDED": "КОМПИЛЯЦИЯ УСПЕШНА",
  "0 ERRORS · 0 WARNINGS": "0 ОШИБОК · 0 ПРЕДУПРЕЖДЕНИЙ",
  "Make it": "Главное —",
  "feel right.": "ощущения.",
  "THE TOOLBOX": "ИНСТРУМЕНТЫ",
  "Mobile": "Мобильные платформы",
  "Prototyping": "Прототипирование",
  "03 / APPROACH": "03 / ПОДХОД",
  "HOW GAMES ARE BUILT": "КАК СОЗДАЮТСЯ ИГРЫ",
  "SIMPLE PROCESS, GOOD RESULTS": "ОТ ИДЕИ К РЕЗУЛЬТАТУ",
  "From what if": "От первой идеи",
  "to what next.": "до следующего шага.",
  "The best ideas rarely arrive finished. The process starts with finding the fun, testing assumptions early, and refining what works.": "Готовые идеи появляются редко. Сначала ищем интересную механику, проверяем гипотезы на прототипах, а затем улучшаем то, что работает.",
  "Prototype fast.": "Быстро прототипируем.",
  "Find the interesting part first. Build just enough to see whether it feels right.": "Сначала находим самое интересное. Делаем минимальный прототип и проверяем игровые ощущения.",
  "Refine the feel.": "Оттачиваем ощущения.",
  "Iterate on controls, feedback, performance, and all those tiny details.": "Улучшаем управление, обратную связь, производительность и мелкие детали.",
  "Make it real.": "Доводим до результата.",
  "Turn a promising prototype into something coherent and ready to share.": "Превращаем перспективный прототип в цельный проект, который не стыдно показать.",
  "ALWAYS CURIOUS": "ВСЕГДА В ПОИСКЕ",
  "EST. IN CODE": "РОЖДЕНО В КОДЕ",
  "A LITTLE BIT OF PLAY IN EVERYTHING ✦": "НЕМНОГО ИГРЫ В КАЖДОЙ ДЕТАЛИ ✦",
  "04 / ABOUT": "04 / О НАС",
  "BEHIND THE PLAY": "КТО СОЗДАЁТ ИГРЫ",
  "Meet": "Это",
  "the studio.": "наша студия.",
  "Triple Jump Games is an independent game development project focused on playful Unity experiences for web and mobile. The work explores engaging mechanics, clean systems, and small interactions that feel satisfying.": "Triple Jump Games — независимый проект по разработке игр на Unity для браузеров и мобильных устройств. Мы экспериментируем с механиками, строим понятные системы и уделяем внимание деталям, благодаря которым играть приятно.",
  "The best moment is when an idea stops being a concept and becomes something you can actually play.": "Самое интересное начинается, когда идея перестаёт быть концептом и превращается в игру, в которую можно сыграть.",
  "Explore on GitHub": "Посмотреть на GitHub",
  "05 / LET'S CONNECT": "05 / НА СВЯЗИ",
  "Let's make": "Создадим",
  "something fun.": "что-то интересное.",
  "Have a project, an interesting idea, or just want to talk games? Connect with Triple Jump Games on GitHub.": "Есть проект, необычная идея или хочется обсудить игры? Свяжитесь с Triple Jump Games через GitHub.",
  "Visit GitHub": "Перейти на GitHub",
  "MAKE THINGS THAT MATTER.": "СОЗДАЁМ СМЫСЛ.",
  "KEEP PLAYING.": "ПРОДОЛЖАЕМ ИГРАТЬ.",
  "BACK TO TOP ↑": "НАВЕРХ ↑",
  "Triple Jump Games is showcasing early concepts. Illustrations and descriptions are placeholders until playable project material is available.": "Сейчас Triple Jump Games показывает ранние концепты. Иллюстрации и описания носят предварительный характер и будут заменены материалами игровых проектов.",
  "CONCEPT STUDY / UNITY · 3D": "ИГРОВОЙ КОНЦЕПТ / UNITY · 3D",
  "A playful concept for a supermarket collecting game, with one very peculiar rule: everything is a toaster. This is concept art, not a screenshot of a released game.": "Идея игры о сборе предметов в супермаркете с одним необычным правилом: все товары здесь — тостеры. Это концепт-арт, а не скриншот готовой игры.",
  "VISUAL PLACEHOLDER / GAME DESIGN": "ВРЕМЕННАЯ ИЛЛЮСТРАЦИЯ / ГЕЙМДИЗАЙН",
  "A sample visual exploration showing how another Unity project could be presented. Replace this placeholder with a real project, trailer, or playable demo.": "Пример визуального оформления будущего проекта на Unity. Позже здесь можно разместить настоящий проект, трейлер или игровую демоверсию.",
  "ENGINEERING FOCUS / UNITY · C#": "ТЕХНИЧЕСКИЙ ПОДХОД / UNITY · C#",
  "Triple Jump Games focuses on the building blocks behind engaging games: core mechanics, reusable gameplay logic, iteration workflows and performance-conscious implementation. This image is illustrative.": "Triple Jump Games работает над основой увлекательных игр: ключевыми механиками, повторно используемой игровой логикой, удобными процессами разработки и оптимизацией производительности. Изображение носит иллюстративный характер.",
  "Illustrative concept art of a playful supermarket": "Концепт-арт необычного супермаркета",
  "Illustrative neon arcade world": "Иллюстрация неонового аркадного мира",
  "Illustrative gameplay-systems diagram": "Иллюстрация игровых систем",
  "Open menu": "Открыть меню",
  "Close menu": "Закрыть меню"
};
  const ATTR_RU = {
  "Main navigation": "Основная навигация",
  "Triple Jump Games, back to top": "Triple Jump Games, наверх",
  "Areas of work": "Направления работы",
  "Filter work": "Фильтр проектов",
  "View Toaster Market concept details": "Подробнее о концепте Toaster Market",
  "View Arcade Lab details": "Подробнее об Arcade Lab",
  "View Gameplay Systems details": "Подробнее об игровых системах",
  "Decorative code editor illustration": "Декоративная иллюстрация редактора кода",
  "Close dialog": "Закрыть окно",
  "Open menu": "Открыть меню",
  "Close menu": "Закрыть меню",
  "Illustrative concept artwork of a playful low-poly supermarket environment filled with toasters": "Концепт-арт супермаркета с низкополигональными тостерами",
  "Colorful supermarket full of stylized toasters, concept illustration": "Концепт-иллюстрация красочного супермаркета с тостерами",
  "Neon colored abstract arcade environment, illustrative portfolio placeholder": "Неоновое аркадное пространство, временная иллюстрация",
  "Stylized interface showing interconnected gameplay systems": "Схематичное изображение взаимосвязанных игровых систем"
};
  const sourceNodes = [];
  const sourceAttributes = [];
  const sourceTitle = document.title;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    const raw = node.nodeValue;
    const key = raw.trim();
    if (Object.hasOwn(RU, key)) {
      sourceNodes.push({ node, key, prefix: raw.match(/^\s*/)[0], suffix: raw.match(/\s*$/)[0] });
    }
  }
  document.querySelectorAll('[aria-label], [alt]').forEach((element) => {
    for (const attribute of ['aria-label', 'alt']) {
      const english = element.getAttribute(attribute);
      if (english && Object.hasOwn(ATTR_RU, english)) {
        sourceAttributes.push({ element, attribute, english });
      }
    }
  });

  function fromBrowser() {
    const locales = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en'];
    return /^ru(?:-|$)/i.test(locales[0]) ? 'ru' : 'en';
  }
  function initialLanguage() {
    const queryLanguage = new URLSearchParams(window.location.search).get('lang');
    if (queryLanguage === 'ru' || queryLanguage === 'en') return queryLanguage;
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === 'ru' || saved === 'en') return saved;
    } catch (_) {
      // Storage can be denied, for example in private browsing.
    }
    return fromBrowser();
  }

  let language = initialLanguage();
  function translate(value) {
    return language === 'ru' ? (RU[value] || value) : value;
  }
  function setLanguage(next, options = {}) {
    if (next !== 'en' && next !== 'ru') return;
    language = next;
    document.documentElement.lang = next;
    document.documentElement.dataset.locale = next;
    for (const entry of sourceNodes) {
      entry.node.nodeValue = entry.prefix + translate(entry.key) + entry.suffix;
    }
    for (const entry of sourceAttributes) {
      entry.element.setAttribute(entry.attribute, next === 'ru' ? ATTR_RU[entry.english] : entry.english);
    }
    document.title = translate(sourceTitle);
    for (const selector of ['meta[name="description"]','meta[property="og:title"]','meta[property="og:description"]']) {
      const element = document.querySelector(selector);
      if (element) {
        if (!element.dataset.englishContent) element.dataset.englishContent = element.content;
        element.content = translate(element.dataset.englishContent);
      }
    }
    for (const option of document.querySelectorAll('.language-option')) {
      const selected = option.dataset.lang === next;
      option.classList.toggle('is-selected', selected);
      option.setAttribute('aria-pressed', String(selected));
    }
    if (options.persist) {
      try { window.localStorage.setItem(STORAGE_KEY, next); } catch (_) {}
      const url = new URL(window.location.href);
      url.searchParams.set('lang', next);
      window.history.replaceState(window.history.state, '', url.pathname + url.search + url.hash);
    }
    document.dispatchEvent(new CustomEvent('tjg:languagechange', { detail: { language: next } }));
  }

  window.TJG_I18N = {
    get language() { return language; },
    t: translate,
    formatCount(shown, total) {
      const prefix = language === 'ru' ? 'ПОКАЗАНО' : 'SHOWING';
      return prefix + ' ' + String(shown).padStart(2, '0') + ' / ' + String(total).padStart(2, '0');
    },
    setLanguage
  };
  document.querySelectorAll('.language-option').forEach((option) => {
    option.addEventListener('click', () => setLanguage(option.dataset.lang, { persist: true }));
  });
  setLanguage(language);
})();