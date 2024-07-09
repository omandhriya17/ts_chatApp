import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../config";
import toast from "react-hot-toast";
import { registerUser as registerUserType } from "../../../pages/register/Register";
import { ref, set } from "firebase/database";

// interface RegisterUserI {
//   userCredentials: registerUserType;
// }
interface RegisterUserI {
  data: registerUserType;
}

export const registerUser = async ({ data }: RegisterUserI) => {
  if (data.email && data.password) {
    const registerUserPromise = createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );

    registerUserPromise
      //   .then((data) => console.log(data))
      .then((registerData) => {
        console.log("data", registerData);

        set(ref(db, "users/" + registerData.user.uid), data.username);
      })
      .catch((error) => console.log(error));

    toast.promise(registerUserPromise, {
      loading: "Registering usre to database !",
      success: () => "Succefully save",
      // success :  "Succefully save",
      error: (error) => `Error ${error.message}`,
    });
  }
};
