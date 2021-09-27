import * as React from "react";
import gql from "graphql-tag";

export const ALL_PRODUCTS_QUERY = gql`
  query DISPLAY_TOPPINGS_QUERY {
    allToppings {
      id
      description
      name
      price
      stock
    }
    allProteins {
      id
      description
      name
      price
      stock
    }
    allCheeses {
      id
      description
      name
      price
      stock
    }
    allCondiments {
      id
      description
      name
      price
      stock
    }
  }
`;
