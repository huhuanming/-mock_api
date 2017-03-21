var faker = require('faker')

module.exports = () => {
  let users = []

  for (let id = 0; id < 50; id++) {
    const firstName = faker.name.firstName()
    const lastName = faker.name.firstName()
    const phoneNumber = faker.phone.phoneNumberFormat()

    users.push({
      id,
      firstName,
      lastName,
      phoneNumber,
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
