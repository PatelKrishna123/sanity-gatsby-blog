export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6048de20bc2d3ff94db4b95e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-u5z2kg5p',
                  apiId: '529f9c17-9af7-4ba4-9c40-dba465ae58d3'
                },
                {
                  buildHookId: '6048de200a47ccf74d343c98',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-1um7c9xw',
                  apiId: '8e249ff0-a592-448c-a8d6-588f96b48db4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/PatelKrishna123/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-1um7c9xw.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
