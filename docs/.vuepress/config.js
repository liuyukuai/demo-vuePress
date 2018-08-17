var glob = require("glob")
var path = require("path")
glob.sync(".").forEach(function (entity) {
    console.log(entity)
});
module.exports = {
    title: 'demo-vuepress',
    description: 'VuePress demo',
    head: [
        ['link', {rel: 'icon', href: `/favicon.ico`}]
    ],
    base: '/',
    themeConfig: {
        nav: [
            {text: 'home', link: '/'},
            {text: 'js', link: '/js/'},
            {text: 'java', link: '/java/'},
            {text: 'python', link: '/python/'},
            // 下拉列表
            {
                text: 'select',
                items: [
                    {text: 'select1', link: '/select/select1'},
                    {text: 'select2', link: '/select/select2'}
                ]
            },
            {text: 'GitHub', link: 'http://liuyukuai.github.io'}
        ],
        sidebar: {
            '/js/': [
                {
                    title: ' 基础',
                    // false 展开
                    collapsable: true,
                    children: [
                        '/js/basic/js入门1',
                        '/js/basic/js入门2'
                    ]
                },
                {
                    title: '高级',
                    collapsable: true,
                    children: [
                        '/js/senior/js高级1',
                        '/js/senior/js高级2'
                    ]
                },
            ]
        }
    }
}

