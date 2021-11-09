const { description } = require('../../package')
const autometa_options = {
  site: {
    name   : 'Utimax Industrial Solutions Pvt. Ltd.',
    twitter: 'Utimax Industrial Solutions Pvt. Ltd.',
  },
  canonical_base: 'https://utimax.in'
};

module.exports = {
  title: 'UTImax',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel:"preconnect", href:"https://fonts.gstatic.com"}],
    ['link', { rel: "preload", as: "style", href:'https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap'}],
    ['link', {href: 'https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap', rel:'stylesheet'}]
  ],
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    logo:'/favicon.ico',
    nav: [
      {
        text: 'About',
        link: '/about/',
      },
      {
        text: 'Contact',
        link: '/contact/'
      },
      {
        text: 'Services',
        items: [
          {text: 'Electrical Safety Audit', link: '/services/electrical-safety-audit'},
          {text: 'Equipment Safety & Integrity', link: '/services/equipment-safety-and-integrity-assessment'},
          {text: 'Fire Safety Audit', link: '/services/fire-safety-audit'},
          {text: 'Management System Consultancy', link: '/services/management-system-consultancy'},
          {text: 'Process Safety Audit', link: '/services/process-safety-audit'},
          {text: 'Resource Efficiency & Environmental Sustainability', link: '/services/resource-efficiency-and-environmental-sustainability-audit'}
        ]
      },
      {
        text: 'Key Customers',
        link: '/key-customers/'
      },
    ],
    sidebar: {
      
    }
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['clean-urls', {
      normalSuffix: '/',
      indexSuffix: '/'
    }],
    ['feed', {
      canonical_base: 'https://utimax.in',
      posts_directories: ['/service/'],
    }],
    ['autometa', autometa_options],
    ['sitemap', {hostname: 'https://utimax.in'}],
  ]
}
