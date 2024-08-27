import { Form, Link, useActionData } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useSignUp } from "../hooks/useSignUp";
import FormInput from "../components/FormInput";
import { useEffect } from "react";
import SubmitBtn from "../components/SubmitBtn";
//context

export const action = async ({ request }) => {
  let formData = await request.formData();
  let name = formData.get("displayName");
  let email = formData.get("email");
  let image = formData.get("image");
  let password = formData.get("password");

  return { name, email, image, password };
};

function SignUp() {
  const { signUpWithGoogle, registerWithEmailAndPassword } = useSignUp();
  const actionData = useActionData();

  useEffect(() => {
    if (actionData) {
      if (actionData) {
        registerWithEmailAndPassword(actionData);
      }
    }
  }, [actionData]);

  return (
    <div className="min h-screen grid place-content-center w-full">
      <div className="mb-3">
        <Form method="post" className="mb-3 w-96">
          <h1 className="text-4xl font-bold text-center">Sign Up</h1>
          <FormInput label="Display Name" type="text" name="displayName" />
          <FormInput label="Email" type="email" name="email" />
          <FormInput label="Image" type="url" name="image" />
          <FormInput label="Password" type="password" name="password" />
          <div className="mt-5">
            <SubmitBtn onClick={registerWithEmailAndPassword} text="Submit" />
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
          Signup
        </button>
        <p className="mt-4 text-center">
          Already registered?{" "}
          <Link to="/login" className="link link-primary">
            login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
