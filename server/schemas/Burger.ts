import { integer, relationship, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Burger = list({
  fields: {
    name: text({ isRequired: true }),
    description: text({ 
      isRequired: true,
    ui: {
      displayMode: 'textarea',
      }, 
    }),
    price: integer(),
    protein: relationship({
      ref: 'Protein.burger',
      many: true,
    }),
    topping: relationship({
      ref: 'Topping.burger',
      many: true,
    }),
    cheese: relationship({
      ref: 'Cheese.burger',
      many: true,
    }),
    condiment: relationship({
      ref: 'Condiment.burger',
      many: true,
    }),
  },
});
