const locales = [
  { code: 'en', iso: 'en-US', file: 'en.js' },
  { code: 'cn', iso: 'zh-CN', file: 'zh-cn.js' },
  { code: 'tw', iso: 'zh-TW', file: 'zh-tw.js' },
]
  
const defaultLocale = 'tw'
  
const detectBrowserLanguage = {
  useCookie: true,
  cookieKey: 'i18n_redirected',
  redirectOn: 'root', // recommended
}
  
const i18n = {
  locales,
  defaultLocale,
  detectBrowserLanguage,
  langDir: '~/lang/',
}
  
export default i18n
  