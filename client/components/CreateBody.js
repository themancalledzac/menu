import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import AddItem from "./AddItem";
import SelectionComponent from "./SelectionComponent";
import { useState } from "react";
import ItemGrid from "./ItemGrid";
import ClickGrid from "./ClickGrid";
import { CheckBox } from "./CheckBox";
import { CheckBoxContainer } from "./CheckBoxContainer";

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

export default function CreateBody() {
  const [proteinActive, setProteinActive] = useState(true);
  const [toppingActive, setToppingActive] = useState(false);
  const [cheeseActive, setCheeseActive] = useState(false);
  const [condimentActive, setCondimentActive] = useState(false);

  // use hook to fetch data
  const { data, error, loading } = useQuery(BUILD_BURGER_QUERY);

  // loading
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div>
        <div>
          <h1>Create a burger</h1>
          <p>
            Please go through the required selections below to create a burger
          </p>
        </div>
        <div>
          <button onClick={() => setProteinActive((prevCheck) => !prevCheck)}>
            Protein
          </button>
        </div>
        {proteinActive ? (
          <div>
            {data.allProteins.map(({ name, id, description, price, stock }) => (
              <div>
                <SelectionComponent
                  key={id}
                  name={name}
                  price={price}
                  description={description}
                  multiple={false}
                />
              </div>
            ))}
          </div>
        ) : null}
        <div>
          <button onClick={() => setToppingActive((prevCheck) => !prevCheck)}>
            Toppings
          </button>
        </div>
        {toppingActive ? (
          <div>
            {data.allToppings.map(({ name, id, description, price, stock }) => (
              <ClickGrid>
                <CheckBoxContainer>
                  <CheckBox
                    type='radio'
                    checked='unchecked'
                    name='radio'
                  ></CheckBox>
                </CheckBoxContainer>
                <SelectionComponent
                  key={id}
                  name={name}
                  price={price}
                  description={description}
                  multiple={true}
                />
              </ClickGrid>
            ))}
          </div>
        ) : null}
        <div>
          <button onClick={() => setCheeseActive((prevCheck) => !prevCheck)}>
            Cheese
          </button>
        </div>
        {cheeseActive ? (
          <div>
            {data.allCheeses.map(({ name, id, description, price, stock }) => (
              <div>
                <SelectionComponent
                  key={id}
                  name={name}
                  price={price}
                  description={description}
                  multiple={true}
                />
              </div>
            ))}
          </div>
        ) : null}
        <div>
          <button onClick={() => setCondimentActive((prevCheck) => !prevCheck)}>
            Condiments
          </button>
        </div>
        {condimentActive ? (
          <div>
            {data.allCondiments.map(
              ({ name, id, description, price, stock }) => (
                <div>
                  <SelectionComponent
                    key={id}
                    name={name}
                    price={price}
                    description={description}
                    multiple={true}
                  />
                </div>
              )
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
