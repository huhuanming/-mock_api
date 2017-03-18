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

  return { users, }
}
