// import { list } from "@keystonejs/keystone/schema";
const { Keystone } = require("@keystonejs/keystone");
const { Text, Checkbox } = require("@keystonejs/fields");

module.exports = {
  fields: {
    name: { type: Text },
    email: {
      type: Text,
      isUnique: true,
    },
    isAdmin: {
      type: Checkbox,
      // Field-level access controls
      // Here, we set more restrictive field access so a non-admin cannot make themselves admin.
      access: {
        update: access.userIsAdmin,
      },
    },
    password: {
      type: Password,
    },
  },
  // List-level access controls
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
};

// const keystone = new Keystone({
//   adapter: new Adapter(adapterConfig),
//   onConnect: process.env.CREATE_TABLES !== "true" && initialiseData,
//   cookieSecret: "wassuhDude",
// });

// export const User = keystone.createList("User", {
//   fields: {
//     name: { type: Text },
//     email: {
//       type: Text,
//       isUnique: true,
//     },
//     isAdmin: {
//       type: Checkbox,
//       // Field-level access controls
//       // Here, we set more restrictive field access so a non-admin cannot make themselves admin.
//       access: {
//         update: access.userIsAdmin,
//       },
//     },
//     password: {
//       type: Password,
//     },
//   },
//   // List-level access controls
//   access: {
//     read: access.userIsAdminOrOwner,
//     update: access.userIsAdminOrOwner,
//     create: access.userIsAdmin,
//     delete: access.userIsAdmin,
//     auth: true,
//   },
// });
