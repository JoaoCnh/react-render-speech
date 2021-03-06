/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: "User1",
    image: "/react-speech/img/docusaurus.svg",
    infoLink: "https://www.facebook.com",
    pinned: true
  }
];

const siteConfig = {
  title: "react-speech" /* title for your website */,
  tagline:
    "A package that gives you easy access to the SpeechRecognition and SpeechSynthesis APIs in your React app.",
  url: "https://joaocnh.github.io/react-speech" /* your website url */,
  baseUrl: "/react-speech/" /* base url for your project */,
  projectName: "react-speech",
  headerLinks: [
    { doc: "installation", label: "Docs" },
    { search: true },
    { href: "https://github.com/JoaoCnh/react-speech", label: "GitHub" }
  ],
  users,
  /* path to images for header/footer */
  headerIcon: "img/docusaurus.svg",
  footerIcon: "img/docusaurus.svg",
  favicon: "img/favicon.png",
  /* colors for website */
  colors: {
    primaryColor: "#2E8555",
    secondaryColor: "#205C3B"
  },
  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: "Copyright © " + new Date().getFullYear() + " João Cunha",
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'react-speech', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: "default"
  },
  scripts: ["https://buttons.github.io/buttons.js"],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: "https://github.com/JoaoCnh/react-speech"
  /* On page navigation for the current documentation page */
  // onPageNav: 'separate',
};

module.exports = siteConfig;
