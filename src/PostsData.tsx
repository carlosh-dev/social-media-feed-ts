export const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/carlosh-dev.png',
        name: 'Carlos Henrique',
        role: 'Web Developer'
      },
      content: [
        {type:'paragraph', content:'Fala galeraa ๐'},
        {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifolio. ร um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto รฉ DoctorCare ๐'},
        {type:'link', content:'carlos.design/doctorcare' },
      ],
      publishedAt: new Date('2022-09-07 13:02:00')
    },
  
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes',
        role: 'CTO at Rocketseat'
      },
      content: [
        {type: 'paragraph', content:"Fala Dev ๐"},
        {type: 'paragraph', content:"Subia gora mesmo o conteรบdo da aula de hoje. Boa aula! ๐"},
        {type: 'link', content:"https://app.rocketseat.com.br/"},
      ],
      publishedAt: new Date('2022-09-07 12:07:00')
    }
  ]