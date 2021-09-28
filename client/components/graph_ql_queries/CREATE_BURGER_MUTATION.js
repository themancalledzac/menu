import * as React from "react";
import gql from "graphql-tag";

export const CREATE_BURGER_MUTATION = gql`
  mutation CREATE_BURGER_MUTATION(
    $name: String
    $description: String
    $protein: ProteinWhereUniqueInput
    $topping: [ToppingWhereUniqueInput]
    $cheese: [CheeseWhereUniqueInput]
    $condiment: [CondimentWhereUniqueInput]
  ) {
    createBurger(
      data: {
        name: $name
        description: $description
        protein: { connect: $protein }
        topping: { connect: $topping }
        cheese: { connect: $cheese }
        condiment: { connect: $condiment }
      }
    ) {
      id
      name
      description
      protein {
        id
      }
      topping {
        id
      }
      cheese {
        id
      }
      condiment {
        id
      }
    }
  }
`;
