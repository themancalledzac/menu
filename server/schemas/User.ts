import { list } from "@keystone-next/keystone/schema";
import { text, password, relationship } from "@keystone-next/fields";

export const User = list({
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    // TODO: create cart schema for connection
    cart: relationship({
      ref: "CartItem.user",
      many: true,
      ui: {
        createView: { fieldMode: "hidden" },
        itemView: { fieldMode: "read" },
      },
    }),
  },
});

// v.5.keystone stuff, old, will delete

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
