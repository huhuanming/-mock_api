var faker = require('faker/locale/zh_CN')

module.exports = () => {
  let users = []

  for (let id = 0; id < 50; id++) {
    const firstName = faker.name.lastName()
    const lastName = faker.name.firstName()
    const phoneNumber = faker.phone.phoneNumberFormat()

    users.push({
      id,
      name: {
        firstName,
        lastName,
      },
      info: {
        phoneNumber,
        address: {
          city: faker.address.city(),
          zpiCode: faker.address.zipCode(),
        },
      },
    })
  }

  const banners = [
    {
      comment: '',
      title: '北弗里斯兰 · 不如去旅行',
      url: 'https://ooo.0o0.ooo/2017/06/26/59512bbddc037.jpg',
    }, {
      comment: '',
      title: '也许只是承让了',
      url: 'https://ooo.0o0.ooo/2017/06/26/59512bbddc299.jpg',
    }, {
      comment: '',
      title: '人类学研究笔记',
      url: 'https://ooo.0o0.ooo/2017/06/26/59512bbddcccc.jpg',
    },
  ]


  const startImage = {
    text: '© HaHa',
    img: 'https://ooo.0o0.ooo/2017/06/16/5942e6866f7ef.jpg',
  }

  const posts = Array(faker.random.number({
    min: 10,
    max: 30,
  })).fill(0).
    map(() => ({
      title: faker.lorem.slug(),
      img: faker.image.nature(),
      date: faker.date.past(),
    })
  )

  posts.sort((pre, next) => new Date(next.date) - new Date(pre.date))

  return {
    users,
    banners,
    'start-image': startImage,
    posts,
  }
}
