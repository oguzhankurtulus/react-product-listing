import i18n from 'src/common/locales/i18n';

export function translate(path: string) {
  const result = i18n.t(path);

  return `${result}`;
}
