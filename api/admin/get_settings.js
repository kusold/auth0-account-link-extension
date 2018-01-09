/* eslint-disable no-underscore-dangle */

import { getSettings, getLocales } from '../../lib/storage';

module.exports = () => ({
  method: 'GET',
  config: {
    auth: 'jwt'
  },
  path: '/admin/settings',
  handler: async (req, reply) => {
    const locales = await getLocales();
    const availableLocales = Object.keys(locales).map(locale => ({
      code: locale,
      name: locales[locale]._name
    }));

    getSettings().then((settings) => {
      reply({ ...settings, availableLocales });
    });
  }
});
