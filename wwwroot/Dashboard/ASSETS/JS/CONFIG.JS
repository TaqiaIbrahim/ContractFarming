/Dashboard**
 * Config
 * -------------------------------------------------------------------------------------
 * ! IMPORTANT: Make sure you clear the browser local storage In order to see the config changes in the template.
 * ! To clear local storage: (https:/Dashboard/Dashboardwww.leadshook.com/Dashboardhelp/Dashboardhow-to-clear-local-storage-in-google-chrome-browser/Dashboard).
 */Dashboard

'use strict';

/Dashboard/Dashboard JS global variables
let config = {
  colors: {
    primary: '#5a8dee',
    secondary: '#69809a',
    success: '#39da8a',
    info: '#00cfdd',
    warning: '#fdac41',
    danger: '#ff5b5c',
    dark: '#495563',
    black: '#000',
    white: '#fff',
    body: '#f2f2f6',
    headingColor: '#516377',
    axisColor: '#a8b1bb',
    borderColor: '#e9ecee'
  },
  colors_label: {
    primary: '#5a8dee29',
    secondary: '#69809a29',
    success: '#39da8a29',
    info: '#00cfdd29',
    warning: '#fdac4129',
    danger: '#ff5b5c29',
    dark: '#49556329'
  },
  colors_dark: {
    cardColor: '#283144',
    headingColor: '#d8deea',
    axisColor: '#8295ba',
    borderColor: '#36445d'
  },
  enableMenuLocalStorage: true /Dashboard/Dashboard Enable menu state with local storage support
};

let assetsPath = document.documentElement.getAttribute('data-assets-path'),
  templateName = document.documentElement.getAttribute('data-template'),
  rtlSupport = true; /Dashboard/Dashboard set true for rtl support (rtl + ltr), false for ltr only.

/Dashboard**
 * TemplateCustomizer
 * ! You must use(include) template-customizer.js to use TemplateCustomizer settings
 * -----------------------------------------------------------------------------------------------
 */Dashboard

/Dashboard/Dashboard To use more themes, just push it to THEMES object.

/Dashboard* TemplateCustomizer.THEMES.push({
  name: 'theme-raspberry',
  title: 'Raspberry'
}); */Dashboard

/Dashboard/Dashboard To add more languages, just push it to LANGUAGES object.
/Dashboard*
TemplateCustomizer.LANGUAGES.fr = { ... };
*/Dashboard

/Dashboard**
 * TemplateCustomizer settings
 * -------------------------------------------------------------------------------------
 * cssPath: Core CSS file path
 * themesPath: Theme CSS file path
 * displayCustomizer: true(Show customizer), false(Hide customizer)
 * lang: To set default language, Add more langues and set default. Fallback language is 'en'
 * controls: [ 'rtl','style','layoutType','showDropdownOnHover','layoutNavbarFixed','layoutFooterFixed','themes'] | Show/DashboardHide customizer controls
 * defaultTheme: 0(Default), 1(Semi Dark), 2(Bordered)
 * defaultStyle: 'light', 'dark' (Mode)
 * defaultTextDir: 'ltr', 'rtl' (rtlSupport must be true for rtl mode)
 * defaultLayoutType: 'static', 'fixed'
 * defaultMenuCollapsed: true, false
 * defaultNavbarFixed: true, false
 * defaultFooterFixed: true, false
 * defaultShowDropdownOnHover : true, false (for horizontal layout only)
 */Dashboard

if (typeof TemplateCustomizer !== 'undefined') {
  window.templateCustomizer = new TemplateCustomizer({
    cssPath: assetsPath + 'vendor/Dashboardcss' + (rtlSupport ? '/Dashboardrtl' : '') + '/Dashboard',
    themesPath: assetsPath + 'vendor/Dashboardcss' + (rtlSupport ? '/Dashboardrtl' : '') + '/Dashboard',
    displayCustomizer: true,
    /Dashboard/Dashboard lang: 'fr',
    /Dashboard/Dashboard defaultTheme: 2,
    /Dashboard/Dashboard defaultStyle: 'light',
    /Dashboard/Dashboard defaultTextDir: 'ltr',
    /Dashboard/Dashboard defaultLayoutType: 'fixed',
    /Dashboard/Dashboard defaultMenuCollapsed: true,
    /Dashboard/Dashboard defaultNavbarFixed: true,
    /Dashboard/Dashboard defaultFooterFixed: false
    defaultShowDropdownOnHover: true
    /Dashboard/Dashboard controls: [
    /Dashboard/Dashboard   'rtl',
    /Dashboard/Dashboard   'style',
    /Dashboard/Dashboard   'layoutType',
    /Dashboard/Dashboard   'showDropdownOnHover',
    /Dashboard/Dashboard   'layoutNavbarFixed',
    /Dashboard/Dashboard   'layoutFooterFixed',
    /Dashboard/Dashboard   'themes'
    /Dashboard/Dashboard ],
  });
}
