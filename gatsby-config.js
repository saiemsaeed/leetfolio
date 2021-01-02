module.exports = {
  siteMetadata: {
    title: 'Saiem Saeed',
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: 'Saiem Saeed',
    designation: 'Full Stack Engineer',
    social: {
      instagram: 'https://instagram.com/saiemsaeed',
      github: 'https://github.com/saiemsaeed',
      linkedin: 'https://linkedin.com/in/saiemsaeed',
      reddit: 'https://reddit.com/user/saiemsaeed',
      twitter: 'https://twitter.com/saiemsaeed',
    },
    email: 'hello@saiem.pro',
    phone: '+92 313 5536246',
    resume: 'https://stackoverflow.com/cv/saiemsaeed',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Lato\:400,700,900`, `Roboto\:400,700`, `Sacramento\:400`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        minify: true,
        pure: true,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
