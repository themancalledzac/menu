import { integer, relationship, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Topping = list({
  fields: {
    name: text({ isRequired: true }),
    description: text({ 
      isRequired: true,
      ui: {
        displayMode: 'textarea',
      }
    }),
    // burger: relationship({ ref: 'Burger.topping' }),
    price: integer(),
    stock: integer(),
  },
});
