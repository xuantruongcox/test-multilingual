/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})
module.exports = {
  siteMetadata: {
    title: `test-multiligual`,
  },
  plugins: [
    {
      resolve: '@kontent-ai/gatsby-source',
      options: {
        projectId: process.env.KONTENT_ACCESS,
        languageCodenames: [
          'default'
        ]
      }
    }, {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        langKeyForNull: 'en',
        prefixDefault: false,
        useLangKeyLayout: false
      }
    }
  ],
}
