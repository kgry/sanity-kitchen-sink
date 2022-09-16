export default {
  widgets: [
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
                  buildHookId: '6324a1c1654405723112917f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-v7a222k5',
                  apiId: '52bcfd53-e0cd-47b5-96c7-61a4c128fbc9'
                },
                {
                  buildHookId: '6324a1c241b17174e2238c46',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-q6q7gcbf',
                  apiId: 'd7bb1cf2-d361-46cc-9638-8e59a068c866'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kgry/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-q6q7gcbf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
