module.exports = {
  siteMetadata: {
    title: 'Blog',
    siteUrl: 'https://briankoehler.me/blog',
    description: 'For anything that comes to my mind'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-remark',
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'posts',
            path: `${__dirname}/content/posts`
        }
    }
  ],
  pathPrefix: '/blog'
};
