import { useMutation } from "@apollo/client";
import { inputClasses } from "@mui/material";
import createForm from "../lib/createForm";
import signIn from "../pages/signIn";
import { SIGNUP_MUTATION } from "./graph_ql_queries/SIGNUP_MUTATION";
import { CURRENT_USER_QUERY } from "./graph_ql_queries/User";

export default function SignUp() {
  const { inputs, handleChange, resetForm } = createForm({
    name: "",
    email: "",
    password: "",
  });

  const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
    // refetch the currently logged in user
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
    const res = await signup().catch(console.error);
    console.log(res);
    console.log({ data, loading, error });
    resetForm();
  }

  return (
    <div>
      <form method='POST' onSubmit={handleSubmit}>
        <h2>Sign up for your account</h2>
        <fieldset>
          <label htmlFor='name'>
            Name
            <input
              type='text'
              name='name'
              placeholder='Your name'
              value={inputs.name}
              onChange={handleChange}
            ></input>
          </label>
          <label htmlFor='email'>
            Name
            <input
              type='email'
              name='email'
              placeholder='Your Email Address'
              value={inputs.email}
              onChange={handleChange}
            ></input>
          </label>
          <label htmlFor='password'>
            Name
            <input
              type='password'
              name='password'
              placeholder='Your password'
              value={inputs.password}
              onChange={handleChange}
            ></input>
          </label>
          <button type='submit'>Sign up!</button>
        </fieldset>
      </form>
    </div>
  );
}
