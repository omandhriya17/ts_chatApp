import { RouterProvider } from "@tanstack/react-router";
import { router } from "./main";
import { useAuth } from "./store/auth/useAuth";

const App = () => {
  const auth = useAuth();

  return (
    <>
      <RouterProvider router={router} context={{ auth }} />
    </>
  );
};

export default App;
