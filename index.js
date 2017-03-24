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

  const startImage = {
    text: '© HaHa',
    img: 'http://7xqlzr.dl1.z0.glb.clouddn.com/' +
    '107bb4894b46d75a892da6fa80ef504a.jpg',
  }

  return {
    users,
    'start-image': startImage,
  }
}
