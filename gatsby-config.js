/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
 require("dotenv").config()
 module.exports = {
   plugins: [
     {
       resolve: "gatsby-plugin-web-font-loader",
       options: {
         typekit: {
           id: process.env.TYPEKIT_ID,
         },
       },
     },
   ],
 }
module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-styled-components`, "gatsby-plugin-smoothscroll"],
  
}
