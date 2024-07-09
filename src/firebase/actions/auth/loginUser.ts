import { ref, set } from "firebase/database";
import { loginUser as loginUserType } from "../../../pages/login/Login";
import { auth, db } from "../../config";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../../../store/auth/useAuth";
import { redirect } from "@tanstack/react-router";

// interface LoginUserI {
//   usercradantials: loginUserType;
// }
interface LoginUserI {
  data: loginUserType;
}

export const loginUser = async ({ data, authZustand }: LoginUserI) => {
  console.log(authZustand);

  const loginUserPromise = signInWithEmailAndPassword(
    auth,
    data.email,
    data.password
  );

  loginUserPromise
    // .then((data) => console.log(data))
    .then((data) => {
      authZustand.updateLogin(true);
      redirect({ to: "/" });
    })
    .catch((error) => console.log(error));

  toast.promise(loginUserPromise, {
    loading: "Login usre to database !",
    success: () => "Succefully Login",
    // success :  "Succefully save",
    error: (error) => `Error ${error.message}`,
  });
};
