import React, { useState } from "react";
import { registerUser } from "../../firebase/actions/auth/registerUser";
import { useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export type registerUser = {
  username: string;
  email: string;
  password: string;
};

const registerSchema = z.object({
  username: z
    .string({
      required_error: "UserName is required",
      invalid_type_error: "Name must be string",
    })
    .min(5, { message: "Username is to sort" })
    .max(14, { message: "Username is too long" }),
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

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerUser>({
    resolver: zodResolver(registerSchema),
  });

  // const [userCredentials, setUserCredentials] = useState<registerUser>({
  //   username: null,
  //   email: null,
  //   password: null,
  // });

  // const navigate = useNavigate();

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
  //   registerUser({
  //     userCredentials,
  //   });
  // };

  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

          <form
            onSubmit={handleSubmit((data) => {
              registerUser({ data });
            })}
          >
            <div className="mb-4">
              {/* <label htmlFor="username" className="block text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            /> */}
              <Input
                lable="User Name"
                name="username"
                placeholder="Username"
                type="text"
                register={register}
                error={errors.username}
              />
            </div>
            <div className="mb-4">
              {/* <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
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
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
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
              // onClick={handleSubmit}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
