(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./projects/boilerplate/src/app/styles/_index.scss":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./projects/boilerplate/src/app/styles/_index.scss ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0; }\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  /* 2 */ }\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\nsub {\n  bottom: -0.25em; }\nsup {\n  top: -0.5em; }\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none; }\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto; }\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block; }\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none; }\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none; }\n.grid-container {\n  margin: 0 auto;\n  max-width: 1200px;\n  width: 100%; }\n.grid-row {\n  display: flex;\n  flex-wrap: wrap; }\n.grid-row.vertical-sm {\n    margin-bottom: 8px; }\n.grid-row.vertical-md {\n    margin-bottom: 12px; }\n.grid-row.vertical-lg {\n    margin-bottom: 16px; }\n.grid-no-gutters {\n  margin-left: 0 !important;\n  margin-right: 0 !important; }\n.grid-no-gutters > [class^='grid-col-'],\n  .grid-no-gutters > [class*=' grid-col-'] {\n    padding-left: 0 !important;\n    padding-right: 0 !important; }\n.grid-col-sm-1, .grid-col-sm-2, .grid-col-sm-3, .grid-col-sm-4, .grid-col-sm-5, .grid-col-sm-6, .grid-col-sm-7, .grid-col-sm-8, .grid-col-sm-9, .grid-col-sm-10, .grid-col-sm-11, .grid-col-sm-12, .grid-col-md-1, .grid-col-md-2, .grid-col-md-3, .grid-col-md-4, .grid-col-md-5, .grid-col-md-6, .grid-col-md-7, .grid-col-md-8, .grid-col-md-9, .grid-col-md-10, .grid-col-md-11, .grid-col-md-12, .grid-col-lg-1, .grid-col-lg-2, .grid-col-lg-3, .grid-col-lg-4, .grid-col-lg-5, .grid-col-lg-6, .grid-col-lg-7, .grid-col-lg-8, .grid-col-lg-9, .grid-col-lg-10, .grid-col-lg-11, .grid-col-lg-12, .grid-col-xl-1, .grid-col-xl-2, .grid-col-xl-3, .grid-col-xl-4, .grid-col-xl-5, .grid-col-xl-6, .grid-col-xl-7, .grid-col-xl-8, .grid-col-xl-9, .grid-col-xl-10, .grid-col-xl-11, .grid-col-xl-12 {\n  min-height: 1px;\n  position: relative;\n  width: 100%; }\n@media (min-width: 0) and (max-width: 767px) {\n  .grid-row {\n    margin-left: -12px;\n    margin-right: -12px; }\n  .grid-col-sm-newline {\n    clear: both !important; }\n  .grid-col-sm-hide {\n    display: none; }\n  .grid-col-sm-1 {\n    flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .grid-col-sm-offset-1 {\n    margin-left: 8.33333333%; }\n  .grid-col-sm-order-1 {\n    order: 1; }\n  .grid-col-sm-2 {\n    flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .grid-col-sm-offset-2 {\n    margin-left: 16.66666667%; }\n  .grid-col-sm-order-2 {\n    order: 2; }\n  .grid-col-sm-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .grid-col-sm-offset-3 {\n    margin-left: 25%; }\n  .grid-col-sm-order-3 {\n    order: 3; }\n  .grid-col-sm-4 {\n    flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .grid-col-sm-offset-4 {\n    margin-left: 33.33333333%; }\n  .grid-col-sm-order-4 {\n    order: 4; }\n  .grid-col-sm-5 {\n    flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .grid-col-sm-offset-5 {\n    margin-left: 41.66666667%; }\n  .grid-col-sm-order-5 {\n    order: 5; }\n  .grid-col-sm-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .grid-col-sm-offset-6 {\n    margin-left: 50%; }\n  .grid-col-sm-order-6 {\n    order: 6; }\n  .grid-col-sm-7 {\n    flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .grid-col-sm-offset-7 {\n    margin-left: 58.33333333%; }\n  .grid-col-sm-order-7 {\n    order: 7; }\n  .grid-col-sm-8 {\n    flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .grid-col-sm-offset-8 {\n    margin-left: 66.66666667%; }\n  .grid-col-sm-order-8 {\n    order: 8; }\n  .grid-col-sm-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .grid-col-sm-offset-9 {\n    margin-left: 75%; }\n  .grid-col-sm-order-9 {\n    order: 9; }\n  .grid-col-sm-10 {\n    flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .grid-col-sm-offset-10 {\n    margin-left: 83.33333333%; }\n  .grid-col-sm-order-10 {\n    order: 10; }\n  .grid-col-sm-11 {\n    flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .grid-col-sm-offset-11 {\n    margin-left: 91.66666667%; }\n  .grid-col-sm-order-11 {\n    order: 11; }\n  .grid-col-sm-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .grid-col-sm-offset-12 {\n    margin-left: 100%; }\n  .grid-col-sm-order-12 {\n    order: 12; }\n  [class^='grid-col-'],\n  [class*=' grid-col-'] {\n    padding: 0 12px; } }\n@media (min-width: 0) and (max-width: 767px) {\n  .grid-container {\n    padding-left: 20px;\n    padding-right: 20px; } }\n@media (min-width: 768px) and (max-width: 991px) {\n  .grid-row {\n    margin-left: -12px;\n    margin-right: -12px; }\n  .grid-col-md-newline {\n    clear: both !important; }\n  .grid-col-md-hide {\n    display: none; }\n  .grid-col-md-1 {\n    flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .grid-col-md-offset-1 {\n    margin-left: 8.33333333%; }\n  .grid-col-md-order-1 {\n    order: 1; }\n  .grid-col-md-2 {\n    flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .grid-col-md-offset-2 {\n    margin-left: 16.66666667%; }\n  .grid-col-md-order-2 {\n    order: 2; }\n  .grid-col-md-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .grid-col-md-offset-3 {\n    margin-left: 25%; }\n  .grid-col-md-order-3 {\n    order: 3; }\n  .grid-col-md-4 {\n    flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .grid-col-md-offset-4 {\n    margin-left: 33.33333333%; }\n  .grid-col-md-order-4 {\n    order: 4; }\n  .grid-col-md-5 {\n    flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .grid-col-md-offset-5 {\n    margin-left: 41.66666667%; }\n  .grid-col-md-order-5 {\n    order: 5; }\n  .grid-col-md-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .grid-col-md-offset-6 {\n    margin-left: 50%; }\n  .grid-col-md-order-6 {\n    order: 6; }\n  .grid-col-md-7 {\n    flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .grid-col-md-offset-7 {\n    margin-left: 58.33333333%; }\n  .grid-col-md-order-7 {\n    order: 7; }\n  .grid-col-md-8 {\n    flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .grid-col-md-offset-8 {\n    margin-left: 66.66666667%; }\n  .grid-col-md-order-8 {\n    order: 8; }\n  .grid-col-md-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .grid-col-md-offset-9 {\n    margin-left: 75%; }\n  .grid-col-md-order-9 {\n    order: 9; }\n  .grid-col-md-10 {\n    flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .grid-col-md-offset-10 {\n    margin-left: 83.33333333%; }\n  .grid-col-md-order-10 {\n    order: 10; }\n  .grid-col-md-11 {\n    flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .grid-col-md-offset-11 {\n    margin-left: 91.66666667%; }\n  .grid-col-md-order-11 {\n    order: 11; }\n  .grid-col-md-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .grid-col-md-offset-12 {\n    margin-left: 100%; }\n  .grid-col-md-order-12 {\n    order: 12; }\n  [class^='grid-col-'],\n  [class*=' grid-col-'] {\n    padding: 0 12px; } }\n@media (min-width: 768px) and (max-width: 991px) {\n  .grid-container {\n    padding-left: 24px;\n    padding-right: 24px; } }\n@media (min-width: 992px) and (max-width: 1199px) {\n  .grid-row {\n    margin-left: -15px;\n    margin-right: -15px; }\n  .grid-col-lg-newline {\n    clear: both !important; }\n  .grid-col-lg-hide {\n    display: none; }\n  .grid-col-lg-1 {\n    flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .grid-col-lg-offset-1 {\n    margin-left: 8.33333333%; }\n  .grid-col-lg-order-1 {\n    order: 1; }\n  .grid-col-lg-2 {\n    flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .grid-col-lg-offset-2 {\n    margin-left: 16.66666667%; }\n  .grid-col-lg-order-2 {\n    order: 2; }\n  .grid-col-lg-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .grid-col-lg-offset-3 {\n    margin-left: 25%; }\n  .grid-col-lg-order-3 {\n    order: 3; }\n  .grid-col-lg-4 {\n    flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .grid-col-lg-offset-4 {\n    margin-left: 33.33333333%; }\n  .grid-col-lg-order-4 {\n    order: 4; }\n  .grid-col-lg-5 {\n    flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .grid-col-lg-offset-5 {\n    margin-left: 41.66666667%; }\n  .grid-col-lg-order-5 {\n    order: 5; }\n  .grid-col-lg-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .grid-col-lg-offset-6 {\n    margin-left: 50%; }\n  .grid-col-lg-order-6 {\n    order: 6; }\n  .grid-col-lg-7 {\n    flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .grid-col-lg-offset-7 {\n    margin-left: 58.33333333%; }\n  .grid-col-lg-order-7 {\n    order: 7; }\n  .grid-col-lg-8 {\n    flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .grid-col-lg-offset-8 {\n    margin-left: 66.66666667%; }\n  .grid-col-lg-order-8 {\n    order: 8; }\n  .grid-col-lg-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .grid-col-lg-offset-9 {\n    margin-left: 75%; }\n  .grid-col-lg-order-9 {\n    order: 9; }\n  .grid-col-lg-10 {\n    flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .grid-col-lg-offset-10 {\n    margin-left: 83.33333333%; }\n  .grid-col-lg-order-10 {\n    order: 10; }\n  .grid-col-lg-11 {\n    flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .grid-col-lg-offset-11 {\n    margin-left: 91.66666667%; }\n  .grid-col-lg-order-11 {\n    order: 11; }\n  .grid-col-lg-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .grid-col-lg-offset-12 {\n    margin-left: 100%; }\n  .grid-col-lg-order-12 {\n    order: 12; }\n  [class^='grid-col-'],\n  [class*=' grid-col-'] {\n    padding: 0 15px; } }\n@media (min-width: 992px) and (max-width: 1199px) {\n  .grid-container {\n    padding-left: 60px;\n    padding-right: 60px; } }\n@media (min-width: 1200px) and (max-width: 9999px) {\n  .grid-row {\n    margin-left: -null;\n    margin-right: -null; }\n  .grid-col-xl-newline {\n    clear: both !important; }\n  .grid-col-xl-hide {\n    display: none; }\n  .grid-col-xl-1 {\n    flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .grid-col-xl-offset-1 {\n    margin-left: 8.33333333%; }\n  .grid-col-xl-order-1 {\n    order: 1; }\n  .grid-col-xl-2 {\n    flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .grid-col-xl-offset-2 {\n    margin-left: 16.66666667%; }\n  .grid-col-xl-order-2 {\n    order: 2; }\n  .grid-col-xl-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .grid-col-xl-offset-3 {\n    margin-left: 25%; }\n  .grid-col-xl-order-3 {\n    order: 3; }\n  .grid-col-xl-4 {\n    flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .grid-col-xl-offset-4 {\n    margin-left: 33.33333333%; }\n  .grid-col-xl-order-4 {\n    order: 4; }\n  .grid-col-xl-5 {\n    flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .grid-col-xl-offset-5 {\n    margin-left: 41.66666667%; }\n  .grid-col-xl-order-5 {\n    order: 5; }\n  .grid-col-xl-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .grid-col-xl-offset-6 {\n    margin-left: 50%; }\n  .grid-col-xl-order-6 {\n    order: 6; }\n  .grid-col-xl-7 {\n    flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .grid-col-xl-offset-7 {\n    margin-left: 58.33333333%; }\n  .grid-col-xl-order-7 {\n    order: 7; }\n  .grid-col-xl-8 {\n    flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .grid-col-xl-offset-8 {\n    margin-left: 66.66666667%; }\n  .grid-col-xl-order-8 {\n    order: 8; }\n  .grid-col-xl-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .grid-col-xl-offset-9 {\n    margin-left: 75%; }\n  .grid-col-xl-order-9 {\n    order: 9; }\n  .grid-col-xl-10 {\n    flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .grid-col-xl-offset-10 {\n    margin-left: 83.33333333%; }\n  .grid-col-xl-order-10 {\n    order: 10; }\n  .grid-col-xl-11 {\n    flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .grid-col-xl-offset-11 {\n    margin-left: 91.66666667%; }\n  .grid-col-xl-order-11 {\n    order: 11; }\n  .grid-col-xl-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .grid-col-xl-offset-12 {\n    margin-left: 100%; }\n  .grid-col-xl-order-12 {\n    order: 12; }\n  [class^='grid-col-'],\n  [class*=' grid-col-'] {\n    padding: 0; } }\n* {\n  box-sizing: border-box;\n  -webkit-overflow-scrolling: touch; }\nhtml,\nbody {\n  min-height: 100vh;\n  max-width: 100vw;\n  overflow: hidden; }\nhtml {\n  position: relative; }\nbody {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased; }\n/* By convention, all custom components should get this class, so we can render the component as a full block  */\n.ng-component {\n  display: block; }\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./projects/boilerplate/src/app/styles/_index.scss":
/*!*********************************************************!*\
  !*** ./projects/boilerplate/src/app/styles/_index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/raw-loader!../../../../../node_modules/postcss-loader/lib??embedded!../../../../../node_modules/sass-loader/lib/loader.js??ref--14-3!./_index.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./projects/boilerplate/src/app/styles/_index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!***************************************************************!*\
  !*** multi ./projects/boilerplate/src/app/styles/_index.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/robobrien/dev/ng-boilerplate/projects/boilerplate/src/app/styles/_index.scss */"./projects/boilerplate/src/app/styles/_index.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map