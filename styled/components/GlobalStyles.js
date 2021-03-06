import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* @import url("https://fonts.googleapis.com/css?family=Space+Mono|Bellota|Ubuntu+Mono|Open+Sans|Ubuntu&display=swap"); */
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    line-height: 1.4;
  }

  html body {
    font-size: 1.6rem;
  }

  html,
  body {
    height: 100%;
  }

  header {
    width: 100%;
  }

  html body p {
    margin: 0.4rem;
    line-height: 1.4;
  }

  html body h1,
  html body h2,
  html body h3,
  html body h4,
  html body h5,
  html body h6 {
    line-height: 1.2;
    margin: 0.4rem;
  }

  html body h1 {
    font-size: 3.4rem;
  }

  html body h2 {
    font-size: 3.2rem;
  }

  html body h3 {
    font-size: 3rem;
  }

  html body h4 {
    font-size: 2.8rem;
  }

  html body h5 {
    font-size: 2.6rem;
  }

  html body h6 {
    font-size: 2.4rem;
  }

  html body a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.blue6};
  }

  html body a:hover {
    color: ${({ theme }) => theme.colors.blue7};
  }

  .hidden {
    display: none;
  }

  html body img {
    border-radius: ${(props) => props.theme.borderRadius};
  }

  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
  /* Document
    ========================================================================== */
  /**
   * 1. Correct the line height in all browsers.
   * 2. Prevent adjustments of font size after orientation changes in iOS.
   */
  html {
    /* line-height: 1.15; */
    /* 1 */
    -webkit-text-size-adjust: 100%;
    /* 2 */
  }

  /* Sections
    ========================================================================== */
  /**
   * Remove the margin in all browsers.
   */
  body {
    margin: 0;
  }

  /**
   * Render the "main" element consistently in IE.
   */
  main {
    display: block;
  }

  /**
   * Correct the font size and margin on "h1" elements within "section" and
   * "article" contexts in Chrome, Firefox, and Safari.
   */
  h1 {
    /* font-size: 2em; */
    margin: 0.67em 0;
  }

  /* Grouping content
    ========================================================================== */
  /**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */
  hr {
    box-sizing: content-box;
    /* 1 */
    height: 0;
    /* 1 */
    overflow: visible;
    /* 2 */
  }

  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd "em" font sizing in all browsers.
   */
  pre {
    font-family: "Space Mono", monospace;
    /* 1 */
    font-size: 1em;
    /* 2 */
  }

  /* Text-level semantics
    ========================================================================== */
  /**
   * Remove the gray background on active links in IE 10.
   */
  a {
    background-color: transparent;
  }

  /**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */
  abbr[title] {
    border-bottom: none;
    /* 1 */
    text-decoration: underline;
    /* 2 */
    text-decoration: underline dotted;
    /* 2 */
  }

  /**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */
  b,
  strong {
    font-weight: bolder;
  }

  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd "em" font sizing in all browsers.
   */
  code,
  kbd,
  samp {
    font-family: "Ubuntu Mono", monospace;
    /* 1 */
    font-size: 1em;
    /* 2 */
  }

  /**
   * Add the correct font size in all browsers.
   */
  small {
    font-size: 80%;
  }

  /**
   * Prevent "sub" and "sup" elements from affecting the line height in
   * all browsers.
   */
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /* Embedded content
    ========================================================================== */
  /**
   * Remove the border on images inside links in IE 10.
   */
  img {
    border-style: none;
  }

  /* Forms
    ========================================================================== */
  /**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    /* 1 */
    font-size: 100%;
    /* 1 */
    line-height: 1.4;
    /* 1 */
    margin: 0;
    /* 2 */
  }

  /**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */
  button,
  input {
    /* 1 */
    overflow: visible;
  }

  /**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */
  button,
  select {
    /* 1 */
    text-transform: none;
  }

  /**
   * Correct the inability to style clickable types in iOS and Safari.
   */
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  /**
   * Remove the inner border and padding in Firefox.
   */
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /**
   * Restore the focus styles unset by the previous rule.
   */
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /**
   * Correct the padding in Firefox.
   */
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  /**
   * 1. Correct the text wrapping in Edge and IE.
   * 2. Correct the color inheritance from "fieldset" elements in IE.
   * 3. Remove the padding so developers are not caught out when they zero out
   *    "fieldset" elements in all browsers.
   */
  legend {
    box-sizing: border-box;
    /* 1 */
    color: inherit;
    /* 2 */
    display: table;
    /* 1 */
    max-width: 100%;
    /* 1 */
    padding: 0;
    /* 3 */
    white-space: normal;
    /* 1 */
  }

  /**
   * Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */
  progress {
    vertical-align: baseline;
  }

  /**
   * Remove the default vertical scrollbar in IE 10+.
   */
  textarea {
    overflow: auto;
  }

  /**
   * 1. Add the correct box sizing in IE 10.
   * 2. Remove the padding in IE 10.
   */
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    /* 1 */
    padding: 0;
    /* 2 */
  }

  /**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  /**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */
  [type="search"] {
    -webkit-appearance: textfield;
    /* 1 */
    outline-offset: -2px;
    /* 2 */
  }

  /**
   * Remove the inner padding in Chrome and Safari on macOS.
   */
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to "inherit" in Safari.
   */
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    /* 1 */
    font: inherit;
    /* 2 */
  }

  /* Interactive
    ========================================================================== */
  /*
  * Add the correct display in Edge, IE 10+, and Firefox.
  */
  details {
    display: block;
  }

  /*
  * Add the correct display in all browsers.
  */
  summary {
    display: list-item;
  }

  /* Misc
    ========================================================================== */
  /**
   * Add the correct display in IE 10+.
   */
  template {
    display: none;
  }

  /**
   * Add the correct display in IE 10.
   */
  [hidden] {
    display: none;
  }

  /*
    Markdown CSS
  */


  .markdown-body .octicon {
    display: inline-block;
    fill: currentColor;
    vertical-align: text-bottom;
  }

  .markdown-body .anchor {
    float: left;
    line-height: 1;
    margin-left: -20px;
    padding-right: 4px;
  }

  .markdown-body .anchor:focus {
    outline: none;
  }

  .markdown-body h1 .octicon-link,
  .markdown-body h2 .octicon-link,
  .markdown-body h3 .octicon-link,
  .markdown-body h4 .octicon-link,
  .markdown-body h5 .octicon-link,
  .markdown-body h6 .octicon-link {
    color: #1b1f23;
    vertical-align: middle;
    visibility: hidden;
  }

  .markdown-body h1:hover .anchor,
  .markdown-body h2:hover .anchor,
  .markdown-body h3:hover .anchor,
  .markdown-body h4:hover .anchor,
  .markdown-body h5:hover .anchor,
  .markdown-body h6:hover .anchor {
    text-decoration: none;
  }

  .markdown-body h1:hover .anchor .octicon-link,
  .markdown-body h2:hover .anchor .octicon-link,
  .markdown-body h3:hover .anchor .octicon-link,
  .markdown-body h4:hover .anchor .octicon-link,
  .markdown-body h5:hover .anchor .octicon-link,
  .markdown-body h6:hover .anchor .octicon-link {
    visibility: visible;
  }

  .markdown-body h1:hover .anchor .octicon-link:before,
  .markdown-body h2:hover .anchor .octicon-link:before,
  .markdown-body h3:hover .anchor .octicon-link:before,
  .markdown-body h4:hover .anchor .octicon-link:before,
  .markdown-body h5:hover .anchor .octicon-link:before,
  .markdown-body h6:hover .anchor .octicon-link:before {
    width: 16px;
    height: 16px;
    content: " ";
    display: inline-block;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' width='16' height='16' aria-hidden='true'%3E%3Cpath fill-rule='evenodd' d='M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z'%3E%3C/path%3E%3C/svg%3E");
  }

  .markdown-body {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    line-height: 1.5;
    color: ${(props) => props.theme.gray9};
    font-family: inherit;
    font-size: 16px;
    line-height: 1.5;
    word-wrap: break-word;
  }

  .markdown-body details {
    display: block;
  }

  .markdown-body summary {
    display: list-item;
  }

  .markdown-body a {
    background-color: initial;
  }

  .markdown-body a:active,
  .markdown-body a:hover {
    outline-width: 0;
  }

  .markdown-body strong {
    font-weight: inherit;
    font-weight: bolder;
  }

  .markdown-body h1 {
    font-size: 2em;
    margin: 0.67em 0;
    font-family: inherit;
  }

  .markdown-body img {
    border-style: none;
  }

  .markdown-body code,
  .markdown-body kbd,
  .markdown-body pre {
    font-family: "Space Mono", monospace;
    /* font-size: 1em; */
  }

  .markdown-body hr {
    box-sizing: initial;
    height: 0;
    overflow: visible;
  }

  .markdown-body input {
    font: inherit;
    margin: 0;
  }

  .markdown-body input {
    overflow: visible;
  }

  .markdown-body [type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
  }

  .markdown-body * {
    box-sizing: border-box;
  }

  .markdown-body input {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .markdown-body a {
    color: ${(props) => props.theme.lightBlue5};
    text-decoration: none;
  }

  .markdown-body a:hover {
    text-decoration: underline;
  }

  .markdown-body strong {
    font-weight: 600;
  }

  .markdown-body hr {
    height: 0;
    margin: 15px 0;
    overflow: hidden;
    background: transparent;
    border: 0;
    border-bottom: ${(props) => `1px solid ${props.theme.colors.gray5}`};
  }

  .markdown-body hr:after,
  .markdown-body hr:before {
    display: table;
    content: "";
  }

  .markdown-body hr:after {
    clear: both;
  }

  .markdown-body table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  .markdown-body td,
  .markdown-body th {
    padding: 0;
  }

  .markdown-body details summary {
    cursor: pointer;
  }

  .markdown-body kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    line-height: 10px;
    color: #444d56;
    vertical-align: middle;
    background-color: #fafbfc;
    border: ${(props) => `1px solid ${props.theme.colors.gray5}`};
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #d1d5da;
  }

  .markdown-body {
    margin-top: 24px;
  }

  .markdown-body h1,
  .markdown-body h2,
  .markdown-body h3,
  .markdown-body h4,
  .markdown-body h5,
  .markdown-body h6 {
    margin-top: 0;
    margin-bottom: 0;
  }

  .markdown-body h1 {
    font-size: 32px;
  }

  .markdown-body h1,
  .markdown-body h2 {
    font-weight: 600;
  }

  .markdown-body h2 {
    font-size: 24px;
  }

  .markdown-body h3 {
    font-size: 20px;
  }

  .markdown-body h3,
  .markdown-body h4 {
    font-weight: 600;
  }

  .markdown-body h4 {
    font-size: 16px;
  }

  .markdown-body h5 {
    font-size: 14px;
  }

  .markdown-body h5,
  .markdown-body h6 {
    font-weight: 600;
  }

  .markdown-body h6 {
    font-size: 12px;
  }

  .markdown-body p {
    margin-top: 0;
    margin-bottom: 10px;
  }

  .markdown-body blockquote {
    margin: 0;
  }

  .markdown-body ol,
  .markdown-body ul {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  .markdown-body ol ol,
  .markdown-body ul ol {
    list-style-type: lower-roman;
  }

  .markdown-body ol ol ol,
  .markdown-body ol ul ol,
  .markdown-body ul ol ol,
  .markdown-body ul ul ol {
    list-style-type: lower-alpha;
  }

  .markdown-body dd {
    margin-left: 0;
  }

  .markdown-body code,
  .markdown-body pre {
    font-family: "Space Mono", monospace;
    /* font-size: 12px; */
  }

  /* .markdown-body pre {
    margin-top: 0;
    margin-bottom: 0;
  } */

  .markdown-body input::-webkit-inner-spin-button,
  .markdown-body input::-webkit-outer-spin-button {
    margin: 0;
    -webkit-appearance: none;
    appearance: none;
  }

  .markdown-body :checked+.radio-label {
    position: relative;
    z-index: 1;
    border-color: #0366d6;
  }

  .markdown-body .border {
    border: ${(props) => `1px solid ${props.theme.colors.gray5}`} !important;
  }

  .markdown-body .border-0 {
    border: 0 !important;
  }

  .markdown-body .border-bottom {
    border-bottom: ${(props) =>
      `1px solid ${props.theme.colors.gray5}`} !important;
  }

  .markdown-body .rounded-1 {
    border-radius: 3px !important;
  }

  .markdown-body .bg-white {
    background-color: #fff !important;
  }

  .markdown-body .bg-gray-light {
    background-color: #fafbfc !important;
  }

  .markdown-body .text-gray-light {
    color: #6a737d !important;
  }

  .markdown-body .mb-0 {
    margin-bottom: 0 !important;
  }

  .markdown-body .my-2 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }

  .markdown-body .pl-0 {
    padding-left: 0 !important;
  }

  .markdown-body .py-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .markdown-body .pl-1 {
    padding-left: 4px !important;
  }

  .markdown-body .pl-2 {
    padding-left: 8px !important;
  }

  .markdown-body .py-2 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }

  .markdown-body .pl-3,
  .markdown-body .px-3 {
    padding-left: 16px !important;
  }

  .markdown-body .px-3 {
    padding-right: 16px !important;
  }

  .markdown-body .pl-4 {
    padding-left: 24px !important;
  }

  .markdown-body .pl-5 {
    padding-left: 32px !important;
  }

  .markdown-body .pl-6 {
    padding-left: 40px !important;
  }

  .markdown-body .f6 {
    font-size: 12px !important;
  }

  .markdown-body .lh-condensed {
    line-height: 1.25 !important;
  }

  .markdown-body .text-bold {
    font-weight: 600 !important;
  }

  .markdown-body .pl-c {
    color: #6a737d;
  }

  .markdown-body .pl-c1,
  .markdown-body .pl-s .pl-v {
    color: #005cc5;
  }

  .markdown-body .pl-e,
  .markdown-body .pl-en {
    color: #6f42c1;
  }

  .markdown-body .pl-s .pl-s1,
  .markdown-body .pl-smi {
    color: #24292e;
  }

  .markdown-body .pl-ent {
    color: #22863a;
  }

  .markdown-body .pl-k {
    color: #d73a49;
  }

  .markdown-body .pl-pds,
  .markdown-body .pl-s,
  .markdown-body .pl-s .pl-pse .pl-s1,
  .markdown-body .pl-sr,
  .markdown-body .pl-sr .pl-cce,
  .markdown-body .pl-sr .pl-sra,
  .markdown-body .pl-sr .pl-sre {
    color: #032f62;
  }

  .markdown-body .pl-smw,
  .markdown-body .pl-v {
    color: #e36209;
  }

  .markdown-body .pl-bu {
    color: #b31d28;
  }

  .markdown-body .pl-ii {
    color: #fafbfc;
    background-color: #b31d28;
  }

  .markdown-body .pl-c2 {
    color: #fafbfc;
    background-color: #d73a49;
  }

  .markdown-body .pl-c2:before {
    content: "^M";
  }

  .markdown-body .pl-sr .pl-cce {
    font-weight: 700;
    color: #22863a;
  }

  .markdown-body .pl-ml {
    color: #735c0f;
  }

  .markdown-body .pl-mh,
  .markdown-body .pl-mh .pl-en,
  .markdown-body .pl-ms {
    font-weight: 700;
    color: #005cc5;
  }

  .markdown-body .pl-mi {
    font-style: italic;
    color: #24292e;
  }

  .markdown-body .pl-mb {
    font-weight: 700;
    color: #24292e;
  }

  .markdown-body .pl-md {
    color: #b31d28;
    background-color: #ffeef0;
  }

  .markdown-body .pl-mi1 {
    color: #22863a;
    background-color: #f0fff4;
  }

  .markdown-body .pl-mc {
    color: #e36209;
    background-color: #ffebda;
  }

  .markdown-body .pl-mi2 {
    color: #f6f8fa;
    background-color: #005cc5;
  }

  .markdown-body .pl-mdr {
    font-weight: 700;
    color: #6f42c1;
  }

  .markdown-body .pl-ba {
    color: #586069;
  }

  .markdown-body .pl-sg {
    color: #959da5;
  }

  .markdown-body .pl-corl {
    text-decoration: underline;
    color: #032f62;
  }

  .markdown-body .mb-0 {
    margin-bottom: 0 !important;
  }

  .markdown-body .my-2 {
    margin-bottom: 8px !important;
  }

  .markdown-body .my-2 {
    margin-top: 8px !important;
  }

  .markdown-body .pl-0 {
    padding-left: 0 !important;
  }

  .markdown-body .py-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .markdown-body .pl-1 {
    padding-left: 4px !important;
  }

  .markdown-body .pl-2 {
    padding-left: 8px !important;
  }

  .markdown-body .py-2 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }

  .markdown-body .pl-3 {
    padding-left: 16px !important;
  }

  .markdown-body .pl-4 {
    padding-left: 24px !important;
  }

  .markdown-body .pl-5 {
    padding-left: 32px !important;
  }

  .markdown-body .pl-6 {
    padding-left: 40px !important;
  }

  .markdown-body .pl-7 {
    padding-left: 48px !important;
  }

  .markdown-body .pl-8 {
    padding-left: 64px !important;
  }

  .markdown-body .pl-9 {
    padding-left: 80px !important;
  }

  .markdown-body .pl-10 {
    padding-left: 96px !important;
  }

  .markdown-body .pl-11 {
    padding-left: 112px !important;
  }

  .markdown-body .pl-12 {
    padding-left: 128px !important;
  }

  .markdown-body hr {
    border-bottom-color: #eee;
  }

  .markdown-body kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    line-height: 10px;
    color: #444d56;
    vertical-align: middle;
    background-color: #fafbfc;
    border: ${(props) => `1px solid ${props.theme.colors.gray5}`};
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #d1d5da;
  }

  .markdown-body:after,
  .markdown-body:before {
    display: table;
    content: "";
  }

  .markdown-body:after {
    clear: both;
  }

  .markdown-body> :first-child {
    margin-top: 0 !important;
  }

  .markdown-body> :last-child {
    margin-bottom: 0 !important;
  }

  .markdown-body a:not([href]) {
    color: inherit;
    text-decoration: none;
  }

  .markdown-body blockquote,
  .markdown-body details,
  .markdown-body dl,
  .markdown-body ol,
  .markdown-body p,
  /* .markdown-body pre, */
  .markdown-body table,
  .markdown-body ul {
    margin-top: 0;
    margin-bottom: 16px;
  }

  .markdown-body hr {
    height: 0.25em;
    padding: 0;
    margin: 24px 0;
    background-color: #e1e4e8;
    border: 0;
  }

  .markdown-body blockquote {
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
  }

  .markdown-body blockquote> :first-child {
    margin-top: 0;
  }

  .markdown-body blockquote> :last-child {
    margin-bottom: 0;
  }

  .markdown-body h1,
  .markdown-body h2,
  .markdown-body h3,
  .markdown-body h4,
  .markdown-body h5,
  .markdown-body h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }

  .markdown-body h1 {
    font-size: 2.5em;
  }

  .markdown-body h1,
  .markdown-body h2 {
    padding-bottom: 0.3em;
    border-bottom: ${(props) => `1px solid ${props.theme.colors.gray5}`};
  }

  .markdown-body h2 {
    font-size: 2em;
  }

  .markdown-body h3 {
    font-size: 1.5em;
  }

  .markdown-body h4 {
    font-size: 1.25em;
  }

  .markdown-body h5 {
    font-size: 1em;
  }

  .markdown-body h6 {
    font-size: 0.85em;
    color: #6a737d;
  }

  .markdown-body ol,
  .markdown-body ul {
    padding-left: 2em;
  }

  .markdown-body ol ol,
  .markdown-body ol ul,
  .markdown-body ul ol,
  .markdown-body ul ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  .markdown-body li {
    word-wrap: break-all;
  }

  .markdown-body li>p {
    margin-top: 16px;
  }

  .markdown-body li+li {
    margin-top: 0.25em;
  }

  .markdown-body dl {
    padding: 0;
  }

  .markdown-body dl dt {
    padding: 0;
    margin-top: 16px;
    font-size: 1em;
    font-style: italic;
    font-weight: 600;
  }

  .markdown-body dl dd {
    padding: 0 16px;
    margin-bottom: 16px;
  }

  .markdown-body table {
    display: block;
    overflow: auto;
  }

  .markdown-body table th {
    font-weight: 600;
  }

  .markdown-body table td,
  .markdown-body table th {
    padding: 6px 13px;
    border: 1px solid #dfe2e5;
  }

  .markdown-body table tr {
    background-color: #fff;
    border-top: 1px solid #c6cbd1;
  }

  .markdown-body table tr:nth-child(2n) {
    background-color: #f6f8fa;
  }

  .markdown-body img {
    max-width: 100%;
    box-sizing: initial;
    /* background-color: #fff; */
  }

  .markdown-body img[align="right"] {
    padding-left: 20px;
  }

  .markdown-body img[align="left"] {
    padding-right: 20px;
  }

  .markdown-body code {
    padding: 0.01em 0.4em;
    margin: 0;
    font-size: 1.4rem;
    font-family: "Space Mono", monospace;
    /* background-color: rgba(27, 31, 35, 0.05); */
    background: ${(props) => props.theme.colors.gray3};
    border-radius: 3px;
  }

  .markdown-body pre code {
    font-size: 1.6rem;
    font-family: "Space Mono", monospace;
  }

  /* .markdown-body pre > code {
    padding: 0;
    margin: 0;
    font-size: 100%;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
  } */

  .markdown-body .highlight {
    margin-bottom: 16px;
  }

  /* .markdown-body .highlight pre {
    margin-bottom: 0;
    word-break: normal;
  } */

  /* .markdown-body .highlight pre,
  .markdown-body pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f6f8fa;
    border-radius: 3px;
  } */

  .markdown-body pre code {
    display: inline;
    max-width: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    background-color: initial;
    border: 0;
  }

  .markdown-body .commit-tease-sha {
    display: inline-block;
    font-family: "Space Mono", monospace;
    font-size: 90%;
    color: #444d56;
  }

  .markdown-body .full-commit .btn-outline:not(:disabled):hover {
    color: #005cc5;
    border-color: #005cc5;
  }

  .markdown-body .blob-wrapper {
    overflow-x: auto;
    overflow-y: hidden;
  }

  .markdown-body .blob-wrapper-embedded {
    max-height: 240px;
    overflow-y: auto;
  }

  .markdown-body .blob-num {
    width: 1%;
    min-width: 50px;
    padding-right: 10px;
    padding-left: 10px;
    font-family: "Space Mono", monospace;
    font-size: 12px;
    line-height: 20px;
    color: rgba(27, 31, 35, 0.3);
    text-align: right;
    white-space: nowrap;
    vertical-align: top;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .markdown-body .blob-num:hover {
    color: rgba(27, 31, 35, 0.6);
  }

  .markdown-body .blob-num:before {
    content: attr(data-line-number);
  }

  .markdown-body .blob-code {
    position: relative;
    padding-right: 10px;
    padding-left: 10px;
    line-height: 20px;
    vertical-align: top;
  }

  .markdown-body .blob-code-inner {
    overflow: visible;
    font-family: "Space Mono", monospace;
    font-size: 12px;
    color: #24292e;
    word-wrap: normal;
    white-space: pre;
  }

  .markdown-body .pl-token.active,
  .markdown-body .pl-token:hover {
    cursor: pointer;
    background: #ffea7f;
  }

  .markdown-body .tab-size[data-tab-size="1"] {
    -moz-tab-size: 1;
    tab-size: 1;
  }

  .markdown-body .tab-size[data-tab-size="2"] {
    -moz-tab-size: 2;
    tab-size: 2;
  }

  .markdown-body .tab-size[data-tab-size="3"] {
    -moz-tab-size: 3;
    tab-size: 3;
  }

  .markdown-body .tab-size[data-tab-size="4"] {
    -moz-tab-size: 4;
    tab-size: 4;
  }

  .markdown-body .tab-size[data-tab-size="5"] {
    -moz-tab-size: 5;
    tab-size: 5;
  }

  .markdown-body .tab-size[data-tab-size="6"] {
    -moz-tab-size: 6;
    tab-size: 6;
  }

  .markdown-body .tab-size[data-tab-size="7"] {
    -moz-tab-size: 7;
    tab-size: 7;
  }

  .markdown-body .tab-size[data-tab-size="8"] {
    -moz-tab-size: 8;
    tab-size: 8;
  }

  .markdown-body .tab-size[data-tab-size="9"] {
    -moz-tab-size: 9;
    tab-size: 9;
  }

  .markdown-body .tab-size[data-tab-size="10"] {
    -moz-tab-size: 10;
    tab-size: 10;
  }

  .markdown-body .tab-size[data-tab-size="11"] {
    -moz-tab-size: 11;
    tab-size: 11;
  }

  .markdown-body .tab-size[data-tab-size="12"] {
    -moz-tab-size: 12;
    tab-size: 12;
  }

  .markdown-body .task-list-item {
    list-style-type: none;
  }

  .markdown-body .task-list-item+.task-list-item {
    margin-top: 3px;
  }

  .markdown-body .task-list-item input {
    margin: 0 0.2em 0.25em -1.6em;
    vertical-align: middle;
  }
`;
