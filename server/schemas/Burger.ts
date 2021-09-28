import { integer, relationship, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Burger = list({
  fields: {
    name: text({ isRequired: true }),
    description: text({ 
    ui: {
      displayMode: 'textarea',
      }, 
    }),
    price: integer(),
    protein: relationship({
      ref: 'Protein',
    }),
    topping: relationship({
      ref: 'Topping',
      many: true,
    }),
    cheese: relationship({
      ref: 'Cheese',
      many: true,
    }),
    condiment: relationship({
      ref: 'Condiment',
      many: true,
    }),
  },
});
