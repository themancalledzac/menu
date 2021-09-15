import styled from "styled-components";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import AddItem from "./AddItem";
import fakeBurgerData from "../src/fakeBurgerData";

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
        <div>
          <h1>Ingredients available</h1>
          <h4>
            Choose what ya'll want. At the very bottom would be an 'add to cart'
            button, but would be greyed out until the minimum requirements are
            selected.... either that, or the burger starts as a plain style
            burger, and is orderable from the beginning... but only comes with
            the initial prompts(beef protein and a bun?)
          </h4>
          <p>
            A couple of rules thus far. We need to split up the ingredientData
            into 3 or more separate portions. First we look at the protein. Once
            separated, we can have a special rule for this group that when one
            is selected, the others are greyed out. It will still let you select
            another, but it will deselect the previous selection.
          </p>
          <p>
            We should decide whether to put cheese on its own section or not.
          </p>
          <p>
            ALSO! Very important. we should try and get this so that each
            section, on selection, could minimize, in an acordian style menu.
            that way more is visible when in mobile view. So perhaps on opening,
            PROTEIN_STATE is set to true, but all other topping menus are set to
            false and are closed. When protein is selected, it will set protein
            to false, setting the next menu's state to be true.
          </p>
          <p>
            We should have a 'double the meat' button? some sort of option since
            some people like a double. would have to be accessible outside the
            menu, if we stick with the acordian style.
          </p>
          <p>
            We should have items greyed out, and unclickable if they are out of
            stock. maybe even a line through them?
          </p>
          <p>
            Do we want checkboxes for each item selected? With this we could
            still click the entire box, but the checkmark would be located on
            the far right next to the price. We could also have each item
            selected be sort of 'indented', an inner drop shadow.
          </p>
          <p>
            Styling should be for mobile: full width. will need to remove all
            css global styling
          </p>
          <p>
            Description section could go away, it could also be a link to a pop
            out modul that has a little paragraph of where we source that item,
            maybe what season it's in, or perhaps calories of that item.
            depending on how in depth, or what our client would want.
          </p>
        </div>
        <IngredientTitle>Toppings</IngredientTitle>
        <ItemGrid>
          {data.allToppings.map(({ id, description, name, price, stock }) => (
            <div>
              <AddItem
                key={id}
                name={name}
                price={price}
                description={description}
                stock={stock}
              />
            </div>
          ))}
        </ItemGrid>
        <IngredientTitle>Protein</IngredientTitle>
        <ItemGrid>
          {data.allProteins.map(({ id, description, name, price, stock }) => (
            <div>
              <AddItem
                key={id}
                name={name}
                price={price}
                description={description}
                stock={stock}
              />
            </div>
          ))}
        </ItemGrid>
        <IngredientTitle>Cheese</IngredientTitle>
        <ItemGrid>
          {data.allCheeses.map(({ id, description, name, price, stock }) => (
            <div>
              <AddItem
                key={id}
                name={name}
                price={price}
                description={description}
                stock={stock}
              />
            </div>
          ))}
        </ItemGrid>
        <IngredientTitle>Condiments</IngredientTitle>
        <ItemGrid>
          {data.allCondiments.map(({ id, description, name, price, stock }) => (
            <div>
              <AddItem
                key={id}
                name={name}
                price={price}
                description={description}
                stock={stock}
              />
            </div>
          ))}
        </ItemGrid>
      </div>
      <hr></hr>
    </div>
  );
}
