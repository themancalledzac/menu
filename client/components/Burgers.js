import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import Burger from "./Burger";

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

const BurgersListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function Burgers() {
  // use hook to fetch data
  const { data, error, loading } = useQuery(ALL_BURGERS_QUERY);

  // loading
  if (loading) return <p>Loading...</p>;
  return (
    <BurgersListStyles>
      {data.allBurgers.map((burger) => (
        <Burger key={burger.id} burger={burger} />
      ))}
    </BurgersListStyles>
  );
}
