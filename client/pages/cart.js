import { useQuery } from "@apollo/client";
import Burger from "../components/Burger";
import { ALL_CART_QUERY } from "../components/graph_ql_queries/ALL_CART_QUERY";

export default function Cart() {
  // use hook to fetch data
  const { data, error, loading } = useQuery(ALL_CART_QUERY);
  // loading
  if (loading) return <p>Loading...</p>;
  console.log(data);
  return (
    <div>
      {data.allCartItems.map((burger) => (
        <Burger key={burger.id} burger={burger} />
      ))}
    </div>
  );
}
