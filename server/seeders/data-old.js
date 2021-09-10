// TODO: on npm run seed, run all seeds within Seeders

const { createItems } = require("@keystonejs/server-side-graphql-client");

module.exports = async () => {
  await createItems({
    keystone,
    listKey: "User",
    items: [
      {
        data: {
          name: "Zechariah Edens",
          email: "edens.zac@gmail.com",
          isAdmin: true,
          password: "passw0rd",
        },
      },
    ],
  });

  await createItems({
    keystone,
    listKey: "Topping",
    items: [
      {
        data: {
          name: "Bun",
          price: 0.5,
          stock: 100,
        },
        data: {
          name: "Onion",
          price: 0.2,
          stock: 100,
        },
        data: {
          name: "Pickle",
          price: 0.1,
          stock: 100,
        },
        data: {
          name: "Lettuce",
          price: 0.2,
          stock: 100,
        },
        data: {
          name: "Coleslaw",
          price: 0.2,
          stock: 100,
        },
        data: {
          name: "Kimchi",
          price: 0.2,
          stock: 100,
        },
        data: {
          name: "Arugula",
          price: 0.2,
          stock: 100,
        },
        data: {
          name: "Tomato",
          price: 0.3,
          stock: 100,
        },
        data: {
          name: "Avocado",
          price: 1.0,
          stock: 100,
        },
        data: {
          name: "Bacon",
          price: 1.2,
          stock: 100,
        },
        data: {
          name: "Mushrooms",
          price: 0.3,
          stock: 100,
        },
        data: {
          name: "Egg",
          price: 0.8,
          stock: 100,
        },
      },
    ],
  });

  await createItems({
    keystone,
    listKey: "Protein",
    items: [
      {
        data: {
          name: "Ground Beef",
          price: 2.5,
          stock: 60,
          vegitarian: false,
        },
        data: {
          name: "Chicken Breast",
          price: 3.0,
          stock: 40,
          vegitarian: false,
        },
        data: {
          name: "Chicken Thigh",
          price: 3.5,
          stock: 40,
          vegitarian: false,
        },
        data: {
          name: "Pork Katsu",
          price: 5.0,
          stock: 30,
          vegitarian: false,
        },
        data: {
          name: "Beef Katsu",
          price: 5.0,
          stock: 30,
          vegitarian: false,
        },
        data: {
          name: "Impossible",
          price: 5.0,
          stock: 30,
          vegitarian: true,
        },
        data: {
          name: "Impossible katsu",
          price: 5.0,
          stock: 30,
          vegitarian: true,
        },
      },
    ],
  });

  await createItems({
    keystone,
    listKey: "Cheese",
    items: [
      {
        data: {
          name: "Sharp Cheddar",
          price: 1.0,
          stock: 100,
        },
        data: {
          name: "Swiss",
          price: 1.0,
          stock: 100,
        },
        data: {
          name: "Blue Cheese",
          price: 1.5,
          stock: 100,
        },
        data: {
          name: "American",
          price: 1.0,
          stock: 100,
        },
        data: {
          name: "Gruyère",
          price: 1.0,
          stock: 100,
        },
        data: {
          name: "Mozzarella",
          price: 1.0,
          stock: 100,
        },
      },
    ],
  });

  await createItems({
    keystone,
    listKey: "Condiment",
    items: [
      {
        data: {
          name: "Ketchup",
          price: 0.1,
          stock: 1000,
        },
        data: {
          name: "Mayo",
          price: 0.1,
          stock: 1000,
        },
        data: {
          name: "Dijon Mustard",
          price: 0.1,
          stock: 1000,
        },
        data: {
          name: "Soy Sauce",
          price: 0.1,
          stock: 1000,
        },
        data: {
          name: "Harissa",
          price: 0.1,
          stock: 1000,
        },
        data: {
          name: "Garlic Aioli",
          price: 0.1,
          stock: 1000,
        },
        data: {
          name: "Barbecue Sauce",
          price: 0.1,
          stock: 1000,
        },
      },
    ],
  });

  await createItems({
    keystone,
    listKey: "Burger",
    items: [
      {
        data: {
          name: "Plain Jane",
          price: 10.0,
          protein: "Ground Beef",
          cheese: "Sharp Cheddar",
          condiment: ["Bun", "Lettuce", "Tomato", "Onion"],
        },
      },
    ],
  });
};
