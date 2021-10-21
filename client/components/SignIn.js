import Link from "next/link";
import { useMutation } from "@apollo/client";
import createForm from "../lib/createForm";
import { SIGNIN_MUTATION } from "./graph_ql_queries/SIGNIN_MUTATION";
import { CURRENT_USER_QUERY } from "./graph_ql_queries/User";

export default function SignIn() {
  const { inputs, handleChange, resetForm } = createForm({
    email: "",
    password: "",
  });

  const [signin, { data, loading }] = useMutation(SIGNIN_MUTATION, {
    variables: inputs,
    // refetch the currently logged in user
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
    const res = await signin();
    console.log(res);
    resetForm();
  }
  const error =
    data?.authenticateUserWithPassword.__typename ===
    "UserAuthenticationWithPasswordFailure"
      ? data?.authenticateUserWithPassword
      : undefined;
  error && console.log(error);

  return (
    <div>
      <form method='POST' onSubmit={handleSubmit}>
        <h2>Sign into your account</h2>
        <fieldset>
          <label htmlFor='email'>
            Email
            <input
              type='email'
              name='email'
              placeholder='Your Email Address'
              autoComplete='email'
              value={inputs.email}
              onChange={handleChange}
            ></input>
          </label>
          <label htmlFor='password'>
            Password
            <input
              type='password'
              name='password'
              placeholder='Your Password'
              autoComplete='password'
              value={inputs.password}
              onChange={handleChange}
            />
          </label>
          <button type='submit'>Sign In!</button>
        </fieldset>
      </form>
      <h3>Not a user yet? Sign up!</h3>
      <Link href='/signup'>Sign Up!</Link>
    </div>
  );
}
