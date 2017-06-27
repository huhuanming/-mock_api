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

  const now = Date.now()
  const posts = new Array(5).fill(0).
      map((post, dayIndex) =>
        Array(faker.random.number({
          min: 5,
          max: 15,
        })).fill(0).
          map(() => ({
            title: faker.lorem.slug(),
            img: faker.image.nature(),
            date: new Date(now - 86400000 * dayIndex),
          })
      ))

  const article = {
    image: 'https://ooo.0o0.ooo/2017/06/27/595241e3de9bb.jpg',
    content: faker.lorem.paragraphs(100),
  }

  return {
    banners,
    'start-image': startImage,
    posts,
    article,
  }
}
