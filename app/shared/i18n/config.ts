export const localeCookieName = "locale";
export const defaultLocale = "ru";
export const locales = ["ru", "en"] as const;

export type Locale = (typeof locales)[number];

type Dictionary = {
  header: {
    backHomeAriaLabel: string;
    toggleThemeAriaLabel: string;
    toggleLanguageAriaLabel: string;
  };
  home: {
    badge: string;
    title: string;
  };
  search: {
    placeholder: string;
    clearOverlayAriaLabel: string;
    clearSearchAriaLabel: string;
    searching: string;
    nothingFound: string;
    foundUsers: (count: number) => string;
  };
  pagination: {
    users: string;
    page: string;
    previousPageAriaLabel: string;
    nextPageAriaLabel: string;
  };
  userPage: {
    profileBadge: string;
    maidenName: string;
    sections: {
      personal: string;
      contacts: string;
      homeAddress: string;
      appearanceAndEducation: string;
      bank: string;
      company: string;
      crypto: string;
    };
    fields: {
      id: string;
      firstName: string;
      lastName: string;
      maidenName: string;
      username: string;
      age: string;
      gender: string;
      birthDate: string;
      bloodGroup: string;
      height: string;
      weight: string;
      eyeColor: string;
      email: string;
      phone: string;
      ip: string;
      macAddress: string;
      userAgent: string;
      address: string;
      city: string;
      state: string;
      stateCode: string;
      postalCode: string;
      country: string;
      latitude: string;
      longitude: string;
      hairColor: string;
      hairType: string;
      hairImage: string;
      university: string;
      cardExpire: string;
      cardNumber: string;
      cardType: string;
      currency: string;
      iban: string;
      department: string;
      company: string;
      title: string;
      role: string;
      ein: string;
      ssn: string;
      officeAddress: string;
      officeCity: string;
      officeState: string;
      officeStateCode: string;
      officePostalCode: string;
      officeCountry: string;
      officeLatitude: string;
      officeLongitude: string;
      coin: string;
      wallet: string;
      network: string;
    };
  };
  measures: {
    kilogram: string;
    centimeter: string;
  };
};

