module.exports = {
  siteMetadata: {
    title: "dingohead creative",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["major mono display"],
        display: "swap",
      },
    },
  ],
};
