export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d940b81b12c4cd21ddb12b5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-w83nag7e',
                  apiId: '2f4ebdf0-5043-47a8-bd0d-14175ba4af11'
                },
                {
                  buildHookId: '5d940b82de1bb2b8914c6171',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-6py9c2pt',
                  apiId: 'f311908a-9a96-4aac-b482-d9d65344131e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/roosiq/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-6py9c2pt.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
