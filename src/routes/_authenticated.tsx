import { createFileRoute, Outlet } from "@tanstack/react-router";
import { useAuth } from "../store/auth/useAuth";
import Login from "../pages/login/Login";

export const Route = createFileRoute("/_authenticated")({
  component: () => {
    const auth = useAuth((state) => state.isLogin);
    if (!auth) {
      return <Login />;
    }

    return <Outlet />;
  },
});
