import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
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

export default function Burgers() {
  // use hook to fetch data
  const { data, error, loading } = useQuery(ALL_BURGERS_QUERY);

  // loading
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      {data.allBurgers.map((burger) => (
        <Burger key={burger.id} burger={burger} />
      ))}
    </div>
  );
}
