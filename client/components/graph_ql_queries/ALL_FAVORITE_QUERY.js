import * as React from "react";
import gql from "graphql-tag";

export const ALL_BURGERS_QUERY = gql`
  query ALL_BURGERS_QUERY {
    allBurgers {
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
