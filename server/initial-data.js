const crypto = require("crypto");
const randomString = () => crypto.randomBytes(6).hexSlice();
const seedData = require("./seeders/index");

module.exports = async (keystone) => {
  // Count existing users
  const {
    data: {
      _allUsersMeta: { count = 0 },
    },
  } = await keystone.executeGraphQL({
    context: keystone.createContext().sudo(),
    query: `query {
      _allUsersMeta {
        count
      }
    }`,
  });
  // (await keystone.adapter.dropDatabase()) && seedData;
  // await console.log("seeded");

  if (count === 0) {
    const password = randomString();
    const email = "admin@example.com";

    const { errors } = await keystone.executeGraphQL({
      context: keystone.createContext().sudo(),
      query: `mutation initialUser($password: String, $email: String) {
            createUser(data: {name: "Admin", email: $email, isAdmin: true, password: $password}) {
              id
            }
          }`,
      variables: { password, email },
    });

    if (errors) {
      console.log("failed to create initial user:");
      console.log(errors);
    } else {
      console.log(`

      User created:
        email: ${email}
        password: ${password}
      Please change these details after initial login.
      `);
    }
  }
};
