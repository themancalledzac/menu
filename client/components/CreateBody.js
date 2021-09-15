import styled from "styled-components";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import AddItem from "./AddItem";
import ChooseTopping from "./ChooseToppings";
import ChooseProtein from "./ChooseProtein";
import ChooseCheese from "./ChooseCheese";
import ChooseCondiments from "./ChooseCondiments";

export const BUILD_BURGER_QUERY = gql`
  query BUILD_BURGER_QUERY {
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

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

const IngredientTitle = styled.h1`
  text-align: center;
`;

export default function CreateBody() {
  // use hook to fetch data

  const { data, error, loading } = useQuery(BUILD_BURGER_QUERY);

  // loading
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div>
        {/* <div>
          <h1>Ingredients available</h1>
          <h4>
            Choose what ya'll want. At the very bottom would be an 'add to cart'
            button, but would be greyed out until the minimum requirements are
            selected.... either that, or the burger starts as a plain style
            burger, and is orderable from the beginning... but only comes with
            the initial prompts(beef protein and a bun?)
          </h4>
          <p>
            ALSO! Very important. we should try and get this so that each
            section, on selection, could minimize, in an acordian style menu.
            that way more is visible when in mobile view. So perhaps on opening,
            PROTEIN_STATE is set to true, but all other topping menus are set to
            false and are closed. When protein is selected, it will set protein
            to false, setting the next menu's state to be true.
          </p>
          <p>
            We should have items greyed out, and unclickable if they are out of
            stock. maybe even a line through them?
          </p>
        </div> */}
        <div>
          <h1>Create a burger</h1>
          <p>
            Please go through the required selections below to create a burger
          </p>
        </div>
        <IngredientTitle>Protein</IngredientTitle>
        <div>
          {data.allProteins.map(({ name, id, description, price, stock }) => (
            <div>
              <ChooseProtein key={id} name={name} />
            </div>
          ))}
        </div>
        <IngredientTitle>Toppings</IngredientTitle>
        <div>
          {data.allToppings.map(({ name, id, description, price, stock }) => (
            <div>
              <ChooseTopping key={id} name={name} />
            </div>
          ))}
        </div>

        <IngredientTitle>Cheese</IngredientTitle>
        <div>
          {data.allCheeses.map(({ name, id, description, price, stock }) => (
            <div>
              <ChooseCheese key={id} name={name} />
            </div>
          ))}
        </div>

        <IngredientTitle>Condiments</IngredientTitle>
        <div>
          {data.allCondiments.map(({ name, id, description, price, stock }) => (
            <div>
              <ChooseCondiments key={id} name={name} />
            </div>
          ))}
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
