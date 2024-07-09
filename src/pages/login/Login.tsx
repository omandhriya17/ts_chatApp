import React, { useState } from "react";
import { loginUser } from "../../firebase/actions/auth/loginUser";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../ui/Input";
import { useAuth } from "../../store/auth/useAuth";

export type loginUser = {
  email: string;
  password: string;
};

//schema using zod

const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is requried",
    })
    .email({ message: "Invalid email address" }),
  password: z
    .string({
      required_error: "Password is requried",
    })
    .min(6, {
      message: "Password is to sort",
    })
    .max(12, { message: "Password is so long" }),
});

const Login = () => {
  const authZustand = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginUser>({
    resolver: zodResolver(loginSchema),
  });

  // const [userCredentials, setUserCredentials] = useState<loginUser>({
  //   email: null,
  //   password: null,
  // });
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setUserCredentials((prev) => {
  //     return {
  //       ...prev,
  //       [e.target.name]: e.target.value,
  //       // "username":e.target.value
  //       // "email":e.target.value
  //       // "password":e.target.value
  //     };
  //   });
  // };

  // const handleSubmit = () => {
  //   loginUser({
  //     userCredentials,
  //   });
  // };

  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

          <form
            onSubmit={handleSubmit((data) => {
              loginUser({ data, authZustand });
              console.log("data", data);
            })}
          >
            <div className="mb-4">
              {/* <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              /> */}
              <Input
                lable="Email"
                name="email"
                placeholder="Email"
                type="text"
                register={register}
                error={errors.email}
              />
            </div>
            <div className="mb-4">
              {/* <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              /> */}

              <Input
                lable="Password"
                name="password"
                placeholder="Password"
                type="password"
                register={register}
                error={errors.password}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
