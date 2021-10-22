import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "./graph_ql_queries/User";
import { useRouter } from "next/router";

const SIGNOUT_MUTATION = gql`
  mutation {
    endSession
  }
`;

export default function SignOut() {
  const router = useRouter();

  const [signout] = useMutation(SIGNOUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  function handleSignout() {
    signout();
    console.log("signed out");

    router.push("/");
  }
  return (
    <button type='button' onClick={handleSignout}>
      SignOut
    </button>
  );
}
