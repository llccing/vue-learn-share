module.exports = {
  title: 'Vue Learn Share',
  description: 'just to it!',
  base: '/vue-learn-share/',
  themeConfig: {
    lastUpdated: 'Last Updated',
    repo: 'https://github.com/llccing/vue-learn-share',
    nav: [
      {
        text: 'Vue CLI',
        link: '/vue-cli/'
      }
    ],
    sidebar: {
      '/vue-cli/': [
        '',
        {
          title: '基础命令',
          children: [
            '02-cli',
            '03-cli-create',
            '04-cli-add',
            '05-cli-invoke',
            '06-cli-inspect',
            '07-vscode-debugger',
            '08-cli-serve',
            '09-cli-build',
            '11-cli-init',
            '12-cli-config',
            '13-cli-outdated',
            '14-cli-upgrade',
            '15-cli-migrate',
            '16-cli-info',
            '17-cli-<command>',
            '18-cli-help',
          ].map(i => `./cli/${i}`)
        },
        {
          title: '插件',
          children: [
            '20-plugin',
            '21-plugin-vuex',
            '22-plugin-router',
            '23-plugin-babel',
            '24-plugin-typescript',
            '25-plugin-eslint',
          ].map(i => `./plugins/${i}`)
        },
        '19-test',
        '99-cli-shared-utils'
      ]
    }
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'))
    }
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          return moment(timestamp)
            .utcOffset('+08:00')
            .format('YYYY-MM-DD HH:mm:SS')
        }
      }
    ]
  ]
}