export const returnTr2En = (str: string) =>
  typeof str === 'string'
    ? str
        ?.replace(/[\u0300-\u036f]|/g, '')
        ?.replace(/ı/g, 'i')
        ?.replace(/İ/g, 'I')
        ?.replace(/ş/g, 's')
        ?.replace(/ç/g, 'c')
        ?.replace(/ü/g, 'u')
        ?.replace(/ö/g, 'o')
        ?.replace(/ğ/g, 'g')
        ?.replace(/Ş/g, 'S')
        ?.replace(/Ç/g, 'C')
        ?.replace(/Ü/g, 'U')
        ?.replace(/Ö/g, 'O')
        ?.replace(/Ğ/g, 'G')
    : '';

export const toLocaleUppercase = (str: string) => str?.toLocaleUpperCase('tr-TR');
export const toLocaleLowercase = (str: string) => str?.toLocaleLowerCase('tr-TR');

export const toLocaleCapitalize = (str: string) => {
  const splittedStr = str?.split(' ');
  let nameCapitalized = '';

  splittedStr.map((item) => {
    nameCapitalized += (
      returnTr2En(toLocaleUppercase(item.charAt(0))) +
      returnTr2En(toLocaleLowercase(item.slice(1))) +
      ' '
    ).toString();
  });

  return nameCapitalized;
};
