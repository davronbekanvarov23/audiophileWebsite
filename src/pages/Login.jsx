import { Link, Form, useActionData } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import FormInput from "../components/FormInput";
import { useSignUp } from "../hooks/useSignUp";
import { useLogin } from "../hooks/useLogin";
import { useEffect } from "react";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");

  return { email, password };
};

function Login() {
  const { signUpWithGoogle } = useSignUp();
  const { loginWithEmailAndPassword } = useLogin();

  const actionData = useActionData();

  useEffect(() => {
    if (actionData) {
      if (actionData) {
        loginWithEmailAndPassword(actionData);
      }
    }
  }, [actionData]);
  return (
    <div className="min h-screen grid place-content-center w-full">
      <div className="mb-3">
        <Form method="post" className="mb-3 w-96">
          <h1 className="text-4xl font-bold text-center"> Login</h1>
          <FormInput label="Email" type="email" name="email" />
          <FormInput label="Password" type="password" name="password" />
          <div className="mt-5">
            <button type="submit" className="btn btn-secondary w-full">
              Submit
            </button>
          </div>
        </Form>
      </div>
      <div>
        <button
          onClick={signUpWithGoogle}
          type="button"
          className="btn btn-secondary w-full"
        >
          <FaGoogle className="h-5 w-5" />
          Login
        </button>
        <p className="mt-4 text-center">
          Do not have account yet?{" "}
          <Link to="/signup" className="link link-primary">
            signUp
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
