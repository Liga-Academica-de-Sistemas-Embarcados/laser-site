import 'server-only';

const dictionaries = {
  'pt-BR': () =>
    import('../dictionaries/pt-BR.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'pt-BR') => dictionaries[locale]();
