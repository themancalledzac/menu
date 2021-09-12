import { integer, relationship, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';


export const Protein = list({
  fields: {
    name: text({ isRequired: true }),
    desciption: text({ 
      isRequired: true, 
      ui: {
      displayMode: 'textarea',
      },
    }),
    price: integer(),
    stock: integer(),
    // burger: relationship({ ref: 'Burger.protein '}),
    vegitarian: select({
      options: [
        { label: 'Vegitarian', value: 'VEGITARIAN' },
        { label: 'Meat', value: 'MEAT' },
      ],
      defaultValue: 'MEAT',
    }),
  },
});
