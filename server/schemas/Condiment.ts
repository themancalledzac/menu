import { integer, relationship, select, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const Condiment = list({
  fields: {
    name: text({ isRequired: true }),
    description: text({
      isRequired: true,
      ui: {
        displayMode: "textarea",
      },
    }),
    price: integer(),
    stock: integer(),
  },
});
