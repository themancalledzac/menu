import * as React from "react";
import gql from "graphql-tag";

export const ALL_CART_QUERY = gql`
  query ALL_CART_QUERY {
    allCartItems {
      id
      name
      price
      protein {
        id
        name
      }
      topping {
        id
        name
        price
      }
      cheese {
        id
        name
        price
      }
      condiment {
        id
        name
        price
      }
      __typename
    }
  }
`;
