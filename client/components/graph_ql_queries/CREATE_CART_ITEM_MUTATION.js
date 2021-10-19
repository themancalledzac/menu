import * as React from "react";
import gql from "graphql-tag";

export const CREATE_CART_ITEM_MUTATION = gql`
  mutation CREATE_CART_ITEM_MUTATION(
    $name: String
    $description: String
    $price: Int
    $protein: ProteinWhereUniqueInput
    $topping: [ToppingWhereUniqueInput]
    $cheese: [CheeseWhereUniqueInput]
    $condiment: [CondimentWhereUniqueInput]
    $user: UserWhereUniqueInput
  ) {
    createCartItem(
      data: {
        name: $name
        description: $description
        price: $price
        protein: { connect: $protein }
        topping: { connect: $topping }
        cheese: { connect: $cheese }
        condiment: { connect: $condiment }
        user: { connect: $user }
      }
    ) {
      id
      name
      description
      price
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
      user {
        id
      }
    }
  }
`;
