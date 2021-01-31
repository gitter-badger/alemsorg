
import { configuration } from '@codedoc/core';

import { theme } from './theme';

import { StaticRenderer } from '@connectv/sdh';    // --> import a static renderer for easily creating the script elements
import register from 'jsdom-global';               // --> also lets create a global document object for that purpose

const renderer = new StaticRenderer();             // --> initialize renderer
register();                                        // --> register global document object

export const config = /*#__PURE__*/configuration({
  theme,                           // --> add the theme. modify `./theme.ts` for chaning the theme.
  page: {                                // @see /docs/config/page
    title: {
      base: 'Codedoc',
    },

    meta: {                              // --> meta tags of each page
      subject: 'test'      ,           // --> the subject meta tag for each page
      description: 'testertoni'   ,          // --> description meta tag for each page
      keywords: [],                      // --> a list of SEO keywords
      themeColor: 'black',             // --> the browser bar color of your docs
      appleMobileWebStatusBarStyle:      // --> same as above, but for iOS Safari
        'black-translucent',
    },


    fonts: {                             // --> font settings
      text: {                            // --> font used for texts
        url:                             // --> URL of font used for texts
          'https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400&display=swap',
        name: 'PT Sans',                    // --> name of font used for texts
        fallback: 'sans-serif'           // --> the fallback font for texts
      },
      code: {                            // --> font used for codes
        url:                             // --> URL of font used for codes
          'https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400&display=swap',
        name: 'Source Code Pro',         // --> name of the font used for codes
        fallback:                        // --> fallback font for codes
          `'Courier New', Courier, monospace`
      },
      icon: {                            // --> the icon font
        url:                             // --> url of hte icon font (and perhaps the outline icon font)
          'https://fonts.googleapis.com/icon?family=Material+Icons%7CMaterial+Icons+Outlined',
        name: 'Material Icons',          // --> name of the icon font
        outline:                         // --> name of the outline icon font
          'Material Icons Outlined'
      }
    },  
    
    stylesheets: [
      <style>
       {`
       html {font-size: 100%;}
       body {line-height: 1.5;}
       h2 {line-height:1.1;text-transform: uppercase;letter-spacing:2px;}
       h3 {line-height:1.1;letter-spacing:2px;}
       h1 {line-height:1.1;text-transform: uppercase;letter-spacing:2px;}
       h1::after {
        content: "_";
      }}
       h1{font-size: calc(1.3rem + 3.6vw);}
       h1{font-size: 2.25rem;}
      @media (min-width: 414px) {h1 {font-size: calc(1.3rem + 3.6vw);}}
      @media (min-width: 1440px) {h1 {font-size: 4.75rem;}}
       h2 {font-size: calc(1.25rem + 1.3vw);}
       h3 {font-size: calc(0.9rem + 0.7vw);}
       p, li {font-size: calc(0.95rem + 0.3vw);}
      .contentnav-0-0-10 {font-size: 18px !important;}
      .header-0-0-5, .inside {display:none !important;}
      `}
      </style>,
    ]



  },


dest: {
  namespace: '',
  html: 'dist',
  assets: 'dist',
},

misc: {
  github: {
    user: 'alemsabic',            // --> name of the user on GitHub owning the repo
    repo: 'ala',         // --> name of the repo on GitHub
    // action: 'Issue',            // --> action of the GitHub button
    // count: true,                // --> whether to show the `count` on the GitHub button
    //large: true,                // --> whether to show a `large` GitHub button
    // standardIcon: true,         // --> whether to use the GitHub icon on the GitHub button or use an action specific icon
  },
  //...
},




});
