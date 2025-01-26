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

  const signUpWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken; // Token mavjudligini tekshirish
      const user = result.user;

      dispatch({ type: "LOG_IN", payload: user });
      toast.success("Welcome!");
    } catch (error) {
      const errorMessage = error.message;
      toast.error(errorMessage || "An error occurred during Google sign-up.");
    }
  };

  const registerWithEmailAndPassword = async (actionData) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        actionData.email,
        actionData.password
      );
      const user = userCredential.user;

      // Foydalanuvchi profilini yangilash
      await updateProfile(auth.currentUser, {
        displayName: actionData.name,
        photoURL: actionData.image,
      });

      dispatch({ type: "LOG_IN", payload: { ...user, displayName: actionData.name } });
      toast.success("Account created successfully!");
    } catch (error) {
      const errorMessage = error.message;
      toast.error(errorMessage || "An error occurred during registration.");
    }
  };

  return { signUpWithGoogle, registerWithEmailAndPassword };
}

export { useSignUp };
