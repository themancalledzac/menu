import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

const ALL_BURGERS_QUERY = gql`
  query ALL_BURGERS_QUERY {
    allBurgers {
      _label_
      id
      name
      price
      protein {
        id
        _label_
        __typename
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
  console.log(data, error, loading);
  return (
    <div>
      <h1>Burgers</h1>
    </div>
  );
}
