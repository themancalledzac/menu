require("dotenv").config();
const { Keystone } = require("@keystonejs/keystone");
const { createItems } = require("@keystonejs/server-side-graphql-client");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const { Text, Checkbox, Password } = require("@keystonejs/fields");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const initialiseData = require("./initial-data");
const { NextApp } = require("@keystonejs/app-next");
// const seedData = require("./seeders/index");
const User = require("./schemas/User");
const Burger = require("./schemas/Burger");
const Protein = require("./schemas/Protein");
const Topping = require("./schemas/Topping");
const Cheese = require("./schemas/Cheese");
const Condiment = require("./schemas/Condiment");

const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");
// const { createPartiallyEmittedExpression } = require("typescript");
const PROJECT_NAME = "backend";
const adapterConfig = {
  mongoUri: process.env.MONGODB_URI || "mongodb://localhost/menu",
};

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  onConnect: process.env.CREATE_TABLES !== "true" && initialiseData,
  // onConnect: async (keystone) => {
  //   await keystone.adapter.dropDatabase();
  //   await createItems({
  //     keystone,
  //     listKey: "User",
  //     items: [
  //       {
  //         data: {
  //           name: "Zechariah Edens",
  //           email: "edens.zac@gmail.com",
  //           isAdmin: true,
  //           password: "passw0rd",
  //         },
  //       },
  //     ],
  //   });

  //   await createItems({
  //     keystone,
  //     listKey: "Topping",
  //     items: [
  //       {
  //         data: {
  //           name: "Bun",
  //           price: 50,
  //           stock: 100,
  //         },
  //       },
  //       {
  //         data: {
  //           name: "Onion",
  //           price: 20,
  //           stock: 100,
  //         },
  //       },
  //       {
  //         data: {
  //           name: "Pickle",
  //           price: 10,
  //           stock: 100,
  //         },
  //       },
  //       {
  //         data: {
  //           name: "Lettuce",
  //           price: 20,
  //           stock: 100,
  //         },
  //       },
  //       {
  //         data: {
  //           name: "Coleslaw",
  //           price: 20,
  //           stock: 100,
  //         },
  //       },
  //       {
  //         data: {
  //           name: "Kimchi",
  //           price: 20,
  //           stock: 100,
  //         },
  //       },
  //       {
  //         data: {
  //           name: "Arugula",
  //           price: 20,
  //           stock: 100,
  //         },
  //       },
  //       {
  //         data: {
  //           name: "Tomato",
  //           price: 20,
  //           stock: 100,
  //         },
  //       },
  //       {
  //         data: {
  //           name: "Avocado",
  //           price: 10,
  //           stock: 100,
  //         },
  //       },
  //       {
  //         data: {
  //           name: "Bacon",
  //           price: 12,
  //           stock: 100,
  //         },
  //       },
  //       {
  //         data: {
  //           name: "Mushrooms",
  //           price: 30,
  //           stock: 100,
  //         },
  //       },
  //       {
  //         data: {
  //           name: "Egg",
  //           price: 80,
  //           stock: 100,
  //         },
  //       },
  //     ],
  //   });

  //   await createItems({
  //     keystone,
  //     listKey: "Protein",
  //     items: [
  //       {
  //         data: {
  //           name: "Ground Beef",
  //           price: 250,
  //           stock: 60,
  //           vegitarian: false,
  //         },
  //       },
  //       {
  //         data: {
  //           name: "Chicken Breast",
  //           price: 300,
  //           stock: 40,
  //           vegitarian: false,
  //         },
  //       },
  //       {
  //         data: {
  //           name: "Chicken Thigh",
  //           price: 350,
  //           stock: 40,
  //           vegitarian: false,
  //         },
  //       },
  //       {
  //         data: {
  //           name: "Pork Katsu",
  //           price: 500,
  //           stock: 30,
  //           vegitarian: false,
  //         },
  //       },
  //       {
  //         data: {
  //           name: "Beef Katsu",
  //           price: 500,
  //           stock: 30,
  //           vegitarian: false,
  //         },
  //       },
  //       {
  //         data: {
  //           name: "Impossible",
  //           price: 500,
  //           stock: 30,
  //           vegitarian: true,
  //         },
  //       },
  //       {
  //         data: {
  //           name: "Impossible katsu",
  //           price: 500,
  //           stock: 30,
  //           vegitarian: true,
  //         },
  //       },
  //     ],
  //   });

  //   await createItems({
  //     keystone,
  //     listKey: "Cheese",
  //     items: [
  //       {
  //         data: {
  //           name: "Sharp Cheddar",
  //           price: 1.0,
  //           stock: 100,
  //         },
  //       },
  //       {
  //         data: {
  //           name: "Swiss",
  //           price: 1.0,
  //           stock: 100,
  //         },
  //       },
  //       {
  //         data: {
  //           name: "Blue Cheese",
  //           price: 150,
  //           stock: 100,
  //         },
  //       },
  //       {
  //         data: {
  //           name: "American",
  //           price: 100,
  //           stock: 100,
  //         },
  //       },
  //       {
  //         data: {
  //           name: "Gruyère",
  //           price: 200,
  //           stock: 100,
  //         },
  //       },
  //       {
  //         data: {
  //           name: "Mozzarella",
  //           price: 100,
  //           stock: 100,
  //         },
  //       },
  //     ],
  //   });

  //   await createItems({
  //     keystone,
  //     listKey: "Condiment",
  //     items: [
  //       {
  //         data: {
  //           name: "Ketchup",
  //           price: 10,
  //           stock: 1000,
  //         },
  //       },
  //       {
  //         data: {
  //           name: "Mayo",
  //           price: 10,
  //           stock: 1000,
  //         },
  //       },
  //       {
  //         data: {
  //           name: "Dijon Mustard",
  //           price: 10,
  //           stock: 1000,
  //         },
  //       },
  //       {
  //         data: {
  //           name: "Soy Sauce",
  //           price: 10,
  //           stock: 1000,
  //         },
  //       },
  //       {
  //         data: {
  //           name: "Harissa",
  //           price: 10,
  //           stock: 1000,
  //         },
  //       },
  //       {
  //         data: {
  //           name: "Garlic Aioli",
  //           price: 10,
  //           stock: 1000,
  //         },
  //       },
  //       {
  //         data: {
  //           name: "Barbecue Sauce",
  //           price: 10,
  //           stock: 1000,
  //         },
  //       },
  //     ],
  //   });

  // await createItems({
  //   keystone,
  //   listKey: "Burger",
  //   items: [
  //     {
  //       data: {
  //         name: "Plain Jane",
  //         price: 10.0,
  //         protein: "Ground Beef",
  //         cheese: "Sharp Cheddar",
  //         condiment: ["Bun", "Lettuce", "Tomato", "Onion"],
  //       },
  //     },
  //   ],
  // });

  //   console.log("succes");

  //   // 1. insert User List
  //   // const users = await createItems({
  //   //   keystone,
  //   //   listKey: "User",
  //   //   items: [
  //   //     {
  //   //       data: {
  //   //         name: "Zechariah Edens",
  //   //         email: "edens.zac@gmail.com",
  //   //         isAdmin: true,
  //   //         password: "password",
  //   //       }
  //   //     }
  //   //   ]
  //   // })
  // },
  cookieSecret: "wassuhDude",
});

// Access control functions
const userIsAdmin = ({ authentication: { item: user } }) =>
  Boolean(user && user.isAdmin);
const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }

  // Instead of a boolean, you can return a GraphQL query:
  // https://www.keystonejs.com/api/access-control#graphqlwhere
  return { id: user.id };
};

const userIsAdminOrOwner = (auth) => {
  const isAdmin = access.userIsAdmin(auth);
  const isOwner = access.userOwnsItem(auth);
  return isAdmin ? isAdmin : isOwner;
};

const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner };

keystone.createList("User", User);
keystone.createList("Burger", Burger);
keystone.createList("Protein", Protein);
keystone.createList("Topping", Topping);
keystone.createList("Cheese", Cheese);
keystone.createList("Condiment", Condiment);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: "User",
  config: { protectIdentities: process.env.NODE_ENV === "production" },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      name: PROJECT_NAME,
      enableDefaultRoute: true,
      authStrategy,
    }),
    new NextApp({ dir: "../client" }),
  ],
};
