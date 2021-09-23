import { useQuery } from "@apollo/client";
import { CURRENT_USER_QUERY } from "../components/User";

export default function Profile() {
  // use hook to fetch data
  const { data, error, loading } = useQuery(CURRENT_USER_QUERY);

  const { authenticatedItem } = data;

  // loading
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h1>Profile</h1>
      <hr></hr>
      <h3>{authenticatedItem.name}</h3>
      <hr></hr>
      <h4>{authenticatedItem.email}</h4>
    </>
  );
}
