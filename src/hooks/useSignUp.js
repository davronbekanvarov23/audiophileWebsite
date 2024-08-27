import { GlobalContext } from "../context/UseGlobal";
import { useContext } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../firebase/firebaseConfig.js";

import toast from "react-hot-toast";

function useSignUp() {
  const { dispatch } = useContext(GlobalContext);

  const signUpWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        dispatch({ type: "LOG_IN", payload: user });
        toast.success("Welcome");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        toast.error(errorMessage);
      });
  };

  const registerWithEmailAndPassword = (actionData) => {
    createUserWithEmailAndPassword(auth, actionData.email, actionData.password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await updateProfile(auth.currentUser, {
          displayName: actionData.name,
          photoURL: actionData.image,
        });
        dispatch({ type: "LOG_IN", payload: user });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return { signUpWithGoogle, registerWithEmailAndPassword };
}

export { useSignUp };