const dictionaries: Record<Locale, Dictionary> = {
  ru: {
    header: {
      backHomeAriaLabel: "На главную",
      toggleThemeAriaLabel: "Сменить тему",
      toggleLanguageAriaLabel: "Сменить язык",
    },
    home: {
      badge: "Дашборд пользователей",
      title: "Соловьев Георгий Тестовое задание для GABA",
    },
    search: {
      placeholder: "Найти пользователя по имени",
      clearOverlayAriaLabel: "Закрыть поиск",
      clearSearchAriaLabel: "Очистить поиск",
      searching: "Поиск...",
      nothingFound: "Ничего не найдено. Попробуй другой запрос.",
      foundUsers: (count) => `Найдено пользователей: ${count}`,
    },
    pagination: {
      users: "Пользователи",
      page: "Страница",
      previousPageAriaLabel: "Предыдущая страница",
      nextPageAriaLabel: "Следующая страница",
    },
    userPage: {
      profileBadge: "Профиль пользователя",
      maidenName: "Девичья фамилия",
      sections: {
        personal: "Персональные данные",
        contacts: "Контакты",
        homeAddress: "Домашний адрес",
        appearanceAndEducation: "Внешность и обучение",
        bank: "Банк",
        company: "Компания",
        crypto: "Крипто",
      },
      fields: {
        id: "ID",
        firstName: "Имя",
        lastName: "Фамилия",
        maidenName: "Девичья фамилия",
        username: "Юзернейм",
        age: "Возраст",
        gender: "Пол",
        birthDate: "Дата рождения",
        bloodGroup: "Группа крови",
        height: "Рост",
        weight: "Вес",
        eyeColor: "Цвет глаз",
        email: "Email",
        phone: "Телефон",
        ip: "IP",
        macAddress: "MAC-адрес",
        userAgent: "User Agent",
        address: "Адрес",
        city: "Город",
        state: "Штат",
        stateCode: "Код штата",
        postalCode: "Почтовый индекс",
        country: "Страна",
        latitude: "Широта",
        longitude: "Долгота",
        hairColor: "Цвет волос",
        hairType: "Тип волос",
        hairImage: "Изображение волос",
        university: "Университет",
        cardExpire: "Срок карты",
        cardNumber: "Номер карты",
        cardType: "Тип карты",
        currency: "Валюта",
        iban: "IBAN",
        department: "Отдел",
        company: "Компания",
        title: "Должность",
        role: "Роль",
        ein: "EIN",
        ssn: "SSN",
        officeAddress: "Офисный адрес",
        officeCity: "Город офиса",
        officeState: "Штат офиса",
        officeStateCode: "Код штата офиса",
        officePostalCode: "Индекс офиса",
        officeCountry: "Страна офиса",
        officeLatitude: "Широта офиса",
        officeLongitude: "Долгота офиса",
        coin: "Монета",
        wallet: "Кошелек",
        network: "Сеть",
      },
    },
    measures: {
      kilogram: "кг",
      centimeter: "см",
    },
  },
  en: {
    header: {
      backHomeAriaLabel: "Go to homepage",
      toggleThemeAriaLabel: "Toggle theme",
      toggleLanguageAriaLabel: "Toggle language",
    },
    home: {
      badge: "User dashboard",
      title: "George Solovyev Test Task for GABA",
    },
    search: {
      placeholder: "Find users by name",
      clearOverlayAriaLabel: "Close search",
      clearSearchAriaLabel: "Clear search",
      searching: "Searching...",
      nothingFound: "Nothing found. Try another query.",
      foundUsers: (count) => `Found users: ${count}`,
    },
    pagination: {
      users: "Users",
      page: "Page",
      previousPageAriaLabel: "Previous page",
      nextPageAriaLabel: "Next page",
    },
    userPage: {
      profileBadge: "User profile",
      maidenName: "Maiden name",
      sections: {
        personal: "Personal",
        contacts: "Contacts",
        homeAddress: "Home address",
        appearanceAndEducation: "Appearance and education",
        bank: "Bank",
        company: "Company",
        crypto: "Crypto",
      },
      fields: {
        id: "ID",
        firstName: "First name",
        lastName: "Last name",
        maidenName: "Maiden name",
        username: "Username",
        age: "Age",
        gender: "Gender",
        birthDate: "Birth date",
        bloodGroup: "Blood group",
        height: "Height",
        weight: "Weight",
        eyeColor: "Eye color",
        email: "Email",
        phone: "Phone",
        ip: "IP",
        macAddress: "MAC address",
        userAgent: "User agent",
        address: "Address",
        city: "City",
        state: "State",
        stateCode: "State code",
        postalCode: "Postal code",
        country: "Country",
        latitude: "Latitude",
        longitude: "Longitude",
        hairColor: "Hair color",
        hairType: "Hair type",
        hairImage: "Hair image",
        university: "University",
        cardExpire: "Card expire",
        cardNumber: "Card number",
        cardType: "Card type",
        currency: "Currency",
        iban: "IBAN",
        department: "Department",
        company: "Company",
        title: "Title",
        role: "Role",
        ein: "EIN",
        ssn: "SSN",
        officeAddress: "Office address",
        officeCity: "Office city",
        officeState: "Office state",
        officeStateCode: "Office state code",
        officePostalCode: "Office postal code",
        officeCountry: "Office country",
        officeLatitude: "Office latitude",
        officeLongitude: "Office longitude",
        coin: "Coin",
        wallet: "Wallet",
        network: "Network",
      },
    },
    measures: {
      kilogram: "kg",
      centimeter: "cm",
    },
  },
};

export const isLocale = (value: string): value is Locale => locales.includes(value as Locale);

export const getDictionary = (locale: Locale) => dictionaries[locale];
