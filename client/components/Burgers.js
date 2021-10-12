import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import Burger from "./Burger";
import { ALL_BURGERS_QUERY } from "./graph_ql_queries/ALL_FAVORITE_QUERY";

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
