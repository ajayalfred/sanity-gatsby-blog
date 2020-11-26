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
                  buildHookId: '5fbfe9d2f63c2efae19e6036',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-558zw5kq',
                  apiId: '38ad4a48-7f0f-416e-ac84-e886512bec9c'
                },
                {
                  buildHookId: '5fbfe9d2d55272b6e7df0f48',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-kxwz13jx',
                  apiId: '122b8c4b-5674-4c8f-bbda-ef5950018a80'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ajayalfred/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-kxwz13jx.netlify.app', category: 'apps' }
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
