import { getDictionary, Locale } from "@/shared/i18n/config";
import { User } from "../model/types";

export type UserDetailGroup = {
  title: string;
  items: Array<[string, string | number]>;
};

export function getUserDetailGroups(user: User, locale: Locale): UserDetailGroup[] {
  const dictionary = getDictionary(locale);

  return [
    {
      title: dictionary.userPage.sections.personal,
      items: [
        [dictionary.userPage.fields.id, user.id],
        [dictionary.userPage.fields.firstName, user.firstName],
        [dictionary.userPage.fields.lastName, user.lastName],
        [dictionary.userPage.fields.maidenName, user.maidenName],
        [dictionary.userPage.fields.username, user.username],
        [dictionary.userPage.fields.age, user.age],
        [dictionary.userPage.fields.gender, user.gender],
        [dictionary.userPage.fields.birthDate, user.birthDate],
        [dictionary.userPage.fields.bloodGroup, user.bloodGroup],
        [dictionary.userPage.fields.height, `${user.height} ${dictionary.measures.centimeter}`],
        [dictionary.userPage.fields.weight, `${user.weight} ${dictionary.measures.kilogram}`],
        [dictionary.userPage.fields.eyeColor, user.eyeColor],
      ],
    },
    {
      title: dictionary.userPage.sections.contacts,
      items: [
        [dictionary.userPage.fields.email, user.email],
        [dictionary.userPage.fields.phone, user.phone],
        [dictionary.userPage.fields.ip, user.hair.ip],
        [dictionary.userPage.fields.macAddress, user.hair.macAddress],
        [dictionary.userPage.fields.userAgent, user.company.userAgent],
      ],
    },
    {
      title: dictionary.userPage.sections.homeAddress,
      items: [
        [dictionary.userPage.fields.address, user.address.address],
        [dictionary.userPage.fields.city, user.address.city],
        [dictionary.userPage.fields.state, user.address.state],
        [dictionary.userPage.fields.stateCode, user.address.stateCode],
        [dictionary.userPage.fields.postalCode, user.address.postalCode],
        [dictionary.userPage.fields.country, user.address.country],
        [dictionary.userPage.fields.latitude, user.address.coordinates.lat],
        [dictionary.userPage.fields.longitude, user.address.coordinates.lng],
      ],
    },
    {
      title: dictionary.userPage.sections.appearanceAndEducation,
      items: [
        [dictionary.userPage.fields.hairColor, user.hair.color],
        [dictionary.userPage.fields.hairType, user.hair.type],
        [dictionary.userPage.fields.hairImage, user.hair.image],
        [dictionary.userPage.fields.university, user.hair.university],
      ],
    },
    {
      title: dictionary.userPage.sections.bank,
      items: [
        [dictionary.userPage.fields.cardExpire, user.bank.cardExpire],
        [dictionary.userPage.fields.cardNumber, user.bank.cardNumber],
        [dictionary.userPage.fields.cardType, user.bank.cardType],
        [dictionary.userPage.fields.currency, user.bank.currency],
        [dictionary.userPage.fields.iban, user.bank.iban],
      ],
    },
    {
      title: dictionary.userPage.sections.company,
      items: [
        [dictionary.userPage.fields.department, user.company.department],
        [dictionary.userPage.fields.company, user.company.name],
        [dictionary.userPage.fields.title, user.company.title],
        [dictionary.userPage.fields.role, user.company.role],
        [dictionary.userPage.fields.ein, user.company.ein],
        [dictionary.userPage.fields.ssn, user.company.ssn],
        [dictionary.userPage.fields.officeAddress, user.company.address.address],
        [dictionary.userPage.fields.officeCity, user.company.address.city],
        [dictionary.userPage.fields.officeState, user.company.address.state],
        [dictionary.userPage.fields.officeStateCode, user.company.address.stateCode],
        [dictionary.userPage.fields.officePostalCode, user.company.address.postalCode],
        [dictionary.userPage.fields.officeCountry, user.company.address.country],
        [dictionary.userPage.fields.officeLatitude, user.company.address.coordinates.lat],
        [dictionary.userPage.fields.officeLongitude, user.company.address.coordinates.lng],
      ],
    },
    {
      title: dictionary.userPage.sections.crypto,
      items: [
        [dictionary.userPage.fields.coin, user.crypto.coin],
        [dictionary.userPage.fields.wallet, user.crypto.wallet],
        [dictionary.userPage.fields.network, user.crypto.network],
      ],
    },
  ];
}
