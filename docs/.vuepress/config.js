const sidebar = require('./sidebar');

module.exports = {
    lang: 'zh-CN',
    head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
    title: '追逐续的个人网站',
    description: '追逐续的个人网站',
    theme: '@vuepress/theme-default',
    base: '/',
    themeConfig: {
        logo: '/images/favicon.ico',
        // 侧边栏对象
        // 不同子路径下的页面会使用不同的侧边栏
        sidebar: sidebar,
    }
}