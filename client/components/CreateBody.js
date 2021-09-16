import styled from "styled-components";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import AddItem from "./AddItem";
import SelectionComponent from "./SelectionComponent";

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

const ButtonHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aquamarine;
  border-radius: 5px 5px 5px 5px;
  margin: 0 1rem 0 1rem;
  padding: 0.5rem 0 0.5rem 0;
`;

const IngredientTitle = styled.button`
  left: 50%;
  text-align: center;
  outline: none;
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  padding: 0 9rem 0 9rem;
  font-size: 2.5rem;
`;

const openAccordian = () => {};

export default function CreateBody() {
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
        <ButtonHolder>
          <IngredientTitle onClick={openAccordian}>Protein</IngredientTitle>
        </ButtonHolder>
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
        <ButtonHolder>
          <IngredientTitle>Toppings</IngredientTitle>
        </ButtonHolder>
        <div>
          {data.allToppings.map(({ name, id, description, price, stock }) => (
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
        <ButtonHolder>
          <IngredientTitle>Cheese</IngredientTitle>
        </ButtonHolder>
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
        <ButtonHolder>
          <IngredientTitle>Condiments</IngredientTitle>
        </ButtonHolder>
        <div>
          {data.allCondiments.map(({ name, id, description, price, stock }) => (
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
      </div>
      <hr></hr>
    </div>
  );
}
